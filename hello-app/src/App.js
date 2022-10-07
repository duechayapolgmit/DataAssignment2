import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/content';
import Header from './components/header';
import Footer from './components/footer';
import NavSite from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <NavSite></NavSite> 
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="read" element={<Read/>}/>
          <Route path="create" element={<Create/>}/>
        </Routes>
      </div>
    );
  }
}

function Home(){
  return (
    <div>
      <Header></Header>
    </div>
  )
}

function Read(){
  return (
    <div>
      <HelloWorld></HelloWorld>
    </div>
  )
}

function Create(){
  return (
    <div>
      <Footer></Footer>
    </div>
  )
  }
