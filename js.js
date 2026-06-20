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

// ── Hotel Details Modal Logic ──
const HOTEL_DATA = {
  fortune: {
    name: "Fortune Park",
    image: "fortune-park.png",
    address: "No 31/32 A, Auxilium College Roundtana, Gandhi Nagar, 7th East Main Rd, Vellore, TN 632006",
    phone: "+91 416 220 7777",
    rooms: "70 Luxury Rooms & Suites",
    beds: "King Beds, Double Beds, and Deluxe Twin Configurations",
    facilities: ["Free Wi-Fi", "Swimming Pool", "Fitness Center", "In-house Multi-cuisine Restaurant", "Cocktail Lounge / Bar", "24-Hour Room Service", "Free Valet Parking", "Banquet Hall"],
    map: "https://maps.google.com/?q=Fortune+Park+Vellore"
  },
  benzz: {
    name: "Hotel Benzz Park",
    image: "benzz-park.png",
    address: "No. 4, Katpadi Road, Dharmaraja Koil Street, Thottapalayam, Vellore, TN 632004",
    phone: "+91 416 663 3555",
    rooms: "60 Luxury Executive Rooms",
    beds: "Luxury King Bed, Premium Twin Beds, and Royal Suites",
    facilities: ["Free High-speed Wi-Fi", "Multi-cuisine Restaurant", "Executive Bar / Lounge", "Banquet & Conference Halls", "Complimentary Breakfast Buffet", "Valet Parking", "Fitness Center"],
    map: "https://maps.google.com/?q=Hotel+Benzz+Park+Vellore"
  },
  darling: {
    name: "Darling Residency",
    image: "darling-residency.png",
    address: "11/8, Anna Salai, Kosapet, Krishna Nagar, Vellore, TN 632001",
    phone: "+91 416 221 3001",
    rooms: "80 Premium Executive Rooms",
    beds: "King Residency Beds, Standard Double, and Executive Single Beds",
    facilities: ["A/C Multi-cuisine Restaurant", "Chit-Chat Coffee Shop", "Permit Bar", "Conferencing & Event Venues", "Wi-Fi Connectivity", "Free Parking", "Travel Desk Assistance"],
    map: "https://maps.google.com/?q=Darling+Residency+Vellore"
  },
  khanna: {
    name: "Khanna Fiesta",
    image: "khanna-fiesta.png",
    address: "No. 28, Anna Salai, Opposite Harish Food Zone, Kosapet, Vellore, TN 632001",
    phone: "+91 82200 79797",
    rooms: "50 Club & Boutique Rooms",
    beds: "Club Rooms with King Bed, Executive Twin Bed, and Fiesta Suites",
    facilities: ["L'attitude Multi-cuisine Restaurant", "Fiesta Coffee Shop", "Modern Gymnasium", "Free High-speed Wi-Fi", "Business Center & Meeting Rooms", "24-Hour Reception", "Valet Parking"],
    map: "https://maps.google.com/?q=Khanna+Fiesta+Vellore"
  },
  bloft: {
    name: "Bloft Hotel",
    image: "bloft-hotel.png",
    address: "Phase 1, Sathuvachari, Katpadi area, Vellore, TN 632009",
    phone: "+91 416 222 0001",
    rooms: "30 Modern Designer Rooms",
    beds: "Modern King Bed, Deluxe Queen Bed, and Couple Suites",
    facilities: ["Free Wi-Fi", "Rooftop Restaurant & Cafe", "Modern Smart TV & Room Controls", "Complimentary Breakfast", "Free Parking", "24-Hour Room Service & Desk"],
    map: "https://maps.google.com/?q=Bloft+Hotel+Vellore"
  },
  vantara: {
    name: "Vantara Suites",
    image: "vantara-suites.png",
    address: "Jain Tower, Katpadi to Vellore Road, Opposite Darling Electronics, Katpadi, Vellore, TN 632006",
    phone: "+91 91502 53066 / 0416-2299999",
    rooms: "19 Luxury Suites",
    beds: "65-sqm King Suite, Deluxe Double Suites, and Family Twin Suites",
    facilities: ["Spacious Living Area", "Kitchenette (in select rooms)", "Free High-speed Wi-Fi", "Terrace Garden Lounge", "Shared Kitchen Facility", "24-Hour Desk & Security", "Airport Shuttle Service"],
    map: "https://maps.google.com/?q=Vantara+Suites+Vellore"
  }
};

function openHotelModal(key) {
  const data = HOTEL_DATA[key];
  if (!data) return;

  // Create overlay if not present
  let overlay = document.getElementById('hotelModalOverlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'hotelModalOverlay';
    overlay.className = 'hotel-modal-overlay';
    overlay.innerHTML = `
      <div class="hotel-modal-container">
        <div class="hotel-modal-header">
          <h2 id="hotelModalName"></h2>
          <button class="hotel-modal-close" onclick="closeHotelModal()">&times;</button>
        </div>
        <div class="hotel-modal-body">
          <div class="hotel-modal-img-wrap">
            <img id="hotelModalImg" src="" alt="">
          </div>
          <div class="hotel-modal-details-grid">
            <div class="hotel-modal-info-card">
              <h4>📍 Address</h4>
              <p id="hotelModalAddress" style="margin-bottom: 8px;"></p>
              <a id="hotelModalMap" href="" target="_blank" class="card-btn" style="display: inline-block; padding: 4px 10px; font-size: 0.8rem; border-radius: 4px;">Maps</a>
            </div>
            <div class="hotel-modal-info-card">
              <h4>📞 Phone Number</h4>
              <p id="hotelModalPhone"></p>
            </div>
            <div class="hotel-modal-info-card">
              <h4>🏨 Room Inventory</h4>
              <p id="hotelModalRooms"></p>
            </div>
            <div class="hotel-modal-info-card">
              <h4>🛏️ Bed Configurations</h4>
              <p id="hotelModalBeds"></p>
            </div>
            <div class="hotel-modal-info-card" style="border-left-color: var(--secondary); background: #fdfaf2;">
              <h4 style="color: var(--secondary);">✨ Facilities & Amenities</h4>
              <div class="hotel-modal-tags-container" id="hotelModalFacilities"></div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    // Close when clicking outside container
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeHotelModal();
    });
  }

  // Populate data
  document.getElementById('hotelModalName').innerText = data.name;
  document.getElementById('hotelModalImg').src = data.image;
  document.getElementById('hotelModalImg').alt = data.name;
  document.getElementById('hotelModalAddress').innerText = data.address;
  document.getElementById('hotelModalMap').href = data.map;
  document.getElementById('hotelModalPhone').innerText = data.phone;
  document.getElementById('hotelModalRooms').innerText = data.rooms;
  document.getElementById('hotelModalBeds').innerText = data.beds;

  const facilitiesContainer = document.getElementById('hotelModalFacilities');
  facilitiesContainer.innerHTML = '';
  data.facilities.forEach(fac => {
    const span = document.createElement('span');
    span.className = 'hotel-modal-tag';
    span.innerText = fac;
    facilitiesContainer.appendChild(span);
  });

  // Open modal
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

function closeHotelModal() {
  const overlay = document.getElementById('hotelModalOverlay');
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = ''; // Restore background scroll
  }
}
