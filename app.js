// Hero height = calc(100% - 123px)
function resize() {
  document.querySelector(".hero").style.height =
    window.innerHeight - 123 + "px";
}
resize();
window.onresize = () => resize();
