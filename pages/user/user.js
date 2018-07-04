var app = getApp()
Page({
    data:{
        userInfo: {},
        mine_list:[
            {
                "id":1,
                "pic_url": "/images/icons/iocn_home_01.png",
                "title":"关于",
            },
            {
                "id":2,
                "pic_url": "/images/icons/iocn_home_02.png",
                "title":"我的管理列表",
            },
            {
                "id":3,
                "pic_url": "/images/icons/iocn_home_03.png",
                "title":"管理员绑定",
            }
        ],
        item: {
            signinHidden:false,
            userlocal:{
                nickName:'',
                nickPwd:''
            },
        }
    },
    onLoad:function(options){
        // 页面初始化 options为页面跳转所带来的参数

    },
    modalconfirm:function(){
        wx.setStorageSync('username', this.data.item.userlocal.nickName);
        wx.setStorageSync('password', this.data.item.userlocal.nickPwd);
        this.setData({
            'item.signinHidden':true
        })
    },
    modalcancel:function(){
        var that = this;
        wx.login({
            success: function () {
                wx.getUserInfo({
                    success: function (res) {

                        that.setData({
                            userInfo:res.userInfo
                        })
                    }
                })
            }
        })


        this.onShow();
        this.setData({
            'item.signinHidden':true
        })
    },
    quit:function(){
        this.setData({
            userInfo:'',
            'item.signinHidden':false
        })
    },
    saveusername:function(event){
        this.setData({
            'item.userlocal.nickName': event.detail.value
        });
    },
    saveuserpwd:function(event){
        this.setData({
            'item.userlocal.nickPwd': event.detail.value
        });
    },
    onReady:function(){

        // 页面渲染完成
    },
    onShow:function(){
        if(this.data.userInfo==''){
            this.setData({
                'item.signinHidden':false
            })
        }

    },
    onHide:function(){
        // 页面隐藏
    },
    onUnload:function(){
        // 页面关闭
    },
    onClick:function (e) {
        var id = e.currentTarget.dataset.id;
        console.log("page id:"+id);
        if (id === 1){
            wx.navigateTo({
                url: '../user_about/user_about'
            });
        }
        else if(id === 2){
            wx.navigateTo({
                url: '../user_manager/user_manager'
            });
        }
        else if(id === 3){
            wx.navigateTo({
                url: '../user_bind/user_bind'
            });
        }
        else{
            wx.navigateTo({
                url: '../index/index'
            });
        }
    }
})