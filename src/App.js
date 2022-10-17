// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert  from "./components/Alert";
import About from "./components/About";
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert]=useState(null)

  const toggleMode = () =>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success')
      document.title='CPTEXT APP-Light Mode';
      // setInterval(() => {
      //   document.title='Please install cptext app'
      // }, 2000);
      // setInterval(() => {
      //   document.title='Best cptext app'
      // }, 1500);
    }
    else
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert('Dark mode has been enabled','success')
      document.title='CPTEXT APP-Dark Mode';
    }
  }

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }


  return (
    <>
    <BrowserRouter>
    <Navbar title='CPTEXT' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>

    <Routes>
      <Route exact path="/" element={<TextForm name='Analyze CPEARNINGS Text Below:' mode={mode} showAlert={showAlert}/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    
    </BrowserRouter>



    
    </>
  );
}

export default App;
