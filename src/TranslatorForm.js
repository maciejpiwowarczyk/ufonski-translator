import logo from './logo.svg';
import './App.css';
import React from "react";

class TranslatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translated: "" };

    this.dictionary = {
      "a" : { char: "lą", sym: "L" },
      "b" : { char: "sej", sym: "c" },
      "c" : { char: "fo", sym: "4" }, 
      "d" : { char: "jy", sym: "oo" },
      "e" : { char: "ty", sym: "R" },
    }
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ translated: this.translate(event.target.value) });
  }

  translate(orig) {
    var translated = "";
    var symbols = "";
    for (var i = 0; i < orig.length; i++) 
    {
      var c = orig[i];
      if (this.dictionary[c])
      {
        translated += this.dictionary[c].char;
        symbols += this.dictionary[c].sym;
      }
      else
      {
        translated += c;
        symbols += c;
      }
    }
    return `${translated} (${symbols})`;
  }

  render() {
      return (    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />          
          <label>
            Enter the phrase to translate:<br/>
          <input type="text" name="original" onChange={this.handleChange} />
          </label>
          <p>In Ufoński it's: {this.state.translated}</p>
        </header>
      </div>
    );
  }
}

export default TranslatorForm;
