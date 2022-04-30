import React, { useState } from 'react';
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    } from 'firebase/auth';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [account, setAccount] = useState(true);
    const [error, setError] = useState("");

    const onSubmit = async(e) => {
        e.preventDefault();
        const auth = getAuth();
        let data
        try{
            if(account){
              data = await createUserWithEmailAndPassword(auth, email, password);
            }else {
              data = await signInWithEmailAndPassword(auth,email, password);
            }
            console.log("data:" + data)
        }
        catch(error){
            setError(error.message)
        }
    };

    const onChange = (e) => {

        const {name,value} = e.target

        if(name == "email"){
            setEmail(value)
        }else if(name == "password"){
            setPassword(value)
        }
    };

    const toggleAccount = () => {
        setAccount((prev)=>!prev)
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                onChange={onChange} 
                name="email"
                type="email" 
                placeholder="email" 
                required 
                value={email}/>
                <input 
                onChange={onChange} 
                name="password"
                type="password" 
                placeholder="password" 
                required 
                value={password}/>
                <input type="submit" value={account? "createAccount" : "Log In"} />
                {error}
                <div>
                <button onClick={toggleAccount}>
                    {account? "Log In" : "createAccount"}
                </button>
                
                <button>
                    continue Google
                </button>
                <button>
                    continue Github
                </button>
                </div>
            </form>
        </div>
    );
};

export default Auth;