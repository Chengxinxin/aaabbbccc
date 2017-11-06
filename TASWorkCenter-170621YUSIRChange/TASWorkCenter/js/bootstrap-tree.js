$(document).ready(function() {
	$('.tree > ul').attr('role', 'tree').find('ul').attr('role', 'group');
	$('.tree').find('li:has(ul)').addClass('parent_li').attr('role', 'treeitem').find(' >.tree_node > span').attr('title', '关闭树分支').on('click', function (e) {
        var children = $(this).parent().parent('li.parent_li').find(' > ul > li');//我的理解找到这一行
       
        if (children.is(':visible')) {
    		children.hide('fast');
    		$(this).attr('title', '展开树分支').find('> i').addClass('glyphicon-plus-sign').removeClass('glyphicon-minus-sign');
        }
        else {
    		children.show('fast');
    		$(this).attr('title', '关闭树分支').find('> i').addClass('glyphicon-minus-sign').removeClass('glyphicon-plus-sign');
        }
        e.stopPropagation();
    });
});