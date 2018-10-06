import React, { Component } from 'react';

class LabelEditor extends Component{
	state={
		labelObjects:[
		{
			label_name:'',
			pos1:{x: 0, y: 0},
			pos2:{x: 0, y: 0},
			labelx:75,
			labely:150,
			xmin:0,
			xmax:0,
			ymin:0,
			ymax:0,
			color:"rgba(254,0,0,0.5)"
		}
		]
	}
	constructor(props){
		super();
		this.pos1 = {x: 0, y: 0};
		this.pos2 = {x: 0, y: 0};
		this.labelx = 0;
		this.labely = 0;
		this.color = "rgba(0,0,0,1)";
		this.xmin = 0;
		this.ymin = 0;
		this.xmax = 0;
		this.ymax = 0;
	}

	componentDidMount() {
    	this.updateCanvas();
    }

	updateCanvas(){
		const ctx = this.refs.canvas.getContext('2d');
		var objects = this.state.labelObjects;
		ctx.clearRect(0,0,this.refs.canvas.width,this.refs.canvas.height);
		for (var i=0;i<objects.length;i++){
			ctx.fillStyle = objects[i].color;
			ctx.fillRect(objects[i].pos1.x,objects[i].pos1.y, objects[i].labelx, objects[i].labely);
		}
     
	}

	dragStart(e){
		
		this.pos1 = {x: e.nativeEvent.offsetX,y: e.nativeEvent.offsetY}
		console.log(this.pos1);
	}
	dragEnd(e){
		this.pos2 = {x: e.nativeEvent.offsetX,y: e.nativeEvent.offsetY}
		
		//Generate Object
		this.labelx = this.pos2.x-this.pos1.x;
		this.labely = this.pos2.y-this.pos1.y;
		this.color = "rgba("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+", 0.5)";
		this.xmin = Math.min(this.pos1.x,this.pos2.x);
		this.ymin = Math.min(this.pos1.y,this.pos2.y);
		this.xmax = Math.max(this.pos1.x,this.pos2.x);
		this.ymax = Math.max(this.pos1.y,this.pos2.y);
		var objects = this.state.labelObjects;
		objects.push(
					{
			label_name: this.props.selectedEtiqueta.name,
			pos1:  this.pos1,
			pos2: this.pos2,
			labelx: this.labelx,
			labely: this.labely,
			xmin: this.xmin,
			xmax: this.xmax,
			ymin: this.ymin,
			ymax: this.ymax,
			color: this.props.selectedEtiqueta.color
		}
		);

		this.setState({
			labelObjects:objects
		});
		console.log(this.color);
		this.updateCanvas();
	}


	render(){
		return(
		<div>
			<img id="image-view" src={"img/"+this.props.selectedFile} width='200'/>	
			<canvas ref="canvas" onMouseDown={(e)=>this.dragStart(e)} onMouseUp={(e)=>this.dragEnd(e)} />
		</div>
			);
	}
}

export default LabelEditor;