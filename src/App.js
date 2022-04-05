import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}
function Loadingscreen() {
  return (
    <div className="Loadingscreen">
      <header className="Loadingscreen-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to <code>Project Atlas</code>!
        </p>
        <p>
          Redesigning Space Exploration for you.
        </p>
      </header>
    </div>
  );
}
/*
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
*/
export default App;
