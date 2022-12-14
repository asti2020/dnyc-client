import React from 'react'
import { useState } from 'react'

function LoginForm({setUsers}) {
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: userEmail,
            password: userPassword
        }

        fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then(user => {
                    localStorage.setItem("jwt", user.token);
                    console.log(user);
                })
                    }
        })
    }
    return (
        <>
        <div className="form-group">
            <h1>Login</h1>
            <form className='form' onSubmit={handleSubmit}>
                <label>Email</label>
                <input 
                    className="form-control"  
                    type="email" 
                    name="email"
                    value={userEmail}
                    onChange = {(e) => setEmail(e.target.value)} 
                />
                <label>Password</label>
                <input 
                    className="form-control" 
                    type="password" 
                    name="password" 
                    value={userPassword} 
                    onChange = {(e) => setPassword(e.target.value)}
                />
                <button  className='submit' type="submit">Login</button>
            </form>
        </div>

        </>
    )
}
export default LoginForm