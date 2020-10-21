import React, { Component } from 'react'
import { Slider } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import '../App.css'

class Volume extends Component {

    constructor(props){
        super(props);
        this.state ={
            volume: props.value
        }

        this.handleChange= this.handleChange.bind(this)
    }

    handleChange(event,newValue){
        this.setState({
            volume: newValue
        })
        this.props.updateVolume(newValue)
    }

    render(){
        console.log("inital value" + this.state.volume)
        return (
            <Grid className="volume-container">
                <Grid item>
                    <VolumeDown />
                </Grid>
                <Grid item xs>
                    <Slider 
                    value={this.state.value} 
                    onChange={this.handleChange}  
                    aria-labelledby="continuous-slider" 
                    defaultValue ={this.props.value}
                    valueLabelDisplay="auto"
                    />
                    {/* <lable>{this.state.volume}</lable> */}
                </Grid>
                <Grid item>
                    <VolumeUp />
                </Grid>
            </Grid>
        )
    }
    
}

export default Volume
