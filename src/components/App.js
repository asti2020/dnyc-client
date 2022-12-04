
import '../App.css';
import React from'react';
import { useState, useEffect } from'react';
import { Routes, Route, useMatch } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NavListing from './NavListing';
import ListingRental from './ListingRental';
import Profile from './Profile';
import UpdateRental from './UpdateRental';
import PreviewPage from './PreviewPage';
import  CalenderEve  from './CalenderEve';
import Save from './Save';
import Footer from './Footer';
import ErrorRoute from '../ErrorRoute';

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

const[search, setSearch] = useState("");

const filtredRentals = rentals.filter((rental) => {
  return rental.title.toLowerCase().includes(search.toLowerCase());
})

const match = useMatch("/rentals/:id");
console.log(match + " i am match console")
  return (
    <div className="App">
      <NavListing user={user} />
      <Routes>
        <Route path="/login" element={<Login setUsers={setUser}/>} />
        <Route path="/" element={<Home search={search} setSearch={setSearch} rentals={filtredRentals} />} />
        <Route path="/add" element={<ListingRental newRental={newRental} />} />
        <Route path="/profile" element={<Profile handleDeleteItem={handleDeleteItem} user={user} rental={rentals} />} />
        <Route path="/rental/:id/edit" element={<UpdateRental rental={rentals}user={user} />} />
        <Route path='/rentals/:id'element={<PreviewPage rentals={filtredRentals} user={user} />} />
        <Route path="/cal" element={<CalenderEve user={user} />} />
        <Route path="/save" element={<Save rental={rentals} />} />
        <Route path="*" element={<ErrorRoute />} />
      </Routes>
      <Footer />
    </div>
  );
  }
export default App;
