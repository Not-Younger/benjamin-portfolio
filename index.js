const circle = document.getElementById('circle');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

document.addEventListener('mousemove', (e) => {
  const height = circle.offsetHeight;
  const width = circle.offsetWidth;

  if (e.target.tagName === 'A') {
    circle.classList.add('big');
  } else {
    circle.classList.remove('big');
  }

  setTimeout(() => { 
    circle.style.left = `${e.clientX - width/2}px`;
    circle.style.top = `${e.clientY - height/2}px`;
  }, 20);
});