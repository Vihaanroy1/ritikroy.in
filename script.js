const hearts = document.querySelector('.hearts');
setInterval(() => {
  const h = document.createElement('span');
  h.className = 'floating-heart';
  h.textContent = ['❤️','💗','💕','✨'][Math.floor(Math.random()*4)];
  h.style.left = Math.random()*100 + 'vw';
  h.style.fontSize = (14 + Math.random()*18) + 'px';
  h.style.animationDuration = (5 + Math.random()*4) + 's';
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 9000);
}, 900);
