import React, { useState } from 'react';
import Menu from './Menu';  

export default function Scene(props) {
    const scene = props.scene;
    const title = scene.title;
    const body = scene.body;
    const choices = scene.choices;
  
    return (
        <div>
            <h1>{title}</h1>
            <h2>{body}</h2>
            <Menu choices={choices} onChoose={onChoose}/>
            <button onClick={props.handleClick}>Next scene!</button>
        </div>
    )
}

function onChoose(feedback) {
    alert(feedback);
    // TODO: Properly change state
}

