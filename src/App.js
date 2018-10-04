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
      files:[]
    }
  }


  onChangeFiles(newFiles){
    this.setState({
      files:newFiles
    });
    console.log("Files on App has changed");
  }

  render() {

    return (
      <div>
        <h1>Label It</h1>
        <div className="row">
          <SelectFiles setFiles={this.onChangeFiles.bind(this)} />
        </div>
        <div className="row">
          <div className="col-md-3">
            <h2>Files:</h2>
            <ViewFiles files={this.state.files}/>
            <h2>Labels:</h2>
            <ViewEtiquetas />
          </div>
          <div className="col-md-6">
            <LabelEditor />
          </div>
          <div className="col-md-3">
            <h2>Stored XML</h2>

          </div>
        </div>
      </div> 
    );
  }
}

export default App;
