import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TestForms from './components/TestForms';
import About from './components/About';
import Alert from './components/Alert';
import React , { useState } from 'react'
function App() {
  const [mode, setMode] = useState('grey');
  const [alert, setAlert] = useState(null);
  const showAlert=(massage,type)=>{
   setAlert({
    msg:massage,
    type:type
   })
   setTimeout(()=>{
    setAlert(null)
   },3000)
  }
  
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert('Drak has been enabled', 'success')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='black';
      showAlert('Light has been enabled', 'success')
    }
  }
  
  return (
    <>
      <div className="App">

        <Navbar title="Textutils" abouttext="Textforms"  mode={mode} toggleMode={toggleMode}/>
      </div>
      <Alert alert={{alert}}/>
      <div className='container my-3'>
    <TestForms heading='Text Area' mode={mode}/> 
    
     </div>
    {/* <div className="container my-3">
        <About />
      </div> */} 
      


    </>
  );
}
export default App;
