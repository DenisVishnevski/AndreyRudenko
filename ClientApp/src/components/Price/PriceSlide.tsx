import * as React from 'react';
import { Component } from 'react';

interface Props {
    children: string,
    title: string,
    price: number
    id: number

}
export class PriceSlide extends Component<Props> {
    render() {
        return (
            <div className="price__column">
                <div className="price__text">
                    <div className="price__title_container">
                        <div className="price__title">
                            <b>{this.props.title.toUpperCase()}</b>
                        </div>
                    </div>
                    <div className="price__description" >
                        <p>{this.props.children}</p>
                    </div>
                </div>
                <div className="price__line"></div>
                <div className="price__button_container">
                    <button className="price__button">
                        {this.props.price + 'Р'}
                    </button>
                </div>
            </div>
        )
    }
}
/*const Slide = ({ children }: { children: any }) => {
    return (
        <div className="price__row_photo">

            <PriceSlide />


        </div>
    )
}*/