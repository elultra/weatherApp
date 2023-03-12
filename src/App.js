import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header';
import Wave from './components/Wave/Wave';

function App() {
      const [country, setCountry] = useState("");
      const handleChange = (val) => {
            setCountry(val)
      }
      return (
            <div className='App flex flex-col overflow-auto relative w-ful h-[100vh]'>
                  <Header onChange={handleChange} />
                  <div className="mt-16 md:min-w-7/12 md:w-8/12 md:max-w-9/12 m-auto bg-white/10 rounded-lg shadow-lg overflow-x-auto z-10 xs:w-full">
                        <Card country={country} />
                  </div>
                  <div className='bottom-0 hidden md:block'> 
                        <Wave />
                  </div>
            </div>
      );
}

export default App;
