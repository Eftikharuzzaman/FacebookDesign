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

// ================================> Admin Section Customization Start <===================================
clickAdd.addEventListener('click', function(){
    showAdmin.classList.toggle('admin_show')
})
// ================================> Admin Section Customization End <=====================================

// ========================================> Body left Section Start <=========================================



// =========================================> Body left Section End <==========================================