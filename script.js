const card = document.getElementById('card');
const cardInner = document.getElementById('card-inner');
let flipped = false;
let rotationX = 0;
let rotationY = 0;

function applyTransform() {
  const flip = flipped ? 180 : 0;
  const totalY = rotationY + flip;
  cardInner.style.transform = `rotateX(${rotationX}deg) rotateY(${totalY}deg)`;
}

document.addEventListener('mousemove', (e) => {
  rotationY = (e.clientX / window.innerWidth - 0.5) * 10;
  rotationX = -(e.clientY / window.innerHeight - 0.5) * 10;
  applyTransform();
});

card.addEventListener('click', () => {
  flipped = !flipped;
  applyTransform();
});