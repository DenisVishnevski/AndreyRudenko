import * as React from 'react';
import { Component } from 'react';
import '../../css/Price.css';
import arrow from '../../assets/images/arrow.png';
import { PriceContainer } from './PriceContainer';


interface State {
    offset: number,
    slides: object[],
    containerWidth: number,
    sliderLocalOffset: number
}
const slideWidth = 480;
const photoSlides: object[] = [
    { id: 1, title: "portraits", price: 450 },
    { id: 2, title: "family shooting", price: 2300 },
    { id: 3, title: "events", price: 380 },
    { id: 4, title: "photo", price: 1500 },
    { id: 5, title: "sas", price: 800 }
];
const videoSlides: object[] = [
    { id: 1, title: "video", price: 450 },
    { id: 2, title: "family video", price: 2300 },
    { id: 3, title: "video", price: 380 },
    { id: 4, title: "video", price: 1500 },
    { id: 5, title: "video", price: 800 }
];
export class Price extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            offset: slideWidth * photoSlides.length,
            slides: [...photoSlides, ...photoSlides, ...photoSlides],
            containerWidth: (slideWidth * photoSlides.length) * 3,
            sliderLocalOffset: 0

        }
        this.slideRight = this.slideRight.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
        this.switchTab = this.switchTab.bind(this);

    }
    slideRight() {
        const newSlide = this.state.slides[0];

        this.setState((state) => ({
            offset: state.offset + 480,
            slides: [...state.slides, newSlide],
            containerWidth: state.containerWidth + 480,
            sliderLocalOffset: state.sliderLocalOffset + 480
        }))
        this.state.slides.shift();
    }
    slideLeft() {
        const newSlide = this.state.slides[this.state.slides.length - 1];
        
        this.setState((state) => ({
            offset: state.offset - 480,
            slides: [newSlide, ...state.slides],
            containerWidth: state.containerWidth + 480,
            sliderLocalOffset: state.sliderLocalOffset - 480
        }))
        this.state.slides.pop();
    }
    switchTab(event: any) {
        let value = event.target.value;
        switch (value) {
            case 'video':
                this.setState((state) => ({
                    slides: [...videoSlides, ...videoSlides, ...videoSlides],
                    containerWidth: (slideWidth * videoSlides.length) * 3,
                    
                }))
                break;
            case 'photo':
                this.setState((state) => ({
                    slides: [...photoSlides, ...photoSlides, ...photoSlides],
                    containerWidth: (slideWidth * photoSlides.length) * 3,
                    
                }))
                break;
        }
    }
    render() {
        return (
            <div className="component">
                <h1 id="4">Price</h1>
                <ul className="price__button_list">
                    <li className="price__title_button">
                        <input
                            type="radio"
                            id="prb1"
                            name="price__button"
                            value="photo"
                            onChange={this.switchTab}
                            defaultChecked>
                        </input>
                        <label
                            htmlFor="prb1" className="portfolio__title">photo</label>
                    </li>
                    <li className="price__title_button">
                        <input
                            type="radio"
                            onChange={this.switchTab}
                            id="prb2"
                            name="price__button"
                            value="video">
                        </input>
                        <label htmlFor="prb2" className="portfolio__title">video</label>
                    </li>
                </ul>
                <div className="black__line"></div>

                <button onClick={this.slideRight} className="slider__button_right">
                    <img src= { arrow } alt="arrow.png"></img>
                </button>
                <button onClick={this.slideLeft} className="slider__button_left">
                    <img src= { arrow } alt="arrow.png"></img>
                </button>


                <PriceContainer
                    sliderOffset={this.state.offset}
                    slides={this.state.slides}
                    containerWidth={this.state.containerWidth}
                    sliderLocalOffset={this.state.sliderLocalOffset} />


            </div>

        );
    }
}


