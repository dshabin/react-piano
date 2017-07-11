import React, { Component } from 'react';

let synth = {
  audioContext:  new AudioContext(),
  oscillators: {
    osc1: {},
    osc2: {},
    bass: {}
  }
}

const notes = {
    'C4': 261.63,
    'Db4': 277.18,
    'D4': 293.66,
    'Eb4': 311.13,
    'E4': 329.63,
    'F4': 349.23,
    'Gb4': 369.99,
    'G4': 392.00,
    'Ab4': 415.30,
    'A4': 440.00,
    'Bb4': 466.16,
    'B4': 493.88
  }


class Key extends Component {

  stopNote(){
    for (let key in synth.oscillators) {
      synth.oscillators[key].stop();
    }
  }

  playNote(e){

    const pitch = notes[e.target.id];
    for (let key in synth.oscillators) {
      synth.oscillators[key] = synth.audioContext.createOscillator();
      synth.oscillators[key].type = 'sawtooth';
      synth.oscillators[key].frequency.value = pitch;
      synth.oscillators[key].connect(synth.audioContext.destination);
      switch (key) {
        case 'osc1':
          synth.oscillators[key].detune.value = -15;
          break;
        case 'osc2':
          synth.oscillators[key].detune.value = 15;
          break;
        case 'bass':
          synth.oscillators[key].frequency.value = pitch/2;
          synth.oscillators[key].type = 'square';
          break;
      }
      synth.oscillators[key].start();
    }
  }

  render(){
    return(<div className={this.props.color}
            id={this.props.note}
            onMouseDown={this.playNote.bind(this)}
            onMouseUp={this.stopNote}
            >
          </div>)
  }
}

export default Key;
