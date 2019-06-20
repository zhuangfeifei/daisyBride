const api = require('./main')

module.exports = {
  request: api.request,
  imgUrl: api.API_BASE_URL,
  userinfo: (data) => { // 登录
    return api.request('/daisy/wechat/login/userinfo', 'post', data)
  },

  dressFrontPage: (data) => { // 首页精品服装显示
    return api.request('/daisy/api/boutique/dressFrontPage', 'post', data)
  },
  categoryBoutique: (data) => { // 获取所有的产品列表
    return api.request('/daisy/api/boutique/categoryBoutique', 'post', data)
  },
  clothDetail: (data) => { // 获取产品详情
    return api.request('/daisy/api/boutique/clothDetail', 'post', data)
  },
  addAppoint: (data) => { // 新增预约
    return api.request('/daisy/api/customer/addAppoint', 'post', data)
  },
}