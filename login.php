<?php 
session_start();

	include("connection.php");
	include("functions.php");

	$user_data = check_login($con);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header></header>
    <p id="logo"> Welcome <?php echo $user_data['user_name']; ?></p>
    <main>
        <fieldset id="MostOrdered"></fieldset>
        <fieldset id="Treanding"></fieldset>
    </main>
    <footer class="footer-distributed">

			<div class="footer-left">
          <img src="images/vegan.jpg">
				<h3>About<span>Vegan Food</span></h3>

				<p class="footer-links">
					<a href="login.php">Home</a>
					|
					<a href="#">Blog</a>
					|
					<a href="#">About</a>
					|
					<a href="#">Contact</a>
				</p>

				<p class="footer-company-name">Vegan Eatery</p>
			</div>

			<div class="footer-center">

				<div class="footer-icons">
				<img id="mobile" src="images/mobile.png" alt="mobile">
					<p>+91 9347917379</p>
				</div>
				<div class="footer-icons">
				<img id="email" src="images/email.png" alt="email">
					<p><a href="mailto:support@eduonix.com">hariphp4444@gmail.com</a></p>
				</div>
			</div>
			<div class="footer-right">
				<p class="footer-company-about">
					<span>About the company</span>
                    The Food items that are delivered by us are high in quality. These food items are deliverd from the best five star hotels which are selected by our team. You can experience the best taste from our food.</p>
				<div class="footer-icons">
					<a href="#"><img id="facebook" src="images/facebook.png" alt="facebook"></a>
					<a href="#"><img id="twitter" src="images/twitter.png" alt="twitter"></a>
					<a href="#"><img id="instagram" src="images/instagram.png" alt="instagram"></a>
					<a href="#"><img id="linkedin" src="images/linkedin.png" alt="linkedin"></a>
					<a href="#"><img id="youtube" src="images/youtube.png" alt="youtube"></a>
				</div>
			</div>
		</footer>
    <script src="menu1.js"></script>
    <script src="app.js"></script>
</body>
</html>