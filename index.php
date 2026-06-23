<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vellore Travels — Tour & Travel Guide of Fort City Vellore — Vellore Travels</title>
  <meta name="description" content="Explore Vellore with our comprehensive city guide. Discover top tourist attractions, historical landmarks, hotels, local business listings, and transit options." />
  <link rel="stylesheet" href="css.css?v=20">
  <script src="js.js?v=20" defer></script>
  
</head>
<body>
  <?php include 'includes/menu.php'; ?>

  <!-- Banner Slideshow -->
  <div class="slider-container">
    <div class="slider-wrapper">
      <div class="slide active">
        <img src="p_0001.jpg" alt="Vellore Fort">
      </div>
      <div class="slide">
        <img src="p_0002.jpg" alt="Sripuram Golden Temple">
      </div>
      <div class="slide">
        <img src="p_0003.jpg" alt="Yelagiri Hills Scenic View">
      </div>
    </div>
    <!-- Welcome Text Overlay -->
    <div class="slider-text-overlay">
      <h1>Welcome to Vellore</h1>
      <p>The Historical Fort City of Tamil Nadu</p>
    </div>
    <!-- Arrow Controls -->
    <button class="slider-btn prev" onclick="moveSlide(-1)">❮</button>
    <button class="slider-btn next" onclick="moveSlide(1)">❯</button>
    <!-- Dot Indicators -->
    <div class="slider-dots">
      <span class="dot active" onclick="setSlide(0)"></span>
      <span class="dot" onclick="setSlide(1)"></span>
      <span class="dot" onclick="setSlide(2)"></span>
    </div>
    <!-- Curved wave shadow bottom -->
    <div class="slider-shadow-wave"></div>
  </div>

  <!-- Directory Blocks -->
  <div class="directory-blocks">
    <div class="dir-block reveal">
      <div class="dir-icon">🏖️</div>
      <div class="dir-info">
        <h3>Places to Visit</h3>
        <p>Explore the magnificent 16th-century Vellore Fort, Sripuram Golden Temple, scenic Yelagiri Hills, and other historical landmarks.</p>
        <a href="tourist-places.php" class="btn-red">View Places</a>
      </div>
    </div>

    <div class="dir-block reveal">
      <div class="dir-icon">💼</div>
      <div class="dir-info">
        <h3>Business Directory</h3>
        <p>Access essential local business listings in Vellore, including premium hotels, residency stays, bank branches, and ATM centres.</p>
        <a href="business-directory.php" class="btn-red">View Directory</a>
      </div>
    </div>

    <div class="dir-block reveal">
      <div class="dir-icon">🚌</div>
      <div class="dir-info">
        <h3>Travel & Services</h3>
        <p>Find local transport details, including reliable cab services, taxi operators, and official tourism contacts to guide your journey.</p>
        <a href="vellore-taxiservice.php" class="btn-red">View Services</a>
      </div>
    </div>
  </div>

  <!-- Featured Attractions Preview Grid -->
  <div class="places-preview-section">
    <h2 class="section-title-centered reveal">Featured Attractions in Vellore</h2>
    <div class="places-preview-grid">
      <!-- Card 1: Vellore Fort -->
      <div class="preview-card reveal" onclick="window.location.href='vellore-fort.php'">
        <img src="images/new_vellore_fort.png" alt="Vellore Fort">
        <div class="preview-card-body">
          <h3>Vellore Fort</h3>
          <p>A grand 16th-century granite fortress. Famous for its massive ramparts, wide water moat, and the historic Jalakandeswarar Temple.</p>
        </div>
      </div>
      <!-- Card 2: Golden Temple -->
      <div class="preview-card reveal" onclick="window.location.href='golden-temple.php'">
        <img src="images/new_golden_temple.png" alt="Sripuram Golden Temple">
        <div class="preview-card-body">
          <h3>Sripuram Golden Temple</h3>
          <p>A spiritual oasis and architectural marvel coated in pure gold leaf, positioned in a lush star-shaped landscape pathway.</p>
        </div>
      </div>
      <!-- Card 3: Jalakandeswarar Temple -->
      <div class="preview-card reveal" onclick="window.location.href='jalakandeswarar-temple.php'">
        <img src="images/new_jalakandeswarar.png" alt="Jalakandeswarar Temple">
        <div class="preview-card-body">
          <h3>Jalakandeswarar Temple</h3>
          <p>An exquisite example of Dravidian architecture famous for its detailed stone carvings inside the Vellore Fort.</p>
        </div>
      </div>
    </div>
    <div class="centered-btn-wrapper reveal">
      <a href="tourist-places.php" class="btn-red">View All Places</a>
    </div>
  </div>

  <!-- Location Map -->
  <div class="map-section">
    <h2 class="section-title-centered reveal">Vellore Location Map</h2>
    <p class="map-subtitle reveal">Locate the historic Vellore district on the map below. Easily find transportation hubs, routes, and nearby sites.</p>
    <div class="map-iframe-container reveal">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124408.83543315993!2d79.05586616010091!3d12.915438841444102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68e53%3A0xf5c3d7b0312513f5!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1717580000000!5m2!1sen!2sin"
        width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>

  <!-- Redesigned Red Footer -->
  <footer class="red-footer">
    <div class="footer-zigzag"></div>
    <div class="footer-grid-new">
      <div class="footer-col-new">
        <h3>About Vellore</h3>
        <p>Vellore is an ancient and historically rich urban hub in Tamil Nadu, India, situated on the banks of the Palar River. Celebrated as the "Fort City," it is famous for its magnificent 16th-century fort, Sripuram Golden Temple, and world-renowned medical and educational institutions.</p>
      </div>

            <div class="footer-col-new">
        <h3>Quick Links</h3>
        <ul class="footer-links-new">
          <li><a href="index.php">Home</a></li>
          <li><a href="tourist-places.php">Places to Visit</a></li>
          <li><a href="business-directory.php">Business Directory</a></li>
          <li><a href="contactus.php">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col-new">
        <h3>Follow Us</h3>
        <div class="footer-socials-new">
          <a href="#" class="social-circle fb">F</a>
          <a href="#" class="social-circle ig">I</a>
          <a href="#" class="social-circle yt">Y</a>
          <a href="#" class="social-circle tw">X</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom-new">
      <p>Copyright &copy; 2026 | Powered by JB Soft System</p>
    </div>
  </footer>
</body>
</html>
