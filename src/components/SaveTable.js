import React from 'react'


function SaveTable(){
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
                        <th></th>
                        <th></th>
                        <th>Book</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">2</th>
                            <td>View</td>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Address</td>
                            <td></td>
                            <td></td>
                            <td>
                                <button className="btn btn-primary" onClick={() => {}}>Book</button>
                            </td>
                            <td>
                                <button className="btn btn-primary" onClick={() => {}}>Remove</button>
                            </td>
                        </tr>
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