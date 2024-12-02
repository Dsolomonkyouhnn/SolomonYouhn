const spans = document.querySelectorAll('.projTag span');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');

spans.forEach(span => {
    span.addEventListener('mouseenter', () => {
        const title = span.getAttribute('data-title');
        const description = span.getAttribute('data-description');

        if (title && description) {
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            const rect = span.getBoundingClientRect();
            modal.style.top = `${rect.bottom + window.scrollY + 5}px`; // Offset for better visibility
            modal.style.left = `${rect.left + window.scrollX}px`;

            // Display the modal
            modal.style.display = 'block';
        }
    });

    span.addEventListener('mouseleave', () => {
        modal.style.display = 'none'; 
    });
});


//This is the contact logical side programing:
document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submit-btn');
    const modal = document.getElementById('confirmation-modal');
    const cancelBtn = document.getElementById('cancel-btn');
    const confirmBtn = document.getElementById('confirm-btn');
    const form = document.getElementById('inquiry-form');

    submitBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    confirmBtn.addEventListener('click', () => {
        const formData = {
            fullName: document.getElementById('full-name').value,
            email: document.getElementById('email').value,
            organization: document.getElementById('organization').value,
            phone: document.getElementById('phone').value,
            interest: document.getElementById('interest').value,
            consent: document.getElementById('consent').checked
        };

        console.log('Form Data:', formData);

        modal.style.display = 'none';
        form.reset();
    });
});

