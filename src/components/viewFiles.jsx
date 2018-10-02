import React, { Component } from 'react';

class ViewFiles extends Component{
	state={
		files:["drectory-one","directory-two"]
	}
	render(){
		const listFiles=this.state.files.map((file)=>
			<li>{file}</li>
			);
		return (
			<div>
			<ul>{listFiles}</ul>
			</div>
			);
	}
}

export default ViewFiles;