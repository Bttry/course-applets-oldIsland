// components/classic/music/index.js
import { classicBeh } from '../classic-beh'

const backgroundAudioManager = wx.getBackgroundAudioManager()

Component({
  /**
   * 组件继承
   */
  behaviors: [classicBeh],

  /**
   * 组件的属性列表
   */
  properties: {
    src: String,
    title: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    playing: false,
    pauseSrc: './images/player@pause.png',
    playSrc: './images/player@play.png'
  },

  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this._recoverStatus()
      this._monitorSwitch()
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(event) {
      if (!this.data.playing) {
        this.setData({
          playing: true
        })
        let { title, src } = this.properties
        backgroundAudioManager.title = title
        backgroundAudioManager.src = src
      } else {
        this.setData({
          playing: false
        })
        backgroundAudioManager.pause()
      }
    },

    _recoverStatus() {
      if (backgroundAudioManager.paused) {
        this.setData({
          playing: false
        })
        return
      }

      if (backgroundAudioManager.src == this.properties.src) {
        this.setData({
          playing: true
        })
      }
    },

    _monitorSwitch() {
      backgroundAudioManager.onPlay(() => {
        this._recoverStatus()
      })
      backgroundAudioManager.onPause(() => {
        this._recoverStatus()
      })
      backgroundAudioManager.onStop(() => {
        this._recoverStatus()
      })
      backgroundAudioManager.onEnded(() => {
        this._recoverStatus()
      })
    }
  }
})
