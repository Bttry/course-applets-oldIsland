const Router = require('koa-router')
const R = new Router()
const { api_base_url } = require('../config')

const { periodical } = require('./model/periodical')

R.get('/classic/latest', async ctx => {
  try {
    let result = await periodical.findOne({}, {}, { lean: true })
    if (result) {
      let img = result.image
      result.image = img ? `${api_base_url}${img}` : ''
    }
    ctx.body = result
  } catch (err) {
    console.error(err)
    ctx.body = {}
  }
})
  .post('/like', async ctx => {
    try {
      let { art_id, type } = ctx.request.body
      let result = await periodical.updateOne(
        { _id: art_id, type },
        { $set: { like_status: true }, $inc: { fav_nums: 1 } }
      )
      ctx.body = result
    } catch (err) {
      console.error(err)
      ctx.body = {}
    }
  })
  .post('/like/cancal', async ctx => {
    try {
      let { art_id, type } = ctx.request.body
      let result = await periodical.updateOne(
        { _id: art_id, type },
        { $set: { like_status: false }, $inc: { fav_nums: -1 } }
      )
      ctx.body = result
    } catch (err) {
      console.error(err)
      ctx.body = {}
    }
  })

module.exports = app => {
  app.use(R.routes()).use(R.allowedMethods())
}
