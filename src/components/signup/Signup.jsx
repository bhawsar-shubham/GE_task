import React from 'react'
import { useState} from 'react';
// import { useHistory } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [userErr,setUserErr]=useState(false);
    const [passErr,setPassErr]=useState(false);
    const [usermailErr,setUsermailErr]=useState(false);
    const [userpassErr,setUserPassErr]=useState(false);
    // const history = useHistory();

    function signupHandle(e){
        if(user.length===0 && password.length===0)
        {
            setUserErr(true)
            setPassErr(true)
        }

        else if(!user.length===0 || !user.includes("@")){
            setUsermailErr(true)
        }

        else
        {
            fetch("https://reqres.in/api/register", {
                    body: JSON.stringify({
                        email: user,
                        password: password
                    }),
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                    }).then(res => res.json())
                    .then(data =>{
                        localStorage.setItem("authToken", data.token);
                        console.log(data)
                        
                    })
                    // history.push('/login')
                    

            // // else{   
            //         fetch("https://reqres.in/api/register", {body: JSON.stringify({email:user, password:password}), method: "post", headers: {
            //             'Content-Type': 'application/json',
            //             }}).then(response=>{
            //             if (response.status===400){
            //                 setUserPassErr(true)
            //             }
                        
            //             else if (response.status===200){
            //                 console.log(response.json().then(res=>{console.log(res)})
            //                 )
            //                 history.push('/login')
            //                 alert("Register Successful!")
                            
            //             }
            //         })

            // // }
            
                
        }

        e.preventDefault()
        
    }
    
    return (
        <>
        <div className="container-fluid nav_bg mt-1">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
            <div className="container-fluid">
                <h1>Welcome to Signup page</h1>
                <form onSubmit={signupHandle}>
                    <div className="mb-3">
                    <label className="form-label">Username</label>
                    {userpassErr?<p style={{color:'red'}}>Invalid credentials, Please enter valid credentials.</p>:""}
                    <input type="text" onChange={event => setUser(event.target.value)} className="form-control" placeholder="name@example.com"/>
                    {userErr?<p style={{color:'red'}}>Please enter email</p>:""}
                    {usermailErr ?<p style={{color:'red'}}>Please enter valid email</p>:""}
                    </div>
                    <div className="mb-3">
                    <label className="form-label">password</label>
                    <input type="password" onChange={event => setPassword(event.target.value)} className="form-control" placeholder="*******"/>
                    {passErr?<p style={{color:'red'}}>Please enter password</p>:""}
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Signup</button>
                </form>
                <br/>
            </div>
            </div>
        </div>
        </div>
    </>
    )
}

export default Signup
