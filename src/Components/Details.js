import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


function Details(){
    const {id} = useParams();
    
    const [singleemployees, setSingleEmployees] = useState([])

    useEffect(() => {
     
        fetch('http://localhost:8000/employee/' + id)
        .then((response) => response.json())
        .then((data) => {
            setSingleEmployees(data)
        })
        .catch((error) => {
            console.log('This is the error: ', error)
        })
       
            
    },[id])

    return(
        <div className="card" style={{textAlign: "left"}}>

            <div className="card-title">

                <h2>Employee Details: </h2>

            </div>

            <div className="card-body">

                {singleemployees ? (
                    <div>
                        <h2>The employee name is: <b>{singleemployees.name}</b> ({singleemployees.id})</h2>
                        <h3>Contact Details</h3>
                        <h5>Email: {singleemployees.email}</h5>
                        <h5>Phone: {singleemployees.phone}</h5>
                        <Link className="btn btn-success" to='/'>Back to Listing</Link>
                    </div>

                ):(
                    <p>Loading</p>
                )
                    
                }
            </div>
            
        </div>
    )
}

export default Details