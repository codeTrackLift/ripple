import "./App.css";
import { addListener } from './ripple.js';

const buttonStyle = {
  display: 'inline-grid',
  placeItems: 'center',
  position: 'relative',
  isolation: 'isolate',
  appearance: 'none',
  cursor: 'pointer',
  fontSize: '3rem',
  padding: '2rem 6rem',
  textTransform: 'uppercase',
  backgroundColor: 'transparent',
  color: 'hsl(200 100% 65%)',
  border: '5px solid currentColor',
  borderRadius: '0.125rem',
}

function App() {
  return (
    <div className="App">
      <button className="ripple-button" style={buttonStyle}>Click Me</button>
    </div>
  );
}

setTimeout(addListener);

export default App;
