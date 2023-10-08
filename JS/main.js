// =============================> Messenger Buttons Start <====================================
let message = document.querySelector('.show_messenger_icon')
let showMessage = document.querySelector('.fb_message')
// =============================> Messenger Buttons End <====================================

// =============================> Messenger Customize Start <===============================
message.addEventListener('click', function(){
    showMessage.classList.toggle('show_message')
})
// =============================> Messenger Customize End <================================

// ============================> Notification Button Start <===============================
let noticeBtn = document.querySelector('.show_notice_icon')
let showNotice = document.querySelector('.notification_main')
// ============================> Notification Button End <=================================

// ======================> Notification Customization Start <==============================
noticeBtn.addEventListener('click', function(){
    showNotice.classList.toggle('show_Notification')
})
// ======================> Notification Customization End <================================

// ================================> Admin Section Start <=================================
let clickAdd = document.querySelector('.admin')
let showAdmin = document.querySelector('.admin_section')
// ================================> Admin Section End <===================================

// ================================> Admin Section Customization Start <===================
clickAdd.addEventListener('click', function(){
    showAdmin.classList.toggle('admin_show')
})
// ================================> Admin Section Customization End <====================

// ================================> Body Middle Section Start <==========================




// =====================> Sotry Section Start <==========================
$('.slick_slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    // arrows: false,
    prevArrow: '<i class="ri-arrow-left-fill left"></i>',
    nextArrow: '<i class="ri-arrow-right-fill right"></i>',
    // lazyLoad: 'ondemand',
    autoplay: true,
    centerMode: true,

  });
// =====================> Sotry Section End <==========================





// ================================> Body Middle Section End <============================