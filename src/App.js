import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Key from './Key'


var pianoStyle = {
  width: "50%",
  height: 300,
  margin: "auto",
  borderRadius: "20px 20px 0 0",
  overflow: "hidden",
  background: "linear-gradient(#1e1d1d, #000)"
};


class App extends Component {

  constructor(){
    super();
    let t = new Date().getTime();
    this.state = {
      notes: [],
      last_note_end_timestamp : t ,
      last_note_start_timestamp : t
    }
  }

  replayer(){


    const notes = {
        'C4': '261',
        'Db4': '277',
        'D4': '293',
        'Eb4': '311',
        'E4': '329',
        'F4': '349',
        'Gb4': '369',
        'G4': '392',
        'Ab4': '415',
        'A4': '440',
        'Bb4': '466',
        'B4': '493'
      }




    for (let j=0 ; j < this.state.notes.length ; j++ ){
      let audioContext = new AudioContext();
      let synth = {
        oscillators: {
          osc1: {},
          osc2: {},
          bass: {}
        }
      }
      let readable;
      let play_duartion;
      let play_note;
      let pitch;

      if (!isNaN(this.state.notes[j])){
        console.log('qq')
        pitch = 900;
        play_duartion = this.state.notes[j]

      }else{
        readable = this.state.notes[j]
        play_duartion = readable.split('*')[0]
        play_note = readable.split('*')[1]
        pitch = notes[play_note];
        console.log('el')
      }

      for (let key in synth.oscillators) {
        synth.oscillators[key] = audioContext.createOscillator();
        synth.oscillators[key].type = 'sawtooth';
        synth.oscillators[key].frequency.value = pitch;
        synth.oscillators[key].connect(audioContext.destination);
        switch (key) {
          case 'osc1':
            synth.oscillators[key].detune.value = -15;
            break;
          case 'osc2':
            synth.oscillators[key].detune.value = 15;
            break;
          case 'bass':
            synth.oscillators[key].frequency.value = pitch;
            synth.oscillators[key].type = 'square';
            break;
        }
        synth.oscillators[key].start();
      }

      setTimeout(() => {
        for (let key in synth.oscillators) {
          synth.oscillators[key].stop();

        }
        synth = {
          oscillators: {
            osc1: {},
            osc2: {},
            bass: {}
          }
        }
      }, parseInt(play_duartion) );



    }
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <div style={pianoStyle}>
          <div id="piano-container">
            <li>
              <Key color="white" note="C4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                const pause_duration = t1 - this.state.last_note_end_timestamp
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })
          }} />
              <Key color="black" note="Db4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                const pause_duration = t1 - this.state.last_note_end_timestamp
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="D4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="Eb4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="E4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="F4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="Gb4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="G4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="Ab4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="A4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="Bb4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="B4" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
          </div>
        </div>
        <input style={{width : '300px' , height :'300px'}} type="text" name="readable" value={this.state.notes}/>
        <button  type="text" name="readable" onClick= {this.replayer.bind(this)} >Play</button>
      </div>
    );
  }
}

export default App;
