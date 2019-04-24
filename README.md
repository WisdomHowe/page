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
<p>new Page(".page", {</p>
<p>	index: index,</p>
<p>	size: pageSize,</p>
<p>	firstTxt: "&lt;&lt;",</p>
<p>	prevTxt: "&lt;",</p>
<p>	nextTxt: "&gt;",</p>
<p>	lastTxt: "&gt;&gt;",</p>
<p>	total: 30, //先定义一个假的总数量</p>
<p>	callback: function(index) {</p>
<p>		//this.setTotal(total) 使用此方法修改总数量</p>
<p>		console.log(index)</p>
<p>	}</p>
<p>});</p>
