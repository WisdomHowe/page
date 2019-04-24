# 分页

<p>index: 1 </p>
<p>size: 4 //默认每页显示四条数据</p>
<p>show: 4 //，默认显示四页</p>
<p>total: 0 //默认总页数</p>
<p>isEven: 0 //默认</p>
<p>isPrev: true //是否创建上一页按钮</p>
<p>isNext: true //是否创建下一页按钮</p>
<p>isFirst: true //是否创建首页按钮</p>
<p>isLast: true //是否创建未页按钮</p>
<p>isTotal: true //是否在页面中创建显示当前页/总页数</p>
<p>prevTxt: "上一页" //为按钮命名</p>
<p>nextTxt: "下一页"</p>
<p>firstTxt: "首页"</p>
<p>lastTxt: "尾页"</p>
<p>activeClass: "active" //分页选中类名</p>
<p>callback: function() {} //回调函数</p>
<pre>
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
</pre>
