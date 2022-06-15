export const addListener = () => {
  const rippleButton = document.querySelector('.ripple-button');
  
  function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + 'px');
    element.style.setProperty('--y', posY + 'px');

  }

  rippleButton.addEventListener('mousemove', (e) => {
    mousePositionToCustomProp(e, rippleButton);
  });
  
}