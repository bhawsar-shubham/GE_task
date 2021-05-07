import React from 'react'
import { useState} from 'react';


const New = () => {
    const [user, setUser] = useState('')
    const [job, setJob] = useState('')
    const [Err,setErr]=useState(false);
    const [userErr,setUserErr]=useState(false);
    const [jobErr,setJobErr]=useState(false);

    function newUser(e){
        if(user.length===0 && job.length===0)
        {
            setUserErr(true)
            setJobErr(true)
        }
        else{
        fetch("https://reqres.in/api/users", {body: JSON.stringify({name:user, job:job}), method: "post", headers: {
                        'Content-Type': 'application/json',
                        }}).then(response=>{
                        if (response.status===400){
                            setErr(true)
                        }
                        
                        else if (response.status===201){
                            console.log(response.json().then(res=>{console.log(res)})
                            )
                            alert("New user added successful!")
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
                    <h1>Welcome to Users new page</h1>
                    <h2 align="center" style={{background:'grey'}}>Add a new user</h2>

                    <form onSubmit={newUser}>
                        <div className="mb-3">
                        {Err?<p style={{color:'red'}}>Invalid details.</p>:""}
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

export default New
