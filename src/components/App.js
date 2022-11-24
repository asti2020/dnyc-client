
import '../App.css';
import React from'react';
import { useState, useEffect } from'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NavListing from './NavListing';
import ListingRental from './ListingRental';
import Profile from './Profile';

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
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
      fetch("http://localhost:3000/rentals")
      .then((res) => res.json())
      .then((data) => setRentals(data))
  }, [])

function newRental(newRental) {
  setRentals([...rentals, newRental])
  console.log(newRental + "nputa")
}
  return (
    <div className="App">
      <NavListing user={user} />
      <Routes>
        <Route path="/login" element={<Login setUsers={setUser}/>} />
        <Route path="/" element={<Home rentals={rentals} />} />
        <Route path="/add" element={<ListingRental newRental={newRental} />} />
        <Route path="/profile" element={<Profile user={user} rental={rentals} />} />
      </Routes>
    </div>
  );
  }
export default App;
