import React, { Component } from 'react';

class ViewFiles extends Component{
	state={
		files:[],
		selectedFile:""
	}

	onSelectedFile(e){
		this.props.selectedFile(e.target.id);


	}
	render(){
		
		var listFiles= this.props.files.map((file,i)=>
			<li className="list-group-item" key={i} id={i} onClick={(e)=>this.onSelectedFile(e)}>{file}</li>
			);
			

		return (
			<div>
			<ul className="list-group">{listFiles}</ul>
			</div>
			);
	}
}

export default ViewFiles;