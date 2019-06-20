import wepy from 'wepy'
import 'wepy-async-function'
import { handleActions } from 'redux-actions'

const Api = require('../../wxApi/api')

const defaultState = {
  defaultImgUrl: Api.imgUrl + '/dx/',
  imgUrl: Api.imgUrl + (false ? '/daisy/kaptcha/file/gallery/' : '/dx/gallery/'),
  userinfo:'',
}

export default handleActions({
  userinfos(state){
    // 登录
    wepy.login({
      success: res_login => {
        // 获取用户信息
        wepy.getSetting({
          success: res => {
            // console.log(res)
            if (res.authSetting['scope.userInfo']) {
              wepy.getUserInfo({
                success: res => {
                  // console.log(res)
                  var jsonData = {
                    code: res_login.code,
                    encryptedData: res.encryptedData,
                    iv: res.iv
                  }
                  Api.userinfo(jsonData).then(res => { 
                    // console.log(res.data)
                    if (res.data.code == 200) {
                      wepy.setStorageSync('userinfo', res.data.data)
                      wepy.navigateBack();
                    }
                  }, err => {
                    
                  })
                }
              })
            } else {
              wepy.navigateTo({
                url: '/pages/authorization/authorization'
              })
            }
          }
        })
      }
    })
    return { ...state, userinfo: wepy.getStorageSync('userinfo') }
  },
}, defaultState)