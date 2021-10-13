import axios from '@/libs/request'


/****************接口start*****************/

/*************品类************/
// 获取单个用户
export const getFriends = (info) => {
  return axios.request({
    url: 'getFriends',
    method: 'get',
    params: info
  })
}

// 查询订单是否成功
export const payFindResult = (info) => {
  return axios.request({
    url: 'payFindResult',
    method: 'post',
    data: info
  })
}

// 添加单个用户 addUserOne 
export const addUserOne = (info) => {
  return axios.request({
    url: 'addUserOne',
    method: 'post',
    data: info
  })
}
// 获取单个用户
export const getUserOne = (info) => {
  return axios.request({
    url: 'getUserOne',
    method: 'post',
    data: info
  })
}
