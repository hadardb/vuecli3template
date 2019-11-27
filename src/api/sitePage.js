import axios from './index'
import qs from 'qs';

//工地列表
export const getSiteList = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Site/getAllSites',
   data: qs.stringify(data)
  })
}



//新增工地
export const addSite = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Site/addSite',
    data: qs.stringify(data)
  })
}

/*删除工地
*   传入siteId的集合，与批量删除统一接口
* */
export const delSite = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Site/deleteSite',
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

//编辑单条数据
export const editSiteInfo = (data = null) => {
  return axios.request({
    method: 'post',
    url: 'Site/updateSite',
    data: qs.stringify(data)
  })
}

//获取车辆信息
export const getCarList = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/WhiteList/getAll',
    data: qs.stringify(data)
  })
}

//修改车辆信息
export const editCarInfo = (data = null) => {
  return axios.request({
    method: 'post',
    url: 'WhiteList/updateWhiteList',
    data: qs.stringify(data)
  })
}

//添加车辆信息
export const addCarInfo = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/WhiteList/addWhiteList',
    data: qs.stringify(data)
  })
}


//删除车辆信息
export const delCarInfo = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/WhiteList/deleteWhiteList',
    data: qs.stringify(data)
  })
}

