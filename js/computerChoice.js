import state from "./state";
import winner from "./winner";

export default function computerChoice() {
  const imgContainer = document.querySelector('#imgContainer_2');
  state.blocked = true;
  let random = Math.floor(Math.random() * 3);
  imgContainer.childNodes.forEach(item => {
    item.classList.add('blink');
  })
  setTimeout(() => {
    imgContainer.childNodes.forEach(item => {
      item.classList.remove('active');
      item.classList.remove('lose');
      item.classList.remove('blink');
    });
    state.compChoice = imgContainer.childNodes[random];
    const compChoice = imgContainer.querySelector(`.${state.compChoice.className}`);
    compChoice.classList.add('active');
    winner();
  }, 2000);
}