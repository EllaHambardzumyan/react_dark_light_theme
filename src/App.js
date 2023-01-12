import React, { useState }  from 'react'
import Header from './components/Header/Header.js'
import './App.css';
import HomePage from './pages/HomePage/HomePage.js';

function App() {
const [dark,setDark]= useState(false)

const onChangeTheme = () => setDark(!dark)

  return (
    <div className="App" >
      <Header onChangeTheme={onChangeTheme} dark={dark}/>
      <HomePage onDarkConteiner={onChangeTheme} dark={dark}/>
    </div>
  );
}

export default App;