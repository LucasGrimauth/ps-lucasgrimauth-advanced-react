import React, { Component } from 'react';

import ArticlesList from './ArticlesList';
import DataApi from '../DataApi';
import { data } from '../testData.json';

const api = new DataApi(data);

export class App extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			articles: api.getArticles(),
			authors: api.getAuthors()
		 }
	}

	articleActions = {
		lookupAuthor: authorId => this.state.authors[authorId],
	}

	render() {
		return (
			<div>
				<ArticlesList 
					articles={this.state.articles}
					articleActions={this.articleActions}
				/>
			</div>
		);
	}
}
 
export default App;