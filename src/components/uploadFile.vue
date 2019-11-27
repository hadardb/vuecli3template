<template>
  <div style="display: inline-block;">
    <el-button size="mini" type="primary" @click="dialogVisible = true">批量导入</el-button>

    <el-dialog
      title="批量导入"
      :visible.sync="dialogVisible"
      width="420px"
      @open="">
      <el-upload
        class="upload-demo"
        drag
        :action='baseURL'
        :on-success="uploadSuccess"
        :on-error="uploadError"
        :before-upload="uploadBefore"
        name="multipartFile"
        :multiple="false"
        accept=".xls,.xlsx"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传xls/xlsx文件，且不超过500kb</div>
      </el-upload>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false" size="mini">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" size="mini">确 定</el-button>
      </span>
    </el-dialog>


  </div>


</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        name: "uploadFile",
        data(){
            return {
                dialogVisible:false,
            }
        },
        props:['baseURL'],
        methods:{
            uploadBefore(file){
                console.log(file.name.split('.')[1])
                console.log(file.name.split('.')[1] != 'xls')
                if(file.name.split('.')[1] == 'xls' || file.name.split('.')[1] == 'xlsx'){
                    return true
                }else{
                    this.$message({
                        type: 'error',
                        message: '上传失败,请选择.xls文件或.xlsx文件!'
                    });
                    return false
                }

            },
            uploadSuccess(response) {
                if(response.state == 0){
                    console.log(response)
                    this.$message({
                        type: 'success',
                        message: '上传成功!'
                    });
                }else{
                    console.log(response)
                    this.$message({
                        type: 'error',
                        message: response.error
                    });
                }

            },
            uploadError() {
                this.$message({
                    type: 'error',
                    message: '上传失败,请联系管理员!'
                });
            },
            beforeRemove(file, fileList) {
                return this.$confirm(`确定移除 ${ file.name }？`);
            },
        }
    }
</script>

<style scoped>

</style>
