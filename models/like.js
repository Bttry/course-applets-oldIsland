const { MAPP } = getApp().globalData

export default {
  like: (behavior, artID, category) => {
    let url = behavior == 'like' ? '/like' : '/like/cancal'

    return MAPP.customizeRequest({
      url,
      method: 'POST',
      data: { art_id: artID, type: category }
    })
  }
}
