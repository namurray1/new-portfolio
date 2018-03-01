$(document).ready(function () {

$("#myNavbar a").on('click', function (event){
  if(this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1000, function(){
      window.location.hash = hash;
    });
  }
});

});

//Change style of navbar

// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   var navbar = document.getElementById("myNavbar");
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     navbar.className = "w3-bar" + "w3-card" + " w3-animate-top" + " w3-white";
//   } else {
//     navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
//   }
// }

// You need to fix how the navbar changes color and opacity when the scroll begins here!!!


// function for opening menu on small screens

// function toggleFunction() {
//   var x = document.getElementById("navDemo");
//   if (x.className.indexOf("w3-show") === -1) {
//     x.className += " w3-show";
//   } else {
//     x.className = x.className.replace(" w3-show", "");
//   }
// }

// function myMap() {
//   myCenter = new google.maps.LatLng(35.245531, -80.797539);
//   var mapOptions = {
//     center: myCenter,
//     zoom: 12,
//     scrollWheel: true,
//     draggable: false,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

//   var marker = new google.maps.Marker({
//     position: myCenter,
//   });
//   marker.setMap(map);
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