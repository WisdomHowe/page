# 分页


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
