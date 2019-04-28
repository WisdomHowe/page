;(function(window){
	var options = {
		index: 1,
		size: 4, //默认每页显示四条数据
		show: 4, //，默认显示四页
		total: 100,
		template: "",
		isEven: 0,
		isPrev: true, //是否创建按钮
		isNext: true,
		isFirst: true, 
		isLast: true,
		isTotal: true,
		isText: true, //是否显示跳转输入框
		prevTxt: "上一页",
		nextTxt: "下一页",
		firstTxt: "首页",
		lastTxt: "尾页",
		activeClass: "active",
		data:[], //用来缓存数据的
		callback: function(){}
	}
	var util = {
		extend: function(opt0, opt1){
			for(var key in opt0){
				if(typeof opt0[key] == "object"){
					opt1[key] = this.extend(opt0[key], opt1[key])
				}else{
					opt1[key] = opt0[key]
				}
			}
			return opt1;
		},
		/*设置属性和获取属性*/
		attr: function(el, attr, value) {
			if(value !== undefined) {
				el.setAttribute(attr, value);
				return this;
			} else {
				return el.getAttribute(attr);
			}
		},
		/*判断元素是否有这个类名*/
		hasClass: function(el, className) {
			className = className || '';
			if(className.replace(/\s/g, '').length == 0) return false; //当className没有参数时，返回false
			return new RegExp(' ' + className + ' ').test(' ' + el.className + ' ');
		},
		/*添加class*/
		addClass: function(el, className) {
			if(!this.hasClass(el, className)) {
				el.className = el.className == '' ? className : el.className + ' ' + className;
			}
			return this;
		},
		/*删除class*/
		removeClass: function(el, className) {
			if(this.hasClass(el, className)) {
				var newClass = ' ' + el.className.replace(/[\t\r\n]/g, '') + ' ';
				while(newClass.indexOf(' ' + className + ' ') >= 0) {
					newClass = newClass.replace(' ' + className + ' ', ' ');
				}
				el.className = newClass.replace(/^\s+|\s+$/g, '');
			}
			return this;
		},
		on: function(el, type, callback){
			if(el.addEventListener){
				el.addEventListener(type, callback);
			}else if(el.attachEvent){
				el.attachEvent('on'+type, callback);
			}else{
				el['on'+type] = callback;
			}
		}
	}
	var Page = function(el, obj){
		var obj = obj || {};
		options = util.extend(obj, options);
		this.el = document.querySelector(el);
		this.index = options.index;
		this.lastIndex = this.index;
		this.size = options.size;
		this.show = options.show;
		this.totalSize = options.total;	
		this.totalPage = Math.ceil(this.totalSize / this.size); //总页数
		this.isEven = options.isEven;
		this.callback = options.callback;
		this.activeClass = options.activeClass;
		this.data = options.data;
		this.init();
	}
	Page.prototype.init = function(){
		this.createMain();
		this.createPage();
		this.pageActive(this.index);
		this.setCurr(this.index);
		this.setTotalText(this.totalPage);
		this.callback(this.index);
		var pageClick = this.pageClick.bind(this);
		util.on(this.el, "click", pageClick);
		if(options.isText){
			var inputClick = this.inputClick.bind(this);
			util.on(this.pInputBtn, "click", inputClick);
		}
	}
	//创建Page按钮主体
	Page.prototype.createMain = function(){
		var html = "";
		if(options.isFirst){
			html += '<a class="page-first">'+options.firstTxt+'</a>';
		}
		if(options.isPrev){
			html += '<a class="page-prev">'+options.prevTxt+'</a>';
		}
		
		html += '<em class="page-main"></em>';
		
		if(options.isNext){
			html += '<a class="page-next">'+options.nextTxt+'</a>';
		}
		if(options.isLast){
			html += '<a class="page-last">'+options.lastTxt+'</a>';
		}
		if(options.isText){
			html += '<span class="page-input">第<input class="page-text" type="text" />页<input class="page-btn" type="button" value="确认" /></span>';
		}
		if(options.isTotal){
			html += '<span class="page-total-info">共<i class="page-curr"></i>/<i class="page-total"></i>页</span>';
		}
		
		this.el.innerHTML = html;
		this.page = this.el.querySelector(".page-main");
		this.pageCurr = this.el.querySelector(".page-curr");
		this.pageTotal = this.el.querySelector(".page-total");
		this.pInput = this.el.querySelector(".page-input");
		this.pInputText = this.pInput.querySelector(".page-text");
		this.pInputBtn = this.pInput.querySelector(".page-btn");
	}
	//创建分页按钮
	Page.prototype.createPage = function(){
		var html = "";
        //判断是是否设置了显示页码 并且 显示的页数要小于本身分页的最大页码
		if(this.show !== "" && this.show < this.totalPage) {
			var fristIndex = "";
			var lastIndex = "";
            //判断当前页快到达或已经到达最终页的时候
			if(this.index + Math.ceil(this.show / 2) > this.totalPage) {
				lastIndex = this.totalPage;
				fristIndex = lastIndex - this.show + 1;
			} else if(this.index - Math.floor(this.show / 2) < 1) { //判断当前页快到达或已经到达第一页的时候
				lastIndex = this.show;
				fristIndex = 1;
			} else {
                //判断显示分页页码是奇数还是偶数
				if(this.isEven == 0) {
					lastIndex = this.index + Math.floor(this.show / 2) - 1;
				} else {
					lastIndex = this.index + Math.ceil(this.show / 2) - 1;
				}
				fristIndex = this.index - Math.floor(this.show / 2);
			}
            //循环创建分页
			for(var i = fristIndex; i <= lastIndex; i++) {
				html += "<span data-page='" + i + "'>" + i + "</span>";
			}
		} else { //显示所有页码
			for(var i = 1; i <= this.totalPage; i++) {
				html += "<span data-page='" + i + "'>" + i + "</span>";
			}
		}
		this.page.innerHTML = html;
	}
	Page.prototype.pageClick = function(e){
		var ev = window.event || e;
		var dom = ev.target;
		var className = dom.className;
		if(util.hasClass(dom, "page-first")) { //首页
			this.index = 1;
		} else if(util.hasClass(dom, "page-last")) { //末页
			this.index = this.totalPage;
		} else if(util.hasClass(dom, "page-prev")) { //上一页
			this.index = this.index - 1 < 1 ? 1 : this.index - 1;
		} else if(util.hasClass(dom, "page-next")) { //下一页
			this.index = this.index + 1 > this.totalPage ? this.totalPage : this.index + 1;
		} else {
			var domIndex = parseInt(util.attr(dom, "data-page"));
			if(!!domIndex) {
				this.index = domIndex;
			}
		}
		this.setPage();
	}
	Page.prototype.inputClick = function(){
		var index = parseInt(this.pInputText.value);
		if(!isNaN(index)){
			if(index < 1){
				this.index = 1;
			}else if(index > this.totalPage){
				this.index = this.totalPage
			}else{
				this.index = index;
			}
			this.setPage();
		}
	}
	//设置跳转输入
	Page.prototype.setPage = function(){
		if(this.lastIndex != this.index){
			this.createPage();
			this.callback(this.index);
			this.pageActive(this.index);
			
		}
		this.lastIndex = this.index;
	}
	//设置高亮
	Page.prototype.pageActive = function(index) {
		var children = this.page.children;
		var len = children.length;
		var currIndex;
		for(var i=0; i<len; i++){
			var domIndex = parseInt(util.attr(children[i], "data-page"));
			util.removeClass(children[i], this.activeClass);
			if(domIndex == index){
				currIndex = i;
			}
		}
		util.addClass(children[currIndex], this.activeClass);
	}
	//设置当前页
	Page.prototype.setCurr = function(index) {
		this.pageCurr.innerText = this.index;
	}
	//修改总条数
	Page.prototype.setTotal = function(num){
		this.totalSize = num;
		this.totalPage = Math.ceil(this.totalSize / this.size); //总页数
		this.setTotalText(this.totalPage);
	}
	//设置总页面
	Page.prototype.setTotalText = function(num){
		this.pageTotal.innerText = num;
	}
	
	
	window.Page = Page;
})(window);
