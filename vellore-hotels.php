<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vellore travels - Hotels to Stay, Vellore Hotels, Restaurants in vellore, Star Hotels</title>
  <link rel="stylesheet" href="css.css?v=15">
  <script src="js.js" defer></script>
  
</head>
<body id="hotels">
  <div class="wrap">
    <!-- Header -->
    <?php include 'includes/header.php'; ?>

    <!-- Navigation Menu (Colleges and Online Booking removed) -->
    <?php include 'includes/menu.php'; ?>

    <!-- Banner Slideshow -->
    

    <!-- Main Grid -->
    <div class="main-grid">
      
      <!-- Left Sidebar (Tourist Places) -->
      
<?php include 'includes/left.php'; ?>


      <!-- Main Content Area -->
      <main class="content-area">
        <div class="contents">
          <h1>Hotels <span>to Stay </span></h1>
<p>&nbsp;</p>

      <div class="places-preview-grid" style="margin-top: 2rem;">
        <!-- Card 1: Fortune Park -->
        <div class="preview-card" style="cursor: pointer;" onclick="openHotelModal('fortune')">
          <img src="fortune-park.png" alt="Fortune Park Vellore">
          <div class="preview-card-body" style="display: flex; flex-direction: column; gap: 8px;">
            <h3 style="margin-bottom: 0.2rem;">Fortune Park</h3>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📍 Address:</strong> No 31/32 A, Auxilium College Roundtana, Gandhi Nagar, 7th East Main Rd, Vellore, TN 632006
            </p>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📞 Phone:</strong> <a href="tel:+914162207777" style="color: var(--accent); font-weight: bold; text-decoration: none;">+91 416 220 7777</a>
            </p>
          </div>
        </div>

        <!-- Card 2: Hotel Benzz Park -->
        <div class="preview-card" style="cursor: pointer;" onclick="openHotelModal('benzz')">
          <img src="benzz-park.png" alt="Hotel Benzz Park Vellore">
          <div class="preview-card-body" style="display: flex; flex-direction: column; gap: 8px;">
            <h3 style="margin-bottom: 0.2rem;">Hotel Benzz Park</h3>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📍 Address:</strong> No. 4, Katpadi Road, Dharmaraja Koil Street, Thottapalayam, Vellore, TN 632004
            </p>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📞 Phone:</strong> <a href="tel:+914166633555" style="color: var(--accent); font-weight: bold; text-decoration: none;">+91 416 663 3555</a>
            </p>
          </div>
        </div>

        <!-- Card 3: Darling Residency -->
        <div class="preview-card" style="cursor: pointer;" onclick="openHotelModal('darling')">
          <img src="darling-residency.png" alt="Darling Residency Vellore">
          <div class="preview-card-body" style="display: flex; flex-direction: column; gap: 8px;">
            <h3 style="margin-bottom: 0.2rem;">Darling Residency</h3>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📍 Address:</strong> 11/8, Anna Salai, Kosapet, Krishna Nagar, Vellore, TN 632001
            </p>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📞 Phone:</strong> <a href="tel:+914162213001" style="color: var(--accent); font-weight: bold; text-decoration: none;">+91 416 221 3001</a>
            </p>
          </div>
        </div>

        <!-- Card 4: Khanna Fiesta -->
        <div class="preview-card" style="cursor: pointer;" onclick="openHotelModal('khanna')">
          <img src="khanna-fiesta.png" alt="Khanna Fiesta Vellore">
          <div class="preview-card-body" style="display: flex; flex-direction: column; gap: 8px;">
            <h3 style="margin-bottom: 0.2rem;">Khanna Fiesta</h3>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📍 Address:</strong> No. 28, Anna Salai, Opposite Harish Food Zone, Kosapet, Vellore, TN 632001
            </p>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📞 Phone:</strong> <a href="tel:+918220079797" style="color: var(--accent); font-weight: bold; text-decoration: none;">+91 82200 79797</a>
            </p>
          </div>
        </div>

        <!-- Card 5: Bloft Hotel -->
        <div class="preview-card" style="cursor: pointer;" onclick="openHotelModal('bloft')">
          <img src="bloft-hotel.png" alt="Bloft Hotel Vellore">
          <div class="preview-card-body" style="display: flex; flex-direction: column; gap: 8px;">
            <h3 style="margin-bottom: 0.2rem;">Bloft Hotel</h3>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📍 Address:</strong> Phase 1, Sathuvachari, Katpadi area, Vellore, TN 632009
            </p>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📞 Phone:</strong> <a href="tel:+914162220001" style="color: var(--accent); font-weight: bold; text-decoration: none;">+91 416 222 0001</a>
            </p>
          </div>
        </div>

        <!-- Card 6: Vantara Suites -->
        <div class="preview-card" style="cursor: pointer;" onclick="openHotelModal('vantara')">
          <img src="vantara-suites.png" alt="Vantara Suites Vellore">
          <div class="preview-card-body" style="display: flex; flex-direction: column; gap: 8px;">
            <h3 style="margin-bottom: 0.2rem;">Vantara Suites</h3>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📍 Address:</strong> Jain Tower, Katpadi to Vellore Road, Opposite Darling Electronics, Katpadi, Vellore, TN 632006
            </p>
            <p style="margin: 0; font-size: 0.88rem; color: var(--gray-700); line-height: 1.5;">
              <strong>📞 Phone:</strong> <a href="tel:+919150253066" style="color: var(--accent); font-weight: bold; text-decoration: none;">+91 91502 53066 / 0416-2299999</a>
            </p>
          </div>
        </div>
      </div>
        </div>
      </main>

      <!-- Right Sidebar (Enquiry & Testimonial) -->
      
<?php include 'includes/right.php'; ?>

</div>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>
  </div>
</body>
</html>