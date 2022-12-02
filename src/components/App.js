
import '../App.css';
import React from'react';
import { useState, useEffect } from'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NavListing from './NavListing';
import ListingRental from './ListingRental';
import Profile from './Profile';
import UpdateRental from './UpdateRental';
import PreviewPage from './PreviewPage';
import  CalenderEve  from './CalenderEve';
import Save from './Save';
// import CalenderEve from './CalenderEve';
// import Rental from './Rental';

function App() {
  const [user , setUser] = useState({});
  const jwt_token = localStorage.getItem('jwt');
  // console.log(jwt_token);
  useEffect(() => {
    fetch('http://localhost:3000/me',{
      method: 'GET',
      headers: {
        Authorization: "Bearer " + jwt_token,
        "Content-Type": "application/json"
      }, 
    })
    .then((res) => res.json())
    .then((dbuser) => {
      // console.log(user + "i am inside the me ");
      setUser(dbuser);
    });
  }, [jwt_token]);
  // console.log(user.first_name + "i am outside the me ");

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
function handleDeleteItem(deletedItem) {
  const updatedItems = rentals.filter((item) => item.id !== deletedItem.id);
  setRentals(updatedItems);
}

  return (
    <div className="App">
      <NavListing user={user} />
      <Routes>
        <Route path="/login" element={<Login setUsers={setUser}/>} />
        <Route path="/" element={<Home rentals={rentals} />} />
        <Route path="/add" element={<ListingRental newRental={newRental} />} />
        <Route path="/profile" element={<Profile handleDeleteItem={handleDeleteItem} user={user} rental={rentals} />} />
        <Route path="/rental/:id/edit" element={<UpdateRental user={user} />} />
        <Route path="/rental/:id" element={<PreviewPage user={user} />} />
        <Route path="/cal" element={<CalenderEve user={user} />} />
        <Route path="/save" element={<Save rental={rentals} />} />
      </Routes>
    </div>
  );
  }
export default App;
