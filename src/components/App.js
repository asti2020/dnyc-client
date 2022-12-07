
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
import Save from './Save';
import Footer from './Footer';
import ErrorRoute from './ErrorRoute';
import Map from './Map.js';
import Contact from './Contact';
import ThankYou from './ThankYou';
import SignupForm from './SignupForm';

function App() {
  const [user , setUser] = useState({});
  const jwt_token = localStorage.getItem('jwt');
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
  }, []);
  // console.log(user.first_name + "i am outside the me ");

  const [rentals, setRentals] = useState([]);


  useEffect(() => {
      fetch("http://localhost:3000/rentals")
      .then((res) => res.json())
      .then((data) => {
        console.table(data)
        setRentals(data);
      })
  }, []);
  
function newRental(newRental) {
  setRentals([...rentals, newRental])
}




const handleUpdateRental = (updatedRental) => {
  const updatedRentals = rentals.map((rental) => {
    if (rental.id === updatedRental.id) {
      return updatedRental;
    } else {
      return rental;
    }
  });
  setRentals(updatedRentals);
}

const[search, setSearch] = useState('');
// const filtredRentals = rentals.filter((rental) => {
//   return rental.title.toLowerCase().includes(search.toLowerCase());
// })

console.log(rentals.user_id)

const match = useMatch("/rentals/:id");
console.log(match + " i am match console")
  return (
    <div className="App">

      <NavListing user={user} />
      <Routes>
        <Route path="*" element={<ErrorRoute />} />
        <Route path="/up" element={<SignupForm setUsers={setUser}/>} />
        <Route path="/login" element={<Login setUsers={setUser}/>} />
        <Route path="/" element={<Home search={search} setSearch={setSearch} rentals={rentals } />} />
        <Route path="/add" element={<ListingRental newRental={newRental} />} />
        <Route path="/profile" element={<Profile  user={user} setRentals={setRentals} rentals={rentals}  />} />
        <Route path="/rental/:id/edit" element={<UpdateRental handleUpdateRental={handleUpdateRental} rental={rentals}user={user} />} />
        <Route path='/rentals/:id'element={<PreviewPage rentals={rentals} user={user} />} />
        <Route path="/save" element={<Save rental={rentals} />} />
        <Route path="*" element={<ErrorRoute />} />
        <Route path="/map" element={<Map  rentals={rentals}/>} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/thankYou" element={<ThankYou />} />
        <Route path="/rentals" element={<ListingRental  rentals={rentals}/>} />
      </Routes>
      <Footer />
    </div>
  );
  }

export default App;
