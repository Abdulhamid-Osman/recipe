import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'whatwg-fetch';
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar.component';
import RecipeList from './components/RecipeList';
import CreateRecipe from './components/CreateRecipe';
import EditRecipe from './components/EditRecipe';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path ='/' component={RecipeList}/>
      <Route path ='/create' component={CreateRecipe}/>
      <Route path ='/edit/:id' component={EditRecipe}/>
      
    </Router>
  );
}

export default App;
