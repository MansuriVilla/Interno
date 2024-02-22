// footer script for dropdown menu start

jQuery(".nav-folderized h1").click(function () {
  jQuery(this).parent(".nav").toggleClass("open");
  jQuery("html, body").animate(
    { scrollTop: jQuery(this).offset().top - 170 },
    500
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
