import React from 'react';
import IScene from './App';
import IChoice from './App';

type SceneProps = {
    currentScene: IScene
}

export default class Scene extends React.Component<SceneProps, {}> {

    constructor(props:SceneProps) {
        super(props);
    }

    render() {
        return (
            <div></div>
        );
    }
}