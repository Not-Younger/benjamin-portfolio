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

changeText();