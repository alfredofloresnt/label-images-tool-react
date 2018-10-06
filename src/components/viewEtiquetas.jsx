import React, { Component } from 'react';

class ViewEtiquetas extends Component{
	state={
		etiquetas:[{name:'Cuadrado', color:'#ffffff'}],
		input:''
	}

	constructor(){
		super();
	}


	componentWillMount() {
    const db = window.firebase.database();
    db.ref('etiquetas').on('value', data => {
      	this.setState({ etiquetas: data.val().etiqueta || [] });
    });
  	}



  	//Push firebase data
	addEtiqueta=(e)=>{
		e.preventDefault();
		var curentState=this.state.etiquetas.slice();
		var color="rgba("+Math.random()*255+","+Math.random()*255+","+Math.random()*255+", 0.5)";
		curentState.push({name:this.state.input,color:color});
		
		this.setState({etiquetas:curentState});
		//console.log(this.state.etiquetas);
		const db = window.firebase.database();
		db.ref('etiquetas/' ).set({
      	etiqueta: curentState
		});
	}

	handleChange=(e)=>{
		this.setState({input:e.target.value})
	}

	onEtiquetaChange=(e)=>{
		var etiqueta={
			name:e.target.value,
			color:e.target.getAttribute('color')
		}

		this.props.selectedEtiqueta(etiqueta);
		
	}

	render(){
		const { state } = this;
		const listEtiquetas=state.etiquetas.map((etiqueta,i)=>
			<div><label><input type="radio" name="etiqueta" key={i} onChange={(e)=>this.onEtiquetaChange(e)} color={etiqueta.color} value={etiqueta.name}/>{etiqueta.name}</label></div>
			);
		return (
			<div>
			<div>{listEtiquetas}</div>
			<div className="input-group mb-3">
  				<input type="text" className="form-control"  onChange={this.handleChange} placeholder="Name of the label" aria-describedby="basic-addon2"/>
 				 <div className="input-group-append">
    				<button className="btn btn-outline-secondary" type="button" onClick={this.addEtiqueta}>Create</button>
  				</div>
			</div>
			</div>
			);
	}
}

export default ViewEtiquetas;