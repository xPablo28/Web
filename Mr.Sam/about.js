
        document.addEventListener('DOMContentLoaded', function() {
            // Header scroll effect
            const header = document.getElementById('header');
            const scrollTop = document.getElementById('scrollTop');
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                    scrollTop.classList.add('active');
                } else {
                    header.classList.remove('scrolled');
                    scrollTop.classList.remove('active');
                }
            });
            
            // Scroll to top
            scrollTop.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Mobile Menu Toggle
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');
            
            if (menuToggle) {
                menuToggle.addEventListener('click', function() {
                    navLinks.classList.add('active');
                    
                    // Create close button if it doesn't exist
                    if (!document.querySelector('.close-menu')) {
                        const closeBtn = document.createElement('div');
                        closeBtn.className = 'close-menu';
                        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
                        navLinks.appendChild(closeBtn);
                        
                        closeBtn.addEventListener('click', function() {
                            navLinks.classList.remove('active');
                        });
                    }
                });
            }
            
            // Scroll Animation
            const animateElements = document.querySelectorAll('.animate');
            
            function checkIfInView() {
                animateElements.forEach(element => {
                    const elementTop = element.getBoundingClientRect().top;
                    const elementBottom = element.getBoundingClientRect().bottom;
                    const windowHeight = window.innerHeight;
                    
                    if (elementTop < windowHeight - 100 && elementBottom > 0) {
                        element.style.animationPlayState = 'running';
                    }
                });
            }
            
            // Set initial state for animations
            animateElements.forEach(element => {
                element.style.animationPlayState = 'paused';
            });
            
            // Run animation check on load and scroll
            window.addEventListener('load', checkIfInView);
            window.addEventListener('scroll', checkIfInView);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
    