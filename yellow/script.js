const butterfly = document.getElementById('butterfly');

document.addEventListener('mousemove', (e) => {
  const { clientX: mouseX, clientY: mouseY } = e;
  butterfly.style.left = `${mouseX - butterfly.offsetWidth / 2}px`;
  butterfly.style.top = `${mouseY - butterfly.offsetHeight / 2}px`;
});

const container = document.getElementById('container');

document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  
  const size = Math.random() * 20 + 10;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;
  
  const color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
  sparkle.style.backgroundColor = color;
  
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  
  sparkle.style.left = `${mouseX - size / 2}px`;
  sparkle.style.top = `${mouseY - size / 2}px`;
  
  container.appendChild(sparkle);
  
  sparkle.addEventListener('animationend', () => {
    sparkle.remove();
  });
});

function createDot() {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.style.left = `${Math.random() * 100}%`;
    dot.style.top = `${Math.random() * 100}%`;
    dot.style.background = getRandomColor();
    document.body.appendChild(dot);
  
    const animationDuration = Math.random() * 1 + 0.3; // Duración aleatoria
    dot.style.animation = `rain-animation ${animationDuration}s linear`;
  
    // Eliminar el punto después de la animación
    dot.addEventListener('animationend', () => {
      dot.remove();
    });
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function startRain() {
    setInterval(createDot, 10); // Crea un nuevo punto cada 100 milisegundos
  }
  
  startRain();