
var API_URL ='https://api.douban.com/v2/movie/top250' ;
Page({
  data: {
    movie:[],
    title:'加载中。。。'
  },
  onLoad:function(){
    var that = this;
    wx.showToast({
      title: '加载中。。。。',
      icon:"loading",
      duration:10000
    });
    wx.request({
      url: API_URL,
      data:{},
      header: {'content-type': 'application/json'},
      success:function(res){
        wx.hideToast()
        var data = res.data
        that.setData({
          title:data.title,
          movie:data.subjects
        })
        
          // console.log(res.data)
      }
    })
  }
 
})
