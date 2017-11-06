//  ========== 
//  = 用法 = 
/**
 * <div class="SignSpan" id="SignSpan1">

	</div>
	<div class="SignSpan" id="SignSpan2">

	</div>
 *
 *
 *	SignSpan.init(".SignSpan", {});
	$('#SignSpan1').SignSpan();
	$('#SignSpan2').SignSpan({maxnumber:3,data: ['会议', '展览', '论坛', '课程', '讲座', '沙龙','出身','无敌','是多么','寂寞'],});
 *
 *获取关键字插件的选中的数组
//						$('#SignSpan1').on('click',function () {
//							//获取到data()该控件类的选择数组
//							console.log($('#SignSpan1').data("signspan").seldata);
//							console.log($('#SignSpan2').data("signspan").seldata);
//						})
 *
 *
 *
 *
 */
//  ========== 

var SignSpan = (function() {
	//选择的标签
	var Sign = function(el, options) {
		this.$el = $(el);
		this.opts = $.extend({}, Sign.defaults, options);
		this.seldata = [];
		this.datastring = "";
	};
	Sign.defaults = {
		title:"添加",//设置控件label名称
		maxnumber: 5,//设置控件最大选择数
		selectcolor:"#4285f4",
		data: ['会议', '展览', '论坛', '课程', '讲座', '沙龙'],//设置空间可选标签数组
		selectdata: [],
		selected: function() {}
	};

	Sign.prototype.init = function() {
		this.buildHTML();
		//					this.setCSS();
		this.bindEvent();
	};
	Sign.prototype.buildHTML = function() {
		var html = '';
		html += '<div class="addSignSpan"><label for="signContent">'+this.opts.title+'：</label><div class="signContent"></div><div class="add_list_btn"><span class="glyphicon glyphicon-plus" id="addSign" aria-hidden="true"></span></div></div>';

		html += '<div class="add_list  activitySign">';
		for(var j = 0; j < this.opts.data.length; j++) {
			html += '<li>' + this.opts.data[j] + '</li>'
		}
		html += '</div>';
		this.$el.html(html);
	};
	Sign.prototype.bindEvent = function() {
		var self = this;
		var selfId = this.$el.attr("id");
		self.$el.css("position","relative");
		//点击显示
		self.$el.find('.add_list_btn').on('click', function() {
			self.$el.find('.add_list').toggle();
		});
		//全局委托点击取消
		$(document).on("click", function(e) {
			var target = $(e.target);
			if(target.closest(".add_list,.add_list_btn").length == 0) {
				$(".add_list").hide();
			};
			e.stopPropagation();
		});
		//点击选择添加到signContent
		self.$el.find('.add_list li').click(function() {
			var num = self.$el.find('.signContent').children('span').length;
			if(num < self.opts.maxnumber) {
				var id = self.$el.attr("id") + '_' + $(this).index();
				var name = $(this).html();
				var con = self.$el.find('.signContent').html();
				//当前文档去indexof是否存在不存在返回-1，！=-1表示已存在，return 不添加
				if((con.indexOf('<span class="list_active" title="取消" name="tag[]" id="' + id + '">' + name + '</span>')) != -1) {
					return;
				} else {
					self.$el.find('.signContent').append('<span class="list_active" title="取消" name="tag[]" id="' + id + '">' + name + '</span>');
					self.$el.find('.list_active').css("background-color",self.opts.selectcolor)
						.mouseover(function(){$(this).css("background","#ccc");})
						.mouseout(function(){$(this).css("background",self.opts.selectcolor);});
//					self.$el.find('.list_active:hover').css("background-color","#ccc");
					self.seldata.push(name);
					console.log("self.seldata" + self.seldata);
					self.$el.data("selectArr",self.seldata);
				}
			} else {
				alert('您最多添加' + self.opts.maxnumber + '个标签');
			}
		})
		//获取当前对象id的span避免多个控件混淆
		var cancelspan = '#' + selfId + ' .signContent span';
		console.log(cancelspan);
		//取消选择
		$(document).on("click", cancelspan, function(e) {
			var id = $(this).attr('id');
			var name = $(this).text();
			self.$el.find('.signContent span[id=' + id + ']').remove();
			removeByValue(self.seldata, name);
			console.log("self.seldata" + self.seldata);
			self.$el.data("selectArr",self.seldata);
			e.stopPropagation();
		});
	};
	var init = function(el, option) {
		var $el = $(el),
			signspan = $el.data('signspan');
		//如果data中不存在就创建，存在不创建
		if(!signspan) {
			$el.data('signspan', (signspan = new Sign(el, typeof option === 'object' && option)));
			signspan.init();
		}

		if(typeof option === 'string') signspan[option]();
	};
	//jQuery插件
	$.fn.extend({
		SignSpan: function(option) {
			return this.each(function() {
				init(this, option);
			});
		}
	});

	return {
		init: init
	};

	function removeByValue(arr, val) {
		for(var i = 0; i < arr.length; i++) {
			if(arr[i] == val) {
				arr.splice(i, 1);
				break;
			}
		}
	}
})();