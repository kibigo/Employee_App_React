import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";


function Create() {


    const [formData, setFormData] = useState({
        id: "",
        name: "",
        email: "",
        phone: "",
        isActive: true
    })

    const [validate, setValidate] = useState(false)

    const handleChange = (event) => {
        const key = event.target.id
        const value = event.target.value

        setFormData({ ...formData, [key]: value })
    }

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()

        
        const objBody = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            isActive: true
        }

        fetch(' http://localhost:8000/employee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(objBody)
        })
            .then((response) => {
                alert('Saved successfully')
                navigate('/')
            })
            .catch((error) => {
                console.log('This is the error', error)
            })
    }

    return (
        <div>

            <div className="row">

                <div className="offset-lg-3 col-lg-6">

                    <form className="container" onSubmit={handleSubmit}>

                        <div className="card" style={{ textAlign: 'left' }}>

                            <div className="card-title">

                                <h2>Create Employee</h2>

                                <div className="card-body">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={formData.id} disabled="disabled" className="form-control"></input>
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={formData.name} onMouseDown={(e) => setValidate(true)} onChange={handleChange} className="form-control" id="name"></input>
                                            {formData.name.length == 0 && validate && <span className="text-danger">Enter a valid name</span>}
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={formData.email} onChange={handleChange} className="form-control" id="email"></input>
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={formData.phone} onChange={handleChange} className="form-control" id="phone"></input>
                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input value={formData.isActive} onChange={handleChange} type="checkbox" className="form-check-input" id="isActive"></input>

                                            <label className="form-check-label">Is Active</label>

                                        </div>

                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success" type="submit">Save</button>
                                            <Link to='/' className="btn btn-danger">Back</Link>
                                        </div>

                                    </div>






                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}


    export default Create