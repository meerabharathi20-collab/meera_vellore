document.addEventListener("DOMContentLoaded", () => {
  // --- 1. Navigation Floating Header Scroll Handler ---
  const header = document.querySelector(".nav-floating");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // --- 2. Mobile Menu Toggling ---
  const toggleBtn = document.querySelector(".nav-toggle-btn");
  const overlay = document.querySelector(".mobile-nav-overlay");
  
  if (toggleBtn && overlay) {
    toggleBtn.addEventListener("click", () => {
      overlay.classList.toggle("open");
      
      // Animate hamburger lines
      const spans = toggleBtn.querySelectorAll("span");
      if (overlay.classList.contains("open")) {
        spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
        spans[1].style.opacity = "0";
        spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)";
      } else {
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      }
    });

    // Close overlay on link click
    overlay.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        overlay.classList.remove("open");
        const spans = toggleBtn.querySelectorAll("span");
        spans[0].style.transform = "none";
        spans[1].style.opacity = "1";
        spans[2].style.transform = "none";
      });
    });
  }

  // --- 3. Interactive Mouse-Tracking Background Blobs ---
  const blobs = document.querySelectorAll(".blob");
  if (blobs.length > 0) {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      blobs.forEach((blob, index) => {
        // Different speed factors for parallax layer depth
        const speed = (index + 1) * 30;
        const translateX = mouseX * speed;
        const translateY = mouseY * speed;
        
        // Combine dynamic hover displacement with base floating animations
        blob.style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    });
  }

  // --- 4. Interactive 3D Card Tilt on Hover ---
  const cards = document.querySelectorAll(".destination-card-glass");
  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const cardRect = card.getBoundingClientRect();
      const cardWidth = cardRect.width;
      const cardHeight = cardRect.height;
      
      // Get mouse position relative to card center
      const mouseX = e.clientX - cardRect.left - cardWidth / 2;
      const mouseY = e.clientY - cardRect.top - cardHeight / 2;
      
      // Limit maximum rotation angle to 15 degrees
      const maxTilt = 12;
      const tiltX = -(mouseY / (cardHeight / 2)) * maxTilt;
      const tiltY = (mouseX / (cardWidth / 2)) * maxTilt;
      
      // Apply transforms
      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-8px)`;
      
      // Dynamic internal content lighting adjustment
      const details = card.querySelector(".card-details-info");
      if (details) {
        details.style.transform = `translateZ(30px) translateY(${-tiltX * 0.4}px) translateX(${-tiltY * 0.4}px)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)";
      const details = card.querySelector(".card-details-info");
      if (details) {
        details.style.transform = "translateZ(30px) translateY(0) translateX(0)";
      }
    });
  });

  // --- 5. Interactive 3D Hero Shape Grab & Tilt ---
  const heroContainer = document.querySelector(".element-3d-container");
  if (heroContainer) {
    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    // Direct mouse hover tilt (delight effect)
    heroContainer.parentElement.addEventListener("mousemove", (e) => {
      if (isDragging) return;
      
      const paneRect = heroContainer.parentElement.getBoundingClientRect();
      const paneWidth = paneRect.width;
      const paneHeight = paneRect.height;
      
      const mouseX = e.clientX - paneRect.left - paneWidth / 2;
      const mouseY = e.clientY - paneRect.top - paneHeight / 2;
      
      const maxTilt = 20;
      const rotateX = -(mouseY / (paneHeight / 2)) * maxTilt;
      const rotateY = (mouseX / (paneWidth / 2)) * maxTilt;
      
      heroContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.08)`;
    });

    heroContainer.parentElement.addEventListener("mouseleave", () => {
      if (isDragging) return;
      heroContainer.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });

    // Mouse drag manipulation (rotator)
    heroContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      heroContainer.style.transition = "none";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      currentRotationY += deltaX * 0.5;
      currentRotationX -= deltaY * 0.5;
      
      // Clamp vertical rotation
      currentRotationX = Math.max(-45, Math.min(45, currentRotationX));
      
      heroContainer.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg) scale(1.08)`;
      
      startX = e.clientX;
      startY = e.clientY;
    });

    document.addEventListener("mouseup", () => {
      if (!isDragging) return;
      isDragging = false;
      heroContainer.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
      // Reset after release
      currentRotationX = 0;
      currentRotationY = 0;
      heroContainer.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  }

  // --- 6. Form Field Interactive Micro-actions & Form Validation ---
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    const inputs = enquiryForm.querySelectorAll("input, textarea");
    
    // Check fields on blur
    inputs.forEach(input => {
      input.addEventListener("blur", () => {
        if (input.value.trim() !== "") {
          input.classList.add("has-value");
        } else {
          input.classList.remove("has-value");
        }
      });
    });

    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("eq_name").value.trim();
      const mobile = document.getElementById("eq_mobile").value.trim();
      const email = document.getElementById("eq_email").value.trim();
      const message = document.getElementById("eq_message").value.trim();

      if (name.length < 2) {
        alert("Please enter a valid Name (at least 2 characters).");
        return;
      }

      const digitRegex = /^[0-9]+$/;
      if (!digitRegex.test(mobile) || mobile.length < 10) {
        alert("Please enter a valid 10-digit Mobile Number.");
        return;
      }

      const emailRegex = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-Z0-9]{2,4}$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid Email ID.");
        return;
      }

      if (message.length < 5) {
        alert("Please enter a message (at least 5 characters).");
        return;
      }

      // Success animation trigger
      const submitBtn = enquiryForm.querySelector(".btn-form-submit");
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.style.background = "var(--neon-blue)";
      submitBtn.style.color = "var(--bg-space)";
      submitBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
        ENQUIRY SENT SUCCESSFULLY!
      `;

      setTimeout(() => {
        enquiryForm.reset();
        inputs.forEach(i => i.classList.remove("has-value"));
        submitBtn.disabled = false;
        submitBtn.style.background = "var(--gradient-sunset)";
        submitBtn.style.color = "var(--text-white)";
        submitBtn.innerHTML = originalText;
        alert("Thank you! Your enquiry has been received successfully.");
      }, 1500);
    });
  }
});
