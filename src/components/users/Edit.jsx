import React from 'react'
import { useState} from 'react';


const Edit = () => {
    const [user, setUser] = useState('')
    const [job, setJob] = useState('')
    const [userErr,setUserErr]=useState(false);
    const [jobErr,setJobErr]=useState(false);

    function newUser(e){
        if(user.length===0 && job.length===0)
        {
            setUserErr(true)
            setJobErr(true)
        }
        else{
        fetch("https://reqres.in/api/users/2", {body: JSON.stringify({name:user, job:job}), method: "put", headers: {
                        'Content-Type': 'application/json',
                        }}).then(response=>{
                        if (response.status===200){
                            console.log(response.json().then(res=>{console.log(res)})
                            )
                            alert("Updated user successful!")
                        }
                        
                    })
                }
        e.preventDefault()
    }

    return (
        <>
            <div className="container-fluid nav_bg mt-1">
            <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <div className="container-fluid">
                    <h1>Welcome to Edit user page</h1>
                    <h2 align="center" style={{background:'grey'}}>Edit user</h2>

                    <form onSubmit={newUser}>
                        <div className="mb-3">
                        
                        <label className="form-label">Username</label>
                        <input type="text" onChange={event => setUser(event.target.value)} className="form-control" placeholder="name@example.com"/>
                        {userErr?<p style={{color:'red'}}>Please enter username</p>:""}
                        </div>
                        <div className="mb-3">
                        <label className="form-label">Job</label>
                        <input type="text" onChange={event => setJob(event.target.value)} className="form-control" placeholder="name@example.com"/>
                        {jobErr?<p style={{color:'red'}}>Please enter job</p>:""}
                        </div>
                        <button type="submit" className="btn btn-outline-primary">submit</button>
                    </form>

                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Edit
