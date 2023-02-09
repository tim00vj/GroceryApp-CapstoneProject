import React,{useState} from "react"
export const Signup=(props) => {
    const[email,setEmail]= useState('');
    const[password,setPassword]= useState('');
    const[name,setName] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
    }

    return(
        <div className="auth-form-container">
        <form className="signup-form" onSubmit={handleSubmit}>
            <input value={name} name="name" id = "name" placeholder="Full Name" /> 
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter E-mail" id= "email" name="email"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id= "password" name="password"/>
            <button>SignUp</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch("Login")}> Already Registered? Login here. </button>
        </div>
    )
} 