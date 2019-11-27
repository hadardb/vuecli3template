import axios from './index'

//工地列表
export const getSiteList = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/Site/getAllSites',
    data: data
  })
}

//搜索工地
export const searchSite = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/urlencoded',
    data: data
  })
}

//事件列表
export const getEventList = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/urlencoded',
    data: data
  })
}

//搜索事件
export const searchEvent = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/urlencoded',
    data: data
  })
}

//消息栏目
export const getMessage = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/urlencoded',
    data: data
  })
}

//导出Excel
export const exportFile = (data = null) => {
  return axios.request({
    method: 'post',
    url: '/urlencoded',
    data: data
  })
}
