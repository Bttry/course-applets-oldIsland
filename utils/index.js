import config from '../config'

const tips = {
  1: '抱歉，出现了一个错误',
  1005: 'appkey无效，前往微信平台申请',
  3000: '期刊不存在'
}

const _show_error = (error_code = 1) => {
  wx.showToast({
    title: tips[error_code],
    icon: 'none',
    duration: 2000
  })
}

export default {
  customizeRequest: (params = {}) => {
    let { url = '', method = 'GET', data = {} } = params

    return new Promise((resolve, reject) => {
      wx.request({
        url: config.api_base_url + url,
        method,
        data,
        header: {
          'content-type': 'application/json',
          appkey: config.appkey
        },
        success: res => {
          let { data } = res,
            code = data.code.toString()
          if (code.startsWith('2')) {
            resolve({ data: data.data, res })
          } else {
            _show_error(code)
            reject()
          }
        },
        fail: err => {
          _show_error()
          reject(err)
        }
      })
    })
  },
  config
}
