<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap</title>
  <link rel="stylesheet" href="css.css?v=15">
  <script src="js.js" defer></script>
  
</head>
<body id="index">
  <div class="wrap">
    <!-- Header -->
    <?php include 'includes/header.php'; ?>

    <!-- Navigation Menu (Colleges and Online Booking removed) -->
    <?php include 'includes/menu.php'; ?>

    <!-- Banner Slideshow -->
    
    <div class="w3-content w3-display-container">
      <div class="w3-display-container mySlides">
        <img src="p_0001.jpg" alt="Vellore Fort" style="width:100%">
      </div>
      <div class="w3-display-container mySlides">
        <img src="p_0002.jpg" alt="Golden Temple" style="width:100%">
      </div>
      <div class="w3-display-container mySlides">
        <img src="p_0003.jpg" alt="Sightseeing" style="width:100%">
      </div>
    </div>
  

    <!-- Main Grid -->
    <div class="main-grid">
      
      <!-- Left Sidebar (Tourist Places) -->
      
<?php include 'includes/left.php'; ?>


      <!-- Main Content Area -->
      <main class="content-area">
        <div class="contents">
          <h1> Testimonials <span> </span></h1><br />
		<p><br />
<br />
<br />
</p>
<p style="text-align:center" > <strong>"Contents will be update soon."</strong></p>
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