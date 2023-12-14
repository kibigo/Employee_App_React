import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";


function Emplisting(){
    const [employees, setEmployee] = useState([])
    const navigate = useNavigate()

    const loadDetails = (id) => {
        navigate('/employee/detail/' + id)
    }

    const loadEdit = (id) => {
        navigate('/employee/edit/' + id)

    }

    const removeData = (id) => {
        if (window.confirm ('Do you want to remove ?')){
            fetch('http://localhost:8000/employee/' + id, {
                method:'DELETE',
            })
            .then((response) => {
                alert('Deleted Successfully')
                window.location.reload();
            })
            .catch((error) => {
                console.log('This is the error: ', error)
            })
        }
    }

    useEffect(() => {
        fetch('http://localhost:8000/employee')
        .then((response) => response.json())
        .then((jsonData) => setEmployee(jsonData))
        .catch((error) => {
            console.log('This is the error', error)
        })
    }, [])
  
   
    return(
        <div className="container">

            <div className="card">

                <div className="card-title">
                    <h2>Employee listing</h2>

                </div>
                
                <div className="card-body">

                    <div className="divbtn">
                        <Link to='employee/create' className="btn btn-success">Add New (+)</Link>
                    </div>

                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Phone</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                employees.map((employee) => (
                                    <tr key={employee.id}>
                                        <td>{employee.id}</td>
                                        <td>{employee.name}</td>
                                        <td>{employee.email}</td>
                                        <td>{employee.phone}</td>
                                        <td>
                                            <a onClick={() => loadEdit(employee.id)} className="btn btn-success">Edit</a> &nbsp;
                                            <a onClick={() => removeData(employee.id)} className="btn btn-danger">Remove</a> &nbsp;
                                            <a onClick={() => loadDetails(employee.id)} className="btn btn-primary">Details</a> &nbsp;
                                        </td>
                                    </tr>
                                ))
                            }


                            
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}


export default Emplisting