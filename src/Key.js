import React, { Component } from 'react';
import './a48.mp3'

let synth = {
  audioContext:  new AudioContext(),
  oscillators: {
    osc1: {},
    osc2: {},
    bass: {}
  }
}


let delta_time ;
let t1;
let t2;

class Key extends Component {

  stopNote(e){
    t2 = new Date().getTime();
    delta_time = t2 - t1;
    const data = e.target.id
    this.props.writeNote(data,t1,t2);

  }

  playNote(e){
    t1 = new Date().getTime();
    const id = e.target.id;
    if (id == 'C4'){
      var audio = new Audio(require('./a48.mp3'))
      console.log('if')
    }
    else{
      console.log('el')
      var audio = new Audio(require('./a53.mp3'))
    }
    audio.load()
    audio.play();


  }

  render(){
    return(<div className={this.props.color}
            id={this.props.note}
            onMouseDown={this.playNote.bind(this)}
            onMouseUp={this.stopNote.bind(this)}
            >
          </div>)
  }
}

export default Key;
