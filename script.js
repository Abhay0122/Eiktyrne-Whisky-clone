//:::---page_1

function show(){
    //---::::---nav_buttons_animations::::-----

const btn_wrapper = document.querySelector("#btn_wrapper");
const btn_innertxt_1 = document.querySelector("#btn_inner_txt_1");
const btn_innertxt_2 = document.querySelector("#btn_inner_txt_2");


btn_wrapper.addEventListener("mouseenter", function () {
    btn_innertxt_2.style.transformOrigin = "top";
    btn_innertxt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        btn_innertxt_1.style.transformOrigin = "bottom";
        btn_innertxt_1.style.transform = "scaley(1)"
    }, 300)
})

btn_wrapper.addEventListener("mouseleave", function () {
    btn_innertxt_1.style.transformOrigin = "bottom";
    btn_innertxt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        btn_innertxt_2.style.transformOrigin = "top";
        btn_innertxt_2.style.transform = "scaley(1)"
    }, 300)
})

const nav_h1_btn_wrapper = document.querySelector("#nav_h1_btn_wrapper");
const nav_h1_inner_txt_1 = document.querySelector("#nav_h1_inner_txt_1");
const nav_h1_inner_txt_2 = document.querySelector("#nav_h1_inner_txt_2");


nav_h1_btn_wrapper.addEventListener("mouseenter", function () {
    nav_h1_inner_txt_2.style.transformOrigin = "top";
    nav_h1_inner_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        nav_h1_inner_txt_1.style.transformOrigin = "bottom";
        nav_h1_inner_txt_1.style.transform = "scaley(1)"
    }, 300)
})

nav_h1_btn_wrapper.addEventListener("mouseleave", function () {
    nav_h1_inner_txt_1.style.transformOrigin = "bottom";
    nav_h1_inner_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        nav_h1_inner_txt_2.style.transformOrigin = "top";
        nav_h1_inner_txt_2.style.transform = "scaley(1)"
    }, 300)
})


//::::------menu_overlay::::::------

const button = document.querySelector("#nav_menu_button");
const cross = document.querySelector("#close_btn");
const overlay = document.querySelector(".overlay");

button.addEventListener("click", function () {
    overlay.style.transform = "translateX(0)";
});

cross.addEventListener("click", function () {
    overlay.style.transform = "translateX(100%)";
});


button.addEventListener("click", function () {
    gsap.from(".overlay .left", {
        opacity: 0,
        duration: 1,
        delay: 2.3
    })
})


//::::------buy_menu_overlay::::::------

const buy_button = document.querySelector("#nav_h1_btn_wrapper");
const nav_left_cross_btn = document.querySelector("#nav_left_close_btn");
const buy_overlay = document.querySelector(".left_nav_btn_overlay");

buy_button.addEventListener("click", function () {
    buy_overlay.style.transform = "translateX(0)";
});

nav_left_cross_btn.addEventListener("click", function () {
    buy_overlay.style.transform = "translateX(-100%)";
});


//::::----right_overlay_close_btn_aniamtion:::----

const nav_left_overlay_close_btn_wrapper = document.querySelector("#nav_left_overlay_close_btn_wrapper");
const left_overlay_close_txt_1 = document.querySelector("#left_overlay_close_txt_1");
const left_overlay_close_txt_2 = document.querySelector("#left_overlay_close_txt_2");

nav_left_overlay_close_btn_wrapper.addEventListener("mouseenter", function () {
    left_overlay_close_txt_2.style.transformOrigin = "top";
    left_overlay_close_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        left_overlay_close_txt_1.style.transformOrigin = "bottom";
        left_overlay_close_txt_1.style.transform = "scaley(1)"
    }, 300)
})

nav_left_overlay_close_btn_wrapper.addEventListener("mouseleave", function () {
    left_overlay_close_txt_1.style.transformOrigin = "bottom";
    left_overlay_close_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        left_overlay_close_txt_2.style.transformOrigin = "top";
        left_overlay_close_txt_2.style.transform = "scaley(1)"
    }, 300)
})



//::::----right_overlay_close_btn_aniamtion:::----

const close_btn_wrapper = document.querySelector("#overlay_close_btn_wrapper");
const close_btn_innertxt_1 = document.querySelector("#overlay_close_txt_1");
const close_btn_innertxt_2 = document.querySelector("#overlay_close_txt_2");


