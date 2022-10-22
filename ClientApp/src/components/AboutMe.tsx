import * as React from 'react';
import { Component } from 'react';
import '../css/AboutMe.css';
import picture1 from '../assets/images/landscape1.jpg';
import picture2 from '../assets/images/landscape2.jpg';
import Img from './UI/Img';

export class AboutMe extends Component {

    render() {
        return (
            <div className="component">
                <h1 id="1">About Me</h1>
                <div className="black__line"></div>
                <div className="containers">
                    <div className="left__container">
                        <p>Hey! My name is Andrey, I am a professional photographer in Krasnodar city. As a professional
                            photographer and a person who loves his job, I help with posing at a photo shoot, teach you how to stand
                            up correctly, show where to put your hands, where to look, how to get slimmer in a photo, tell you how
                            to deal with stress and many other points that will help you get make the most of your photo session!</p>
                        <Img src={picture1} alt="Фото пейзажа"/>
                    </div>
                    <div className="right__container">
                        <Img src={picture2} alt="Фото пейзажа"/>
                        <p>Also, in addition to photo shoots, I shoot video films. It could be your product, any event, or a love
                            story. I will help you and your partner discover your most sensual side and sneakily follow your love.
                            If you want to see from the outside how sensual and wonderful a person you are, then I offer my help
                            in this!</p>
                    </div>

                </div>
            </div>

        );
    }
}