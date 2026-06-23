<?php
$currentPage = basename($_SERVER['SCRIPT_NAME']);
?>
<!-- ───── NAVBAR ───── -->
<nav class="navbar" id="navbar">
  <a href="index.php" class="nav-brand">
    <span class="brand-icon">🗺️</span>
    <span>velloretravels</span>
  </a>
  <button class="hamburger" id="hamburger" aria-label="Menu">
    <span></span><span></span><span></span>
  </button>
  <ul class="nav-links" id="navLinks">
    <li><a href="index.php" class="nav-link <?php echo ($currentPage == 'index.php') ? 'active' : ''; ?>">Home</a></li>
    <li class="nav-dropdown">
      <a href="tourist-places.php" class="nav-link dropdown-toggle <?php echo ($currentPage == 'tourist-places.php' || in_array($currentPage, ['golden-temple.php', 'vellore-fort.php', 'jalakandeswarar-temple.php', 'amrithi-forest.php', 'govt-museum.php', 'fundera-park.php', 'st-johns-church.php', 'ratnagiri-murugan-temple.php'])) ? 'active' : ''; ?>" data-page="tourist">Places to Visit <span class="dd-arrow">▼</span></a>
      <ul class="dropdown-menu">
        <li><a href="golden-temple.php" class="dd-item"><span class="dd-icon">🛕</span> Sripuram Golden Temple</a></li>
        <li><a href="vellore-fort.php" class="dd-item"><span class="dd-icon">🏰</span> Vellore Fort</a></li>
        <li><a href="jalakandeswarar-temple.php" class="dd-item"><span class="dd-icon">🛕</span> Jalakandeswarar Temple</a></li>
        <li><a href="amrithi-forest.php" class="dd-item"><span class="dd-icon">🌳</span> Amirthi Forest & Waterfalls</a></li>
        <li><a href="govt-museum.php" class="dd-item"><span class="dd-icon">🏛️</span> Government Museum</a></li>
        <li><a href="fundera-park.php" class="dd-item"><span class="dd-icon">⛲</span> Fundera Park</a></li>
        <li><a href="st-johns-church.php" class="dd-item"><span class="dd-icon">⛪</span> St. John's Church</a></li>
        <li><a href="ratnagiri-murugan-temple.php" class="dd-item"><span class="dd-icon">🛕</span> Ratnagiri Murugan Temple</a></li>
      </ul>
    </li>
    <li class="nav-dropdown">
      <a href="business-directory.php" class="nav-link dropdown-toggle <?php echo (in_array($currentPage, ['business-directory.php', 'vellore-hotels.php', 'vellore-atm.php', 'vellore-banks.php', 'vellore-taxiservice.php', 'tour-operator.php'])) ? 'active' : ''; ?>" data-page="business">Business Directory <span class="dd-arrow">▼</span></a>
      <ul class="dropdown-menu">
        <li><a href="vellore-hotels.php" class="dd-item"><span class="dd-icon">🏨</span> Hotels to Stay</a></li>
        <li><a href="vellore-atm.php" class="dd-item"><span class="dd-icon">🏪</span> ATM Centres</a></li>
        <li><a href="vellore-banks.php" class="dd-item"><span class="dd-icon">🏦</span> Banks</a></li>
        <li><a href="vellore-taxiservice.php" class="dd-item"><span class="dd-icon">🚕</span> Taxi Services</a></li>
        <li><a href="tour-operator.php" class="dd-item"><span class="dd-icon">🚌</span> Tour Operators</a></li>
      </ul>
    </li>
    <li><a href="contactus.php" class="nav-link <?php echo ($currentPage == 'contactus.php') ? 'active' : ''; ?>">Contact Us</a></li>
  </ul>
</nav>
