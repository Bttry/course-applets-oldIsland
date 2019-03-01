Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: './images/like.png',
    noSrc: './images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      let { like, count } = this.properties
      like ? --count : ++count
      this.setData({ count, like: !like })

      let behavior = this.properties.like ? 'like' : 'cancel'
      this.triggerEvent(
        'like',
        {
          behavior
        },
        {}
      )
    }
  }
})
