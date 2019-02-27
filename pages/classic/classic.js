const { regeneratorRuntime } = getApp().globalData
import classicMode from '../../models/classic'
import likeMode from '../../models/like'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    first: false,
    latest: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let { data } = await classicMode.getLatest()
    classicMode.setLatestIndex(data.index)
    console.log(data)
    this.setData({
      classic: data
    })
  },

  onLike(event) {
    let behavior = event.detail.behavior,
      { _id, type } = this.data.classic
    likeMode.like(behavior, _id, type)
  },

  onNext(event) {
    this._updateClassic('next')
  },

  onPrevious(event) {
    this._updateClassic('previous')
  },

  async _updateClassic(nextOrPrevious) {
    let index = this.data.classic.index
    let { data } = await classicMode.getClassic(index, nextOrPrevious)
    this.setData({
      classic: data,
      latest: classicMode.isLatest(data.index),
      first: classicMode.isFirst(data.index)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
