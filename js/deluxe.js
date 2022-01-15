$(function(){

    //모바일 메뉴
    var mobNum = 0
    $('.menu_btn').click(function(){
        mobNum++
        if(mobNum%2==1){
            $('.mob_menu').css('display','block').animate({width:'50%'},500)
        }else{
            $('.mob_menu').animate({width:'0%'},500,function(){
                $(this).css('display','none')
            })
        }
        
    })
    $('.mob_gnb_inner>li').click(function(){
        $(this).find('.sub_menu').stop().slideDown(500)
        $(this).siblings().find('.sub_menu').stop().slideUp(500)
    })

    //스페셜 서비스
    var sp_winWidth = $(window).width()
    var sp_clickNum = 0
    
    $(window).resize(function(){
        sp_winWidth = $(this).width()
        de_winWidth = $(this).width()
        winWidth = $(this).width()
        winScroll=$(window).scrollTop() 
        roomTop=$('#room_service').offset().top
        mob_winScroll=$(window).scrollTop() 
        mob_roomTop=$('.mob_room_service').offset().top
    })
    function sp_slider(index){   
        $('.service_list>.img_list>li').eq(index).fadeIn(500).siblings().fadeOut(500)
        $('.service_list>.txt_list>li').eq(index).fadeIn(500).siblings().fadeOut(500)
    }
    
    $('.s_next_btn').click(function(){
        sp_clickNum++
        if(sp_clickNum>5){
            sp_clickNum=0
        }
        sp_slider(sp_clickNum)
    })
    $('.s_prev_btn').click(function(){
        sp_clickNum--
        if(sp_clickNum<0){
            sp_clickNum=5
        }
        sp_slider(sp_clickNum)
    })
})
$(function(){
    
    //이벤트 제거
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });

    //gnb 컬러, 이미지 변경
    $('.gnb').mouseenter(function(){
        $('#header>h1>a>img').attr("src","img/footer_logo.png")
        $('.gnb>ul>li>a').css("color","#66784e")
        $('.util>a>img').attr("src","img/profile_b.png")
        $('.menu_btn>a>img').attr("src","img/menu_btn_b.png")
    })
    $('.gnb').mouseleave(function(){
        $('#header>h1>a>img').attr("src","img/sub/logo_g.png")
        $('.gnb>ul>li>a').css("color","#2c2c2c")
        $('.util>a>img').attr("src","img/sub/profile_g.png")
        $('.menu_btn>a>img').attr("src","img/sub/menu_btn_g.png")
    })

    //gnb_메뉴 다운
    $('.gnb>ul>li').on({
        mouseenter:function(){$(this).find('.sub_menu').stop().fadeIn(300)},
        mouseleave:function(){$(this).find('.sub_menu').stop().fadeOut(300)},
        focusin:function(){$(this).find('.sub_menu').stop().fadeIn(300)},
        focusout:function(){$(this).find('.sub_menu').stop().fadeOut(300)}
    })

    //gnb bg
    $('.gnb>ul>li').mouseenter(function(){
        $('.sub_menu_bg').stop().slideDown(400)
    })
    $('.gnb>ul>li').mouseleave(function(){
        $('.sub_menu_bg').stop().slideUp(300)
    })  

    //util
    $('.gnb>ul>li').mouseleave(function(){
        $('.sub_menu_bg').stop().slideUp(300)
    })

    $('.util').mouseenter(function(){
        $(this).find('.util_wrap').stop().fadeIn(300)
    })
    $('.util').mouseleave(function(){
        $(this).find('.util_wrap').stop().fadeOut(300)
    })


    //탑배너
    var clickNum = 0
  
    function slider(sNum){   
        $('.banner_list>li').eq(sNum).fadeIn(500).siblings().fadeOut(500)      
    }
    
    $('.next_btn').click(function(){
        clickNum++
        if(clickNum>7){
            clickNum=0
        }
        slider(clickNum)
    })
    $('.prev_btn').click(function(){
        clickNum--
        if(clickNum<0){
            clickNum=7
        }
        slider(clickNum)
    })

    // $('.controls>li').each(function(index){
    //     $(this).click(function(){
    //         slider(index)
    //         clickNum=index
    //     })
    // })

    // $('.controls>li').each(function(index){
    //     $(this).click(function(){
    //         $(this).addClass('select').siblings().removeClass('select')
    //     })
    // })

    //룸네비
    $('.place').click(function(){
        $(this).find('.hotel_select').stop().fadeIn(300)
    })
    $('.room').click(function(){
        $(this).find('.room_select').stop().fadeOut(300)
    })

    //디럭스룸 사진

    var de_clickNum = 0
    

    function de_slider(index){   
        $('.img_inner>.img_list>li').eq(index).fadeIn(500).siblings().fadeOut(500)
        $('.controls>li').eq(index).addClass('select').siblings().removeClass('select')
    }
    
    $('.controls>li').each(function(index){
    $(this).click(function(){
        de_slider(index)
        de_clickNum=index
    })
    })
    $('.d_next_btn').click(function(){
        de_clickNum++
        if(de_clickNum>3){
            de_clickNum=0
        }
        de_slider(de_clickNum)
    })
    $('.d_prev_btn').click(function(){
        de_clickNum--
        if(de_clickNum<0){
            de_clickNum=3
        }
        de_slider(de_clickNum)
    })



    // 스크롤탑 룸서비스 -pc ver
var winScroll=$(window).scrollTop() 
var roomTop=$('#room_service').offset().top  



$(window).scroll(function(){
    winScroll=$(window).scrollTop() 
    if(winScroll>roomTop-550){
        $('#room_service .img_list>li').each(function(index){
        $(this).delay(200*index).animate({top:0,opacity:1},800)
        })
    }
    if(winScroll>roomTop-550){
        $('#room_service .txt_list>li').each(function(index){
        $(this).delay(200*index).animate({top:0,opacity:1},800)
        })
    }
    mob_winScroll=$(window).scrollTop() 
    if(mob_winScroll>mob_roomTop-550){
        $('.r_service_list>li').each(function(index){
        $(this).delay(200*index).animate({top:0,opacity:1},800)
        })
    }
    
})

// 스크롤탑 룸서비스 -mob ver
var mob_winScroll=$(window).scrollTop() 
var mob_roomTop=$('.mob_room_service').offset().top  


})

