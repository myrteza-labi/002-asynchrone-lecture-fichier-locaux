import './App.css';
import React, {useState} from 'react'; 

function App() {
  const [count, setCount] = useState(0); 



  const generate = async () => {
    return new Promise((resolve) => {
      let i = 0; 
      const incrementCount = () => {
        setCount(prev => prev +1); 
        i++; 

        if( i< 5000000 ) {
          requestAnimationFrame(incrementCount); 
        } else {
          resolve(); 
        }
      }; 
      incrementCount(); 
    })
  }

  const handleGenerateClick = async () => {
    await generate(); 
  }

  return (
    <div className="App">
     <input type="file" id="inputFile"/>
     <button onClick={handleGenerateClick} >Generate</button>
     <p>{count}</p>
     <input type="text" />
    </div>
  );
}

export default App;
