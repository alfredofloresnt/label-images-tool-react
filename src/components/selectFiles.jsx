import React, { Component } from 'react';

class SelectFiles extends Component{
	constructor(){
		super();
		this.state={
			files:[]
		}
		this.onHandleFiles=this.onHandleFiles.bind(this);

	}

	onHandleFiles(e){
		//console.log(e.target.files);
		var fileNames = [];
		for (var i=0; i<e.target.files.length;i++){
			fileNames.push(e.target.files[i].name);
		}
		console.log(fileNames)
		this.setState({
			files:fileNames
		});
		
	}

	componentWillUpdate(nextProps,nextState){
		this.props.setFiles(nextState);
		
	}
	
	onChangeFiles(){
		console.log("test");
		this.props.setFiles(this.state.files);
	}
	render(){
		return(
				<div>
					<input type="file" onChange={(event) => {this.onHandleFiles(event)}} multiple/>
					<input type="button" onClick={this.onChangeFiles.bind(this)} value="Submit"/>
				</div>
			);
	}
}

export default SelectFiles;