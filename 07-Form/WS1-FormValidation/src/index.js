import './index.css';
import React,{useState}from 'react';
import { createRoot } from 'react-dom/client';
import Item from "./component/item.jsx";


// React
function App() {
    const [email,setMail] = useState("");
    const [password,setPassword] = useState("");


    const onEmailChangeHandeler =(event)=>{
        setMail(event.target.value);
    }
    const onPasswordChange =(event)=>{
        setPassword(event.target.value);
    }
    const onSubmitHandeler=(event)=>{
        event.preventDefault();
        console.log(event);
    }
    return (
        <div className="app">
            <h1>Sing Up</h1>
            <form className="form__register">
                <input onChange={onEmailChangeHandeler} value={email} type="email" placeholder="Email"></input>
                <input onChange={onPasswordChange} value={password}type="password" placeholder="Enter Password"></input>
                <input type="password" placeholder="Confirm Password"></input>
                <button type ="submit" onClick={onSubmitHandeler}>Sing in</button>
            </form>
        
        </div>
    );
}

// ReactDOM
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App />);
