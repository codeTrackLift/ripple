import { useEffect, useState } from 'react';
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
  const [lightMode, setLightMode] = useState(false);
  const [color, setColor] = useState('#505050');

  const onChange = (e) => {
    setColor(e.target.value);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color])

  return (
    <div id='container'>
      <div>
        <label htmlFor="colorpicker">Background Color: </label>
        <input 
          type="color" 
          id="colorpicker" 
          value={color}
          onChange={onChange}
        ></input>
      </div>

      <button 
        className={lightMode ? 'ripple-button light' : 'ripple-button'}
        onClick={() => setLightMode(!lightMode)}
      >Click Me</button>
    </div>
  );
}

setTimeout(addListener);