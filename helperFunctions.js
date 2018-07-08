import $ from "jquery";

// Hero height = calc(100% - 123px)
export function heroHeight() {
  function resize() {
    document.querySelector(".hero").style.height =
      window.innerHeight - 123 + "px";
  }
  resize();
  window.onresize = () => resize();
}

// Map
export function gMap() {
  function initMap() {
    var myLatLng = { lat: 43.552542, lng: 3.892718 };
    // Create a map object and specify the DOM element
    // for display.
    var map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 11
    });
    var marker = new google.maps.Marker({
      map: map,
      position: myLatLng,
      title: "Funérarium de Lattes"
    });
  }
  initMap();
}

// Smooth Scroll
export function smoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            400,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
}
