import React, {Component} from 'react';

import axios from 'axios';

class CreateRecipe extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: "",
            ingredients: "",
            description: "",
            difficulty: "",
            time: "",
        }
        
    }    
    
    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();
        
        axios
        .post('http://localhost:4200/api/recipes', this.state)
        .then(res=>{
            console.log(res)
            console.log(this.state)
        })
        .catch(error=>{
            console.log(error)
        })

      }
    render(){
        const {title, ingredients, description, difficulty, time} = this.state
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <label >Title:</label>
                    <input type="text" className="form-control" name="title" value={title} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                    <label >ingredients:</label>
                    <textarea type="text" className="form-control" name="ingredients" value={ingredients}  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                    <label >description:</label>
                    <textarea type="text" className="form-control" name="description" value={description}  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                    <label >difficulty:</label>
                    <input type="number" className="form-control" name="difficulty" value={difficulty}  onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                    <label >Time Taken:</label>
                    <input type="number" className="form-control" name="time" value={time}  onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CreateRecipe;