import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom'

const Recipes = ({ recipes }) => {
  return (
    <>
      <div className="container fluid">
        <div className="row justify-content-center">
          {recipes.map(recipe => {
            return (
              <Card
                key={recipe.recipe_id}
                className="col-sm-1 col-md-4 mt-4 p-1"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  style={{ height: "15rem" }}
                  variant="top"
                  src={recipe.image_url}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {recipe.title.length < 20
                      ? `${recipe.title}`
                      : `${recipe.title.substring(0, 20)}...`}
                  </Card.Title>
                  <Button variant="primary">
                    <Link to={{
                      pathname: `/recipe/${recipe.recipe_id}`,
                      state: {recipe: recipe.title}
                      }}>View recipe</Link>
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Recipes;
