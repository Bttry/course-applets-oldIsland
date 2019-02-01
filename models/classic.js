const { MAPP } = getApp().globalData

export default {
  getLatest: () => {
    return MAPP.customizeRequest({
      url: '/api-v1/classic/latest'
    })
  }
}
