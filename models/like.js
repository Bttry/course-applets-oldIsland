const { MAPP } = getApp().globalData
const { regeneratorRuntime } = getApp().globalData

export default {
  like(behavior, artID, category) {
    let url = behavior == 'like' ? '/api-v1/like' : '/api-v1/like/cancal'

    MAPP.customizeRequest({
      url,
      method: 'POST',
      data: { art_id: artID, type: category }
    })
  },

  async getClassicLikeStatus(artID, category) {
    let { data } = await MAPP.customizeRequest({
      url: `/api-v1/classic/${category}/${artID}/favor`
    })
    return data
  }
}