close_btn_wrapper.addEventListener("mouseenter", function () {
    close_btn_innertxt_2.style.transformOrigin = "top";
    close_btn_innertxt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        close_btn_innertxt_1.style.transformOrigin = "bottom";
        close_btn_innertxt_1.style.transform = "scaley(1)"
    }, 300)
})

close_btn_wrapper.addEventListener("mouseleave", function () {
    close_btn_innertxt_1.style.transformOrigin = "bottom";
    close_btn_innertxt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        close_btn_innertxt_2.style.transformOrigin = "top";
        close_btn_innertxt_2.style.transform = "scaley(1)"
    }, 300)
})

//:::------overlay_li_underline_animations::::---

const atag = document.querySelector("#overlay_right_li_1");
const line = document.querySelector("#overlay_line1");


atag.addEventListener("mouseenter", function () {
    line.style.transformOrigin = "left";
    line.style.transform = "scalex(1)";
})

atag.addEventListener("mouseleave", function () {
    line.style.transformOrigin = "right";
    line.style.transform = "scalex(0)";
})

// ::::list_2:::

const overlay_list_2 = document.querySelector("#overlay_right_li_2");
const line_2 = document.querySelector("#overlay_line2");


overlay_list_2.addEventListener("mouseenter", function () {
    line_2.style.transformOrigin = "left";
    line_2.style.transform = "scalex(1)";
})

overlay_list_2.addEventListener("mouseleave", function () {
    line_2.style.transformOrigin = "right";
    line_2.style.transform = "scalex(0)";
})


// ::::list_3:::

const overlay_list_3 = document.querySelector("#overlay_right_li_3");
const line_3 = document.querySelector("#overlay_line3");


overlay_list_3.addEventListener("mouseenter", function () {
    line_3.style.transformOrigin = "left";
    line_3.style.transform = "scalex(1)";
})

overlay_list_3.addEventListener("mouseleave", function () {
    line_3.style.transformOrigin = "right";
    line_3.style.transform = "scalex(0)";
})

// ::::list_4:::

const overlay_list_4 = document.querySelector("#overlay_right_li_4");
const line_4 = document.querySelector("#overlay_line4");


overlay_list_4.addEventListener("mouseenter", function () {
    line_4.style.transformOrigin = "left";
    line_4.style.transform = "scalex(1)";
})

overlay_list_4.addEventListener("mouseleave", function () {
    line_4.style.transformOrigin = "right";
    line_4.style.transform = "scalex(0)";
})

// ::::list_4:::

const overlay_list_5 = document.querySelector("#overlay_right_li_5");
const line_5 = document.querySelector("#overlay_line5");


overlay_list_5.addEventListener("mouseenter", function () {
    line_5.style.transformOrigin = "left";
    line_5.style.transform = "scalex(1)";
})

overlay_list_5.addEventListener("mouseleave", function () {
    line_5.style.transformOrigin = "right";
    line_5.style.transform = "scalex(0)";
})


//::::----overlay_bottom_btns_aniamtion:::----

//:::-----btn_1--:::::---
const overlay_bottom_btn_1_wrapper = document.querySelector("#overlay_bottom_btn_1_wrapper");
const overlay_bottom1_txt_1 = document.querySelector("#overlay_bottom1_txt_1");
const overlay_bottom1_txt_2 = document.querySelector("#overlay_bottom1_txt_2");


overlay_bottom_btn_1_wrapper.addEventListener("mouseenter", function () {
    overlay_bottom1_txt_2.style.transformOrigin = "top";
    overlay_bottom1_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom1_txt_1.style.transformOrigin = "bottom";
        overlay_bottom1_txt_1.style.transform = "scaley(1)"
    }, 300)
})

overlay_bottom_btn_1_wrapper.addEventListener("mouseleave", function () {
    overlay_bottom1_txt_1.style.transformOrigin = "bottom";
    overlay_bottom1_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom1_txt_2.style.transformOrigin = "top";
        overlay_bottom1_txt_2.style.transform = "scaley(1)"
    }, 300)
})


//:::-----btn_2--:::::---
const overlay_bottom_btn_2_wrapper = document.querySelector("#overlay_bottom_btn_2_wrapper");
const overlay_bottom2_txt_1 = document.querySelector("#overlay_bottom2_txt_1");
const overlay_bottom2_txt_2 = document.querySelector("#overlay_bottom2_txt_2");


