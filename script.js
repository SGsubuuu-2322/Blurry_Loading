const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  loadingText.innerText = `${load}%`;

  if (load > 99) {
    clearInterval(int);
  }
}
