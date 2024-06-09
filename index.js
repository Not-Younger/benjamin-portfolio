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

const menu = document.getElementById('menu-btn');
const icon = document.getElementById('icon');
const bar1 = document.getElementsByClassName('bar1')[0];
const bar2 = document.getElementsByClassName('bar2')[0];
const bar3 = document.getElementsByClassName('bar3')[0];
menu.addEventListener('click', () => {
  if (menu.classList.contains('open')) {
    icon.classList.remove('io');
    icon.classList.add('ic');
    bar1.classList.remove('o1');
    bar1.classList.add('o1c');
    bar2.classList.remove('o2');
    bar2.classList.add('o2c');
    bar3.classList.remove('o3');
    bar3.classList.add('o3c');
  } else {
    icon.classList.remove('ic');
    icon.classList.add('io');
    bar1.classList.remove('o1c');
    bar1.classList.toggle('o1');
    bar2.classList.remove('o2c');
    bar2.classList.toggle('o2');
    bar3.classList.remove('o3c');
    bar3.classList.toggle('o3');
  }
  menu.classList.toggle('open');
})