import React from 'react';

const Users = () => {

    const [users, setUsers] = React.useState([]);

    const f = async () => {
    const res = await fetch("https://reqres.in/api/users/1");
    const json = await res.json();
    setUsers(json.data);
    };
    React.useEffect(() => {
    f();
    }, []);
    
    return (
        <>
            <div className="container-fluid nav_bg mt-1">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="container-fluid">
                    <h1>Welcome to Show Single Users Page</h1><br/>

                    <table className="table">
                        <tbody>
                            <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Photo</th>
                            </tr>
                            
                            <tr key={users.id}>
                            <td>{users.id}</td> 
                            <td>{users.first_name}</td> 
                            <td>{users.last_name} </td>
                            <td>{users.email}</td>
                            <td><img key={users.avatar} src={users.avatar} alt="" /></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Users
