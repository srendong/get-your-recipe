import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const ApiKey = "a6c18ef54ea00485a426654f7cd36dd5";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const ApiCall = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${ApiKey}&q=${recipeName}&count=12`
    );
    const data = await ApiCall.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  };

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  };

  render() {
    return (
      <>
        <header>
          <h1 className="App-header">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </>
    );
  }
}

export default App;
