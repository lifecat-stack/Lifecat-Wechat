Page({

    data: {
        // 定义标题的数组
        titles: ["registration", "entrance", "user"],
        // 定义选中标题的初始值0
        selectedTitle: "0",
    },
    onLaunch: function () {

    },
    onshow: function (e) {
        console.log("页面已启动")
    },
    // 定义点击标题的事件处理函数，将选中标题的id赋值给selectedTitle
    bindtap: function (e) {
        console.log(e)
        this.setData({
            selectedTitle: e.currentTarget.id
        });
    },
    //定义滑块改变的事件处理函数，将current赋值给selectedTitle
    bindChange: function (e) {
        this.setData({
            selectedTitle: e.detail.current
        })
    },
    onClick: function (e) {
        console.log("click");
        var x = e.currentTarget.dataset.name;
        console.log(x);
        if (x === 'registration') {
            wx.navigateTo({
                url: '../registration/registration'
            });
        }
        else if (x === 'entrance') {
            wx.navigateTo({
                url: '../entrance/entrance'
            });
        }
        else if (x === 'user') {
            wx.navigateTo({
                url: '../user/user'
            });
        }
        else {
            console.log("没有这个页面");
        }
    },
    onReady: function () {
        // 页面渲染完成
        var that = this;
        wx.getSystemInfo({
            success: function (res) {
                that.setData({
                    swiperHeight: (res.windowHeight - 37)
                });
            }
        })
    }
})