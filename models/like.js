const { MAPP } = getApp().globalData

export default {
  like: (behavior, artID, category) => {
    let url = behavior == 'like' ? '/api-v1/like' : '/api-v1/like/cancal'

    return MAPP.customizeRequest({
      url,
      method: 'POST',
      data: { art_id: artID, type: category }
    })
  }
}
