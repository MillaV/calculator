import React, {useState} from 'react';
import './App.css';
import calculatorLogo from './calculatorLogo.svg';

function App() {

  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [tulos, setTulos] = useState();
  const [toiminto, setToiminto] = useState();

  const miinusta = () => {
    setToiminto('-');
  }

  const plussaa = () => {
    setToiminto('+');
  }

  const kerro = () => {
    setToiminto('*');
  }

  const laskutoimitus = () => {
    const numeronumero1 = (parseInt(numero1));
    const numeronumero2 = (parseInt(numero2));

    if (toiminto== "-") {
      setTulos(numeronumero1-numeronumero2);
    }
    else if (toiminto == "+") {
      setTulos(numeronumero1+numeronumero2);
    }
    else if (toiminto == "*") {
      setTulos(numeronumero1*numeronumero2);
    }
    else {
      console.log("error")
    }
  }

  const nollaa = () => {
    setNumero1("");
    setNumero2("");
    setToiminto("");
    setTulos("");
  }

  return (

    
    <div className="App">

      <body className="App-body">

        <header className="App-header">
          <img className="App-logo"  src={calculatorLogo} alt="Calculator logo"/>
          <h1>Laskin</h1>
        </header>

          <form>
            <label className="Bold">
              Numero 1:
              <input className='App-input' type="number" value={numero1} onChange={(e)=>setNumero1(e.target.value)} />
            </label>
            </form>
            
            <form>
            <label className="Bold">
              Numero 2:
              <input className='App-input' type="number" value={numero2} onChange={(e)=>setNumero2(e.target.value)} />
            </label>
          </form>
        
          <button className="App-button" onClick={plussaa}> + </button>
          <button className="App-button" onClick={miinusta}> - </button>
          <button className="App-button" onClick={kerro}> x </button>
          <div></div>
          <button className='App-button2' onClick={laskutoimitus}>=</button>
          <button className='App-button2' onClick={nollaa}>Nollaa</button>
        
          <p>Laskutoimitus: {numero1} {toiminto} {numero2}</p>
          <p className="Bold">Tulos: {tulos}</p>

      </body>

    </div>

  );
}

export default App;
