import React from 'react'
import { Switch } from '@material-ui/core'

function Power(props) {
    
    return (
        <div>
        <lable><strong>POWER</strong></lable>
            <Switch size="small" checked={props.power} onChange={props.onClick} />
        </div>
        
    )
}

export default Power
