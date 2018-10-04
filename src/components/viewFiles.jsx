import React, { Component } from 'react';

class ViewFiles extends Component{
	state={
		files:[]
	}
	render(){
		
		var listFiles= this.props.files.map((file,i)=>
			<li className="list-group-item" key={i}>{file}</li>
			);
			

		return (
			<div>
			<ul className="list-group">{listFiles}</ul>
			</div>
			);
	}
}

export default ViewFiles;