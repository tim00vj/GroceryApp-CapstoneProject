
import React,{ useState } from "react";
import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Signup} from "./Singup";

function App() {
  const [currentForm, setCurrentForm]= useState('Login');
  console.log(currentForm)

  const toggleForm = (formName) => {
    console.log("Toggle was called")
    console.log(formName)
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm=== "Login" ?<Login onFormSwitch={toggleForm} />: <Signup onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
