# page

page所有参数:
index: 1
size: 4 //默认每页显示四条数据
show: 4 //，默认显示四页
total: 0 //默认总页数
isEven: 0 //默认
isPrev: true //是否创建上一页按钮
isNext: true //是否创建下一页按钮
isFirst: true //是否创建首页按钮
isLast: true //是否创建未页按钮
isTotal: true //是否在页面中创建显示当前页/总页数
prevTxt: "上一页" //为按钮命名
nextTxt: "下一页"
firstTxt: "首页"
lastTxt: "尾页"
activeClass: "active" //分页选中类名
callback: function() {} //回调函数

使用方法：
new Page(".page", {
	index: index,
	size: pageSize,
	firstTxt: "&lt;&lt;",
	prevTxt: "&lt;",
	nextTxt: "&gt;",
	lastTxt: "&gt;&gt;",
	total: 30, //先定义一个假的总数量
	callback: function(index) {
		//this.setTotal(total) 使用此方法修改总数量
		console.log(index)
	}
});
