import logo from './lol.png';
import './App.css';
import Buttonds from './components/buttonds';
import Buttongh from './components/buttongh';
import Buttonsp from './components/buttonsp';
import Buttonpro from './components/buttonpro';

function App() {
  return (
    <div className="App">
        <div class="neve_cadente">
         <div class="neve"></div>
         <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={logo} className="App-logo" alt="logo" /></a>

          <p>
             Hi, <b>I'm &mi!</b><br></br>I'm a guy from Italy<br></br>that loves to code.
          </p>
         <div className='button'>
            <Buttonds />  <Buttongh />
                <br>
                </br>
             <Buttonsp />  <Buttonpro />
            </div>
        </div>
    </div>
  );
}

export default App;
