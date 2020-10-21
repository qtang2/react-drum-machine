import React, { Component } from 'react'
import '../App.css';

class DrumPad extends Component {
    constructor(props){
        super(props)
        this.state ={
            currentText: props.clipId
        }
        this.btnClicked = this.btnClicked.bind(this)
        this.playSound = this.playSound.bind(this)
        this.keyPressed = this.keyPressed.bind(this)

    }

    componentDidMount (){
        document.addEventListener('keydown',this.keyPressed)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.keyPressed)
    }


    playSound(){
        const sound = document.getElementById(this.props.keyTrigger)
        sound.volume = this.props.volume/100.00;
        setTimeout(() => sound.play(), 100);
        this.props.updateText(this.state.currentText)
        console.log(this.props.clipUrl + " pressed")
    }
    keyPressed(e){
        console.log("Pressed Key " + String.fromCharCode(e.keyCode))
        if(this.props.power){
            if(String.fromCharCode(e.keyCode) === this.props.keyTrigger){
                this.playSound();
            }
        }
        
    }

    btnClicked(){
        if(this.props.power){
            this.playSound()
        }
        else{
            console.log("power off")
            
        }
        
    }

    render(){
        return (
            <button className = "drum-pad" id={this.props.clipId} onClick={this.btnClicked} >
                <strong>{this.props.keyTrigger}</strong>
                <audio src={this.props.clipUrl} id={this.props.keyTrigger} className="clip" />
            </button>

        )
    }
    
}

export default DrumPad
