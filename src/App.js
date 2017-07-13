import React, { Component } from 'react';
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
    var cycle_duration = [10]
    var numbers = this.state.notes;

    (function theLoop (i,temp) {
      setTimeout(function () {

        //if (i < numbers.length){
        //console.log(numbers[i])
        //}



        if (temp){
          temp = parseInt(temp,10);
          temp += 10;
        }else{
          temp = 10;
        }


        if (i++ < numbers.length) {
            i--;
            temp = parseInt(temp,10);
            temp += 10;
            //console.log('temp')
            //console.log(temp)
            //console.log('i')
            //console.log(i)
            if (isNaN(numbers[i])){
              console.log('nan')
              var audio = new Audio(require('./'+ notes[numbers[i]] ))
              audio.load()
              audio.play()
              i++;
            }
            if ( numbers[i] < parseInt(temp,10)/2  ){
              i++
              temp = 0;
              var t = new Date().getTime();
              console.log('bing' + "==> " + t)
            }
            console.log(i);
            console.log(temp)
            theLoop(i,temp);
        }
      }, cycle_duration[0]);
    })(0);
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
              <Key color="white" note="C" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })
          }} />
              <Key color="black" note="C#" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="D" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="D#" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="E" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="F" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="F#" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="G" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="G#" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="A" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);


                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
              <Key color="black" note="A#" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);

                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </li>
            <li>
              <Key color="white" note="B" writeNote={(data,t1,t2)=>{
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
