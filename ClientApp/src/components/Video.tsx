import * as React from 'react';
import { Component } from 'react';
import '../css/Video.css';



export class Video extends Component {
    render() {
        return (
            <div className="component">
                <h1>Video</h1>
                <div className="video__player_container">
                    <video className="video__player" src="videoplayback.mp4" poster="Снимок экрана 2022-05-06 в 13.56 1.png" controls></video>
                </div>
            </div>

        );
    }
}