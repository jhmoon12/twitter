import React, { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const onSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {

        const {name,value} = e.target
        if(name == "email"){
            setEmail(value)
        }else if(name == "password"){
            setPassword(value)
        }


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
                <input type="submit" value="Log in" />
                <div>
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