// function sleep(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// const divs = document.querySelectorAll("div");

// const show = async (div) => {
//   await setTimeout((div) => {
//     div.classList.toggle("div-show");
//   }, 1000);
//   div.classList.toggle("div-show");
// };

// for (let i = 0; i < divs.length; i++) {
//   divs[i].classList.toggle("div-show");
//   await sleep(1000);
//   divs[i].classList.toggle("div-show");
// }

// divs[divs.length - 1].classList.toggle("div-show");

function sleep(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

const ducks = document.querySelectorAll("div");
const main = document.querySelector("main");

async function showDucks(divs, main) {
  for (let div of divs) {
    div.classList.add("div-show");
    await sleep(500);
    div.classList.remove("div-show");
  }
  main.classList.toggle("main");
  main.children[0].classList.toggle("duck-with-text");
  main.children[1].classList.toggle("text");
  main.children[1].children[0].classList.toggle("text-for-duck");
}

showDucks(ducks, main);
