$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if(!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
	//显示当前时间
	setInterval(function() { $('#time').html(currentTime) }, 500);
	//跳转页面时选中状态
	var urlstr = location.href;
	var url = urlstr.substring(urlstr.lastIndexOf('/') + 1, urlstr.length);
	$('#accordion a').each(function() {
		var val = $(this).attr('href');
		if(url == val) {
			$parent = $(this).parent().parent();
			$(this).parent().css({ 'background': '#f1f1f1', 'color': '#FFF' }); //#b55a65
			$parent.slideToggle();
			$parent.parent().toggleClass('open', 1);
		}
	});
});

function currentTime() {
	var d = new Date(),
		str = '';
	var weekday = new Array(7);
	weekday[0] = "周日";
	weekday[1] = "周一";
	weekday[2] = "周二";
	weekday[3] = "周三";
	weekday[4] = "周四";
	weekday[5] = "周五";
	weekday[6] = "周六";
	str += d.getFullYear() + '年';
	str += d.getMonth() + 1 + '月';
	str += d.getDate() + '日';
	str += d.getHours() + '时';
	str += d.getMinutes() + '分';
	str += d.getSeconds() + '秒';
	str += ' ' + weekday[d.getDay()];
	return str;
}
/*
 *   功能:实现VBScript的DateAdd功能.
 *   参数:interval,字符串表达式，表示要添加的时间间隔.
 *   参数:number,数值表达式，表示要添加的时间间隔的个数.
 *   参数:date,时间对象.
 *   返回:新的时间对象.
 *   var now = new Date();
 *   var newDate = DateAdd( "d", 5, now);
 *---------------   DateAdd(interval,number,date)   -----------------
 */
function DateAdd(interval, number, date) {
    switch (interval) {
    case "y ": {
        date.setFullYear(date.getFullYear() + number);
        return date;
        break;
    }
    case "q ": {
        date.setMonth(date.getMonth() + number * 3);
        return date;
        break;
    }
    case "m ": {
        date.setMonth(date.getMonth() + number);
        return date;
        break;
    }
    case "w ": {
        date.setDate(date.getDate() + number * 7);
        return date;
        break;
    }
    case "d ": {
        date.setDate(date.getDate() + number);
        return date;
        break;
    }
    case "h ": {
        date.setHours(date.getHours() + number);
        return date;
        break;
    }
    case "m ": {
        date.setMinutes(date.getMinutes() + number);
        return date;
        break;
    }
    case "s ": {
        date.setSeconds(date.getSeconds() + number);
        return date;
        break;
    }
    default: {
        date.setDate(d.getDate() + number);
        return date;
        break;
    }
    }
}
/****
 var now = new Date();
// 加五天.
var newDate = DateAdd("d ", 5, now);
alert(newDate.toLocaleDateString())
// 加两个月.
newDate = DateAdd("m ", 2, now);
alert(newDate.toLocaleDateString())
// 加一年
newDate = DateAdd("y ", 1, now);
alert(newDate.toLocaleDateString())
 */
//  ================ 
//  = cookie操作 = 
//  ================ 
function setCookie(name, value, iDay)
{
	var oDate=new Date();
	
	oDate.setDate(oDate.getDate()+iDay);
	
	document.cookie=name+'='+value+';expires='+oDate;
}

function getCookie(name)
{
	//'username=abc; password=123456; aaa=123; bbb=4r4er'
	var arr=document.cookie.split('; ');
	var i=0;
	
	//arr->['username=abc', 'password=123456', ...]
	
	for(i=0;i<arr.length;i++)
	{
		//arr2->['username', 'abc']
		var arr2=arr[i].split('=');
		
		if(arr2[0]==name)
		{
			return arr2[1];
		}
	}
	
	return '';
}

function removeCookie(name)
{
	setCookie(name, '1', -1);
}

// $(document).ready(function(){
//var site_url = window.location.href.toLowerCase();//此处得到url
//var arr = site_url.split("/");
//var fun = arr[6];
//fun = fun.split(".");
//var tmpmenu = '';
//   tmpmenu = arr[5]+'_'+fun[0];
//   var temp = "#"+ tmpmenu;
//$parent = $(temp).parent();
//$children = $(temp).children();
//$children.css({'background': '#5B6E84','color': '#FFF'});
//$parent.slideToggle();
//$parent.parent().toggleClass('open');
// });
// $(function() {
// var Accordion = function(el, multiple,link) {
//this.el = el || {};
//this.multiple = multiple || false;
//
//// Variables privadas
//var links = this.el.find('.link');
//// Evento
//links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
//}
// Accordion.prototype.dropdown = function(e) {
//var $el = e.data.el;
// $this = $(this),
// $next = $this.next();
//
//$next.slideToggle();
//$this.parent().toggleClass('open');
//
//if (!e.data.multiple) {
// $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
//};
// } 
//
// var accordion = new Accordion($('#accordion'), false);
//});