$(document).ready(function() {
	$('#levelType').change(function() {
		//					alert($(this).children('option:selected').val());  //弹出select的值
		var val = $(this).children('option:selected').val();
		if(val == '0') {
			$(this).css({ "color": "gray", "font-weight": "100" });
		} else if(val == '1') {
			$(this).css({ "color": "red", "font-weight": "800" });
		} else if(val == '2') {
			$(this).css({ "color": "orangered", "font-weight": "800" });
		} else if(val == '3') {
			$(this).css({ "color": "blue", "font-weight": "800" });
		} else if(val == '4') {
			$(this).css({ "color": "green", "font-weight": "800" });
		}
	});
});