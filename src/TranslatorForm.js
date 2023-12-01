import logo from './logo.svg';
import './App.css';
import React from "react";

class TranslatorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { translated: "" };

    this.dictionary = {
      "a" : { char: "1", sym: "jeden" },
      "ą" : { char: "2", sym: "dwa" },
      "b" : { char: "3", sym: "trzy" },
      "c" : { char: "4", sym: "cztery" }, 
      "ć" : { char: "5", sym: "pięć" }, 
      "d" : { char: "6", sym: "sześć" },
      "e" : { char: "7", sym: "siedem" },
      "ę" : { char: "8", sym: "osiem" },
      "f" : { char: "9", sym: "dziewięć" },
      "g" : { char: "10", sym: "dziesięć" },
      "h" : { char: "11", sym: "jedenaście" },
      "i" : { char: "12", sym: "dwanaście" },
      "j" : { char: "13", sym: "trzynaście" },
      "k" : { char: "14", sym: "czternaście" },
      "l" : { char: "15", sym: "piętnaście" },
      "ł" : { char: "16", sym: "szesnaście" },      
      "m" : { char: "17", sym: "siedemnaście" },
      "n" : { char: "18", sym: "osiemnaście" },
      "o" : { char: "19", sym: "dziewietnaście" },
      "p" : { char: "20", sym: "dwadzieścia" },
      "r" : { char: "21", sym: "dwadzieścia jeden" },
      "s" : { char: "22", sym: "dwadzieścia dwa" },
      "t" : { char: "23", sym: "dwadzieścia trzy" },
      "u" : { char: "24", sym: "dwadzieścia cztery" },
      "w" : { char: "25", sym: "dwadzieścia pięć" },
      "z" : { char: "27", sym: "dwadzieścia siedem" },
      "y" : { char: "26", sym: "'dwadzieścia sześć'" },
      "ź" : { char: "28", sym: "'dwadzieścia osiem'" },
      "ż" : { char: "29", sym: "'dwadzieścia dziewięć'" },
      " " : { char: " ", sym: "spacja" },
    };
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
      var c = orig.toLowerCase()[i];
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

      if (i < orig.length - 1)
      {
        symbols += "-";
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
            Słowo do przetłumaczenia:<br/>
          <input type="text" name="original" onChange={this.handleChange} />
          </label>
          <p>Po pierdyklesku to: {this.state.translated}</p>
        </header>
      </div>
    );
  }
}

export default TranslatorForm;
