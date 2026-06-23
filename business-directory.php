<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Business Directory — Vellore Travels</title>
  <meta name="description" content="Explore Vellore with our comprehensive city guide. Discover top tourist attractions, historical landmarks, hotels, local business listings, and transit options." />
  <link rel="stylesheet" href="css.css?v=20">
  <script src="js.js?v=20" defer></script>
  
</head>
<body>
  <?php include 'includes/menu.php'; ?>

    <section class="page active" id="page-general">
      <div class="page-hero">
        <div class="details-breadcrumbs">
          <a href="index.php" class="breadcrumb-link" style="color: var(--gray-700);">Home</a> <span style="color: var(--accent); font-weight: 600;">&gt;</span>
          <span class="breadcrumb-current" style="color: var(--accent); font-weight: 600;">Business Directory</span>
        </div>
        <h1>Business Directory</h1>
      </div>
      <div class="section-container">
        <div class="directory-blocks" style="padding: 0;">
          <!-- Card 1: Hotels to Stay -->
          <div class="dir-block reveal visible" style="opacity: 1; transform: none;">
            <div class="dir-icon">🏨</div>
            <div class="dir-info">
              <h3>Hotels to Stay</h3>
              <p>Discover high-quality hotels, cozy residency stays, and luxury suites in central Vellore.</p>
              <a href="vellore-hotels.php" class="btn-red">View Hotels</a>
            </div>
          </div>
          
          <!-- Card 2: ATM Centres -->
          <div class="dir-block reveal visible" style="opacity: 1; transform: none;">
            <div class="dir-icon">🏪</div>
            <div class="dir-info">
              <h3>ATM Centres</h3>
              <p>Find 24/7 ATM booths from major nationalized and private banks across Vellore city.</p>
              <a href="vellore-atm.php" class="btn-red">View ATMs</a>
            </div>
          </div>

          <!-- Card 3: Banks -->
          <div class="dir-block reveal visible" style="opacity: 1; transform: none;">
            <div class="dir-icon">🏦</div>
            <div class="dir-info">
              <h3>Banks</h3>
              <p>Locate bank branches for immediate financial assistance, wire transfers, and currency exchanges.</p>
              <a href="vellore-banks.php" class="btn-red">View Banks</a>
            </div>
          </div>

          <!-- Card 4: Taxi Services -->
          <div class="dir-block reveal visible" style="opacity: 1; transform: none;">
            <div class="dir-icon">🚕</div>
            <div class="dir-info">
              <h3>Taxi Services</h3>
              <p>Book local cab services, taxi operators, and outstation rentals for safe and comfortable travel.</p>
              <a href="vellore-taxiservice.php" class="btn-red">View Taxis</a>
            </div>
          </div>

          <!-- Card 5: Tour Operators -->
          <div class="dir-block reveal visible" style="opacity: 1; transform: none;">
            <div class="dir-icon">🚌</div>
            <div class="dir-info">
              <h3>Tour Operators</h3>
              <p>Hire registered tour agencies, vacation package planners, and local sightseeing guides.</p>
              <a href="tour-operator.php" class="btn-red">View Operators</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    
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
