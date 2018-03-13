//index.js
//获取应用实例
var app = getApp()
import * as config from '../../config.js'
Page({
  onLoad: function () {
    this.setData({
      userInfo: {
        avatarUrl: 'http://www.baidu.com/img/bd_logo1.png',
      },
      name: '老米AAA',
      age: 28,
      user: app.globalData.user
    })
  }
})