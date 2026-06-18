// ═══════════════════════════════════════
//   VELLORE TRAVELS — JS CONTROLLER
// ═══════════════════════════════════════

/* ── Sticky Navbar Scroll Shadow ── */
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }
}, { passive: true });

/* ── Mobile Hamburger Menu Toggle ── */
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
          dropdown.classList.remove('open');
        });
      }
    });
  }

  // Mobile dropdown toggles on click
  document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    if (toggle) {
      toggle.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
          e.preventDefault(); // Stop direct link navigation on mobile
          const isOpen = dropdown.classList.toggle('open');
          // Close other open dropdowns
          document.querySelectorAll('.nav-dropdown').forEach(other => {
            if (other !== dropdown) other.classList.remove('open');
          });
        }
      });
    }
  });

  // Dynamic Navigation Link Active States
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";
  
  document.querySelectorAll('.nav-link').forEach(link => {
    if (link.getAttribute('href') === page) {
      link.classList.add('active');
    }
  });
  
  // Highlight parent dropdown if child dropdown item is active
  document.querySelectorAll('.dropdown-menu a').forEach(subLink => {
    if (subLink.getAttribute('href') === page) {
      const parentDropdown = subLink.closest('.nav-dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });

  // Start Slider if present on page
  initSlider();

  // Scroll Reveal Initialization
  initScrollReveal();
});

/* ── Auto-playing Homepage Slider ── */
let currentSlide = 0;
let slideInterval = null;

function initSlider() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;
  
  showSlide(currentSlide);
  startSlideTimer();
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  if (slides.length === 0) return;

  if (index >= slides.length) currentSlide = 0;
  else if (index < 0) currentSlide = slides.length - 1;
  else currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function moveSlide(step) {
  showSlide(currentSlide + step);
  resetSlideTimer();
}

function setSlide(index) {
  showSlide(index);
  resetSlideTimer();
}

function startSlideTimer() {
  slideInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 6000);
}

function resetSlideTimer() {
  clearInterval(slideInterval);
  startSlideTimer();
}

/* ── Scroll Reveal ── */
function initScrollReveal() {
  if (typeof IntersectionObserver === 'undefined') return;
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}

/* ── Existing Form Validation Logic ── */

// 1. Validate Quick Enquiry Form (Right Sidebar)
function validateEnquiry() {
  const name = document.getElementById("eq_name").value.trim();
  const mobile = document.getElementById("eq_mobile").value.trim();
  const email = document.getElementById("eq_email").value.trim();
  const message = document.getElementById("eq_message").value.trim();

  if (name.length < 2) {
    alert("Please enter a valid Name (at least 2 characters).");
    return false;
  }

  const digitRegex = /^[0-9]+$/;
  if (!digitRegex.test(mobile) || mobile.length < 10) {
    alert("Please enter a valid 10-digit Mobile Number.");
    return false;
  }

  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email Id.");
    return false;
  }

  if (message.length < 5) {
    alert("Please enter a message (at least 5 characters).");
    return false;
  }

  return true;
}

// 2. Validate Contact Form (Contact Us Page)
function ValidateContactForm() {
  const name = document.getElementById("FullName").value.trim();
  const phone = document.getElementById("PhoneNo").value.trim();
  const email = document.getElementById("Email").value.trim();
  const comments = document.getElementById("Comments").value.trim();

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name) || name.length < 2) {
    alert("Please enter a valid Name without numbers and special characters.");
    return false;
  }

  const digitRegex = /^[0-9]+$/;
  if (!digitRegex.test(phone) || phone.length < 8) {
    alert("Please enter a valid Phone Number.");
    return false;
  }

  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email Id.");
    return false;
  }

  if (comments.length < 5) {
    alert("Please enter your message (at least 5 characters).");
    return false;
  }

  if (typeof grecaptcha !== 'undefined') {
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length === 0) {
      alert("Please complete the Captcha check.");
      return false;
    }
  }

  return true;
}
