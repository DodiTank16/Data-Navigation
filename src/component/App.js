import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter , Routes } from 'react-router-dom'
import '../index.css';
import About from '../component/About'
import Contact from '../component/Contact'
import Header from '../component/Header';
import Footer from '../component/Footer';
import Home from '../component/Home';

function App(){
  const routing = (
    <BrowserRouter>
    <div>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      <Footer/>
    </div>
  </BrowserRouter>
  ) 
ReactDOM.render(routing, document.getElementById('root'));  
}

export default App

