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
    var cycle_duration = [10]
    var numbers = this.state.notes;

    (function theLoop (i,temp) {
      setTimeout(function () {

        //if (i < numbers.length){
        //console.log(numbers[i])
        //}



        if (temp){
          temp = parseInt(temp)
          temp += 10
        }else{
          temp = 10
        }


        if (i++ < numbers.length) {
            i--;
            temp = parseInt(temp)
            temp += 10
            //console.log('temp')
            //console.log(temp)

            //console.log('i')
            //console.log(i)
            if (isNaN(numbers[i])){
              console.log('nan')
              var audio = new Audio(require('./a48.mp3'))
              audio.load()
              audio.play()
              i++;
            }

            if ( numbers[i] < parseInt(temp)/2  ){
              i++
              temp = 0;
              var t = new Date().getTime()
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
