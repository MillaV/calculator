import React, {useState} from 'react';
import './App.css';

function App() {

  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();
  const [tulos, setTulos] = useState();
  const [toiminto, setToiminto] = useState();
  const [merkki, setMerkki] = useState();

  const miinusta = () => {
    setToiminto('-');
  }

  const plussaa = () => {
    setToiminto('+');
  }

  const kerro = () => {
    setToiminto('*');
  }

   const jaa = () => {
    setToiminto('/');
  }

  const laskutoimitus = () => {
    setMerkki("=");
    const numeronumero1 = (parseFloat(numero1));
    const numeronumero2 = (parseFloat(numero2));

    if (toiminto== "-") {
      setTulos((numeronumero1-numeronumero2).toFixed(2));
    }
    else if (toiminto == "+") {
      setTulos((numeronumero1+numeronumero2).toFixed(2));
    }
    else if (toiminto == "*") {
      setTulos((numeronumero1*numeronumero2).toFixed(2));
    }
    else if (toiminto == "/") {
      setTulos((numeronumero1/numeronumero2).toFixed(2));
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
    setMerkki("");
  }

  return (

    
    <div className="App">

      <body className="App-wrapper">

        <header className="App-header">

          <h1>L A S K I N </h1>
        </header>

        <div className="screen">
          <p>{numero1} {toiminto} {numero2} {merkki} {tulos}</p>
        </div>

          <form>
            <label className="Bold">
              numero 1:
              <input className='App-input' type="number" value={numero1} onChange={(e)=>setNumero1(e.target.value)} />
            </label>
            </form>
            
            <form>
            <label className="Bold">
              numero 2:
              <input className='App-input' type="number" value={numero2} onChange={(e)=>setNumero2(e.target.value)} />
            </label>
          </form>

          <div className = "buttonBox">
              <button className="App-button" onClick={plussaa}> + </button>
              <button className="App-button" onClick={miinusta}> - </button>
              <button className="App-button" onClick={kerro}> x </button>
              <button className="App-button" onClick={jaa}> / </button>
              <button className='App-button' onClick={laskutoimitus}>=</button>
              <button className='App-button' onClick={nollaa}>nollaa</button>
          </div>



          
      
      </body>

    </div>

  );
}

export default App;
