let flag = true
Page({
	data:{
		color : "window"
	},
	click:function(){
		console.log(flag)
		console.log("点击了文字")
		if(flag){
			this.setData({
				color : "window-red"
			});
			flag = false
		}else{
			this.setData({
				color : "window"
			});
			flag = true
		}
		
	},
	onLoad:function(options){
		// 页面初始化 options为页面跳转所带来的参数
	},
	onReady:function(){
		// 页面渲染完成
	},
	onShow:function(){
		// 页面显示
	},
	onHide:function(){
		// 页面隐藏
	},
	onUnload:function(){
		// 页面关闭
	}
})
