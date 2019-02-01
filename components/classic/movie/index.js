const { MAPP } = getApp().globalData

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    img: {
      type: String,
      observer(newVal, oldVal, changedPath) {
        if (newVal) {
          let url = MAPP.config.api_base_url
          this.setData({
            image: `${url}${newVal}`
          })
        }
      }
    },
    content: {
      type: String
    }
  },

  data: {
    image: ''
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {}
})
