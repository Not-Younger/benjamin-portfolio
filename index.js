// Circle Cursor
const circle = document.getElementById('circle');
let mouseX = 0, mouseY = 0, posX = 0, posY = 0;

function isTouchScreenOnlyDevice() {
  return window.matchMedia("(hover: none)").matches && window.matchMedia("(pointer: coarse)").matches;
}

document.addEventListener('mousemove', (e) => {

  if (isTouchScreenOnlyDevice()) return;
  
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

// H1 Text Animation
const text = document.getElementById('typed');
const cursor = document.getElementsByClassName('typed-cursor')[0];
const skills = ['Photographer', 'Videographer', 'Marketer', 'Drone-Pilot'];
async function changeText() {
  var i = 0;
  while (i < 100) {
    var current = '';
    text.innerHTML = '';
    var index = i % skills.length;
    for (var j = 0; j < skills[index].length; j++) {
      current += `<span>${skills[index][j]}</span>`;
      text.innerHTML = current + cursor.outerHTML;
      await new Promise(r => setTimeout(r, 100));
    }
    const cursorBlink = cursor;
    cursorBlink.classList.add('blink');
    text.innerHTML = current + cursorBlink.outerHTML;
    cursor.classList.add('blink');
    await new Promise(r => setTimeout(r, 2000));
    for (var j = skills[index].length-1; j >= 0; j--) {
      current = current.slice(0, -14);
      text.innerHTML = current + cursor.outerHTML;
      await new Promise(r => setTimeout(r, 70));
    }
    i++;
  }
}
window.onload = () => {
  if (window.location.pathname === '/index.html') 
    changeText();
}

// Current Year
const year = new Date().getFullYear();
document.getElementById('year').innerHTML = year;

// Mobile Nav Button
const navButton = document.getElementById('menu-btn');
const nav = document.getElementById('mobile-nav');
const icon = document.getElementById('icon');

const bar1 = document.getElementsByClassName('bar1')[0];
const bar2 = document.getElementsByClassName('bar2')[0];
const bar3 = document.getElementsByClassName('bar3')[0];
const barx1 = document.getElementsByClassName('barx1')[0];
const barx2 = document.getElementsByClassName('barx2')[0];

navButton.addEventListener('click', () => {
  if (nav.style.display === 'none') {
    nav.style.display = 'flex';
    nav.classList.remove('mobile-nav-close');
    nav.classList.add('mobile-nav-open');
  } else {
    nav.style.display = 'none';
    nav.classList.remove('mobile-nav-open');
    nav.classList.add('mobile-nav-close');
  }
  
  if (barx1.style.display === 'none') {
    bar1.style.display = 'none';
    bar2.style.display = 'none';
    bar3.style.display = 'none';
    barx1.style.display = 'block';
    barx2.style.display = 'block';
  } else {
    bar1.style.display = 'block';
    bar2.style.display = 'block';
    bar3.style.display = 'block';
    barx1.style.display = 'none';
    barx2.style.display = 'none';
  }

  icon.animate([
    { transform: 'rotate(180deg)' },
  ], {
    duration: 200,
    iterations: 1
  });
});

// Close Mobile Nav if Screen is Resized
window.addEventListener('resize', () => {
  if (window.innerWidth > 1000) {
    nav.style.display = 'none';
    bar1.classList.remove('bar1-open');
    bar1.classList.add('bar1');
    bar2.classList.remove('bar2-open');
    bar2.classList.add('bar2');
    bar3.classList.remove('bar3-open');
    bar3.classList.add('bar3');
  }
});