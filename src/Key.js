import React, { Component } from 'react';
import './a48.mp3'

let t1;
let t2;

class Key extends Component {

  stopNote(e){
    t2 = new Date().getTime();
    const data = e.target.id
    this.props.writeNote(data,t1,t2);

  }

  playNote(e){

    const notes = {
      'C' : 'a48.mp3',
      'C#': 'b49.mp3',
      'D' : 'a49.mp3',
      'D#': 'b50.mp3',
      'E' : 'a50.mp3',
      'F' : 'a51.mp3',
      'F#': 'b52.mp3',
      'G' : 'a52.mp3',
      'G#': 'b53.mp3',
      'A' : 'a53.mp3',
      'A#': 'b54.mp3',
      'B' : 'a54.mp3',
    };

    t1 = new Date().getTime();
    const id = e.target.id;
    console.log(notes[id]);
    const audio = new Audio(require('./'+ notes[id] ));
    audio.load();
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
