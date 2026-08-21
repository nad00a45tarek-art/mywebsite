document.addEventListener('DOMContentLoaded', function() {

   
    const modal = document.getElementById('service-modal');
    const closeModal = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const serviceForm = document.getElementById('service-form');

    
    const serviceCards = document.querySelectorAll('#services div');
    
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            let title = this.querySelector('h3').innerText;

            modalTitle.innerText = "Request: " + title;
            modalDesc.innerText = "Fill out the form below to get started with " + title + ".";
            
            modal.style.display = 'flex';
        });
    });

   
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }

   
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

   
    if (serviceForm) {
        serviceForm.addEventListener('submit', function(event) {
            event.preventDefault();

           
            let nameInput = this.querySelector('input[type="text"]').value;

            alert("Thank you, " + nameInput + "! Your request has been submitted successfully.");

          
            this.reset();

           
            modal.style.display = 'none';
        });
    }

});