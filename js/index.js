// ******************* Pop up Subscription

// pop up after 2s window load
window.onload = function(){
    setTimeout(function(){
        $("#popup").attr("class", "popup-show");
    }, 100)
};

// Close the subscription pop up
function closePop (){
    $("#popup").removeAttr("class","popup-show");
}

// close via mouse click
$(".close-popup").click(function(){
    closePop();
});

// close via keydown
$(document).keydown(function(e){
    console.log(e.key)
    if(e.key === "Escape") {
        closePop();
    }
});


// ********************* Login

// display login form
$(".login-request").click(function(){
    $("#login").removeClass("hide-login");
 });

// hide login form
$(".close-login").click(function(){
    $("#login").addClass("hide-login");
});

//tooltip for the close button
$(".close-login").attr('title', 'Close');


// hide login form when scroll down
$(window).scroll(function() {
    if ($(window).scrollTop() > 80 ){
        if($("#login").not(".hide-login")) {
            $("#login").addClass("hide-login");
        }
    }
});


// ****************** Go to top button

// button appear and disappear
$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
        $("#goTopBtn").fadeIn();
    } else {
        $("#goTopBtn").fadeOut();
    }
});

//Go to top upon clicked
$("#goTopBtn").click(function() {
    $("html").animate({scrollTop: 0}, 0);
 });


 // ****************** Index Page

 // counter up
 $(window).scroll(function(){
    if ($(this).scrollTop() > 2000) {
        $(".counter").each(function() {
            var target = $(this),
                countTo = target.attr("data-target");
            
            $({ countNum: target.text()}).animate({
              countNum: countTo
            },
          
            {
              duration: 1500,
              easing: "linear",
              step: function() {
                target.text(Math.floor(this.countNum));
              },
              complete: function() {
                target.text(this.countNum);
              }
            });
          });
    }

});

// ***************** Recipe Page

// double click and change heart color
var totalHeart = $(".fa-heart").length;

for (i=0 ; i<totalHeart ; i++){
    $(".fa-heart")
        .eq(i)
        .click(function() {
            $(this).toggleClass("fa-heart-red");
        })        
    };

// hover over heart will turn red
$(".fa-heart").hover(
    function(){
        $(this).toggleClass("hover-red");
    }
);


// ******************* Package page

// hover over package selection, background will toggle color
$(".package").hover(
    function(){
        $(this).toggleClass("package-highlight");
    }
);

// countdown timer

// Set the date we're counting down to
var countDownDate = new Date("Jan 26, 2022 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result
  $(".dates").text(days);
  $(".hours").text(hours);
  $(".mins").text(minutes);
  $(".secs").text(seconds);
    
  // When count ends 
  if (distance < 0) {
    clearInterval(x);

    $(".dates").text("0");
    $(".hours").text("0");
    $(".mins").text("0");
    $(".secs").text("0");

    $(".sales-heading").addClass("hidden-text");
    $(".orginal-price").addClass("hidden-text");
    $(".discount-percent").addClass("hidden-text");
    $(".discount-tag-img").addClass("hidden-text");
    $(".expired-heading").removeClass("hidden-text");
  }
}, 1000);


// ***************** Contact Page

 
// Contact form validation 
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = $('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


// ***************** FAQ 

// toggle to show/hide answer
var totalQn = $(".question-btn").length;

for (i=0 ; i<totalQn ; i++){
    $(".question-btn")
        .eq(i)
        .click(function(){
            $(this).parents(".faq-question").toggleClass("show-text")
        });            
};

