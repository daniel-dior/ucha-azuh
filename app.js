const menuToggle = document.querySelector('.menu-toggle');
const mobileOverlay = document.querySelector('.mobile-nav-overlay');
const mobileClose = document.querySelector('.mobile-close');

// About Section Read More Toggle
function toggleAboutContent() {
    const expandedContent = document.getElementById('aboutExpanded');
    const readMoreBtn = document.getElementById('readMoreBtn');
    
    if (expandedContent.style.display === 'none') {
        expandedContent.style.display = 'block';
        readMoreBtn.textContent = 'Read Less';
    } else {
        expandedContent.style.display = 'none';
        readMoreBtn.textContent = 'Read More';
    }
}

// Sticky Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Contact Modal Functions
function openContactModal() {
    const modal = document.getElementById('contactModal');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('contactModal');
        if (modal.getAttribute('aria-hidden') === 'false') {
            closeContactModal();
        }
    }
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (document.body.classList.contains('menu-open')) {
                document.body.classList.remove('menu-open');
                menuToggle.classList.remove('is-active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

if (menuToggle && mobileOverlay) {
    menuToggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('menu-open');
        menuToggle.classList.toggle('is-active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
    });

    mobileOverlay.addEventListener('click', (event) => {
        if (event.target === mobileOverlay) {
            document.body.classList.remove('menu-open');
            menuToggle.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    if (mobileClose) {
        mobileClose.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
            menuToggle.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    }
}
