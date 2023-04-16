import state from "./state";

export default function winner() {
  const imgContainer1 = document.querySelector('#imgContainer_1');
  const imgContainer2 = document.querySelector('#imgContainer_2');
  const player1Choice = imgContainer1.querySelector(`#${state.select}`);
  const player2Choice = imgContainer2.querySelector(`#${state.compChoice.id }`);
  const status = document.querySelector('.status');
  const scorePlayer1 = document.querySelector('.scorePlayer1');
  const scorePlayer2 = document.querySelector('.scorePlayer2');
  switch(state.select) {
    case 'rock':
      if(state.compChoice.id == 'paper') {
        status.textContent = 'Вы проиграли!';
        player1Choice.classList.remove('active');
        player1Choice.classList.add('lose');
        scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;
      }
      else if(state.compChoice.id == 'scissors') {
        status.textContent = 'Вы выйграли!';
        player2Choice.classList.remove('active');
        player2Choice.classList.add('lose');
        scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;
      }
      else {
        status.textContent = 'Ничья!';
      }
      break;
    case 'paper':
      if(state.compChoice.id == 'rock') {
        status.textContent = 'Вы выйграли!';
        player2Choice.classList.remove('active');
        player2Choice.classList.add('lose');
        scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;
      }
      else if(state.compChoice.id == 'scissors') {
        status.textContent = 'Вы проиграли!';
        player1Choice.classList.remove('active');
        player1Choice.classList.add('lose');
        scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;
      }
      else {
        status.textContent = 'Ничья!';
      }
      break;
    case 'scissors':
      if(state.compChoice.id == 'rock') {
        status.textContent = 'Вы проиграли!';
        player1Choice.classList.remove('active');
        player1Choice.classList.add('lose');
        scorePlayer2.textContent = Number(scorePlayer2.textContent) + 1;
      }
      else if(state.compChoice.id == 'paper') {
        status.textContent = 'Вы выйграли!';
        player2Choice.classList.remove('active');
        player2Choice.classList.add('lose');
        scorePlayer1.textContent = Number(scorePlayer1.textContent) + 1;
      }
      else {
        status.textContent = 'Ничья!';
      }
      break;
    default:
      break;
  }
}