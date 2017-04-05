<!DOCTYPE html>

<html>
<head>
	<title>CAL.CSS</title>
	<link href="css/style.css" rel="stylesheet" type="text/css">
	<link href="css/stars.css" rel="stylesheet" type="text/css">
	<link rel="icon" type="image/png" href="favicon.png">
	<script src="https://use.fontawesome.com/ac6b49ad6d.js"></script>
</head>

<body>
<div class="nav itab" onclick="scrolltosection('pagetwo', 'page', 0);" ><span>PROJECTS</span><img id="ugh" src="images/projects.png"></div>
<div class="nav itab second" onclick="scrolltosection('pagethree', 'page', 0);" ><span>CONTACT</span><img src="images/contact.png"></div>
<div id="infotab" class="itab" onclick="expandinfo()" ><img src="images/infoicon.png"></div>
	<div id="infobox" class="ibox">
		<div class="infocontainer">
			<div id="abacusinfo" class="abacus infotext">
				<h2>ABACUS</h2>
				<h3>Role: </h3><span>Lead Developer</span>
				<p>Wordpress-driven site for Abacus, a marketing agency. Backend tasks included customizing WordPress administrative backend to manage applications coming from careers and contact forms and server setup for live launch. Frontend tasks include calling Instagram API to display live updating feed and google maps API to display location, SVG animations and complete responsiveness for all mobile sizes.</p>
				<h3>STACK:</h3>
				<ul>
					<li>PHP</li>
					<li>SQL</li>
					<li>JS</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>snap.svg [library]</li>	
				</ul>
			</div>
			<div id="libertyinfo" class="infotext">
				<h2>LIBERTY METRICS</h2>
				<h3>Role: </h3><span>Lead Developer</span>
				<p>Wordpress-driven site for Liberty Metrics, a web data solutions provider. Client information structure has three tiers of nesting and uses a sub navigation menu on sub pages. Case studies page features filtering by wordpress post types. Backend tasks include customizing WordPress administrative backend to manage applications coming from careers and contact forms and server setup for live launch. Frontend tasks included calling google maps API to display location, building multi-page contact form, SVG animations and complete responsiveness for all mobile sizes.</p>
				<h3>STACK:</h3>
				<ul>
					<li>PHP</li>
					<li>SQL</li>
					<li>JS</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
			<div id="joyinfo" class="infotext">
				<h2>JOYOUS HEALTH</h2>
				<h3>Role: </h3><span>Frontend Developer</span>
				<p>Joyous Health is an integrated e-commerce and blog site for holistic nutrition and healthy lifestyle information. Tasks included building static pages and conducting site review for UX/UI polishing.</p>
				<h3>STACK:</h3>
				<ul>
					<li>PHP</li>
					<li>SQL</li>
					<li>JS</li>
					<li>HTML</li>
					<li>CSS</li>
					<li>JQUERY [library]</li>
				</ul>
			</div>
			<div id="gradpadinfo" class="infotext">
				<h2>MY GRADPAD</h2>
				<h3>Role: </h3><span>Front/Backend Developer</span>
				<p>My Gradpad is an apartment search service, targeted for recent graduates living in New York. Multiple search pages feature a google maps integration similar to Airbnb where the user can see listings actively update based on geolocation while using the map to explore the city. Project tasks largely involved capturing and rendering data from query calls. Another major task was the 'get started' overlay which involved passing data client-side across screens and AJAX calls to pass data server-side at various stages. </p>
				<h3>STACK:</h3>
				<ul>
					<li>PHP</li>
					<li>SQL</li>
					<li>JS</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
			</div>
			<img src="images/infoicon.png" onclick="collapseinfo()">
		</div>
	</div>

<div id="page">
    <div class="bg slideone" 
		data-0="transform:translate3d(0%,0%,0); opacity:1" 	
		data-600="transform:translate3d(0%,0%,0); opacity:1">

		<div class="viewcontainer">

			<div id='stars'></div>
			<div id='stars2'></div>	
			<div id='stars3'></div>

			<div class="namecontainer">
				<h1 id="calistakim" class="myname">Calista Kim</h1>
			</div>
			<div class="namecontainer sub">
				<h3 id="subtext" class="mysub"></h3>
			</div>

			<div id="spaceship" class="flyingspaceship"></div>
			<?php include 'ufo.svg';?>
			<div id="lilastro" class="hidden"> </div>
			<div id="startplanet" ></div>
			<div id="endplanet" ></div>
			<!-- <div class="skipbtn" onclick="scrolltosection('pagetwo', 'page', 0);"> Portfolio <i class="fa fa-arrow-down" aria-hidden="true"></i>  -->
			</div>
		</div>
	</div>

	<div id="pagetwo" class="bg slidetwo" 
		data-600="transform:translate3d(100%,0%,0); opacity:1" 	
		data-1200="transform:translate3d(0%,0%,0); opacity:1">
		<div class="viewcontainer">

			<?php include 'ufocopy.svg';?>
			<img id="firefox" class="browser" onclick="openbrowser()" src="images/firefox.png">
			<img id="chrome" class="browser" onclick="openbrowser()" src="images/chrome.png">
			<?php include 'chromebrowser.svg';?>
		</div>
	</div>
	<div id="pagethree" class="bg slidethree" 
		data-1400="transform:translate3d(0%,100%,0); opacity:1" 	
		data-2000="transform:translate3d(0%,0%,0); opacity:1">
		<div class="viewcontainer">

			<form id="contactform">
			<h1 id="formtitle">Alien Contact Form</h1>
			
			<div class="contactformbg"></div>
			<div class="formcontainer">
				<div id="contactformcontainer" class="formcontent">
					<div class="errorbox center"><span id="errormsg"></span></div>
					<div class="contactline"><span>Name </span><input id="name" class="inp"></div>
					<div class="contactline"><span>Email </span><input id="email" class="inp"></div>
					<div class="contactline movedown"><span>Message </span> <textarea id="message" class="contactmessage"></textarea></div>
				</div>
				<?php include 'contactship.svg';?>
			</div>
			</form>
		</div>

	</div>

</div>
<?php 
$year = date('Y')
?>
<div id="footer">
	<span class="footerspan">CALISTA KIM <?php echo $year?></span>
	<a href="mailto:calistakim99@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a><span class="myemail footerspan">calistakim99@gmail.com</span>
	<div class="socialicons">
		<a href="https://github.com/CalistaKim"><i class="fa fa-github-alt" aria-hidden="true"></i></a>
		<a href="https://www.linkedin.com/in/calista-kim-12a6ab62/"><i class="fa fa-linkedin" aria-hidden="true"></i>	
	</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>
<script src="js/nano.js"></script>
<script src="js/portfolio.js"></script>

</body>




