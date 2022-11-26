import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import ClickCounter from './components/ClickCounter';
import Counter2 from './components/Counter2';

function App() {
  return (
    <div>
      {/* <Counter render={(count, handleCount) => 
        <ClickCounter count={count} handleCount={handleCount} />} /> */}
      <Counter2>
        {(count, handleCount) => 
        <ClickCounter count={count} handleCount={handleCount} />}
      </Counter2>
    </div>
  );
}

export default App;
