import logo from './logo.svg';
import './App.css';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div>
      <ClickCounter name="Jake" />
      <HoverCounter name="Carl" />
    </div>
  );
}

export default App;
