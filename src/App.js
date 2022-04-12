import logo from './logo.svg';
import './App.css';
import React from "react";

class TranslatorForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label>
            Enter the phrase to translate:        
          <input type="text" name="original" onChange={this.handleChange} />
          </label>                
        </header>
      </div>
    );
  }
}

export default TranslatorForm;
