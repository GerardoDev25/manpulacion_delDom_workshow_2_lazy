const btn = document.querySelector('button');
const mountnode = document.getElementById('images');
const MAX = 122;
const MIN = 0;

const ramdom = () => Math.floor(Math.random() * (MAX - MIN)) + MIN;

const createImageNode = () => {
  const container = document.createElement('div');
  const image = document.createElement('img');

  container.className = 'p-4';

  image.className = 'mx-auto';
  image.width = 320;
  image.src = `https://randomfox.ca/images/${ramdom()}.jpg`; // todo

  container.appendChild(image);
  return container;
};

const addImage = () => {
  const newImage = createImageNode();

  mountnode.append(newImage);
};

btn.addEventListener('click', addImage);
