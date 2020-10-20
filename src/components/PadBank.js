import React from 'react'
import DrumPad from './DrumPad'

function PadBank(props) {
    console.log(props)
    return (
        <div> 
            {props.bank.map((pad,i) => 
                <DrumPad 
                power = {props.power}
                updateText={props.updateText}
                key={i} 
                keyCode={pad.keyCode} 
                keyTrigger={pad.keyTrigger} 
                clipId = {pad.id} 
                clipUrl = {pad.url}
                volume={props.volume}   /> )}
        </div>
    )
}

export default PadBank
