import request from '@/common/ajax'

export function getMsg (param) {
  return request.post({
    url: 'http://www.tuling123.com/openapi/api',
    params: param
  })
}
