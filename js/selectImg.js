import state from './state';

function checkActive(block) {
  block.childNodes.forEach(item => {
    if(item.classList.contains('active')) {
      item.classList.remove('active');
    }
    item.classList.remove('lose');
  });
}
export default function selectImg() {
  const imgContainer = document.querySelector('#imgContainer_1');
  imgContainer.childNodes.forEach(item => item.addEventListener('click', e => {
    checkActive(imgContainer);
    const selImg = document.querySelector(`.${e.target.className}`);
    selImg.classList.add('active');
    state.select = `${e.target.id}`;
  }));
}