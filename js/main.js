$(function(){
    
    //이벤트 제거
    $(document).on('click', 'a[href="#"]', function(e) {
        e.preventDefault();
    });

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
    
    //gnb 컬러, 이미지 변경
    $('.gnb').mouseenter(function(){
        $('#header>h1>a>img').attr("src","img/footer_logo.png")
        $('.gnb>ul>li>a').css("color","#775b33")
        $('.util>a>img').attr("src","img/profile_b.png")
        $('.menu_btn>a>img').attr("src","img/menu_btn_b.png")
    })
    $('.gnb').mouseleave(function(){
        $('#header>h1>a>img').attr("src","img/top_logo.png")
        $('.gnb>ul>li>a').css("color","#fff")
        $('.util>a>img').attr("src","img/profile.png")
        $('.menu_btn>a>img').attr("src","img/menu_btn.png")
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
    // $('.util').mouseenter(function(){
    //     $('.sub_menu_bg').stop().slideDown(400)
    // })
    $('.gnb>ul>li').mouseleave(function(){
        $('.sub_menu_bg').stop().slideUp(300)
    })

    $('.util').mouseenter(function(){
        $(this).find('.util_wrap').stop().fadeIn(300)
    })
    $('.util').mouseleave(function(){
        $(this).find('.util_wrap').stop().fadeOut(300)
    })
    

    //reservation - datapicker
    $('.selector').flatpickr({ 
        dateFormat: "Y-m-d",
        minDate:"today",
        maxDate: new Date().fp_incr(30)
    })

    // scroll select
            
    var winScroll=$(window).scrollTop() 
    var journeyTop=$('#journey').offset().top   
            

    // 브라우져 크기 변화시 화면크기 변화
    $(window).resize(function(){
        // scrollHeight = $(window).height()
        // $('.box').css('height',scrollHeight);
        // move(resizeNum)
        winScroll=$(window).scrollTop() 
        journeyTop=$('#journey').offset().top
    }) 

    $(window).scroll(function(){
        winScroll=$(window).scrollTop()
        if(winScroll>journeyTop){
            $('.journey_list>li').each(function(index){ 
                $(this).delay(index*200).animate({top:0,opacity:1},800)
            })
        }
    })
})

// accordion
$(function(){
    $('.dining_list>li').click(function(){
        // $(this).animate({width:'70%'},500,'linear').siblings().animate({width:'5%'},500,'linear')
        $(this).addClass('select').siblings().removeClass('select')
    })
})

//tabs
$(function(){
    $('.active_box>div').click(function(){
        $(this).find('.txt_box').fadeIn().parent().siblings().find('.txt_box').fadeOut()
        $(this).addClass('select').siblings().removeClass('select')
    })
})

// iconic

$(function(){
    $('.next_btn').click(function(){
        $('.fa_list>li:first').animate({marginLeft:-390},500,function(){
            $(this).appendTo('.fa_list').css('margin-left',0)
        })
    })
    $('.prev_btn').click(function(){
        $('.fa_list>li:last').prependTo('.fa_list').css('margin-left','-390px')
        $('.fa_list>li:first').animate({marginLeft:0},500)    
    })
})

// special 
$(function(){

    $('.tab_title>span').each(function(index){
        $(this).click(function(){
            $(this).addClass('t_select').siblings().removeClass('t_select')
        })
    })

    $('.tab_title>.pac').click(function(){
        $('.package').fadeIn(300)
        $('.event').css('display','none')
    })
    $('.tab_title>.pac').click(function(){
        $('.package').fadeIn(300)
        $('.event').css('display','none')
    })
    $('.tab_title>.eve').click(function(){
        $('.event').fadeIn(300)
        $('.package').css('display','none')
    })
    $('.txt_list>ul>li').each(function(index){
        $(this).click(function(){
            $(this).addClass('select').siblings().removeClass('select')
            $('.img_list>li').eq(index).fadeIn(300).siblings().fadeOut(300)
        })
    })


})