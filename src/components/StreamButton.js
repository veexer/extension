import React, { Component } from 'react';


export default class StreamButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: false,
      nick: null
    };
  }




  componentDidMount() {
      this.getStreams();
      this.timer = setInterval(()=> this.getStreams(), 30000)
  }
    async getStreams(){
      fetch('https://api.twitch.tv/kraken/streams/' + this.props.nick + '?client_id=1ievu9sfli36gu2hc9mjfjj6hiuq8h')
  .then(response => {
   if (!response.ok) {
   throw Error("error occured")
  }
  return response
  })
  .then(d => d.json())
  .then(d => {
    if (d.stream !== null) {
      this.setState({online: true})
    }
  });


  }




  render() {
  const nickname = this.props.nick
  const isOnline = this.state.online

    return (

      <div className="wrap">

        {
          isOnline ? ( <div className="strum"> <a href={`https://www.twitch.tv/${nickname}`} target="_blank"> <button className="strumbutton" > {nickname} </button> </a></div> )
            : ( null )
          }
          </div>

        );
  }
}
