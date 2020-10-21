import React, { Component } from 'react';
import './App.css';
import PadBank from './components/PadBank'
import Display from './components/Display'
import Power from './components/Power'
import Volume from './components/Volume'



const bank = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      power:true,
      currentText:'',
      volume: 15
    }

    this.controlPower = this.controlPower.bind(this)
    this.updateText = this.updateText.bind(this)
    this.updateVolume = this.updateVolume.bind(this)
  }

  controlPower(){
    console.log("before "  + this.state.power)
    this.setState(
      {power: !this.state.power},
      ()=>{
        if(!this.state.power){
          this.setState({currentText:''})
        }
      }
    )
    
    }
    
  

  updateText (text){
    this.setState({
      currentText: text
    })
  }

  updateVolume(newVolume){
    this.setState({
      volume: newVolume
    })
  }

  render(){
    return (
      <div className="App" >
      <div id="drum-machine">
        <div className='bank-container'>
            <PadBank bank = {bank} power={this.state.power} updateText= {this.updateText} volume={this.state.volume}/>
          </div>
          
          <div className="control-container">
            <Power power={this.state.power} onClick={this.controlPower}/>
            <Display text={this.state.currentText} />
            <Volume value={this.state.volume} updateVolume={this.updateVolume}/>
          </div>
      </div>
        
        <label>© Qian Tang 2020</label>
      </div>
    );
  }
  
}

export default App;
