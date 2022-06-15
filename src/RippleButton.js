import "./RippleButton.css";

const addListener = () => {
  const rippleButton = document.querySelector('.ripple-button');
  
  function mousePositionToCustomProp(event, element) {
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + 'px');
    element.style.setProperty('--y', posY + 'px');

  }

  rippleButton.addEventListener('mouseup', (e) => {
    mousePositionToCustomProp(e, rippleButton);
    rippleButton.classList.add('pulse');
    rippleButton.addEventListener('animationend', () => {
      rippleButton.classList.remove('pulse');
    })
  });
  
}

export default function RippleButton() {
  return (
    <div>
      <button className="ripple-button">Click Me</button>
    </div>
  );
}

setTimeout(addListener);
