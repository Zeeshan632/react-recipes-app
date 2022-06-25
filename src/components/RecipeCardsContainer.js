import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeCardsContainer = ({ recipes }) => {
	const recipeCards = recipes.map((recipe) => {
		return <RecipeCard key={recipe.recipe.label} recipe={recipe} />;
	});

	return <div className="card-container">{recipeCards}</div>;
};

export default RecipeCardsContainer;
