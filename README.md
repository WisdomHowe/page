# 分页

```JavaScript
new Page(".page", {
	index: 1, //最小值为1
	size: pageSize, //每页显示条数
	isPrev: true, //是否创建上一页按钮,默认为true
	isNext: true, //是否创建下一页按钮
	isFirst: true, //是否创建回到首页按钮
	isLast: true, //是否创建回到尾页按钮
	isTotal: true, //是否显示当前页和总页
	isText: true, //是否显示跳转输入框
	activeClass: "active", //分页选中类，默认active
	firstTxt: "&lt;&lt;",
	prevTxt: "&lt;",
	nextTxt: "&gt;",
	lastTxt: "&gt;&gt;",
	callback: function(index) {
		//this.setTotal(total) 使用此方法修改总数量
		console.log(index)
	}
});
```