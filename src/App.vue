<script>
export default {
  onLaunch () {
    console.log('111')
    // 检测小程序是否有新版本更新
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              }
            })
          })
          // 小程序有新版本，会主动触发下载操作（无需开发者触发）
          wx.getUpdateManager().onUpdateFailed(function () {
            // 当新版本下载失败，会进行回调
            wx.showModal({
              title: '提示',
              content: '检查到有新版本，下载失败，请检查网络设置',
              showCancel: false
            })
          })
        }
      })
    } else { // 版本过低则无法使用该方法
      wx.showModal({
        title: '提示',
        confirmColor: '#5BB53C',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  }
}
</script>

<style lang="stylus">
page
    height 100%
image
    display block
</style>
