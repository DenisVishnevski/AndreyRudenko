import * as React from 'react';
import { Component } from 'react';
import introduction from '../../assets/images/introduction.jpg';
import concept from '../../assets/images/concept.jpg';
import shooting from '../../assets/images/shooting.jpg';
import result from '../../assets/images/result.jpg';
import '../../css/StagesOfWork.css';
import { StageColumn } from './StageColumn';

export class StagesOfWork extends Component {
    render() {
        return (
            <div className="component">
                <h1 id="3">Stages of work</h1>
                <div className="black__line"></div>
                <div className="row">
                    <StageColumn title="introduction" picture={introduction}>
                        In order for our shooting to be easy and fun, we need
                        to get to know each other better.
                    </StageColumn>

                    <StageColumn title="concept" picture={concept}>
                        We discuss all the details of the shooting. We choose a location,
                        theme and image. I prepare references in advance.
                    </StageColumn>

                    <StageColumn title="shooting" picture={shooting}>
                        During the shooting, I will advise you on posing and emotions.
                        If necessary, there will be a change of image and locations.
                    </StageColumn>

                    <StageColumn title="result" picture={result}>
                        After a specified time, selected according to your tariff, you will receive processed photos,
                        taking into account your wishes.
                    </StageColumn>
                </div>
            </div>

        );
    }
}