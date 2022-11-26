import React from "react";
import Greet from './components/Greet';

function App() {
  return (
    <div>
      <Greet name="Shan" role="Dev">
        <p>This is children props</p>
      </Greet>
      <Greet name="Amal" role="QA">
        <button>test</button>
      </Greet>
      <Greet name="Saman" role="BA" />
    </div>
  );
}

export default App;
