import React from 'react'
import {  MdDelete } from "react-icons/md";
import { useNavigate } from 'react-router-dom'

function SaveTable({rentals, handleDelet}){
    const jwt_token = localStorage.getItem('jwt')
    console.log(rentals)
    const navigate = useNavigate()

    return (
        <>
        <div className="saveTable">
            <h1>Save Table</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>View</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Address</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        { rentals?.map((rental, index) => {
                            return(
                                <tr key={index}>
                                <th scope="row">{index}</th>
                                    <td> <img className="tableImage" src={rental.rental.image} alt={rental.rental.title}  /></td>
                                    <td>A:{rental.rental.title}</td>
                                    <td>B:{rental.rental.price}</td>
                                    <td>C:{rental.rental.address}</td>
                                    <td>
                                        <button className="but" onClick={(e)=>{
                                            e.preventDefault()
                                            handleDelet(rentals.filter((save) => save.id !== rental.id))
                                            fetch(`http://localhost:3000/save_rentals/${rental.id}`, {
                                                method: 'DELETE',
                                                headers: {
                                                    Authorization: "Bearer " + jwt_token,
                                                    'Content-Type': 'application/json'
                                                }})
                                            }  
                                        }
                                        ><MdDelete /></button>
                                    </td>
                            </tr>
                        )} )
                        }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th scope="row">1</th>
                                <td>Total</td>
                                
                            </tr>
                            </tfoot>
                </table>
        </div>
        
        </>
    )
}

export default SaveTable;