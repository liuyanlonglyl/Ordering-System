$(document).ready(function(){
	var h = ($(document).height())-($("#header").height());
	$("#menu").css({"height":h})

//	var w=(($(window).width())-$("#menu").outerWidth())+10;
	var w=(($(document).width())-$("#menu").width())-1	
	console.log(w)
    $("#content").css({"height":h,"width":w});
    $("#main").css({"height":h})
    
	$(window).resize(function(){
		var h = ($(window).height())-($("#header").height());
		$("#menu").css({"height":h})
		
		var w=(($(window).width())-$("#menu").outerWidth());
   	 $("#content").css({"height":h,"width":w});
	  $("#main").css({"height":h})
});
});

$(function(){
            $('#fuwu').click(function(){
                alert('请稍等，服务员正在赶来！！！');
            })
        })