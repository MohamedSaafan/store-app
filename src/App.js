import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Home} from './Pages/Home'
import {Card} from './Pages/Card'
import {Products} from './Pages/Products'
import {Product} from './Pages/Product'
import ActiveItem from './Components/activeItem';

function App(props) {
  return (
    <Router>
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">cart</Link>
                </li>
              
              </ul>
            </div>
        </nav>
        {JSON.stringify(props)}
        
        <Route path = '/' component = {Home} exact />
        <Route path = '/products' component = {Products} exact />
        <Route path = {`/products/${props.activeId}`} component = {()=><ActiveItem activeId = {props.activeId} />}/>
        <Route path = '/card' component = {Card} />
      
      </div>
      </Router>
     
  );
}
const mapStateToProps = (state)=>{
  return{
    activeId:state.activeId
  }
}


export default connect(mapStateToProps,null)(App);
