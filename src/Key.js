import React, { Component } from 'react';
import styled from 'styled-components'

const StyledDiv = styled.div`
width:100%;
height:100%;
float:left;
box-shadow:0 1px 1px rgba(0, 0, 0, .5);
position:relative;
z-index:1;
background:#f5f5f5;
&nbsp;:active {
    box-shadow:-1px 0 15px rgba(0, 0, 0, .7) inset;
}
&nbsp;:hover {
    box-shadow:-1px 0 15px rgba(0, 0, 0, .7) inset;
}
`

/*
.white:active {
  box-shadow:-1px 0 15px rgba(0, 0, 0, .7) inset;
}
*/
const StyledDivBlack = styled.div`
position: absolute;
z-index: 2;
width: 70%;
height: 120px;
background: #000;
right: -35%;
box-shadow: 1px 0 #111, 0 2px 0 #111, 0 3px 0 #333, 0 4px 0 #333, 0 5px 0 #333, 0 6px 1px rgba(0, 0, 0, .1), 0 0 5px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .3), 0 3px 5px rgba(0, 0, 0, .2), 0 5px 10px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .2), 0 20px 20px rgba(0, 0, 0, .15);

&nbsp;:hover {
    box-shadow: 1px 0 #777, 0 2px 0 #777, 0 3px 0 #666, 0 4px 0 #555;
}

&nbsp;:active {
    box-shadow: 1px 0 #777, 0 2px 0 #777, 0 3px 0 #666, 0 4px 0 #555;
}
`
/*
.black:active{
  box-shadow: 1px 0 #777, 0 2px 0 #777, 0 3px 0 #666, 0 4px 0 #555;
}
*/


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
    if (this.props.color === 'white'){
      return(<StyledDiv
              id={this.props.note}
              onMouseDown={this.playNote.bind(this)}
              onMouseUp={this.stopNote.bind(this)}
              >
            </StyledDiv>)

    }else{
      return(<StyledDivBlack
              id={this.props.note}
              onMouseDown={this.playNote.bind(this)}
              onMouseUp={this.stopNote.bind(this)}
              >
            </StyledDivBlack>)
    }

  }
}

export default Key;
