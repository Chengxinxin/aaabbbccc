var rating = (function() {
	//两个子类相对应，便于抽象出父类
	//继承
	var extend = function(subClass, superClass) {
		var F = function() {};
		F.prototype = superClass.prototype;
		//父类的构造函数是空的不会造成资源浪费
		subClass.prototype = new F();
		//constructor 属性返回对创建此对象的数组函数的引用。
		subClass.prototype.constructor = subClass;
	};
	//下面方式继承，构造方法一定会执行影响性能，用上面的继承方法
	//				lightEntire.prototype = new light();
	//				new lightEntire();
	//点亮 父类
	var light = function(el, options) {
		this.$el = $(el); //保留一份el,jQ对象
		this.$item = this.$el.find('.rating_item');
		this.opts = options; //保存一份
		this.add = 1;
		this.selectEvent = 'mouseover';
		//自加分数参数
		//  ========== 
//		this.score = 0;
//		this.times = 0;
//		this.chosenTimes = 3;
		//  ========== 
	};
	light.prototype.init = function() {
		this.lightOn(this.opts.num);
		this.doScore(this.opts.num*20);
		if(!this.opts.readOnly) {
			this.bindEvent();
		}
	};
	light.prototype.lightOn = function(num) {
		num = parseInt(num); //点亮整数颗
		this.$item.each(function(index) {
			if(index < num) {
				$(this).css('background-image', 'url(img/star_1-on.png)');
			} else {
				$(this).css('background-image', 'url(img/star_1-off.png)');
			}
		});
		//自加分数
		//  ========== 
		this.doScore(this.opts.score);
		//  ========== 

	};
	light.prototype.bindEvent = function() {
		var self = this; //在外面保持一份 里面使用this =,指向对象改变
		var itemLength = self.$item.length; //星星个数
		

		//事件绑定
		//事件委托   子元素的事件交给父元素来实现
		self.$el.on(self.selectEvent, '.rating_item', function(e) {
			var $this = $(this),
				num = 0;
			self.select(e, $this);
			num = $(this).index() + self.add;
			self.lightOn(num); //$(this).index()获取当前星星的索引值 +1为需要点亮的个数
			(typeof self.opts.select === 'function') && self.opts.select.call(this, num, itemLength);
			//call()函数用于调用当前函数functionObject，并可同时使用指定对象thisObj作为本次执行时functionObject函数内部的this指针引用。
			self.$el.trigger('select', [num, itemLength]);
			//自加分数
		//  ========== 
			
			self.doScore(num*20);
		//  ========== 
		}).on('click', '.rating_item', function() {
			self.opts.num = $(this).index() + self.add; //点击后保存到全局的num
			
			(typeof self.opts.chosen === 'function') && self.opts.chosen.call(this, self.opts.num, itemLength);
			self.$el.trigger('chosen', [self.opts.num, itemLength]);
			//自加分数
		//  ========== 
			self.opts.score = self.opts.num *20;//保存分数，百分制
			self.doScore(self.opts.score);
		//  ========== 

		}).on('mouseout', function() { //这是事件绑定
			self.lightOn(self.opts.num);
			self.doScore(self.opts.score);
		});
	};
	light.prototype.select = function() {
		throw new Error('子类必须重写此方法');
	};
	//解绑定事件
	light.prototype.unbindEvent = function() {
		//					this.times += 1;
		//					if(this.times >= this.chosenTimes){
		this.$el.off(); //解绑，个人添加修改多次都解绑
		//						alert("已修改三次评分，不可再次修改！");
		//					}
	};
	//计算分数
	light.prototype.doScore = function(num) {
		console.log('确定：'+ num , this.opts.score);
		this.$el.find('.score').text(num+ '分');
	};
	
	
	//点亮整颗
	var lightEntire = function(el, options) {
		//子类继承父类
		light.call(this, el, options);
		this.selectEvent = 'mouseover';
	};
	extend(lightEntire, light);
	lightEntire.prototype.lightOn = function(num) {
		light.prototype.lightOn.call(this, num);
	};
	lightEntire.prototype.select = function(e, $this) {
		self.add = 1;
	};
	//点亮半颗
	var lightHalf = function(el, options) {
		//子类继承父类
		light.call(this, el, options);
		this.selectEvent = 'mousemove';
	};
	extend(lightHalf, light);
	lightHalf.prototype.lightOn = function(num) {
		var count = parseInt(num),
			isHalf = count !== num; //判断是否为小数，相等为整数，不相等为小数要点亮半颗
		//正常点亮整颗
		light.prototype.lightOn.call(this, count);
		//点亮半颗
		if(isHalf) {
			this.$item.eq(count).css('background-image', 'url(img/star_1-half.png)')
		}
	};
	lightHalf.prototype.select = function(e, $this) {
		if(e.pageX - $this.offset().left < $this.width() / 2) { //pageX() 属性是鼠标指针的位置，相对于文档的左边缘。减掉星星最左边距离是否小于半颗星
			this.add = 0.5;
		} else {
			this.add = 1;
		}
	};

	//默认参数
	var defaults = {
		mode: 'lightEntire',
		num: 0,
		score: 0,
		readOnly: false,
		select: function() {},
		chosen: function() {}
	};
	var mode = {
		'lightEntire': lightEntire,
		'lightHalf': lightHalf
	}

	//初始化
	//options对象改成option，可以接受字符串
	var init = function(el, option) {
		var $el = $(el),
			rating = $el.data('rating'),
			options = $.extend({}, defaults, typeof option === 'object' && option); //用options内容来覆盖defaults内容，生成的内容存放到空对象返回给options保存

		//防止mode输入错误
		if(!mode[options.mode]) {
			options.mode = 'lightEntire';
		}
		//如果data中不存在就创建，存在不创建
		if(!rating) {
			$el.data('rating', (rating = new mode[options.mode](el, options)));
			rating.init();
		}
		if(typeof option === 'string') rating[option]();
	};
	//jQuery插件
	$.fn.extend({
		rating: function(option) {
			return this.each(function() {
				init(this, option);
			});
		}
	});

	return {
		init: init
	};
})();