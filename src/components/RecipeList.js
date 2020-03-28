import React, {Component} from 'react';
import HttpService from '../services/http-service'

const http = new HttpService();
class RecipeList extends Component{
      constructor(props){
    super(props);
    this.state = {
      recipes:[]
    }
  // Binding functions
    this.loadData = this.loadData.bind(this);
    this.recipeList = this.recipeList.bind(this);
    this.loadData();
  }

  componentDidMount() {
    // this.loadData();
  }
  loadData = ()=>{
    const self = this;
    http.getRecipes().then(data =>{
      self.setState({
        recipes: data
      })
    }, err=>{

    });
  }
  
  recipeList = ()=>{
    const list = this.state.recipes.map((recipe)=>
      <div className="col-sm-4" key={recipe._id}>
        <RecipeList title={recipe.title} ingredients={recipe.ingredients} instructions={recipe.instructions} difficulty={recipe.difficulty} time={recipe.time}/>
      </div>
    )
    return (list);
  }
  render(){
    return(
      
        <div className="container">
                <div className="card">
                    <div className="card-block">
                        <h2 className="card-title">{this.props.title}</h2>
                        <h3 className="class-ingredients">{this.props.ingredients}</h3>
                        <h3 className="class-description">{this.props.instructions}</h3>
                        <h3 className="class-difficulty">{this.props.difficulty}</h3>
                        <h3 className="class-duration">{this.props.time}</h3>
                    </div>
                </div>
            </div>
      
    )
  }
    // constructor(props){
    //     super(props)
    //     http.getRecipes();
    // }
    // render(){
    //     return(
    //         <div>
    //             <h1>Anun</h1>
    //         </div>
    //     )
    // }
};
export default RecipeList;
// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       recipes:[]
//     }
//   // Binding functions
//     this.loadData = this.loadData.bind(this);
//     this.recipeList = this.recipeList.bind(this);
//     this.loadData();
//   }

//   componentDidMount() {
//     // this.loadData();
//   }
//   loadData = ()=>{
//     const self = this;
//     http.getRecipes().then(data =>{
//       self.setState({
//         recipes: data
//       })
//     }, err=>{

//     });
//   }
  
//   recipeList = ()=>{
//     const list = this.state.recipes.map((recipe)=>
//       <div className="col-sm-4" key={recipe._id}>
//         <Recipe title={recipe.title} ingredients={recipe.ingredients} instructions={recipe.instructions} difficulty={recipe.difficulty} time={recipe.time}/>
//       </div>
//     )
//     return (list);
//   }
//   render(){
//     return(
//       <div >
//         {this.recipeList()}
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className="container">
//       <h1>ABDULHAMID</h1>
//     </div>
//   );
// }

