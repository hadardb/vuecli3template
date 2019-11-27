import axios from './index'
import qs from 'qs';

//用户登录
export const login = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/UserPwd/login',
    data: qs.stringify(data)
  })
}

// 修改密码
export const editPwd = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/UserPwd/changePwd',
    data: qs.stringify(data)
  })
}

//用户列表
export const getUserList = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/User/getAllUser',
    data: qs.stringify(data)
  })
}

//新增用户
export const addUser = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/User/addUser',
    data: qs.stringify(data)
  })
}

//删除用户
export const delUser = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/User/deleteUser',
    data: qs.stringify(data)
  })
}

//编辑用户
export const editUserInfo = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/User/updateUser',
    data: qs.stringify(data)
  })
}

// 角色列表
export const getUserTypeList = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Role/getAllRole',
    data: qs.stringify(data)
  })
}
