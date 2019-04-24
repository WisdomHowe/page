# 分页

index: 1 <br/>
size: 4 //默认每页显示四条数据<br/>
show: 4 //，默认显示四页<br/>
total: 0 //默认总页数<br/>
isEven: 0 //默认<br/>
isPrev: true //是否创建上一页按钮<br/>
isNext: true //是否创建下一页按钮<br/>
isFirst: true //是否创建首页按钮<br/>
isLast: true //是否创建未页按钮<br/>
isTotal: true //是否在页面中创建显示当前页/总页数<br/>
prevTxt: "上一页" //为按钮命名<br/>
nextTxt: "下一页"<br/>
firstTxt: "首页"<br/>
lastTxt: "尾页"<br/>
activeClass: "active" //分页选中类名<br/>
callback: function() {} //回调函数<br/>
<br/>
new Page(".page", {<br/>
	index: index,<br/>
	size: pageSize,<br/>
	firstTxt: "&lt;&lt;",<br/>
	prevTxt: "&lt;",<br/>
	nextTxt: "&gt;",<br/>
	lastTxt: "&gt;&gt;",<br/>
	total: 30, //先定义一个假的总数量<br/>
	callback: function(index) {<br/>
		//this.setTotal(total) 使用此方法修改总数量
		console.log(index)<br/>
	}<br/>
});<br/>
