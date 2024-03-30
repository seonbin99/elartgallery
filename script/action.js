$(document).ready(function(){
    $('header').load('include/header.html',function(){
    // ham버튼

    $('header nav .ham').click(function () {
        $(this).toggleClass('active');
        $('header .navbox').stop().slideToggle();
    })
    $('header .navbox .nav_menu > li').click(function () {
        $(this).find('.lnb').stop().slideToggle();
    })

    });


})



// lnb 높이 만들기



// $(document).ready(function () {

//     $(window).resize(function () {
//         if ($(window).width() >= 953) {
//             let gnbTop = $('header nav .gnb li').offset().top;
//             console.log(gnbTop)
//             $('header nav .lnb').css({ top: 'calc(100%  + ' + gnbTop + 'px)' })

// let maxHeight = 0;

// $('header nav .lnb').each(function () {
//     let lnbH = $(this).outerHeight();
//     console.log(lnbH);
//     if (lnbH > maxHeight) {
//         maxHeight = lnbH;
//     }

//     $('header .lnb_bg').css({ height: maxHeight })
// });

// $('header nav .gnb').mouseover(function(){
//     let lnbH = $(this).find('.lnb').outerHeight();
//     console.log(lnbH)
// })

//         }
// else if ($(window).width() < 953) {
//     let imgboxH = $('.section_box #section1 .centerbox .img_box').height();
//     console.log(imgboxH);
//     $('.section_box #section1 .centerbox .img_box figure.circle_mask').css({
//         maxWidth: imgboxH
//     })
// }
// });



// });


// $('header nav .gnb').mouseover(function () {
//     $('header .lnb_bg').stop().slideDown();
// });
// $('header nav .gnb').mouseout(function () {
//     $('header .lnb_bg').stop().slideUp();
// });
// $('header .lnb_bg').mouseover(function () {
//     $(this).stop().slideDown();
//     $('header .lnb').stop().slideDown();
// })
// $('header .lnb_bg').mouseout(function () {
//     $(this).stop().slideUp();
//     $('header .lnb').stop().slideUp();
// })


// section1 animation


setInterval(fadeani, 4000)

let i = 1

function fadeani() {
    if (i > 2) {
        i = 0
    }
    $('#section1 .img_box figure.circle_mask img').eq(i).fadeIn().siblings().fadeOut(2000)
    i++
}

// section1 text_ani1

let sec1T, visualT, sec2T,sec3T

$(window).scroll(function () {
    scrT = $(window).scrollTop();
    console.log(scrT)

    sec1T = $('#section1').offset().top;
    sec2T = $('#section2').offset().top;
    sec3T = $('#section3').offset().top;

    if (scrT >= sec1T * 0.5) {
        $('.section_box #section1 .centerbox .textbox').css({ animation: 'text_ani1 2s forwards' })
    } else {
        $('.section_box #section1 .centerbox .textbox').css({ animation: '' })
    }
    if (scrT >= sec2T-500) {
        $('.section_box #section2 figure').addClass('active');
        $('.section_box #section2 .textbox').addClass('active');
    } else {
    }
    if (scrT>=sec3T-500) {
        $('.section_box #section3 .textbox').addClass('active');
        $('.section_box #section3 figure').addClass('active');
    }

});

// section2 span animation class active 

let x = 1;

setInterval(function () {
    let sec2SpanLeng = $('#section2 .deco span').length;

    if (x >= sec2SpanLeng) {
        x = 0
    }

    $('#section2 .deco span').eq(x).addClass('active').siblings().removeClass('active');

    x = x + 1
}, 500)

