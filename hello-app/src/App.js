import logo from './logo.svg';
import './App.css';
import React from 'react';
import HelloWorld from './components/content';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <HelloWorld></HelloWorld>
      <Footer></Footer>
    </div>
  );
}



export default App;
