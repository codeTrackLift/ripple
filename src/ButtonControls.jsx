import { useEffect, useState } from 'react';

const buttonStyle = {
  backgroundColor: 'rgb(50,50,50)',
  color: 'white',
  padding: '0.5rem 1rem',
  border: '1px solid white',
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
}

const inputStyle = {
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
}

const h1Style = {
  margin:'-2rem auto 0 auto'
}

const h2Style = {
  margin:'-2rem auto 0 auto',
  color: 'black',
  textShadow: '1px 1px 1px white'
}

export const ButtonControls = ({lightMode, setLightMode, opacity, setOpacity}) => {
  const [color, setColor] = useState('#303030');

  const onChange = (e) => {
    setColor(e.target.value);
  }

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color])

  return (
    <>
      <h1 style={h1Style}>Ripple Button</h1>
      <h2 style={h2Style}>UI Experiment</h2>
      <div>
        <label htmlFor="colorpicker">background color: </label>
        <input 
          type="color" 
          id="colorpicker" 
          value={color}
          onChange={onChange}
          style={inputStyle}
        ></input>
      </div>
      <div>
        <span htmlFor='buttonColor'>button variant: </span>
        <button 
          onClick={() => setLightMode(!lightMode)}
          style={buttonStyle}
        >{lightMode ? 'Light Mode' : 'Dark Mode'}</button>
      </div>
      <div>
        <label htmlFor='opacity'>ripple opacity: </label>
        <input
          id='opacity'
          min='0.1'
          max='1'
          step='0.1'
          type='range'
          value={opacity}
          onChange={(e) => setOpacity(e.target.value)}
          style={inputStyle}
        >
        </input>
      </div>
    </>
  )
}
