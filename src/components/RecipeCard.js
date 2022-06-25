import React from "react";

const RecipeCard = ({ recipe }) => {
	console.log(recipe);
	const ingredient = recipe.recipe.ingredients.map((ingredient) => {
		return <li key={Math.random()}>{ingredient.text}</li>;
	});
	return (
		<div className="recipe-card">
			<h1 className="recipe-title">{recipe.recipe.label}</h1>
			<div className="card-content">
				<img src={recipe.recipe.image} alt="recipe" />
				<div className="content">
					<div className="ingredients-list">
						<h2>Ingredients</h2>
						<ul>{ingredient}</ul>
					</div>
					<a
						className="recipe-link"
						target="_blank"
						rel="noreferrer"
						href={recipe.recipe.url}
					>
						Checkout the complete recipe
					</a>
				</div>
			</div>
		</div>
	);
};

export default RecipeCard;
