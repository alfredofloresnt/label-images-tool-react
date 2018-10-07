import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewFiles from './components/viewFiles.jsx';
import ViewEtiquetas from './components/viewEtiquetas.jsx';
import SelectFiles from './components/selectFiles.jsx';
import LabelEditor from './components/labelEditor'
class App extends Component {
  constructor(){
    super();
    this.state={
      files: [],
      ready: false,
      selectedFile: 0,
      selectedEtiqueta: {}
    }
    this.onSelectedFile = this.onSelectedFile.bind(this);
    this.onSelectedEtiqueta = this.onSelectedEtiqueta.bind(this);
  }


  onChangeFiles(newFiles){
    let fileNames=[];
    for(var i=0; i<newFiles.length;i++){
      fileNames.push(newFiles[i].name);
    }
    this.setState({
      files:fileNames,
      ready: true
    });
  }

  onSelectedFile(selFile){
    const prev=this.state;
    this.setState({
      selectedFile: selFile
    });
  }

  onSelectedEtiqueta(selEtiqueta){

    this.setState({
      selectedEtiqueta: selEtiqueta
    });
    
  }

  render() {
    if (this.state.ready)
    return (
      <div>
        <h1>Label It</h1>
        <div className="row">
          <div className="col-md-3">
            <h2>Files:</h2>
            <ViewFiles files={this.state.files} selectedFile={this.onSelectedFile}/>
            <h2>Labels:</h2>
            <ViewEtiquetas selectedEtiqueta={this.onSelectedEtiqueta} />
          </div>
          <div className="col-md-6 canvas-div">
            <LabelEditor selectedFile={this.state.files[this.state.selectedFile]} selectedEtiqueta={this.state.selectedEtiqueta}/>
          </div>
          <div className="col-md-3">
            <h2>Stored XML</h2>

          </div>
        </div>
      </div> 
    );
  else return(
    <div>
      <h1>Label It</h1>
        <div className="row">
          <input type="file" onChange={(e)=>this.onChangeFiles(e.target.files)} multiple/>
        </div>
    </div>
    );
  }
}

export default App;