overlay_bottom_btn_2_wrapper.addEventListener("mouseenter", function () {
    overlay_bottom2_txt_2.style.transformOrigin = "top";
    overlay_bottom2_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom2_txt_1.style.transformOrigin = "bottom";
        overlay_bottom2_txt_1.style.transform = "scaley(1)"
    }, 300)
})

overlay_bottom_btn_2_wrapper.addEventListener("mouseleave", function () {
    overlay_bottom2_txt_1.style.transformOrigin = "bottom";
    overlay_bottom2_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom2_txt_2.style.transformOrigin = "top";
        overlay_bottom2_txt_2.style.transform = "scaley(1)"
    }, 300)
})


//:::-----btn_3--:::::---
const overlay_bottom_btn_3_wrapper = document.querySelector("#overlay_bottom_btn_3_wrapper");
const overlay_bottom3_txt_1 = document.querySelector("#overlay_bottom3_txt_1");
const overlay_bottom3_txt_2 = document.querySelector("#overlay_bottom3_txt_2");


overlay_bottom_btn_3_wrapper.addEventListener("mouseenter", function () {
    overlay_bottom3_txt_2.style.transformOrigin = "top";
    overlay_bottom3_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom3_txt_1.style.transformOrigin = "bottom";
        overlay_bottom3_txt_1.style.transform = "scaley(1)"
    }, 300)
})

overlay_bottom_btn_3_wrapper.addEventListener("mouseleave", function () {
    overlay_bottom3_txt_1.style.transformOrigin = "bottom";
    overlay_bottom3_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom3_txt_2.style.transformOrigin = "top";
        overlay_bottom3_txt_2.style.transform = "scaley(1)"
    }, 300)
})


//:::-----btn_4--:::::---
const overlay_bottom_btn_4_wrapper = document.querySelector("#overlay_bottom_btn_4_wrapper");
const overlay_bottom4_txt_1 = document.querySelector("#overlay_bottom4_txt_1");
const overlay_bottom4_txt_2 = document.querySelector("#overlay_bottom4_txt_2");


overlay_bottom_btn_4_wrapper.addEventListener("mouseenter", function () {
    overlay_bottom4_txt_2.style.transformOrigin = "top";
    overlay_bottom4_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom4_txt_1.style.transformOrigin = "bottom";
        overlay_bottom4_txt_1.style.transform = "scaley(1)"
    }, 300)
})

overlay_bottom_btn_4_wrapper.addEventListener("mouseleave", function () {
    overlay_bottom4_txt_1.style.transformOrigin = "bottom";
    overlay_bottom4_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        overlay_bottom4_txt_2.style.transformOrigin = "top";
        overlay_bottom4_txt_2.style.transform = "scaley(1)"
    }, 300)
})


// :::----page_1_left_btn_underline_aniamtion:::::----

const page_1_left_btn = document.querySelector("#page1_left_btn");
const center_left_line = document.querySelector("#center_left_line");


page_1_left_btn.addEventListener("mouseenter", function () {
    center_left_line.style.transformOrigin = "left";
    center_left_line.style.transform = "scalex(1)";
})

page_1_left_btn.addEventListener("mouseleave", function () {
    center_left_line.style.transformOrigin = "right";
    center_left_line.style.transform = "scalex(0)";
})

var t1 = gsap.timeline();

t1.from("#navigation_panel", {
    opacity:0,
    duration:1,
    delay:1
})
.from("#page1_left_h1", {
    opacity:0,
    y:50
})
.from("#page1_left_p1", {
    opacity:0,
    y:50
})
.from("#page1_left_p2", {
    opacity:0,
    y:50
})
.from("#page1_left_p3", {
    opacity:0,
    y:50
})
.from("#page1_left_btn",{
    opacity:0,
    y:50
})
.from("#whisky_img",{
    opacity:0,
    y:50
})

// left_overlay_list_animation
button.addEventListener("click", function () {

    var li_t = gsap.timeline();

    li_t.from("#overlay_right_li_1", {
        opacity:0,
        x:100,
        duration:1,
        delay:1.5
    })
    .from("#overlay_right_li_2", {
        opacity:0,
        x:100,
    })
    .from("#overlay_right_li_3", {
        opacity:0,
        x:100,
    })
    .from("#overlay_right_li_4", {
        opacity:0,
        x:100,
    })
    .from("#overlay_right_li_5", {
        opacity:0,
        x:100,
    })
    .from("#right_overlay_bottom_buttons_wrapper", {
        opacity:0,
        x:100,
    })
})

