import * as React from 'react';
import { Component } from 'react';
import Img from '../UI/Img';

interface Props {
    picture: any,
    title: string,
    children: string
}

export class StageColumn extends Component<Props> {
    render() {
        return (
            <div className="column">
                <div className="stw__image">
                    <Img src={this.props.picture} alt="Картинка"/>
                </div>
                <div className="stw__text_container">
                    <div className="stw__text">
                        <b>{this.props.title.toUpperCase()}</b>
                        <p>{this.props.children}</p>
                    </div>
                </div>
            </div>
        );
    }
}