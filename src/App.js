import React, { Component } from 'react';
import StreamButton from "./components/StreamButton";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    const savelist = localStorage.getItem("list")
    if (savelist === null) {
      localStorage.setItem("list", 'Anikaya');
    }

    this.state = {
      list: ['veexer', 'birtek', 'djsmierc', 'djuu_', 'zasia_', 'jarzynski_', 'mailinh_', 'bubnik2', 'mrssnowee', 'thewilq'],
      fullek: '',
      name: ''
    };
  }
componentDidMount(){
  const nicki = ['veexer', 'birtek', 'djsmierc', 'djuu_', 'zasia_', 'jarzynski_', 'mailinh_', 'bubnik2', 'mrssnowee', 'thewilq'];
  const savelist = localStorage.getItem("list")
  const ar = savelist.split(",")
  var newArray = nicki.concat(ar);
  this.setState({fullek: newArray})
}
  handleNameChange(event) {
    this.setState({name: event.target.value});
    }
  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();

    const savelist = localStorage.getItem("list");
    const newStream = this.state.name;
    const isDuplicated = this.state.fullek.includes(newStream);
    console.log (isDuplicated)
    const list = [
      savelist,
      newStream
    ];
    if (newStream.length > 2 && !isDuplicated) {
    const temp = this.state.fullek.concat(newStream)
      localStorage.setItem("list", [list]);
      this.setState({fullek: temp})
      this.setState({name: ""})
    }
  }
  handleDelete(event) {
  this.setState({fullek: this.state.list})
  localStorage.setItem("list", 'Anikaya');
  }
























  render() {
    const array = [...this.state.fullek]
    return (
      <div className="app">
        <header className="app-header">
          {  array.map((value, index) =>
            <StreamButton nick={value} key={index}/> )
          }
        </header>
        <form className="forma" onSubmit={e => this.handleSubmit(e)}>
          <input className="addinput" value={this.state.name} placeholder="TSM Dyrus" onChange={e => this.handleNameChange(e)}/>
          <button type="submit" className="inputbutton"> Dodaj Stream</button>
        </form>
        <div className="info">
          <button type="submit" className="clearbutton" onClick={e => this.handleDelete(e)}> Wyczyść listę streamów</button>
          <p className="botinfo">Aby przejść do streamu kliknij w przycisk!</p>
          <a href="https://streamernia.pl" target="_blank"><img className="place" alt="streamernia" src={require('./bannertop2.jpg')}/></a>
        </div>
      </div>
    );
  }
}

export default App;
