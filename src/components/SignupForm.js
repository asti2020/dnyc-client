import React from 'react'
import { useState } from 'react'

function SignupForm({setUsers}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthDate, setBirthDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                birthDate
            })
            })
            .then((res) => res.json())
            .then((res) => {
                setUsers(res)
                console.log(res)
            })
    }
    return (
        <div className="form-group">
            <h1 className="signupFormH">SignUp</h1>
            <form  className= "form" onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Last Name" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            placeholder="Email Address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    
                        <label>Birth Date</label>
                        <input  
                            type="date" 
                            className="form-control" 
                            placeholder="Birth Date" 
                            value={birthDate}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                        <button className="submit" type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default SignupForm
