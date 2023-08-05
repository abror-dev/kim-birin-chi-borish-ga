var elInp = document.querySelector(".inp");
var elPiy = document.querySelector(".piy");
var elVel = document.querySelector(".vel");
var elMash = document.querySelector(".mash");
var elSam = document.querySelector(".sam");

function calculateTime(distance, speed) {
  var hour = match.floor(distance / speed);
  var minute = match.floor((distance / speed - hour) * 60);
  var second = match.floor(((distance / speed - hour) * 60 - minute) * 60);
  return hour + "saot" + minute + "minute" + second + "second";
}
function fn() {
  elVel.textContent = calculateTime(elInp.value, 20);
  elPiy.textContent = calculateTime(elInp.value, 4);
  elMash.textContent = calculateTime(elInp.value, 100);
  elSam.textContent = calculateTime(elInp.value, 800);
}

// function fn() {
//   elVel.textContent = elInp.value / 20;
//   elPiy.textContent = elInp.value / 4;
//   elMash.textContent = elInp.value / 100;
//   elSam.textContent = elInp.value / 800;
// }
