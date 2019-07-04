import React, { Component } from "react";
import { Link } from 'react-router-dom'

const ApiKey = "a6c18ef54ea00485a426654f7cd36dd5";

class Recipe extends Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${ApiKey}&q=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.recipes[0] });
    console.log(this.state.activeRecipe);
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="row justify-content-center">
            <img className="col-8" src={recipe.image_url} alt={recipe.title} />{" "}
            <br />
            <h3 className="col-12 text-center">{recipe.title}</h3>
            <h5>Publusher: </h5>
            <span>{recipe.publisher}</span>
            <h5 className="col-12 text-center">Active recipe: </h5>
            <span>
              <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
            </span>
            <br/>
            <button className="col-12 text-center">
            <Link to='/'>Go home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
