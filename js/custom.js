// footer script for dropdown menu start

jQuery(".nav-folderized h1").click(function () {
  jQuery(this).parent(".nav").toggleClass("open");
  jQuery("html, body").animate(
    { scrollTop: jQuery(this).offset().top - 170 },
    1500
  );
});

// footer script for dropdown menu end

// menu icon

function menu() {
  var links = document.getElementById("show");
  links.classList.toggle("right-ul");
}

function close() {
  var links = document.getElementById("ss");
  links.classList.toggle("close");
}

$(document).ready(function () {
  $(".fa-magnifying-glass").click(function () {
    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
});

// hero seciton slider start

$(document).ready(function () {
  $(".sliders ").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });

  // hero seciton slider end
  $(".logo-list-slider").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        margin: 120,
        items: 1,
        nav: true,
        mouseDrag: true,
        // autoplay: true,
        // autoplayTimeout: 1000,
      },
      600: {
        margin: 120,
        items: 3,
        nav: false,
        mouseDrag: true,
        // autoplay: true,
        // autoplayTimeout: 1000,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
        mouseDrag: false,
      },
    },
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });
});
