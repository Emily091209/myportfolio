import logo from './lol.png';
import './App.css';
import Buttonds from './components/buttonds';
import Buttongh from './components/buttongh';
import Buttonsp from './components/buttonsp';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           Hi, <b>I'm &mi!</b><br></br>I'm a guy from Italy<br></br>that loves to code.
        </p>
        <div>
        <Buttonds />  <Buttongh />
        <br></br>
        <Buttonsp />  <Buttonpro />
        </div>
      </header>
    </div>
  );
}

export default App;
