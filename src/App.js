import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Users from './components/users/Users';
import New from './components/users/New';
import Edit from './components/users/edit/Edit';


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/users/new" component={New} />
      <Route exact path="/users/:id" component={Edit} />
      <Route exact path="/users/:id/edit" component={Edit} />
      </Switch>
    <Footer/>
    </>
  );
}

export default App;
