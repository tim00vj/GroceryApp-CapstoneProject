import React, { useState } from "react"
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
                
            <form className="login-form" onSubmit={handleSubmit}>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter E-mail" id="email" name="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type >Login</button>
            </form>
            <button className="link-btn" onClick={props.onFormSwitch}>Don't have an account? Create new one.</button>
        </div>
    
    )
} 