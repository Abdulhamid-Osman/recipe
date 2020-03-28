import React, {Component} from 'react';
import {Link } from 'react-router-dom';

export default class Navbar extends Component{

    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Recipe App</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/recipes" className="nav-link">Recipes</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Recipe</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/edit/:id" className="nav-link">Edit Recipe</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}