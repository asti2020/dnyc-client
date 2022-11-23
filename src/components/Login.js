import React from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
// import { useHistory } from 'react-router-dom'

function Login({setUsers}) {
    return (
        <>
        <div className='logPlace'>
            <div>
                <LoginForm />
            </div>
            <div >
                <SignupForm setUsers={setUsers}/>
            </div>
        </div>
        </>
    )
}
export default Login