// left_overlay_list_animation
    buy_button.addEventListener("click", function () {
        var buy_txt = gsap.timeline();

        buy_txt.from(".left_nav_btn_overlay h1",{
            opacity:0,
            y:50,
            duration:1,
            delay:2
        })
        .from(".left_nav_btn_overlay h5", {
            opacity:0,
            y:50,
        })
        .from("#left_nav_overlay_p1 ", {
            opacity:0,
            y:50,
        })
        .from("#left_nav_overlay_p2", {
            opacity:0,
            y:50,
        })
        .from("#left_nav_overlay_p3", {
            opacity:0,
            y:50,
        })
    });

}

show()
                                //:::::---page_1_end::::::--- 



                                //::::::--- page_2_start:::::----

// :::----page_2_right_btn_underline_aniamtion:::::----

const page_2_right_btn = document.querySelector("#page2_right_btn");
const page_2_right_btn_line = document.querySelector("#page_2_center_right_line");


page_2_right_btn.addEventListener("mouseenter", function () {
    page_2_right_btn_line.style.transformOrigin = "left";
    page_2_right_btn_line.style.transform = "scalex(1)";
})

page_2_right_btn.addEventListener("mouseleave", function () {
    page_2_right_btn_line.style.transformOrigin = "right";
    page_2_right_btn_line.style.transform = "scalex(0)";
})


//::::::----gsap_for_page_2::::::------





                                    //:::::---page_2_end::::::--- 

                                    // ::::---page_3_start__::::::---

//::---page_3_img_slider 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

 //---::::---page_3_button_animations::::-----

 const page_3_btn_wrapper = document.querySelector("#page_3_btn_wrapper");
 const page_3_btn_inner_txt_1 = document.querySelector("#page_3_btn_inner_txt_1");
 const page_3_btn_inner_txt_2= document.querySelector("#page_3_btn_inner_txt_2");
 
 
 page_3_btn_wrapper.addEventListener("mouseenter", function () {
     page_3_btn_inner_txt_2.style.transformOrigin = "top";
     page_3_btn_inner_txt_2.style.transform = "scaley(0)"
     setTimeout(function () {
         page_3_btn_inner_txt_1.style.transformOrigin = "bottom";
         page_3_btn_inner_txt_1.style.transform = "scaley(1)"
     }, 300)
 })
 
 page_3_btn_wrapper.addEventListener("mouseleave", function () {
     page_3_btn_inner_txt_1.style.transformOrigin = "bottom";
     page_3_btn_inner_txt_1.style.transform = "scaley(0)"
     setTimeout(function () {
         page_3_btn_inner_txt_2.style.transformOrigin = "top";
         page_3_btn_inner_txt_2.style.transform = "scaley(1)"
     }, 300)
 })
 
                                    // :::--page_3_end---:::


                                    // :::--page_4_start--:::

 //---::::---page_4_top_button_animations::::-----

 const page_4_top_btn_wrapperr = document.querySelector("#page_4_top_btn_wrapper");
 const page_4_top_btn_inner_txt_1 = document.querySelector("#page_4_top_btn_inner_txt_1");
 const page_4_top_btn_inner_txt_2= document.querySelector("#page_4_top_btn_inner_txt_2");
 
 
 page_4_top_btn_wrapper.addEventListener("mouseenter", function () {
     page_4_top_btn_inner_txt_2.style.transformOrigin = "top";
     page_4_top_btn_inner_txt_2.style.transform = "scaley(0)"
     setTimeout(function () {
         page_4_top_btn_inner_txt_1.style.transformOrigin = "bottom";
         page_4_top_btn_inner_txt_1.style.transform = "scaley(1)"
     }, 300)
 })
 
 page_4_top_btn_wrapper.addEventListener("mouseleave", function () {
     page_4_top_btn_inner_txt_1.style.transformOrigin = "bottom";
     page_4_top_btn_inner_txt_1.style.transform = "scaley(0)"
     setTimeout(function () {
         page_4_top_btn_inner_txt_2.style.transformOrigin = "top";
         page_4_top_btn_inner_txt_2.style.transform = "scaley(1)"
     }, 300)
 })
 

 //---::::---page_4_bottom_submit_button_animations::::-----

 const bottom_left_submit_btn_wrapper = document.querySelector("#bottom_left_submit_btn_wrapper");
 const bottom_left_submit_btn_inner_txt_1 = document.querySelector("#bottom_left_submit_btn_inner_txt_1");
 const bottom_left_submit_btn_inner_txt_2 = document.querySelector("#bottom_left_submit_btn_inner_txt_2 ");
 
 
 bottom_left_submit_btn_wrapper.addEventListener("mouseenter", function () {
    bottom_left_submit_btn_inner_txt_2.style.transformOrigin = "top";
    bottom_left_submit_btn_inner_txt_2.style.transform = "scaley(0)"
     setTimeout(function () {
        bottom_left_submit_btn_inner_txt_1.style.transformOrigin = "bottom";
        bottom_left_submit_btn_inner_txt_1.style.transform = "scaley(1)"
     }, 300)
 })
 
 bottom_left_submit_btn_wrapper.addEventListener("mouseleave", function () {
     bottom_left_submit_btn_inner_txt_1.style.transformOrigin = "bottom";
     bottom_left_submit_btn_inner_txt_1.style.transform = "scaley(0)"
     setTimeout(function () {
        bottom_left_submit_btn_inner_txt_2.style.transformOrigin = "top";
        bottom_left_submit_btn_inner_txt_2.style.transform = "scaley(1)"
     }, 300)
 })
 

 //---::::---social_media_icons_button_animations::::-----

