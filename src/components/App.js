import React from "react";
import Searchbar from "./Searchbar";
import RecipeCardsContainer from "./RecipeCardsContainer";

class App extends React.Component {
	state = { recipes: [] };
	fetchingData = async (term) => {
		const response = await fetch(
			`https://api.edamam.com/search?q=${term}&app_id=${"a7afa1c6"}&app_key=${"e5386f26dbc11bdde9cff5681deebf5f"}`
		);
		const data = await response.json();

		this.setState({ recipes: data.hits });
	};
	render() {
		return (
			<div>
				<Searchbar searchTerm={this.fetchingData} />
				<RecipeCardsContainer recipes={this.state.recipes} />
			</div>
		);
	}
}

export default App;
