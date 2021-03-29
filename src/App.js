import React,{useEffect} from "react";
import {fetchData} from './store/shop/shop.actions';
import { useDispatch } from 'react-redux'
import NavBar from './components/NavBar/index';
import Shop from './pages/shop/shop';
import Routes from './Routes';
import logo from './logo.svg';
import './App.css';

function App() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchData())

  },[])
  return (
    <div className="App">
    <NavBar/>
    <header className="App-Content">
    <Routes/>
    </header>
  {/*     <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
       
      </header> */}
    </div>
  );
}

export default App;
