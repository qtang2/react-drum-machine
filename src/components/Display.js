import React from 'react'
import '../App.css'

function Display({text}) {
    return (
        <div id="display">
            <text id="text">{text}</text>
        </div>
    )
}

export default Display
