import React from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Route path='/login' component={Login} />
        <Route path='/register' component={SignUp} />
        <Route path='/restore-password' component={ForgotPassword} />
        <Route path='/user/:id' component={Profile} />
        
        {/* <Header />
        <NavBar />
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
