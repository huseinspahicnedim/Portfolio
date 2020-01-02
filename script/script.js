// Smooth scroll

$(document).ready(function() {

  var headerHeight = $('header').outerHeight(); // Target your header navigation here
  console.log (headerHeight);

  $('#main-nav li a').click(function(e) {

  	var targetHref   = $(this).attr('href');

	$('html, body').animate({
		scrollTop: $(targetHref).offset().top - 80 // Add header height
	}, 1000);

    e.preventDefault();
  });
});

// //Hamburger menu toggler
//
// $(document).ready(function(){
//     $(".menu-icon").on("click", function(){
//         $("nav ul").toggleClass("showing");
//     });
// });
//
// //Scrolling sticky navbar

$(window).on("scroll", function(){
  if($(window).scrollTop()) {
    $("nav").addClass("grey");
  }
  else {
    $("nav").removeClass("grey");
  }
});

//Link closes Hamburger menu

// $(document).ready(function(){
//     $(".linkToggler").on("click", function(){
//         $("nav ul").toggleClass("showing");
//     });
// });
//
//
//
//
//   // Fade in Animation
//
//   window.sr = ScrollReveal();
//
//
//   sr.reveal('.lineReveal', {duration: 2700});
//   sr.reveal('#centralContent', {duration: 2700});
//   sr.reveal('#Prodaja', {duration: 2700});
//   sr.reveal('#Geodezija', {duration: 2700});
//   sr.reveal('#Ovlastenja', {duration: 2700});
//   sr.reveal('#Ekanaliza', {duration: 2700});
//   sr.reveal('#edukacija', {duration: 2700});
//   sr.reveal('#medij', {duration: 2700});
//   sr.reveal('#kontaktpage', {duration: 2700});
//
//
//
// // Turns jquery off on Mobile
//
// if($(window).width() < 1024){
//   sr.reveal('#Geodezija', {duration: 0});
//   sr.reveal('#Prodaja', {duration: 0});
//   sr.reveal('#Ovlastenja', {duration: 0});
//   sr.reveal('#Ekanaliza', {duration: 0});
//   sr.reveal('#edukacija', {duration: 0});
//   sr.reveal('#medij', {duration: 0});
//   sr.reveal('#kontaktpage', {duration: 0});
//   sr.reveal('.lineReveal', {duration: 0});
// }
//
// $(document).ready(function() {
// window.onload = function () {
// $('#loader').fadeOut(500, function(){ $('#loader').remove(); } );
// }
// });
