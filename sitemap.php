<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vellore travels - Sitemap</title>
  <link rel="stylesheet" href="css.css?v=15">
  <script src="js.js" defer></script>
  
</head>
<body id="index">
  <div class="wrap">
    <!-- Header -->
    <?php include 'includes/header.php'; ?>

    <!-- Navigation Menu (Colleges and Online Booking removed) -->
    <?php include 'includes/menu.php'; ?>


  

    <!-- Main Grid -->
    <div class="main-grid">
      
      <!-- Left Sidebar (Tourist Places) -->
      
<?php include 'includes/left.php'; ?>


      <!-- Main Content Area -->
      <main class="content-area">
        <div class="contents">
          <h1> Sitemap <span> </span></h1><br />

        <ul class="sitemap">
          <li><a href="index.php">Home</a></li>
          <li><a href="tourist-places.php">Tourist Places</a>
            <ul>
              <li><a href="vellore-fort.php">Vellore Fort </a></li>
              <li><a href="govt-museum.php">Government Museum </a></li>
              <li><a href="observatory.php">Kavalur Observatory </a></li>
              <li><a href="yelagiri.php"> Yelagiri </a></li>
              <li><a href="amrithi-forest.php"> Amirthi Forest</a></li>
              <li><a href="jalagamparai-falls.php">Jalagamparai Falls</a></li>
            </ul>
          </li>
          <li><a href="vellore-hotels.php" >Hotels to Stay</a></li>
          <li><a href="vellore-atm.php" >ATM</a></li>
          <li><a href="vellore-banks.php">Banks</a></li>
          <li><a href="vellore-taxiservice.php">Taxi</a></li>
          <li><a href="tour-operator.php">Tour Operators</a></li>
          <li><a href="contactus.php">Contact Us</a></li>
        </ul>
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