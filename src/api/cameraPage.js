import axios from './index'
import qs from 'qs';


//搜索摄像头
export const searchCamera = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Camera/getAll',
    data: qs.stringify(data)
  })
}

//新增摄像头
export const addCamera = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Camera/addCamera',
    data: qs.stringify(data)
  })
}

//删除单个摄像头
export const delCamera = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Camera/deleteCamera',
    data: qs.stringify(data)
  })
}


//批量导入
export const importFile = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/urlencoded',
    data: qs.stringify(data)
  })
}

//导出Excel
export const exportFile = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/urlencoded',
    data: qs.stringify(data)
  })
}

//编辑摄像头
export const editCameraInfo = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Camera/updateCamera',
    data: qs.stringify(data)
  })
}

//拆除摄像头
export const uninstallCamera = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Camera/removeCamera',
    data: qs.stringify(data)
  })
}



//安装摄像头
export const installCameraInfo = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Camera/installCamera',
    data: qs.stringify(data)
  })
}


//搜索操作记录
export const searchRecord = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Operate/getAllOperate',
    data: qs.stringify(data)
  })
}

// 摄像头类型列表
export const searchCameraType = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/CameraType/getAllCameraType',
    data: qs.stringify(data)
  })
}

