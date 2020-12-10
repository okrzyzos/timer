import React from 'react'

export default function Display(props) {
    return (
        <>
             <h1>{props.title}</h1>
                <h2>dureé: {props.timerValue}</h2>
        </>
    )
}
