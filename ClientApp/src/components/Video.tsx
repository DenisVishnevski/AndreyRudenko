import * as React from 'react';
import { Component } from 'react';
import '../css/Video.css';



export class Video extends Component {
    render() {
        return (
            <div className="component">
                <h1>Video</h1>
                <h2>Filming advertising</h2>
                <div className="video__player">
                    <video src="videoplayback.mp4" poster="Снимок экрана 2022-05-06 в 13.56 1.png" controls></video>
                </div>
            </div>

        );
    }
}