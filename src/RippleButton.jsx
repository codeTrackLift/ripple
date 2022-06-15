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
      <h1 style={{margin:'0 auto'}}>click button to make a ripple</h1>
      <div>
        <label htmlFor="colorpicker">background color: </label>
        <input 
          type="color" 
          id="colorpicker" 
          value={color}
          onChange={onChange}
        ></input>
      </div>
      <div>
        <span htmlFor='buttonColor'>button color: </span>
        <button 
          onClick={() => setLightMode(!lightMode)}
        >{lightMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>

      <button 
        className={lightMode ? 'ripple-button light' : 'ripple-button'}
      >Click Me</button>
    </div>
  );
}

setTimeout(addListener);