// facebook::::---

 const facebook_icon_wrapper = document.querySelector("#facebook_icon_wrapper");
 const facebook_btn_inner_img_1= document.querySelector("#facebook_btn_inner_img_1");
 const facebook_btn_inner_img_2 = document.querySelector("#facebook_btn_inner_img_2 ");
 
 
 facebook_icon_wrapper.addEventListener("mouseenter", function () {
    facebook_btn_inner_img_2.style.transformOrigin = "top";
    facebook_btn_inner_img_2.style.transform = "scaley(0)"
     setTimeout(function () {
        facebook_btn_inner_img_1.style.transformOrigin = "bottom";
        facebook_btn_inner_img_1.style.transform = "scaley(1)"
     }, 300)
 })
 
 facebook_icon_wrapper.addEventListener("mouseleave", function () {
    facebook_btn_inner_img_1.style.transformOrigin = "bottom";
    facebook_btn_inner_img_1.style.transform = "scaley(0)"
     setTimeout(function () {
        facebook_btn_inner_img_2.style.transformOrigin = "top";
        facebook_btn_inner_img_2.style.transform = "scaley(1)"
     }, 300)
 })
 
 
// Insta::::---

const insta_icon_wrapper = document.querySelector("#insta_icon_wrapper");
const insta_btn_inner_img_1= document.querySelector("#insta_btn_inner_img_1");
const insta_btn_inner_img_2 = document.querySelector("#insta_btn_inner_img_2 ");


insta_icon_wrapper.addEventListener("mouseenter", function () {
   insta_btn_inner_img_2.style.transformOrigin = "top";
   insta_btn_inner_img_2.style.transform = "scaley(0)"
    setTimeout(function () {
       insta_btn_inner_img_1.style.transformOrigin = "bottom";
       insta_btn_inner_img_1.style.transform = "scaley(1)"
    }, 300)
})

insta_icon_wrapper.addEventListener("mouseleave", function () {
   insta_btn_inner_img_1.style.transformOrigin = "bottom";
   insta_btn_inner_img_1.style.transform = "scaley(0)"
    setTimeout(function () {
       insta_btn_inner_img_2.style.transformOrigin = "top";
       insta_btn_inner_img_2.style.transform = "scaley(1)"
    }, 300)
})


// ::::----page_4_bottom_right::::---

//:::------bottom_right_li_underline_animations::::---

// :::list_1::--
const bottom_right_li_1 = document.querySelector("#bottom_right_li_1");
const bottom_line1 = document.querySelector("#bottom_line1");


bottom_right_li_1.addEventListener("mouseenter", function () {
    bottom_line1.style.transformOrigin = "left";
    bottom_line1.style.transform = "scalex(1)";
})

bottom_right_li_1.addEventListener("mouseleave", function () {
    bottom_line1.style.transformOrigin = "right";
    bottom_line1.style.transform = "scalex(0)";
})

// ::::list_2:::

const bottom_right_li_2 = document.querySelector("#bottom_right_li_2");
const bottom_line2 = document.querySelector("#bottom_line2");


