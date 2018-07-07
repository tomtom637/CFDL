// Hero height = calc(100% - 123px)
function resize() {
  document.querySelector(".hero").style.height =
    window.innerHeight - 123 + "px";
}
resize();
window.onresize = () => resize();

// Map
function initMap() {
  var myLatLng = { lat: 43.552542, lng: 3.892718 };
  // Create a map object and specify the DOM element
  // for display.
  var map = new google.maps.Map(document.getElementById("map"), {
    center: myLatLng,
    zoom: 12
  });
  var marker = new google.maps.Marker({
    map: map,
    position: myLatLng,
    title: "Funérarium de Lattes"
  });
}
