/* в этот файл добавляет скрипты*/
const toggle = document.querySelector('.navigation-toggle');
const nav = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
  const closed = toggle.classList.toggle('navigation-toggle--closed');
  nav.classList.toggle('navigation--not-active', closed);
});


document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.example-interactive');
  const handle = document.querySelector('.example-interactive__handle');

  if (!container || !handle) return;

  let isDragging = false;

  const setPosition = (clientX) => {
    const rect = container.getBoundingClientRect();
    let position = ((clientX - rect.left) / rect.width) * 100;
    position = Math.max(0, Math.min(100, position));
    container.style.setProperty('--pos', `${position}%`);
  };

  container.addEventListener('pointerdown', (e) => {
    isDragging = true;
    setPosition(e.clientX);
    handle.setPointerCapture(e.pointerId);
  });

  handle.addEventListener('pointermove', (e) => {
    if (isDragging) {
      setPosition(e.clientX);
    }
  });

  window.addEventListener('pointerup', () => {
    isDragging = false;
  });
});