import React, { Component } from 'react';

class ViewEtiquetas extends Component{
	state={
		etiquetas:[{name:'Cuadrado', color:'#ffffff'}],
		input:''
	}

	addEtiqueta=()=>{
		var curentState=this.state.etiquetas.slice();
		curentState.push({name:this.state.input,color:'#000000'});
		this.setState({etiquetas:curentState});
	}

	handleChange=(e)=>{
		this.setState({input:e.target.value})
	}

	render(){
		const listEtiquetas=this.state.etiquetas.map((etiqueta)=>
			<li>{etiqueta.name}</li>
			);
		return (
			<div>
			<ul>{listEtiquetas}</ul>
			<div className="input-group mb-3">
  				<input type="text" className="form-control"  onChange={this.handleChange} placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
 				 <div className="input-group-append">
    				<button className="btn btn-outline-secondary" type="button" onClick={this.addEtiqueta}>Button</button>
  				</div>
			</div>
			</div>
			);
	}
}

export default ViewEtiquetas;