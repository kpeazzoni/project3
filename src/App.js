import React, { useState } from "react";
import './App.css';
import NewClientForm from './components/NewClientForm/NewClientForm'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import ClientsContainer from './components/ClientsContainer/ClientsContainer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home/> */}
      <NewClientForm />
      {/* <ClientsContainer /> */}
      <Footer/>

    </div>
  );
}

export default App;
