const { MAPP } = getApp().globalData

export default {
  getLatest() {
    return MAPP.customizeRequest({
      url: '/api-v1/classic/latest'
    })
  },
  getPrevious(index) {
    return MAPP.customizeRequest({
      url: `/api-v1/classic/${index}/previous`
    })
  },
  getClassic(index, nextOrPrevious) {
    return MAPP.customizeRequest({
      url: `/api-v1/classic/${index}/${nextOrPrevious}`
    })
  },
  isFirst(index) {
    return index === 1 ? true : false
  },
  isLatest(index) {
    let latestIndex = this.getLatestIndex()
    return latestIndex === index ? true : false
  },
  setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  },
  getLatestIndex() {
    return wx.getStorageSync('latest')
  }
}
