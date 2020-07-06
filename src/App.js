import React from 'react';
import './style.css';

import Cardlist from './Cardlist';
import SearchBox from './SearchBox';


class App extends React.Component {
	constructor() {
		super();

		this.state = {
			items: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/photos')
			.then((response) => {
				return response.json();
			})
			.then(( message ) => {
				this.setState({ items: message });
				//console.log(message);
			});
	}
	onSearchChange = (e) => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		const filterList = this.state.items.filter((items) => {
			return items.title.toLowerCase().includes(this.state.searchField.toLowerCase());
		});

		return (
			<div className="App">
				<div className="header">
					<h1>Search Data from the list below</h1>
					<SearchBox searchChange={this.onSearchChange} />
				</div>
				<Cardlist list={filterList} />
			</div>
		);
	}
}

export default App;
