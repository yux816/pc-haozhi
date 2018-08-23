	var num = 0;
			//广告轮播图js
			setInterval(function(){
//				alert(1);
				var height = $('.ad ul li').height()
				num++;
				if(num>2){
					num=0;
						$('.ad ul').css({'top':-height*num});
					num=1;
				}	
				$('.ad ul').animate({'top':-height*num});
			},1000)
			//广告右上角删除按钮
			$('.main .conn-left .ad span').click(function(){
				$('.main .conn-left .ad').css({'display':'none'});
			})
			//tab栏鼠标经过显示下拉菜单
			$('.main .conn-left .sort-nav ul li:nth-of-type(4)').hover(function(){
				$(this).css({'background':'white'});
				$('.main .conn-left .sort-nav .menu').show();
			},function(){
				$('.main .conn-left .sort-nav .menu').hide();
				$(this).css({'background':'#f9f9f9'});
			})
			//这是作者的信息栏
			$('.info .info-author a').hover(function(){
				$(this).parent().parent().parent().children('.message').show();
			},function(){
				$(this).parent().parent().parent().children('.message').hide();
			})
			//这是分页按钮的hover函数
			$('.next-page ul li a').hover(function(){
				if($(this).parent().index()!=0){
					$(this).css({'background':'#f0f0f0'});
				}
			},function(){
				if($(this).parent().index()!=0){
					$(this).css({'background':'#f5f5f5'});
				}
			})
			//这是固定栏窗口滚动
			$(window).scroll(function(event) {
				if($(window).scrollTop()<200){
						$('.go-top').addClass('gotop');
					}else{
						$('.go-top').removeClass('gotop')
					}
				});
			//这是鼠标移入微信二维码放大
			$('.go-top').click(function(event) {
					$('html,body').stop().animate({'scrollTop':$('html').offset().top}, 1000)
				});