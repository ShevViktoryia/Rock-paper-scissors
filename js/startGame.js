import computerChoice from "./computerChoice";
import state from "./state";

export default function startGame() {
  const playButton = document.querySelector('.play');
  playButton.onclick = () => {
    if(state.select) {
      const imgContainer = document.querySelector('#imgContainer_1');
      imgContainer.childNodes.forEach(item => {
        if(item.classList.contains('lose')) {
          item.classList.remove('lose');
          item.classList.add('active');
        }
      });
      computerChoice();
    }
    else {
      alert('Пожалуйста, сначала сделай выбор: камень, бумага или ножницы');
    }
  }
}