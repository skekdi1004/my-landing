// ===== Global Variables =====
let selectedRating = 5;

// ===== DOM Content Loaded =====
document.addEventListener('DOMContentLoaded', function() {
    // Initialize
    initNavigation();
    initRatingInput();
    initForms();
    loadReferences();
    loadReviews();
    smoothScroll();
});

// ===== Navigation =====
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===== Smooth Scroll =====
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Rating Input =====
function initRatingInput() {
    const ratingStars = document.querySelectorAll('.rating-input i');
    const ratingInput = document.getElementById('review-rating');

    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            ratingInput.value = selectedRating;
            updateRatingDisplay();
        });

        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.getAttribute('data-rating'));
            highlightStars(rating);
        });
    });

    document.querySelector('.rating-input').addEventListener('mouseleave', function() {
        updateRatingDisplay();
    });

    // Initialize with 5 stars
    updateRatingDisplay();
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.rating-input i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function updateRatingDisplay() {
    highlightStars(selectedRating);
}

// ===== Load References =====
async function loadReferences() {
    const container = document.getElementById('references-list');
    
    try {
        const response = await fetch('tables/references?limit=100');
        const result = await response.json();
        
        if (result.data && result.data.length > 0) {
            container.innerHTML = '';
            result.data.forEach(reference => {
                container.appendChild(createReferenceCard(reference));
            });
        } else {
            container.innerHTML = '<div class="loading">등록된 레퍼런스가 없습니다.</div>';
        }
    } catch (error) {
        console.error('Error loading references:', error);
        container.innerHTML = '<div class="loading">레퍼런스를 불러오는 중 오류가 발생했습니다.</div>';
    }
}

function createReferenceCard(reference) {
    const card = document.createElement('div');
    card.className = 'reference-card';
    card.innerHTML = `
        <div class="reference-header">
            <h3>${reference.title}</h3>
            <span class="reference-category">${reference.category}</span>
        </div>
        <div class="reference-org">${reference.organization}</div>
        <div class="reference-period">
            <i class="fas fa-calendar-alt"></i>
            ${reference.period}
        </div>
        <div class="reference-desc">${reference.description}</div>
        <div class="reference-participants">
            <i class="fas fa-users"></i>
            ${reference.participants}명 교육
        </div>
    `;
    return card;
}

// ===== Load Reviews =====
async function loadReviews() {
    const container = document.getElementById('reviews-list');
    
    try {
        const response = await fetch('tables/reviews?limit=100&sort=-created_at');
        const result = await response.json();
        
        if (result.data && result.data.length > 0) {
            container.innerHTML = '';
            result.data.forEach(review => {
                container.appendChild(createReviewCard(review));
            });
        } else {
            container.innerHTML = '<div class="loading">등록된 리뷰가 없습니다.</div>';
        }
    } catch (error) {
        console.error('Error loading reviews:', error);
        container.innerHTML = '<div class="loading">리뷰를 불러오는 중 오류가 발생했습니다.</div>';
    }
}

function createReviewCard(review) {
    const card = document.createElement('div');
    card.className = 'review-card';
    
    // Create rating stars
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < review.rating) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    
    card.innerHTML = `
        <div class="review-header">
            <div class="review-author">
                <h4>${review.name}</h4>
                <div class="review-company">${review.company}</div>
            </div>
            <div class="review-rating">${starsHTML}</div>
        </div>
        <div class="review-course">${review.course}</div>
        <div class="review-content">"${review.content}"</div>
    `;
    return card;
}

// ===== Forms Initialization =====
function initForms() {
    const contactForm = document.getElementById('contact-form');
    const reviewForm = document.getElementById('review-form');

    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }

    if (reviewForm) {
        reviewForm.addEventListener('submit', handleReviewSubmit);
    }
}

// ===== Handle Contact Form Submission =====
async function handleContactSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('contact-name').value.trim(),
        email: document.getElementById('contact-email').value.trim(),
        phone: document.getElementById('contact-phone').value.trim(),
        subject: document.getElementById('contact-subject').value.trim(),
        message: document.getElementById('contact-message').value.trim(),
        status: '접수됨'
    };

    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
        showToast('모든 필드를 입력해주세요.', 'error');
        return;
    }

    try {
        const response = await fetch('tables/inquiries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showToast('문의가 성공적으로 전송되었습니다!', 'success');
            e.target.reset();
        } else {
            throw new Error('Failed to submit inquiry');
        }
    } catch (error) {
        console.error('Error submitting inquiry:', error);
        showToast('문의 전송 중 오류가 발생했습니다.', 'error');
    }
}

// ===== Handle Review Form Submission =====
async function handleReviewSubmit(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('review-name').value.trim(),
        company: document.getElementById('review-company').value.trim(),
        course: document.getElementById('review-course').value.trim(),
        rating: parseInt(document.getElementById('review-rating').value),
        content: document.getElementById('review-content').value.trim()
    };

    // Validation
    if (!formData.name || !formData.company || !formData.course || !formData.content) {
        showToast('모든 필드를 입력해주세요.', 'error');
        return;
    }

    if (formData.rating < 1 || formData.rating > 5) {
        showToast('평점을 선택해주세요.', 'error');
        return;
    }

    try {
        const response = await fetch('tables/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.ok) {
            showToast('리뷰가 성공적으로 등록되었습니다!', 'success');
            e.target.reset();
            selectedRating = 5;
            updateRatingDisplay();
            
            // Reload reviews
            setTimeout(() => {
                loadReviews();
            }, 1000);
        } else {
            throw new Error('Failed to submit review');
        }
    } catch (error) {
        console.error('Error submitting review:', error);
        showToast('리뷰 등록 중 오류가 발생했습니다.', 'error');
    }
}

// ===== Toast Notification =====
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ===== Animation on Scroll =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
window.addEventListener('load', () => {
    const animateElements = document.querySelectorAll('.reference-card, .review-card, .profile-content');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});