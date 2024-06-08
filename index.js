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


const text = document.getElementById('typed');
const cursor = document.getElementsByClassName('typed-cursor')[0];
const skills = ['Photographer', 'Videographer', 'Marketer', 'Drone Pilot'];
async function changeText() {
  var i = 0;
  while (i < 100) {
    text.innerHTML = '';
    var index = i % skills.length;
    for (var j = 0; j < skills[index].length; j++) {
      text.innerHTML += skills[index][j];
      await new Promise(r => setTimeout(r, 100));
    }
    cursor.classList.add('blink');
    await new Promise(r => setTimeout(r, 2000));
    cursor.classList.remove('blink');
    for (var j = skills[index].length-1; j >= 0; j--) {
      text.innerHTML = skills[index].slice(0, j);
      await new Promise(r => setTimeout(r, 70));
    }
    i++;
  }
}

changeText();

const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;