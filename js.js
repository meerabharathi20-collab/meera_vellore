// JS Utilities for Vellore Travels Responsive HTML Site

// 1. Mobile Hamburger Menu Toggle
function toggleMobileMenu() {
  const nav = document.getElementById("navContainer");
  if (nav) {
    nav.classList.toggle("open");
  }
}

// 2. Validate Quick Enquiry Form (Right Sidebar)
function validateEnquiry() {
  const name = document.getElementById("eq_name").value.trim();
  const mobile = document.getElementById("eq_mobile").value.trim();
  const email = document.getElementById("eq_email").value.trim();
  const message = document.getElementById("eq_message").value.trim();

  if (name.length < 2) {
    alert("Please enter a valid Name (at least 2 characters).");
    return false;
  }

  // Validate digits only for mobile
  const digitRegex = /^[0-9]+$/;
  if (!digitRegex.test(mobile) || mobile.length < 10) {
    alert("Please enter a valid 10-digit Mobile Number.");
    return false;
  }

  // Email regex check
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

// 3. Validate Contact Form (Contact Us Page)
function ValidateContactForm() {
  const name = document.getElementById("FullName").value.trim();
  const phone = document.getElementById("PhoneNo").value.trim();
  const email = document.querySelector("input[name='Email']").value.trim();
  const comments = document.querySelector("textarea[name='Comments']").value.trim();

  // Validate Name (no numbers or special characters)
  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!nameRegex.test(name) || name.length < 2) {
    alert("Please enter a valid Name without numbers and special characters.");
    return false;
  }

  // Validate Phone
  const digitRegex = /^[0-9]+$/;
  if (!digitRegex.test(phone) || phone.length < 8) {
    alert("Please enter a valid Phone Number.");
    return false;
  }

  // Validate Email
  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email Id.");
    return false;
  }

  if (comments.length < 5) {
    alert("Please enter your message (at least 5 characters).");
    return false;
  }

  // Captcha validation
  if (typeof grecaptcha !== 'undefined') {
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length === 0) {
      alert("Please complete the Captcha check.");
      return false;
    }
  }

  return true;
}

// 4. Validate Online Booking Form (Online Booking Page)
function OnlineCheck() {
  const form = document.OnlineBookingForm;
  
  if (!form.startdate.value) {
    alert("Please select the Required on Date");
    form.startdate.focus();
    return false;
  }

  if (!form.PersonName.value.trim()) {
    alert("Please Enter the Name");
    form.PersonName.focus();
    return false;
  }

  if (!form.Mobile.value.trim()) {
    alert("Please Enter the Mobile No.");
    form.Mobile.focus();
    return false;
  }

  const email = form.Email.value.trim();
  if (!email) {
    alert("Please Enter the Email Id.");
    form.Email.focus();
    return false;
  }

  const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid Email Id.");
    form.Email.focus();
    return false;
  }

  if (!form.Address.value.trim()) {
    alert("Please Enter the Address");
    form.Address.focus();
    return false;
  }

  if (!form.PlaceToGo.value.trim()) {
    alert("Please Enter the Place Name");
    form.PlaceToGo.focus();
    return false;
  }

  if (!form.LandMark.value.trim()) {
    alert("Please Enter the Landmark");
    form.LandMark.focus();
    return false;
  }

  const vehicles = form.NoOfVehicles.value.trim();
  if (!vehicles || isNaN(vehicles)) {
    alert("Please enter the number of vehicles required (numeric values only).");
    form.NoOfVehicles.focus();
    return false;
  }

  return true;
}

// Slider Functionality
let slideIndex = 0;
let slideTimeout;

function showDivs() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (!slides || slides.length === 0) return;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  clearTimeout(slideTimeout);
  slideTimeout = setTimeout(showDivs, 5000); // Change image every 5 seconds
}

// Start Slider on DOM Load
document.addEventListener("DOMContentLoaded", () => {
  showDivs();
  
  // Connect Mobile Menu Toggle
  const toggleBtn = document.getElementById("menuToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleMobileMenu);
  }
});
