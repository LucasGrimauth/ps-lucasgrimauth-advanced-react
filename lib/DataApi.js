import React, { Component } from 'react';

export class DataApi extends Component {
	constructor(rawData){
		super(rawData);
		this.rawData = rawData;
	}

	mapIntoObject(arr){
		return arr.reduce((acc, curr) => {
			acc[curr.id] = curr;
			return acc;
		}, {});
	}
	getArticles() {
		return this.mapIntoObject(this.rawData.articles);
	}

	getAuthors() {
		return this.mapIntoObject(this.rawData.authors);
	}
}
 
export default DataApi;