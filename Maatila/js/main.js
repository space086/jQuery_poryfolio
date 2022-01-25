$(function(){

    // 탑버튼
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#top_btn').fadeIn();
            } else {
                $('#top_btn').fadeOut();
            }
        });
        
        $("#top_btn").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 400);
            return false;
        });
    });
    
    // pc gnb
    $('.gnb>ul>li').on({
        mouseenter:function(){$(this).find('.sub_menu').stop().slideDown(300)},
        mouseleave:function(){$(this).find('.sub_menu').stop().slideUp(300)},
        focusin:function(){$(this).find('.sub_menu').stop().slideDown(300)},
        focusout:function(){$(this).find('.sub_menu').stop().slideup(300)}
    })
    // mob gnb
    var mob_click_num = 0
    $('.mob_btn').click(function(){
        mob_click_num++
        if(mob_click_num%2==1){
            $('.mob_menu').animate({right:0},500)
        }else{
            $('.mob_menu').animate({right:'-100%'},500)
        }                
    })
    $('.mob_gnb>li').click(function(){
        $(this).find('.sub_menu').slideDown(500)
        $(this).siblings().find('.sub_menu').slideUp(500)
    })

    //메인베너
    var winWidth = $(window).width()
    var clickNum = 0
    
    $(window).resize(function(){
        winWidth = $(this).width()
        $('.banner_list').css('left',-winWidth*clickNum)
    })

    function slider(index){               
        $('.banner_list').stop(true).animate({left:-winWidth*index},1000)
        $('.text_list>li').eq(index).stop(true).animate({marginLeft:0 , opacity:1 },500).siblings().animate({ opacity:0 },500,function(){
            $(this).css('margin-left','-100px')
        })
        $('.controls>li').eq(index).addClass('select').siblings().removeClass('select')
    }

    $('.controls>li').each(function(index){
        $(this).click(function(){
            slider(index)
            clickNum=index
        })
    })

    $('.next_btn').click(function(){
        clickNum++
        if(clickNum>3){
            clickNum=0
        }
        slider(clickNum)
    })
    $('.prev_btn').click(function(){
        clickNum--
        if(clickNum<0){
            clickNum=3
        }
        slider(clickNum)
    })

    // 라이트박스
    $('.search_btn').click(function(){
        $('.search_wrap').fadeIn(500)
    })
    $('.close_btn').click(function(){
        $('.search_wrap').fadeOut(500)
    })

    
    //베스트
    function nextBestSlider(){
        $('.best_list>li:first').animate({marginLeft:'-25%'},300,function(){
            $(this).appendTo('.best_list').css('margin-left','1%')
        })
    }

    function prevBestSlider(){
        $('.best_list>li:last').prependTo('.best_list').css('margin-left','-25%').animate({marginLeft:'1%'},300)
    }

    $('.next_btn').click(function(){
        nextBestSlider()
    })

    $('.prev_btn').click(function(){
        prevBestSlider()
    })


    // $('.next_btn').click(function(){
    //     $('.best_list>li:first').animate({marginLeft:'-25%'},500,function(){ 
    //         $(this).appendTo('.gallery').css('margin-left',0)
    //     })
    // })
    // $('.prev_btn').click(function(){
    //     $('.best_list>li:last').prependTo('.gallery').css('margin-left','-25%').animate({marginLeft:0},500)
    // })

    // function autoSlider(){
    //     $('.next_btn').trigger('click')
    // }
    // auto = setInterval(autoSlider,2000)

    // $('.best_wrap').mouseenter(function(){
    //     clearInterval(auto)
    // })

    // $('.best_wrap').mouseleave(function(){
    //     clearInterval(auto)
    //     auto = setInterval(autoSlider,2000)
    // })


    //타임세일
    countDownTimer1('de_date','11/20/2021' );
    countDownTimer2('de_date','11/23/2021' );
    countDownTimer3('de_date','11/25/2021' );
    countDownTimer4('de_date','12/03/2021' );

    var clickNum = 0

    $('.t_next_btn').click(function(){
        clickNum++
       if(clickNum>3){
        clickNum=0
       }
        $('.time_list>li').eq(clickNum).fadeIn(300).siblings().css('display','none')
        $('.time_right>li').eq(clickNum).fadeIn(300).siblings().css('display','none')
    })
    $('.t_prev_btn').click(function(){
        clickNum--
       if(clickNum<0){
        clickNum=3
       }
        $('.time_list>li').eq(clickNum).fadeIn(300).siblings().css('display','none')
        $('.time_right>li').eq(clickNum).fadeIn(300).siblings().css('display','none')
    })
    

})
    const countDownTimer1 = function(id,date){
        var _date = new Date(date);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining(){
            var now = new Date();
            var distDate = _date-now;

            if(distDate<0){
                clearInterval(timer);
                document.getElementById(id).textContent='세일이 종료되었습니다.';
                return;

            }
        var days = Math.floor(distDate / _day);
        var hours = Math.floor((distDate % _day) / _hour);
        var minutes = Math.floor((distDate % _hour) / _minute);
        var seconds = Math.floor((distDate%_minute) / _second);
        
        document.getElementById("days").textContent = days + '';
        document.getElementById("hours").textContent = hours + '';
        document.getElementById("minutes").textContent = minutes + '';
        document.getElementById("seconds").textContent = seconds + '';

        }
        // timer = showRemaining()
        timer = setInterval(showRemaining,1000);

        
    }
    const countDownTimer2 = function(id,date){
        var _date = new Date(date);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining(){
            var now = new Date();
            var distDate = _date-now;

            if(distDate<0){
                clearInterval(timer);
                document.getElementById(id).textContent='세일이 종료되었습니다.';
                return;

            }
        var days = Math.floor(distDate / _day);
        var hours = Math.floor((distDate % _day) / _hour);
        var minutes = Math.floor((distDate % _hour) / _minute);
        var seconds = Math.floor((distDate%_minute) / _second);
        
        document.getElementById("days2").textContent = days + '';
        document.getElementById("hours2").textContent = hours + '';
        document.getElementById("minutes2").textContent = minutes + '';
        document.getElementById("seconds2").textContent = seconds + '';

        }
        // timer = showRemaining()
        timer = setInterval(showRemaining,1000);

        
    }
    const countDownTimer3 = function(id,date){
        var _date = new Date(date);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining(){
            var now = new Date();
            var distDate = _date-now;

            if(distDate<0){
                clearInterval(timer);
                document.getElementById(id).textContent='세일이 종료되었습니다.';
                return;

            }
        var days = Math.floor(distDate / _day);
        var hours = Math.floor((distDate % _day) / _hour);
        var minutes = Math.floor((distDate % _hour) / _minute);
        var seconds = Math.floor((distDate%_minute) / _second);
        
        document.getElementById("days3").textContent = days + '';
        document.getElementById("hours3").textContent = hours + '';
        document.getElementById("minutes3").textContent = minutes + '';
        document.getElementById("seconds3").textContent = seconds + '';

        }
        // timer = showRemaining()
        timer = setInterval(showRemaining,1000);

        
    }
    const countDownTimer4 = function(id,date){
        var _date = new Date(date);
        var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
        var timer;

        function showRemaining(){
            var now = new Date();
            var distDate = _date-now;

            if(distDate<0){
                clearInterval(timer);
                document.getElementById(id).textContent='세일이 종료되었습니다.';
                return;

            }
        var days = Math.floor(distDate / _day);
        var hours = Math.floor((distDate % _day) / _hour);
        var minutes = Math.floor((distDate % _hour) / _minute);
        var seconds = Math.floor((distDate%_minute) / _second);
        
        document.getElementById("days4").textContent = days + '';
        document.getElementById("hours4").textContent = hours + '';
        document.getElementById("minutes4").textContent = minutes + '';
        document.getElementById("seconds4").textContent = seconds + '';

        }
        // timer = showRemaining()
        timer = setInterval(showRemaining,1000);

        
    }