import React from "react";

const Form = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <form onSubmit={props.getRecipe}>
          <input type="text" name="recipeName" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
