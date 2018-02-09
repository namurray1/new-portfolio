$(function(){
  
  $("a").on("click", function(event){
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("#about me, #projects, #contact me").animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });
  
  
});
//make sure to test this. For now we will comment it out

//  function onClick(element) {
//      document.getElementById("img01").src = element.src;
//      document.getElementById("modal01").style.display = "block";
// }

//  window.onscroll = function() {
//    scrollFunction();
//   };

//  function scrollFunction() {
//    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//      document.getElementById("myBtn").style.display = "block";
//    } else {
//      document.getElementById("myBtn").style.display = "none";
//    }
//  }

//  function topFunction() {
//    document.body.scrollTop = 0;   
//    document.documentElement.scrollTop = 0;
//  }