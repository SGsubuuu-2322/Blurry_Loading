// These are the constants for containing important HTML elements for further modifications...
const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");
const bodyElement = document.body;

let load = 0;

let int = setInterval(blurring, 30);

// This function is for adding the blurring effects dynamically...
function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 40, 0)}px)`;
  bodyElement.style.borderWidth = `${scale(load, 0, 100, 50, 0)}px`;
}

// This function is scaling a different range of numbers between another range of numbers...
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
