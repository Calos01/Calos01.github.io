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
  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * window.innerWidth}px`; // Posición horizontal aleatoria
    document.getElementById('container').appendChild(petal);
  
    const animationDuration = Math.random() * 5 + 2; // Duración y velocidad de la animación aleatoria
    petal.style.animation = `fall ${animationDuration}s linear`;
  
    // Eliminar el pétalo después de la animación
    petal.addEventListener('animationend', () => {
      petal.remove();
    });
  }
  
  function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = `${Math.random() * window.innerWidth}px`; // Posición horizontal aleatoria
    document.getElementById('container').appendChild(petal);
  
    const bezierX = Math.random() * window.innerWidth; // Punto final X de la animación
    const bezierY = window.innerHeight + 100; // Punto final Y de la animación
  
    const animationDuration = Math.random() * 5 + 2; // Duración y velocidad de la animación aleatoria
    petal.style.animation = `fall ${animationDuration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
  
    // Establecer la animación de la trayectoria curva
    petal.style.animationName = 'fall';
    petal.style.animationTimingFunction = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    petal.style.animationDuration = `${animationDuration}s`;
    petal.style.animationFillMode = 'forwards';
  
    // Eliminar el pétalo después de la animación
    petal.addEventListener('animationend', () => {
      petal.remove();
    });
  }
  
  function startPetals() {
    setInterval(createPetal, 500); // Crea un nuevo pétalo cada 500 milisegundos
  }
  
  startPetals();
  