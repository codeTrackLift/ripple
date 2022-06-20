import { useState } from 'react';
import { ButtonControls } from './ButtonControls'
import "./RippleButton.css";

export default function RippleButton() {
  const [lightMode, setLightMode] = useState(false);
  const [opacity, setOpacity] = useState(0.5);

  const addListener = () => {
    const rippleButton = document.querySelector('.ripple-button');
    
    function mousePositionToCustomProp(event, element, opacity) {
      let posX = event.offsetX;
      let posY = event.offsetY;
  
      element.style.setProperty('--x', posX + 'px');
      element.style.setProperty('--y', posY + 'px');
      element.style.setProperty('--opacity', opacity);
  
    }
  
    rippleButton.addEventListener('mouseup', (e) => {
      mousePositionToCustomProp(e, rippleButton, opacity);
      rippleButton.classList.add('pulse');
      rippleButton.addEventListener('animationend', () => {
        rippleButton.classList.remove('pulse');
      })
    });
  }

  setTimeout(addListener);

  return (
    <div id='container'>
      <ButtonControls 
        lightMode={lightMode} 
        setLightMode={setLightMode}
        opacity={opacity}
        setOpacity={setOpacity}
      />

      <button className={lightMode ? 'ripple-button light' : 'ripple-button'}>
        Click Me
      </button>
    </div>
  );
}

