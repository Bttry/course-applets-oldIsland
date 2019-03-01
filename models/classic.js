const { MAPP } = getApp().globalData
const { regeneratorRuntime } = getApp().globalData

export default {
  async getLatest() {
    let { data } = await MAPP.customizeRequest({
      url: '/api-v1/classic/latest'
    })
    this._setLatestIndex(data.index)
    wx.setStorageSync(this._getKey(data.index), data)
    return data
  },
  async getPrevious(index) {
    let { data } = await MAPP.customizeRequest({
      url: `/api-v1/classic/${index}/previous`
    })
    return data
  },
  async getClassic(index, nextOrPrevious) {
    let key =
      nextOrPrevious === 'next'
        ? this._getKey(index + 1)
        : this._getKey(index - 1)
    let classic = wx.getStorageSync(key)

    if (!classic) {
      let { data } = await MAPP.customizeRequest({
        url: `/api-v1/classic/${index}/${nextOrPrevious}`
      })
      wx.setStorageSync(this._getKey(data.index), data)
      return data
    } else {
      return classic
    }
  },
  isFirst(index) {
    return index === 1 ? true : false
  },
  isLatest(index) {
    let latestIndex = this._getLatestIndex()
    return latestIndex === index ? true : false
  },
  _setLatestIndex(index) {
    wx.setStorageSync('latest', index)
  },
  _getLatestIndex() {
    return wx.getStorageSync('latest')
  },
  _getKey(index) {
    let key = `classic-${index}`
    return key
  }
}
