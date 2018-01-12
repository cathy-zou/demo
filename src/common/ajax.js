import axios from 'axios'
import qs from 'qs'

function get (options) {
  return axios({
    method: 'get',
    url: options.url,
    data: qs.stringify(options.params)
  })
}
function post (options) {
  return axios({
    method: 'post',
    url: options.url,
    data: qs.stringify(options.params)
  })
}
export default {
  get,
  post
}
