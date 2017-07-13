import React, { Component } from 'react';
import './App.css';
import Key from './Key'
import styled from 'styled-components'


const StyledPianoDiv = styled.div`
width: 50% ;
height: 300 ;
margin: auto ;
overflow: hidden ;
background: linear-gradient(#1e1d1d, #000) ;
`

const StyledPianoContainerDiv = styled.div`
width: 95%;
height: 230px;
background: #fff;
margin: 60px auto 0 auto;

`
const StyledLi = styled.li`
width: 14.28%;
height: 100%;
float: left;
list-style-type: none;
position: relative;
`

const Button = styled.button`
  width : 100px;
  height : 50px;
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`




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
      'C' : 'a49.mp3',
      'C#': 'b49.mp3',
      'D' : 'a50.mp3',
      'D#': 'b50.mp3',
      'E' : 'a51.mp3',
      'F' : 'a52.mp3',
      'F#': 'b52.mp3',
      'G' : 'a53.mp3',
      'G#': 'b53.mp3',
      'A' : 'a54.mp3',
      'A#': 'b54.mp3',
      'B' : 'a55.mp3',
    };
    const cycle_duration = [10]
    const numbers = this.state.notes;

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
              const audio = new Audio(require('./'+ notes[numbers[i]] ))
              audio.load()
              audio.play()
              i++;
            }
            if ( numbers[i] < parseInt(temp,10)/2 || i === 0 ){
              i++
              temp = 0;
              const t = new Date().getTime();
              console.log('bing   ==> ')
              console.log(t)
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
        <StyledPianoDiv>
          <StyledPianoContainerDiv>
            <StyledLi>
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
            </StyledLi>
            <StyledLi>
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
            </StyledLi>
            <StyledLi>
              <Key color="white" note="E" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);
                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </StyledLi>
            <StyledLi>
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
            </StyledLi>
            <StyledLi>
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
            </StyledLi>
            <StyledLi>
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
            </StyledLi>
            <StyledLi>
              <Key color="white" note="B" writeNote={(data,t1,t2)=>{
                const {notes} = this.state;
                notes.push(t1 - this.state.last_note_end_timestamp);
                notes.push(data);
                this.setState({notes});
                this.setState({last_note_end_timestamp : t2 , last_note_start_timestamp : t1 })

          }}/>
            </StyledLi>
          </StyledPianoContainerDiv>
        </StyledPianoDiv>
        <br/>
        <textarea name="readable" rows="14" cols="10" wrap="soft" maxlength="40" style={{overFlow:'hidden' , resize:'none' , width : '550px'}} value={this.state.notes}></textarea><br/>
        <Button  type="text" name="readable" onClick= {this.replayer.bind(this)} >Replay</Button>
      </div>
    );
  }
}

export default App;
