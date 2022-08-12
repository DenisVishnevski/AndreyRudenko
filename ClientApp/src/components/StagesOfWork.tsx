import * as React from 'react';
import { Component } from 'react';
import picture1 from '../assets/images/image 3.png';
import '../css/StagesOfWork.css';

export class StagesOfWork extends Component {
    render() {
        return (
            <div className="component">
                <h1 id="3">Stages of work</h1>
                <div className="black__line"></div>
                <div className="row">
                    <div className="column">
                        <div className="stw__image">
                             <img src={picture1} alt="Картинка"></img>
                        </div>
                        <div className="stw__text_container">
                            <div className="stw__text">
                                <b>INTRODUCTION</b>
                                <p>lso, in addition to photo shoots, I shoot video films. It could be your product, any event, or a love
                                    story. I will help you and your partner discover your most sensual side and sneakily follow your love.
                                    If
                                    you want to see from the o</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="stw__image">
                             <img src={picture1} alt="Картинка"></img>
                        </div>
                        <div className="stw__text_container">
                            <div className="stw__text">
                                <b>INTRODUCTION</b>
                                <p>lso, in addition to photo shoots, I shoot video films. It could be your product, any event, or a love
                                    story. I will help you and your partner discover your most sensual side and sneakily follow your love.
                                    If
                                    you want to see from the o</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="stw__image">
                             <img src={picture1} alt="Картинка"></img>
                        </div>
                        <div className="stw__text_container">
                            <div className="stw__text">
                                <b>INTRODUCTION</b>
                                <p>lso, in addition to photo shoots, I shoot video films. It could be your product, any event, or a love
                                    story. I will help you and your partner discover your most sensual side and sneakily follow your love.
                                    If
                                    you want to see from the o</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="stw__image">
                             <img src={picture1} alt="Картинка"></img>
                        </div>
                        <div className="stw__text_container">
                            <div className="stw__text">
                                <b>INTRODUCTION</b>
                                <p>lso, in addition to photo shoots, I shoot video films. It could be your product, any event, or a love
                                    story. I will help you and your partner discover your most sensual side and sneakily follow your love.
                                    If
                                    you want to see from the o</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}