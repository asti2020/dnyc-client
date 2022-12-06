import React from 'react'
import {  MdDelete } from "react-icons/md";


function SaveTable({rentals}){
    console.log(rentals)
    // console.log(myrentals + "i am myrentals")
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
                                <th scope="row">2</th>
                                    <td> <img className="tableImage" src={rental.image} alt={rental.title}  /></td>
                                    <td>A:{rental.title}</td>
                                    <td>B:{rental.price}</td>
                                    <td>C:{rental.address}</td>
                                    <td>
                                        <button className="but" onClick={() => {}}><MdDelete /></button>
                                    </td>
                            </tr>
                         )} )} 
                        {/* {rentals.map((rental, index) => {
                            return(
                                <tr key={index}>
                                <th scope="row">2</th>
                                    <td> <img src={rental.image} alt={rental.title}  /></td>
                                    <td>A:{rental.title}</td>
                                    <td>B:{rental.price}</td>
                                    <td>C:{rental.address}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => {}}>Book</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => {}}>Remove</button>
                                    </td>
                            </tr>
                        )} )} */}
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

export default SaveTable