bottom_right_li_2.addEventListener("mouseenter", function () {
    bottom_line2.style.transformOrigin = "left";
    bottom_line2.style.transform = "scalex(1)";
})

bottom_right_li_2.addEventListener("mouseleave", function () {
    bottom_line2.style.transformOrigin = "right";
    bottom_line2.style.transform = "scalex(0)";
})


// ::::list_3:::

const bottom_right_li_3 = document.querySelector("#bottom_right_li_3");
const bottom_line3 = document.querySelector("#bottom_line3");


bottom_right_li_3.addEventListener("mouseenter", function () {
    bottom_line3.style.transformOrigin = "left";
    bottom_line3.style.transform = "scalex(1)";
})

bottom_right_li_3.addEventListener("mouseleave", function () {
    bottom_line3.style.transformOrigin = "right";
    bottom_line3.style.transform = "scalex(0)";
})

// ::::list_4:::

const bottom_right_li_4 = document.querySelector("#bottom_right_li_4");
const bottom_line4 = document.querySelector("#bottom_line4");


bottom_right_li_4.addEventListener("mouseenter", function () {
    bottom_line4.style.transformOrigin = "left";
    bottom_line4.style.transform = "scalex(1)";
})

bottom_right_li_4.addEventListener("mouseleave", function () {
    bottom_line4.style.transformOrigin = "right";
    bottom_line4.style.transform = "scalex(0)";
})

// ::::list_5:::

const bottom_right_li_5 = document.querySelector("#bottom_right_li_5");
const bottom_line5 = document.querySelector("#bottom_line5");


bottom_right_li_5.addEventListener("mouseenter", function () {
    bottom_line5.style.transformOrigin = "left";
    bottom_line5.style.transform = "scalex(1)";
})

bottom_right_li_5.addEventListener("mouseleave", function () {
    bottom_line5.style.transformOrigin = "right";
    bottom_line5.style.transform = "scalex(0)";
})


//::::----bottom_right_bottom_btns_aniamtion:::----

//:::-----btn_1--:::::---
const bottom_right_btn_1_wrapper= document.querySelector("#bottom_right_btn_1_wrapper");
const bottom_btn1_txt_1 = document.querySelector("#bottom_btn1_txt_1");
const bottom_btn1_txt_2= document.querySelector("#bottom_btn1_txt_2");


bottom_right_btn_1_wrapper.addEventListener("mouseenter", function () {
    bottom_btn1_txt_2.style.transformOrigin = "top";
    bottom_btn1_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn1_txt_1.style.transformOrigin = "bottom";
        bottom_btn1_txt_1.style.transform = "scaley(1)"
    }, 300)
})

bottom_right_btn_1_wrapper.addEventListener("mouseleave", function () {
    bottom_btn1_txt_1.style.transformOrigin = "bottom";
    bottom_btn1_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn1_txt_2.style.transformOrigin = "top";
        bottom_btn1_txt_2.style.transform = "scaley(1)"
    }, 300)
})


//:::-----btn_2--:::::---
const bottom_right_btn_2_wrapper = document.querySelector("#bottom_right_btn_2_wrapper");
const bottom_btn2_txt_1 = document.querySelector("#bottom_btn2_txt_1");
const bottom_btn2_txt_2  = document.querySelector("#bottom_btn2_txt_2");


bottom_right_btn_2_wrapper.addEventListener("mouseenter", function () {
    bottom_btn2_txt_2.style.transformOrigin = "top";
    bottom_btn2_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn2_txt_1.style.transformOrigin = "bottom";
        bottom_btn2_txt_1.style.transform = "scaley(1)"
    }, 300)
})

bottom_right_btn_2_wrapper.addEventListener("mouseleave", function () {
    bottom_btn2_txt_1.style.transformOrigin = "bottom";
    bottom_btn2_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn2_txt_2 .style.transformOrigin = "top";
        bottom_btn2_txt_2 .style.transform = "scaley(1)"
    }, 300)
})


//:::-----btn_3--:::::---
const bottom_right_btn_3_wrapper = document.querySelector("#bottom_right_btn_3_wrapper");
const bottom_btn3_txt_1 = document.querySelector("#bottom_btn3_txt_1");
const bottom_btn3_txt_2= document.querySelector("#bottom_btn3_txt_2");


