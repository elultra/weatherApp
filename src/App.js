import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header';
import Wave from './components/Wave/Wave';

function App() {
      const [country, setCountry] = useState("");
      const handleChange = (val) =>{
            setCountry(val)
      }
  return (
      <div className='App'>
            <Header onChange={handleChange}/>
            <Card country={country}/>
            <Wave />
      </div>
  );
}

export default App;
