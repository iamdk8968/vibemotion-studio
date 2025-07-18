// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
    }
});

// Testimonials Carousel
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Remove active class from all dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current testimonial
    if (testimonials[index]) {
        testimonials[index].classList.add('active');
    }
    
    // Activate current dot
    if (dots[index]) {
        dots[index].classList.add('active');
    }
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}

function currentSlide(index) {
    currentTestimonial = index - 1;
    showTestimonial(currentTestimonial);
}

// Auto-advance testimonials every 5 seconds
setInterval(nextTestimonial, 5000);

// Initialize first testimonial
if (testimonials.length > 0) {
    showTestimonial(0);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .feature-item, .pricing-card');
    animateElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });
});

// Form submission
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const phone = contactForm.querySelector('input[type="tel"]').value;
        const service = contactForm.querySelector('select').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('.btn-primary');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your message! We\'ll get back to you soon.');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Floating animation for hero icons
function createFloatingAnimation() {
    const icons = document.querySelectorAll('.floating-icons i');
    icons.forEach((icon, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 4 + Math.random() * 4;
        icon.style.animationDelay = `${randomDelay}s`;
        icon.style.animationDuration = `${randomDuration}s`;
    });
}

// Initialize floating animations
document.addEventListener('DOMContentLoaded', createFloatingAnimation);

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-icons i');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
    });
});

// Button hover effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Service card hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-15px) rotateY(5deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotateY(0deg)';
    });
});

// Pricing card selection
document.querySelectorAll('.pricing-card .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.pricing-card');
        const planName = card.querySelector('h3').textContent;
        
        if (this.textContent === 'Contact Us') {
            // Scroll to contact section
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            // Simulate plan selection
            alert(`You selected the ${planName} plan! Redirecting to checkout...`);
        }
    });
});

// CTA button actions
document.querySelectorAll('.hero-buttons .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (this.textContent === 'Get Started') {
            // Scroll to pricing section
            document.querySelector('#pricing').scrollIntoView({
                behavior: 'smooth'
            });
        } else if (this.textContent === 'Book Free Demo') {
            // Scroll to contact section
            document.querySelector('#contact').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// WhatsApp contact
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('click', function() {
        const icon = this.querySelector('i');
        if (icon && icon.classList.contains('fa-whatsapp')) {
            window.open('https://wa.me/15551234567', '_blank');
        } else if (icon && icon.classList.contains('fa-envelope')) {
            window.location.href = 'mailto:hello@traeai.com';
        } else if (icon && icon.classList.contains('fa-calendar')) {
            alert('Booking calendar integration would go here!');
        }
    });
});

// Social media links
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const icon = this.querySelector('i');
        
        if (icon.classList.contains('fa-instagram')) {
            window.open('https://instagram.com/traeai', '_blank');
        } else if (icon.classList.contains('fa-youtube')) {
            window.open('https://youtube.com/@traeai', '_blank');
        } else if (icon.classList.contains('fa-linkedin')) {
            window.open('https://linkedin.com/company/traeai', '_blank');
        } else if (icon.classList.contains('fa-twitter')) {
            window.open('https://twitter.com/traeai', '_blank');
        }
    });
});

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    if (heroTitle) heroTitle.style.animation = 'fadeInUp 1s ease-out';
    if (heroSubtitle) heroSubtitle.style.animation = 'fadeInUp 1s ease-out 0.2s both';
    if (heroButtons) heroButtons.style.animation = 'fadeInUp 1s ease-out 0.4s both';
});

// Keyboard navigation for testimonials
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        currentTestimonial = currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1;
        showTestimonial(currentTestimonial);
    } else if (e.key === 'ArrowRight') {
        nextTestimonial();
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.98)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading states for better UX
function addLoadingState(element, duration = 2000) {
    element.style.opacity = '0.7';
    element.style.pointerEvents = 'none';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.pointerEvents = 'auto';
    }, duration);
}

// Initialize AOS (Animate On Scroll) alternative
function initScrollAnimations() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .feature-item, .pricing-card');
    
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const scrollObserver = new IntersectionObserver(animateOnScroll, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(el);
    });
}

// Initialize all animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    
    // Add stagger effect to grid items
    document.querySelectorAll('.services-grid .service-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.portfolio-grid .portfolio-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.pricing-grid .pricing-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
});
  const cursor = document.querySelector(".cursor");
  const cursor2 = document.querySelector(".cursor2");

  document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
    cursor2.style.top = e.clientY + "px";
    cursor2.style.left = e.clientX + "px";
  });

  document.querySelectorAll("a, button, .hover-target").forEach(el => {
    el.addEventListener("mouseenter", () => {
      cursor2.style.transform = "scale(1.5)";
    });
    el.addEventListener("mouseleave", () => {
      cursor2.style.transform = "scale(1)";
    });
  });

// Console welcome message
console.log('%c🚀 Welcome to TRAÉ AI - Your AI-Driven Digital Growth Partner!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cWebsite built with modern web technologies and AI-powered design principles.', 'color: #8b5cf6; font-size: 12px;');