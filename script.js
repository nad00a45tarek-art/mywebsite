document.addEventListener('DOMContentLoaded', function() {

    // عناصر النافذة المنبثقة (Modal)
    const modal = document.getElementById('service-modal');
    const closeModal = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const serviceForm = document.getElementById('service-form');

    // 1. فتح النافذة عند الضغط على أي كارت خدمة
    const serviceCards = document.querySelectorAll('#services div');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            let title = this.querySelector('h3').innerText;

            modalTitle.innerText = "Request: " + title;
            modalDesc.innerText = "Fill out the form below to get started with " + title + ".";
            
            modal.style.display = 'flex';
        });
    });

    // 2. إغلاق النافذة عند الضغط على (X)
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

    // 3. إغلاق النافذة عند الضغط في أي مكان خارج الصندوق
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // 4. معالجة زرار Submit جوه الـ Popup (الإرسال والإغلاق)
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(event) {
            event.preventDefault(); // منع إعادة تحميل الصفحة

            // أخذ الاسم المكتوب
            let nameInput = this.querySelector('input[type="text"]').value;

            // إظهار رسالة النجاح
            alert("Thank you, " + nameInput + "! Your request has been submitted successfully.");

            // تفريغ البيانات من الخانات
            this.reset();

            // إغلاق النافذة المنبثقة
            modal.style.display = 'none';
        });
    }

});