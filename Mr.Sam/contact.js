document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');
            
            // Close all FAQs
            faqQuestions.forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });
            
            // If the clicked FAQ wasn't active, open it
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
    
    // Map Overlay
    const mapOverlay = document.getElementById('mapOverlay');
    const loadMapBtn = document.getElementById('loadMap');
    
    if (loadMapBtn) {
        loadMapBtn.addEventListener('click', function() {
            mapOverlay.classList.add('hidden');
        });
    }
    
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formValues = Object.fromEntries(formData.entries());
            
            // In a real implementation, you would send the form data to a server
            // This is a simplified version for demonstration
            
            // Show success message
            alert('Thank you for your message! We will get back to you shortly.');
            
            // Reset form
            contactForm.reset();
        });
    }
});