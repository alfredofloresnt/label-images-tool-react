import React, { Component } from 'react';

class LabelEditor extends Component{
	constructor(props){
		super();
	}
	componentDidMount() {
        this.updateCanvas();
    }

	render(){
		return(
		<div>
		<img id="image-view" src={"img/"+this.props.selectedFile} width='200'/>	
			<canvas></canvas>
		</div>
			);
	}
}

export default LabelEditor;