import logo from './logo.svg';
import './App.css';

import { useFlag } from '@unleash/proxy-client-react';

const TestComponent = () => {
  const enabled = useFlag('hello-zkan');

  console.log(enabled)

  if (enabled) {
    return <h1>Hello</h1>;
  } else {
    return <h1>No...</h1>
  }
};

function App() {
  return (
    <div className="App">
      <TestComponent />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
