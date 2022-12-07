import React, { useEffect } from 'react';
import SaveTable from './SaveTable';
import {useState } from 'react';
import { useParams } from 'react-router-dom';

function Save(){
    const [saves, setSave] = useState([]);
    const jwt_token = localStorage.getItem('jwt');
const {id} = useParams();
    useEffect(() => {
        fetch('http://localhost:3000/save_rentals',{
            method: 'GET',
            headers: {
                Authorization: "Bearer " + jwt_token,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data + "save responce");
                setSave(data);
            console.log(data + "i am came from save list and rental")
        })
    }, []);




    console.log(saves[0]?.rental + "i am came from save list and rental")
    // console.log(saves    + "i am came from save list and rental")
    console.log(saves + "i am came from save list")
    return (
        <div className="save">
            <SaveTable handleDelet={setSave} rentals={saves}/>
        </div>
    )
}

export default Save;