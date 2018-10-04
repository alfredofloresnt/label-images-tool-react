import React, { Component } from 'react';

class ViewFiles extends Component{
	state={
		files:[]
	}
	render(){
		
		var listFiles= this.props.files.map((file)=>
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