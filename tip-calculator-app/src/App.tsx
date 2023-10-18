import { useEffect } from 'react';
import { useState } from 'react';


//import img
import logo from  "../assets/images/logo.svg"

//components
import  Display from "./components/Display.jsx";
import Form from  './components/Form.jsx';

function App() {
  const [bill, setBill] = useState("");
  const {tip, setTip} = useState("");
  const [people, setPeople] = useState("");
  const[calculatedTip, setCalculatedTip] = useState(0);
  const[Total, setTotal] = useState(0);


  usaEffect(() => {
    if(bill > 0 && people > 0 && tip > 0){
      setCalculatedTip(bill * (tip / 100));
      setTotal(calculatedTip + bill)
    }
  }, [bill, people, tip, calculatedTip])

  const handleResetBtn = (e) => {
    setBill("");
    setTip("");
    setPeople("");
    setCalculatedTip(0);
    setTotal(0);
  }

  return (
    <div className="wrapper">
      <img src={logo} alt="splitter logo" />
      <div className="container">
        <Form 
          bill={bill} 
          setBill={setBill}
          tip={tip} 
          setTip={setTip}
          people={people} 
          setPeople={setPeople}
        />
        <Display 
        Total = {Total}
        people = {people}
        calculatedTip = {calculatedTip}
        handleResetBtn = {handleResetBtn}

        />
      </div>
    </div>
  )
}

export default App
