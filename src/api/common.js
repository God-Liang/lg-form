import request from '@/util/request'

// 远程接口
export function getApi(url) {
  return request({
    url: url,
    method: 'get',
    params: {}
  })
}