bottom_right_btn_3_wrapper.addEventListener("mouseenter", function () {
    bottom_btn3_txt_2.style.transformOrigin = "top";
    bottom_btn3_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn3_txt_1.style.transformOrigin = "bottom";
        bottom_btn3_txt_1.style.transform = "scaley(1)"
    }, 300)
})

bottom_right_btn_3_wrapper.addEventListener("mouseleave", function () {
    bottom_btn3_txt_1.style.transformOrigin = "bottom";
    bottom_btn3_txt_1.style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn3_txt_2.style.transformOrigin = "top";
        bottom_btn3_txt_2.style.transform = "scaley(1)"
    }, 300)
})


//:::-----btn_4--:::::---
const bottom_right_btn_4_wrapper  = document.querySelector("#bottom_right_btn_4_wrapper ");
const bottom_btn4_txt_1  = document.querySelector("#bottom_btn4_txt_1");
const bottom_btn4_txt_2 = document.querySelector("#bottom_btn4_txt_2");


bottom_right_btn_4_wrapper.addEventListener("mouseenter", function () {
    bottom_btn4_txt_2.style.transformOrigin = "top";
    bottom_btn4_txt_2.style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn4_txt_1 .style.transformOrigin = "bottom";
        bottom_btn4_txt_1 .style.transform = "scaley(1)"
    }, 300)
})

bottom_right_btn_4_wrapper.addEventListener("mouseleave", function () {
    bottom_btn4_txt_1 .style.transformOrigin = "bottom";
    bottom_btn4_txt_1 .style.transform = "scaley(0)"
    setTimeout(function () {
        bottom_btn4_txt_2.style.transformOrigin = "top";
        bottom_btn4_txt_2.style.transform = "scaley(1)"
    }, 300)
})


                                        // ::::--GSAP---:::

// page_2_gsap

gsap.from(".page_2_left_img", {
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:"#page2_right_p1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },

})


gsap.from("#page_2_right_heading", {
    opacity:0,
    y:100,
    duration:1,
    scrollTrigger:{
        trigger:"#page2_right_p1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#page2_right_p1", {
    opacity:0,
    y:100,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page2_right_p1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#page2_right_p2", {
    opacity:0,
    y:100,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#page2_right_p1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#page2_right_p3", {
    opacity:0,
    y:100,
    duration:1,
    delay:0.7,
    scrollTrigger:{
        trigger:"#page2_right_p1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#page2_right_btn", {
    opacity:0,
    y:50,
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:"#page2_right_p1",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

// :::---page_3_start:::---

gsap.from("#page_3_heading", {
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page_3_subheading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#page_3_subheading", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page_3_subheading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#page_3_btn_wrapper", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.4,
    scrollTrigger:{
        trigger:"#page_3_subheading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from(".mySwiper", {
    opacity:0,
    y:130,
    duration:1,
    scrollTrigger:{
        trigger:"#page_3_btn_wrapper",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})


//::::--page_4_top::::---

gsap.from("#page_4_top_heading", {
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page_4_top_heading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from(".page_4_btn_content_wrapper", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page_4_top_heading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#page_4_top_endingline", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page_4_top_heading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

// ::--page_4_bottom_start:::---

gsap.from("#bottom_left_section_heading", {
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page_4_top_endingline",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_left_section_subheading", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page_4_top_endingline",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_left_section_input_wrapper", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.4,
    scrollTrigger:{
        trigger:"#page_4_top_endingline",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_left_social_media_icons_wrapper", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.5,
    scrollTrigger:{
        trigger:"#bottom_left_section_subheading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

// page_4_bottom_right::::---

gsap.from("#bottom_right_li_1", {
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#page_4_top_endingline",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_right_li_2", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#page_4_top_endingline",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_right_li_3", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.4,
    scrollTrigger:{
        trigger:"#page_4_top_endingline",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_right_li_4", {
    opacity:0,
    y:50,
    duration:1,
    scrollTrigger:{
        trigger:"#bottom_left_section_subheading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_right_li_5", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.3,
    scrollTrigger:{
        trigger:"#bottom_left_section_subheading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})

gsap.from("#bottom_right_bottom_buttons_wrapper", {
    opacity:0,
    y:50,
    duration:1,
    delay:0.4,
    scrollTrigger:{
        trigger:"#bottom_left_section_subheading",
        scroller:"body",
        // markers:true,
        start:"top 60%",
    },
})