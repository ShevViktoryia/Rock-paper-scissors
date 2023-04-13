// function getImage(atr, block) {
//   const img = new Image();
//   const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${atr}&client_id=fr3uNsS5_5imggcRgoo99b4ksGO9eJu0ZG1rRS_NWxY`;
//   fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     img.src = `${data.urls.regular}`;
//     img.onload = () => {
//       block.style.backgroundImage = `url('${data.urls.regular}')`;
//     }
//   });
// }

export default function playDashboard() {
  const container = document.querySelector('.container');
  const start_button = document.querySelector('.start');

  start_button.onclick = () => {
    container.remove();

    const dashboard = document.createElement('div');
    dashboard.className = 'container';
    const play_button = document.createElement('button');
    play_button.className = 'play';
    play_button.textContent = 'Ход';

    const playContainer = document.createElement('div');
    playContainer.className = 'playContainer';

    const player1 = document.createElement('div');
    player1.className = 'player1';
    player1.textContent = 'Игрок 1';
    const player2 = document.createElement('div');
    player2.className = 'player2';
    player2.textContent = 'Игрок 2';

    const stoneImg = document.createElement('div');
    stoneImg.className = 'stoneImg';
    // getImage('stone', stoneImg);

    dashboard.append(play_button);
    playContainer.append(player1);
    playContainer.append(player2);
    playContainer.append(stoneImg);
    dashboard.append(playContainer);
    document.body.append(dashboard);
  } 
}