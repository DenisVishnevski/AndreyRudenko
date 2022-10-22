import * as React from 'react';
import { Component } from 'react';
import '../css/Video.css';
import video from '../assets/videos/videoPortfolio.mp4';
import playButton from '../assets/images/playButton.svg';
import videoPreview from '../assets/images/videoPreview.png';

export class Video extends Component<{}, { isControls: boolean, isPlayButton: string }> {
    constructor(props: any) {
        super(props)
        this.state = {
            isControls: false,
            isPlayButton: "block"
        }
        this.playVideo = this.playVideo.bind(this);
    }
    playVideo(event: any) {
        console.log();
        function is_touch_device() {
            return 'ontouchstart' in window
                || navigator.maxTouchPoints;     
        }
        if (event.target.paused) {
            if (is_touch_device()) {
                event.target.play();
            }
            this.setState(() => ({
                isControls: true,
                isPlayButton: "none"
            }))
        }
    }
    render() {
        return (
            <div className="component">
                <h1>Video</h1>
                <div className="video__player_container">
                    <video onClick={this.playVideo}
                        src={video} className="video__player"
                        poster={videoPreview}
                        controls={this.state.isControls}
                        disablePictureInPicture
                        controlsList="nodownload noremoteplayback">
                    </video>
                    <img className="video__play_button" style={{ display: this.state.isPlayButton }} src={playButton} alt="Play"/>
                </div>
            </div>

        );
    }
}