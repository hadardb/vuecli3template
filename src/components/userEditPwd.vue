<template>
  <div style="display: inline-block">
    <el-button @click="dialogVisible = true" type="text" class="editButton"  v-if="top">修改密码</el-button>
    <el-button @click="dialogVisible = true" type="text" size="small" v-else>修改密码</el-button>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="550px"
      append-to-body
      @open="open">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" size="mini" class="addForm" label-width="150px" inline>
        <el-form-item label="原始密码：" >
          <el-input v-model="ruleForm.oldPwd" placeholder="请输入用户名" class="addInputWidth"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" >
          <el-input v-model="ruleForm.newPwd" type="password" placeholder="请输入密码"  class="addInputWidth"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="twoPwd">
          <el-input v-model="ruleForm.twoPwd" type="password" placeholder="请确认密码" class="addInputWidth"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="handleOk" size="mini">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
    import * as userTools from "../api/userPage.js"
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        name: "userEditPwd",
        props:['userId','top','userPwd'],
        data() {
            var checkPhone = (rule, value, callback) => {
                if (!value) {
                    return
                } else {
                    if (value == this.ruleForm.newPwd) {
                        callback();
                    } else {
                        return callback(new Error('两次密码不匹配，请确认密码'));
                    }
                }
            }
            return {
                dialogVisible: false,
                rules: {
                    twoPwd:[
                        {validator: checkPhone, trigger: 'blur'}
                    ]
                },
                ruleForm: {
                    oldPwd: '',
                    newPwd: '',
                    twoPwd: '',
                },

            }
        },
        computed:{

        },
        methods: {
            open(){

            },
            handleOk(){
                console.log(this.userPwd)

                var { oldPwd, newPwd, twoPwd } = this.ruleForm
                if( oldPwd == '' || newPwd == '' || twoPwd == ''){
                    this.$message.error('请将信息填写完整');
                    return
                }
                if( oldPwd != this.userPwd){
                    this.$message.error('原始密码不匹配，请重新输入，如忘记原始密码请联系系统管理员');
                    return
                }
                if(newPwd != twoPwd){
                    this.$message.error('两次密码不匹配，请重新输入');
                    return
                }
                userTools.editPwd({userPwd: this.ruleForm.twoPwd, userId: this.userId}).then(res => {
                    console.log(res)
                    if (res.data.state == 0) {
                        this.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                        this.dialogVisible = false
                    } else {
                        this.$alert(res.data.error, '警告', {
                            confirmButtonText: '确定',
                        });
                    }
                })
            },
        },
    }
</script>

<style scoped>
  .addForm {
    text-align:left;
  }
  .addInputWidth{
    width: 300px;
  }
  .editButton{
    color:#606266;
  }
  .editButton:hover{
    color:#007aff;
  }
</style>
