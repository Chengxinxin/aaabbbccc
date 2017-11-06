function led() {
	setInterval(function() {
		var date = new Date();
		// 获取年份
		var year = date.getFullYear();
		var y = year.toString();
		// 获取月份
		var month = date.getMonth() + 1;
		var yue = month.toString();
		// 获取日
		var day = date.getDate();
		var d = day.toString();
		// 获取时
		var hours = date.getHours();
		var h = hours.toString();
		// 获取分
		var minutes = date.getMinutes();
		var min = minutes.toString();
		// 获取秒
		var seconds = date.getSeconds();
		var s = seconds.toString();
		
		// 获取box里的box
		var led = document.getElementById("led");
		var divbar = led.getElementsByTagName('div');
		// 获取年份的每一个字符
		var y1 = y.charAt(0);
		var y2 = y.charAt(1);
		var y3 = y.charAt(2);
		var y4 = y.charAt(3);
		// 判断显示年的第1个数
		if(y1 == 1) {
			divbar[0].className = "one";
		} else if(y1 == 2) {
			divbar[0].className = "two";
		} else if(y1 == 3) {
			divbar[0].className = "three";
		} else if(y1 == 4) {
			divbar[0].className = "four";
		} else if(y1 == 5) {
			divbar[0].className = "five";
		} else if(y1 == 6) {
			divbar[0].className = "six";
		} else if(y1 == 7) {
			divbar[0].className = "seven";
		} else if(y1 == 8) {
			divbar[0].className = "eight";
		} else if(y1 == 9) {
			divbar[0].className = "nine";
		} else if(y1 == 0) {
			divbar[0].className = "zero";
		}
		// 年的第2个数
		if(y2 == 1) {
			divbar[1].className = "one";
		} else if(y2 == 2) {
			divbar[1].className = "two";
		} else if(y2 == 3) {
			divbar[1].className = "three";
		} else if(y2 == 4) {
			divbar[1].className = "four";
		} else if(y2 == 5) {
			divbar[1].className = "five";
		} else if(y2 == 6) {
			divbar[1].className = "six";
		} else if(y2 == 7) {
			divbar[1].className = "seven";
		} else if(y2 == 8) {
			divbar[1].className = "eight";
		} else if(y2 == 9) {
			divbar[1].className = "nine";
		} else if(y2 == 0) {
			divbar[1].className = "zero";
		}
		// 年的第3个数
		if(y3 == 1) {
			divbar[2].className = "one";
		} else if(y3 == 2) {
			divbar[2].className = "two";
		} else if(y3 == 3) {
			divbar[2].className = "three";
		} else if(y3 == 4) {
			divbar[2].className = "four";
		} else if(y3 == 5) {
			divbar[2].className = "five";
		} else if(y3 == 6) {
			divbar[2].className = "six";
		} else if(y3 == 7) {
			divbar[2].className = "seven";
		} else if(y3 == 8) {
			divbar[2].className = "eight";
		} else if(y3 == 9) {
			divbar[2].className = "nine";
		} else if(y3 == 0) {
			divbar[2].className = "zero";
		}
		// 年的第4个数
		if(y4 == 1) {
			divbar[3].className = "one";
		} else if(y4 == 2) {
			divbar[3].className = "two";
		} else if(y4 == 3) {
			divbar[3].className = "three";
		} else if(y4 == 4) {
			divbar[3].className = "four";
		} else if(y4 == 5) {
			divbar[3].className = "five";
		} else if(y4 == 6) {
			divbar[3].className = "six";
		} else if(y4 == 7) {
			divbar[3].className = "seven";
		} else if(y4 == 8) {
			divbar[3].className = "eight";
		} else if(y4 == 9) {
			divbar[3].className = "nine";
		} else if(y4 == 0) {
			divbar[3].className = "zero";
		}
		// 获取月份的每个字符显示
		if(yue.length == 2) {
			var yue1 = yue.charAt(0);
			var yue2 = yue.charAt(1);
			if(yue1 == 1) {
				divbar[4].className = "one";
			}
			if(yue2 == 1) {
				divbar[5].className = "one";
			} else if(yue2 == 2) {
				divbar[5].className = "two";
			} else if(yue2 == 0) {
				divbar[5].className = "zero";
			}
		}
		if(yue.length == 1) {
			divbar[4].className = "zero";
			var yue3 = yue.charAt(0);
			if(yue3 == 1) {
				divbar[5].className = "one";
			} else if(yue3 == 2) {
				divbar[5].className = "two";
			} else if(yue3 == 3) {
				divbar[5].className = "three";
			} else if(yue3 == 4) {
				divbar[5].className = "four";
			} else if(yue3 == 5) {
				divbar[5].className = "five";
			} else if(yue3 == 6) {
				divbar[5].className = "six";
			} else if(yue3 == 7) {
				divbar[5].className = "seven";
			} else if(yue3 == 8) {
				divbar[5].className = "eight";
			} else if(yue3 == 9) {
				divbar[5].className = "nine";
			} else if(yue3 == 0) {
				divbar[5].className = "zero";
			}
		}
		// 获取日的每个字符显示
		if(d.length == 2) {
			var d1 = d.charAt(0);
			var d2 = d.charAt(1);
			if(d1 == 1) {
				divbar[6].className = "one";
			} else if(d1 == 2) {
				divbar[6].className = "two";
			} else if(d1 == 3) {
				divbar[6].className = "three";
			}
			if(d2 == 1) {
				divbar[7].className = "one";
			} else if(d2 == 2) {
				divbar[7].className = "two";
			} else if(d2 == 3) {
				divbar[7].className = "three";
			} else if(d2 == 4) {
				divbar[7].className = "four";
			} else if(d2 == 5) {
				divbar[7].className = "five";
			} else if(d2 == 6) {
				divbar[7].className = "six";
			} else if(d2 == 7) {
				divbar[7].className = "seven";
			} else if(d2 == 8) {
				divbar[7].className = "eight";
			} else if(d2 == 9) {
				divbar[7].className = "nine";
			} else if(d2 == 0) {
				divbar[7].className = "zero";
			}
		}
		if(d.length == 1) {
			divbar[6].className = "zero";
			var d3 = d.charAt(0);
			if(d3 == 1) {
				divbar[7].className = "one";
			} else if(d3 == 2) {
				divbar[7].className = "two";
			} else if(d3 == 3) {
				divbar[7].className = "three";
			} else if(d3 == 4) {
				divbar[7].className = "four";
			} else if(d3 == 5) {
				divbar[7].className = "five";
			} else if(d3 == 6) {
				divbar[7].className = "six";
			} else if(d3 == 7) {
				divbar[7].className = "seven";
			} else if(d3 == 8) {
				divbar[7].className = "eight";
			} else if(d3 == 9) {
				divbar[7].className = "nine";
			} else if(d3 == 0) {
				divbar[7].className = "zero";
			}
		}
		// 获取时的每个字符显示
		if(h.length == 2) {
			var h1 = h.charAt(0);
			var h2 = h.charAt(1);
			if(h1 == 1) {
				divbar[8].className = "one";
			} else if(h1 == 2) {
				divbar[8].className = "two";
			}
			if(h2 == 1) {
				divbar[9].className = "one";
			} else if(h2 == 2) {
				divbar[9].className = "two";
			} else if(h2 == 3) {
				divbar[9].className = "three";
			} else if(h2 == 4) {
				divbar[9].className = "four";
			} else if(h2 == 5) {
				divbar[9].className = "five";
			} else if(h2 == 6) {
				divbar[9].className = "six";
			} else if(h2 == 7) {
				divbar[9].className = "seven";
			} else if(h2 == 8) {
				divbar[9].className = "eight";
			} else if(h2 == 9) {
				divbar[9].className = "nine";
			} else if(h2 == 0) {
				divbar[9].className = "zero";
			}
		}
		if(h.length == 1) {
			divbar[8].className = "zero";
			var h3 = h.charAt(0);
			if(h3 == 1) {
				divbar[9].className = "one";
			} else if(h3 == 2) {
				divbar[9].className = "two";
			} else if(h3 == 3) {
				divbar[9].className = "three";
			} else if(h3 == 4) {
				divbar[9].className = "four";
			} else if(h3 == 5) {
				divbar[9].className = "five";
			} else if(h3 == 6) {
				divbar[9].className = "six";
			} else if(h3 == 7) {
				divbar[9].className = "seven";
			} else if(h3 == 8) {
				divbar[9].className = "eight";
			} else if(h3 == 9) {
				divbar[9].className = "nine";
			} else if(h3 == 0) {
				divbar[9].className = "zero";
			}
		}
		// 获取分的每个字符显示
		if(min.length == 2) {
			var min1 = min.charAt(0);
			var min2 = min.charAt(1);
			if(min1 == 1) {
				divbar[11].className = "one";
			} else if(min1 == 2) {
				divbar[11].className = "two";
			} else if(min1 == 3) {
				divbar[11].className = "three";
			} else if(min1 == 4) {
				divbar[11].className = "four";
			} else if(min1 == 5) {
				divbar[11].className = "five";
			}
			if(min2 == 1) {
				divbar[12].className = "one";
			} else if(min2 == 2) {
				divbar[12].className = "two";
			} else if(min2 == 3) {
				divbar[12].className = "three";
			} else if(min2 == 4) {
				divbar[12].className = "four";
			} else if(min2 == 5) {
				divbar[12].className = "five";
			} else if(min2 == 6) {
				divbar[12].className = "six";
			} else if(min2 == 7) {
				divbar[12].className = "seven";
			} else if(min2 == 8) {
				divbar[12].className = "eight";
			} else if(min2 == 9) {
				divbar[12].className = "nine";
			} else if(min2 == 0) {
				divbar[12].className = "zero";
			}
		}
		if(min.length == 1) {
			divbar[11].className = "zero";
			var min3 = min.charAt(0);
			if(min3 == 1) {
				divbar[12].className = "one";
			} else if(min3 == 2) {
				divbar[12].className = "two";
			} else if(min3 == 3) {
				divbar[12].className = "three";
			} else if(min3 == 4) {
				divbar[12].className = "four";
			} else if(min3 == 5) {
				divbar[12].className = "five";
			} else if(min3 == 6) {
				divbar[12].className = "six";
			} else if(min3 == 7) {
				divbar[12].className = "seven";
			} else if(min3 == 8) {
				divbar[12].className = "eight";
			} else if(min3 == 9) {
				divbar[12].className = "nine";
			} else if(min3 == 0) {
				divbar[12].className = "zero";
			}
		}
		// 获取秒的每个字符显示
		if(s.length == 2) {
			var s1 = s.charAt(0);
			var s2 = s.charAt(1);
			if(s1 == 1) {
				divbar[14].className = "one";
			} else if(s1 == 2) {
				divbar[14].className = "two";
			} else if(s1 == 3) {
				divbar[14].className = "three";
			} else if(s1 == 4) {
				divbar[14].className = "four";
			} else if(s1 == 5) {
				divbar[14].className = "five";
			}
			if(s2 == 1) {
				divbar[15].className = "one";
			} else if(s2 == 2) {
				divbar[15].className = "two";
			} else if(s2 == 3) {
				divbar[15].className = "three";
			} else if(s2 == 4) {
				divbar[15].className = "four";
			} else if(s2 == 5) {
				divbar[15].className = "five";
			} else if(s2 == 6) {
				divbar[15].className = "six";
			} else if(s2 == 7) {
				divbar[15].className = "seven";
			} else if(s2 == 8) {
				divbar[15].className = "eight";
			} else if(s2 == 9) {
				divbar[15].className = "nine";
			} else if(s2 == 0) {
				divbar[15].className = "zero";
			}
		}
		if(s.length == 1) {
			divbar[14].className = "zero";
			var s3 = s.charAt(0);
			if(s3 == 1) {
				divbar[15].className = "one";
			} else if(s3 == 2) {
				divbar[15].className = "two";
			} else if(s3 == 3) {
				divbar[15].className = "three";
			} else if(s3 == 4) {
				divbar[15].className = "four";
			} else if(s3 == 5) {
				divbar[15].className = "five";
			} else if(s3 == 6) {
				divbar[15].className = "six";
			} else if(s3 == 7) {
				divbar[15].className = "seven";
			} else if(s3 == 8) {
				divbar[15].className = "eight";
			} else if(s3 == 9) {
				divbar[15].className = "nine";
			} else if(s3 == 0) {
				divbar[15].className = "zero";
			}
		}
	}, 100)
}
$(document).ready(function () {
	led();
	var date = new Date();
	var weekday = new Array(7);
			weekday[0] = "周日";
			weekday[1] = "周一";
			weekday[2] = "周二";
			weekday[3] = "周三";
			weekday[4] = "周四";
			weekday[5] = "周五";
			weekday[6] = "周六";
		$('#week').text(weekday[date.getDay()]);
		
});
