import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewFiles from './components/viewFiles.jsx';
import ViewEtiquetas from './components/viewEtiquetas.jsx';
class App extends Component {
  render() {
    return (
      <div>
        <h1>Label It</h1>
        <div className="row">
          <div className="col-md-3">
            <h2>Files:</h2>
            <ViewFiles />
            <h2>Labels:</h2>
            <ViewEtiquetas />
          </div>
          <div className="col-md-6">
          
          </div>
          <div className="col-md-3">
            <h2>Stored XML</h2>
            <ViewFiles/>
          </div>
        </div>
      </div> 
    );
  }
}

export default App;
