import React from 'react';
import { NavLink } from 'react-router-dom';

const Show = () => {

    const [users, setUsers] = React.useState([]);

    const f = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    const json = await res.json();
    setUsers(json.data);
    };
    React.useEffect(() => {
    f();
    }, []);
    
    const removeUser = (e, id) => {
        e.preventDefault();
        setUsers(users.filter((t) => t.id !== id));
      };

    return (
        <>
            <div className="container-fluid nav_bg mt-1">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="container-fluid">
                    <h1>Welcome to Users Page</h1>
                    <h1 align="right">
                    <NavLink activeClassName="ac" className="nav-link active" aria-current="page" to="/users/new">
                        <button type="submit" className="btn btn-outline-primary">Create User</button></NavLink></h1>
                    
                    <table className="table">
                        <tbody>
                            <tr>
                            <th>Id</th>
                            <th>First Name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th>Photo</th>
                            <th>Delete</th>
                            <th>Edit</th>
                            <th>Show</th>
                            </tr>
                            
                            {users.map(item => (
                            <tr key={item.id}>
                            <td>{item.id}</td> 
                            <td>{item.first_name}</td> 
                            <td>{item.last_name} </td>
                            <td>{item.email}</td>
                            <td><img key={item.avatar} src={item.avatar} alt="" /></td>
                            <td>
                            <button onClick={(e)=>removeUser(e,item.id)} type="submit" className="btn btn-outline-danger">Delete</button>
                            </td>
                            <td>
                            <NavLink activeClassName="ac" className="nav-link active" aria-current="page" to={`/users/edit/${item.id}`}>
                            <button type="submit" className="btn btn-outline-warning">Edit</button></NavLink>
                            </td>
                            <td>
                            <NavLink activeClassName="ac" className="nav-link active" aria-current="page" to={`/users/${item.id}`}>
                            <button type="submit" className="btn btn-outline-primary">Show</button></NavLink>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>    
                    
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Show
