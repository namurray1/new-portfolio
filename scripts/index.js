$(document).ready(function(){

  

  // $('a[href^="#"]').click(function(e){ // where e = event
  //   e.preventDefault();

  //   var hash =  $($(this).attr('href')).offset().top;

  //   $('html, body').animate({
  //     scrollTop: position
  //   }, 1000, 'linear');
  // });

  // $("a[href*='#']").on("click", function(){ // you can use the anchor tag or the reference to the anchors as shown "a[href^='#']".
  //   var target = $(this.hash);

  //   if(target.length) {
  //     event.preventDefault();
  //     $('html, body').stop().animate({
  //       scrollTop: target.offset().top
  //     }, 2000, 'linear');
  //   }
  // });

// $("html, body").animate({
//   scrollTop: $("a").offset.top
// }, 2000);




  
});

//Change style of navbar
window.onscroll = function() {myFunction();};
function myFunction() {
  var navbar = document.getElementById("myNavbar");
  if(document.body.scrollTop > 100) || document.documentElement.scrollTop > 100) {
    navbar.className = "w3-bar" + "w3-card" + "w3-animate-top" + " w3-white";
  } else {
    navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
  }
}




// Model for image grid

// function onClick(element) { 
//   document.getElementById("img01").src = element.src;
//   document.getElementById("modal01").style.display = "block";
// }
// // scroll function for "Go to Top" button

// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("myBtn").style.display = "block";
//   } else {
//     document.getElementById("myBtn").style.display = "none";
//   }
// }

// function topFunction() { 
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }