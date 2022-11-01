import './App.css';
import React from 'react';
import { Component } from 'react';

import SignIn from './pages/sign-in.component';
import HomePage from './pages/homepage/homepage.component';



class App extends React.Component{

  render(){
    return (
    
      <div>
          <HomePage/>
      </div>
      
    );
  }
  
}

export default App;


{/* <Header currentUser = {this.state.currentUser} />
        <Routes>
          <Route path="" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
      </Routes> */}