import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Body />
      </header>
    </div>
  );
}

export default App;
