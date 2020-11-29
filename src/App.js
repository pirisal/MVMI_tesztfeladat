import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my very first js/react/hook/axios app.
        </p>
        <p>
          Scroll down for todos' titles!
        </p>
        <a
          className="PL-link"
          href="https://www.youtube.com/watch?v=Vcyes4spdGY"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch this if you dare. /Pirisa Levente/
        </a>
      </header>
    </div>
  );
}

export default App;
