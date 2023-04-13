const img = new Image();
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');

export default function bgImage() {
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&query=plants&client_id=fr3uNsS5_5imggcRgoo99b4ksGO9eJu0ZG1rRS_NWxY';
  fetch(url)
  .then(res => res.json())
  .then(data => {
    img.src = `${data.urls.regular}`;
    img.onload = () => {
      document.body.style.backgroundImage = `url('${data.urls.regular}')`;
    }
  });
 }

 slideNext.addEventListener('click', () => {
  bgImage();
});

slidePrev.addEventListener('click', () => {
  bgImage();
});