<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>vellore travels - Contact Us, Yelagiri, Amrithi Forest, hotels in vellore, vellore hotel, atm in vellore, vellore atm centre, banks in vellore, vellore banks, colleges, college in vellore</title>
  <link rel="stylesheet" href="css.css?v=15">
  <script src="js.js" defer></script>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body id="contact">
  <div class="wrap">
    <!-- Header -->
    <?php include 'includes/header.php'; ?>

    <!-- Navigation Menu (Colleges and Online Booking removed) -->
    <?php include 'includes/menu.php'; ?>

    <!-- Banner Slideshow -->
    

    <!-- Main Grid -->
    <div class="main-grid two-cols-left">
      
      <!-- Left Sidebar (Tourist Places) -->
      
<?php include 'includes/left.php'; ?>


      <!-- Main Content Area -->
      <main class="content-area">
        <div class="contents">
          <h1>Contact <span>Us</span></h1>


      <form name="cntctus" method="post" action="mail.php" onsubmit="return ValidateContactForm();" class="contact-form-card">
        <div class="mandatory-notice">* Mandatory Fields</div>
        <div class="form-group">
          <label for="FullName"><span class="red">*</span> Name</label>
          <input type="text" id="FullName" name="FullName" required class="form-control">
        </div>
        <div class="form-group">
          <label for="Address">Address</label>
          <textarea id="Address" name="Address" rows="3" required class="form-control"></textarea>
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
          <div class="form-group">
            <label for="City">City</label>
            <input type="text" id="City" name="City" required class="form-control">
          </div>
          <div class="form-group">
            <label for="Zip_Code">Pin/Zip Code</label>
            <input type="text" id="Zip_Code" name="Zip_Code" required class="form-control">
          </div>
        </div>
        <div class="form-row" style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
          <div class="form-group">
            <label for="PhoneNo"><span class="red">*</span> Phone No</label>
            <input type="text" id="PhoneNo" name="PhoneNo" required class="form-control">
          </div>
          <div class="form-group">
            <label for="Email"><span class="red">*</span> Email</label>
            <input type="email" id="Email" name="Email" required class="form-control">
          </div>
        </div>
        <div class="form-group">
          <label for="Comments"><span class="red">*</span> Comments / Message</label>
          <textarea id="Comments" name="Comments" rows="5" required class="form-control"></textarea>
        </div>
        <div class="g-recaptcha" data-sitekey="6LdZyZwUAAAAAJ5mYjNVs5ONEJIAylQxEmkmeL79"></div>
        <div class="form-row" style="display: flex; gap: 15px; margin-top: 15px;">
          <button type="submit" class="btn-submit" style="flex: 1;">Send Message</button>
          <button type="reset" class="btn-submit btn-secondary" style="flex: 1;">Clear Form</button>
        </div>
      </form>
      
        

<br />
        </div>
      </main>

      <!-- Right Sidebar (Enquiry & Testimonial) -->
      

    </div>

    <!-- Footer -->
    <?php include 'includes/footer.php'; ?>
  </div>
</body>
</html>