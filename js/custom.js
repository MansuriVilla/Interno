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
  $(".search-box").click(function () {
    $(".wrap, .input").toggleClass("active");
    $("input[type='text']").focus();
  });
});

// slider animation start

// hero seciton slider start

$(document).ready(function () {
  $(".sliders ").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });

  // hero seciton slider end

  // logo section script start

  $(".logo-list-slider").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
      },
      600: {
        items: 3,
        mouseDrag: true,
        autoplay: true,
        dots: true,
      },
      1000: {
        items: 5,
        loop: false,
        mouseDrag: false,
      },
    },
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });

  // logo section script end

  // review section script start

  $(".row-card").owlCarousel({
    loop: true,
    margin: 30,
    responsiveClass: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3500,
      },
      600: {
        nav: true,
        items: 2,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3500,
      },
      1000: {
        items: 3,
        loop: false,
        mouseDrag: false,
      },
    },
  });

  // review section script end

  //arc section script start

  $(".arc-card-row").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        width: 420,
      },
      765: {
        items: 2,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        width: 420,
      },
      600: {
        items: 1,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 3000,
        width: 420,
      },
      1000: {
        margin: 40,
        autowidth: true,
        items: 3,
        loop: false,
        mouseDrag: false,
      },
    },
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
  });

  //arc section script end
});
// slider animation end
