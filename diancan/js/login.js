    var $main = $cloud = mainwidth = null;
    var offset1 = 450;
	//var offsetbg = 0;
    
    $(document).ready(
        function () {
            $main = $("#login_cloud");
			$body = $("body");
            $cloud1 = $("#cloud");
			
            mainwidth = $main.outerWidth();
        }
    );

    /// 飘动
    setInterval(function flutter() {
        if (offset1 >= mainwidth) {
            offset1 =  -580;
        }
        
        offset1 += 1.1;
        $cloud1.css("background-position", offset1 + "px 100px")
    }, 70);
	

	$(function(){
    	$('.login_content').css({'position':'absolute','left':($(window).width()-692)/2});
		$(window).resize(function(){  
	    	$('.login_content').css({'position':'absolute','left':($(window).width()-692)/2});
	    })  
	}); 

	$(function(){
            $('#btn').click(function(){
                alert('注册成功');
            })
        })