import React from "react";
import "./style.css";

class Searchbar extends React.Component {
	state = { searchTerm: "" };
	onFormSubmit = (e) => {
		e.preventDefault();

		this.props.searchTerm(this.state.searchTerm);
	};
	render() {
		return (
			<div className="search-bar">
				<form className="search-form" onSubmit={this.onFormSubmit}>
					<label className="search-label">Search for any recipe</label>
					<input
						className="search-input"
						type="text"
						value={this.state.searchTerm}
						onChange={(e) => {
							this.setState({ searchTerm: e.target.value });
						}}
					/>
				</form>
			</div>
		);
	}
}
export default Searchbar;
