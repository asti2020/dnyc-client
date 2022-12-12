import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SignupForm({setUsers}) {
    const navigate = useNavigate()

    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birth_date, setBirthDate] = useState('')
    // const jwt_token = localStorage.getItem('jwt');

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: email,
                password: password,
                birth_date: birth_date,
                jwt_token: localStorage.getItem('jwt')
            })
        })
            .then((res) => res.json())
            .then((res) => {
                setUsers(res)
                console.log(res)
            })
           .catch((err) => {
                console.log(err)
            })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        setBirthDate('')
    }

    return (
        <div className='logPlace'>
        <div className="form-group">
            <h1 className="signupFormH">SignUp</h1>
            <form  className= "form" onSubmit={handleSubmit}>
                        <label>First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="First Name"
                            value={first_name}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label>Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Last Name" 
                            value={last_name}
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
                            value={birth_date}
                            onChange={(e) => setBirthDate(e.target.value)}
                        />
                        <button  className="submit" type="submit">Sign up</button>
            </form>
        </div>
        </div>
    )
}

export default SignupForm


// className="submit" type="submit">Sign up</button>
//             </form>