import selectImg from "./selectImg";
import startGame from "./startGame";
import state from "./state";

function getImage(img_id, block) {
  const img = new Image();
  const url = `https://api.unsplash.com/photos/random?orientation=portrait&query=${img_id}&client_id=fr3uNsS5_5imggcRgoo99b4ksGO9eJu0ZG1rRS_NWxY`;
  fetch(url)
  .then(res => res.json())
  .then(data => {
    img.src = `${data.urls.regular}`;
    img.onload = () => {
      block.style.backgroundImage = `url('${data.urls.regular}')`;
    }
  });
}

export default function playDashboard() {
  const container = document.querySelector('.container');
  const start_button = document.querySelector('.start');

  start_button.onclick = () => {
    container.remove();

    const dashboard = document.createElement('div');
    dashboard.className = 'container';
    const play_button = document.createElement('button');
    play_button.className = 'play';
    play_button.textContent = 'Играть';

    const playContainer = document.createElement('div');
    playContainer.className = 'playContainer';

    const score = document.createElement('div');
    score.className = 'score';
    score.innerHTML = `${state.player1} : ${state.player2}`;

    const player1 = document.createElement('div');
    player1.className = 'player';
    player1.textContent = 'Игрок 1';

    const player2 = document.createElement('div');
    player2.className = 'player';
    player2.textContent = 'Игрок 2';

    const status = document.createElement('div');
    status.className = 'status';
    status.textContent = 'Сделайте ход';

    playContainer.append(player1);
    playContainer.append(player2);

    dashboard.append(play_button);
    dashboard.append(score);
    dashboard.append(playContainer);
    dashboard.append(status);
    document.body.append(dashboard);

    const countPlayer = [...document.querySelectorAll('.player')];
    for(let i = 0; i < countPlayer.length; i++) {
      const imgContainer = document.createElement('div');
      imgContainer.className = 'imgContainer';
      imgContainer.id = `imgContainer_${i+1}`;

      const rockImg = document.createElement('div');
      rockImg.className = 'rockImg';
      rockImg.id = 'rock';
      const paperImg = document.createElement('div');
      paperImg.className = 'paperImg';
      paperImg.id = 'paper';
      const scissorsImg = document.createElement('div');
      scissorsImg.className = 'scissorsImg';
      scissorsImg.id = 'scissors';

      // getImage('rock', rockImg);
      // getImage('paper', paperImg);
      // getImage('scissors', scissorsImg);

      imgContainer.append(rockImg);
      imgContainer.append(paperImg);
      imgContainer.append(scissorsImg);
      countPlayer[i].append(imgContainer);
    }

    state.blocked ? '' : selectImg();
    startGame();
  } 
}