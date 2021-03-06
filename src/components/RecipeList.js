import React, { Component } from "react";
import HttpService from "../services/http-service";

const http = new HttpService();

//make the Recipe component

const Recipe = props => {
  const {
    title,
ingredients,
instructions,
difficulty,
time,
  } = props;
  return (
    <div className="card">
      <div className="card-block">
        <h2 className="card-title">{title}</h2>
        <h3 className="class-ingredients">{ingredients}</h3>
        <h3 className="class-description">{instructions}</h3>
        <h3 className="class-difficulty">{difficulty}</h3>
        <h3 className="class-duration">{time}</h3>
      </div>
    </div>
  );
};
class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          title: "Test",
          ingredients: "Test",
          instructions: "Test",
          difficulty: "Test",
          time: "Test"
        }
      ]
    };
    // Binding functions
    this.loadData = this.loadData.bind(this);
    this.recipeList = this.recipeList.bind(this);
    // this.loadData();
  }

  componentDidMount() {
    // this.loadData();
  }
  loadData = () => {
    const self = this;
    http.getRecipes().then(
      data => {
        self.setState({
          recipes: data
        });
      },
      err => {}
    );
  };

  recipeList = () => {
    const list = this.state.recipes.map(recipe => (
      <div className="col-sm-4" key={recipe._id}>
        <Recipe //this is the component that we constructed up there ( its a dumb component ) you can google this
          title={recipe.title}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          difficulty={recipe.difficulty}
          time={recipe.time}
        />
      </div>
    ));
    return list;
  };
  render() {
    return <div className="container">{this.recipeList()}</div>;
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
}
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
