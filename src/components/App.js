
import '../App.css';
import React from'react';
import { useState, useEffect } from'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NavListing from './NavListing';

function App() {
  const [user , setUser] = useState({});
  const jwt_token = localStorage.getItem('jwt');
  console.log(jwt_token);
  useEffect(() => {
    fetch('/me',{
      method: 'GET',
      headers: {
        Authorization: "Bearer" + jwt_token,
        "Content-Type": "application/json"
      }, 
    })
    .then((res) => res.json())
    .then((user) => {
      console.log(user.first_name);
      setUser(user);
    });
  }, [ jwt_token ]);
  console.log(user)
  return (
    <div className="App">
      <NavListing />
      <Routes>
        <Route path="/login" element={<Login setUsers={setUser}/>} />
        <Route path="/" element={<Home user={user} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
  }
export default App;
