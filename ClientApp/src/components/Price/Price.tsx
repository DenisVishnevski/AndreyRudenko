import * as React from 'react';
import { Component } from 'react';
import '../../css/Price.css';
import arrow from '../../assets/images/arrow.png';
import { PriceContainer } from './PriceContainer';
import { RadioButton } from '../UI/RadioButton';
import { baseOptions, photoOptions, videoOptions} from '../../data/shootingOptions';

interface State {
    offset: number,
    slides: object[],
    containerWidth: number,
    sliderLocalOffset: number,
    baseOption: string
}
const slideWidth = 480;

export class Price extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            offset: slideWidth * photoOptions.length,
            slides: [...photoOptions, ...photoOptions, ...photoOptions],
            containerWidth: (slideWidth * photoOptions.length) * 3,
            sliderLocalOffset: 0,
            baseOption: "photo"

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
                    slides: [...videoOptions, ...videoOptions, ...videoOptions],
                    containerWidth: (slideWidth * videoOptions.length) * 3,

                }))
                break;
            case 'photo':
                this.setState((state) => ({
                    slides: [...photoOptions, ...photoOptions, ...photoOptions],
                    containerWidth: (slideWidth * photoOptions.length) * 3,

                }))
                break;
        }
        this.setState((state) => ({
            baseOption: value
        }))
    }
    render() {
        return (
            <div className="component">
                <h1 id="4">Price</h1>
                <div className="radio_buttons__list">
                    {baseOptions.map((button: any) =>
                        <div className="radio_button">
                            <RadioButton
                                className="radio_button__title"
                                id={button.id} name="price__button"
                                value={button.value} onChange={this.switchTab}
                                isChecked={button.isChecked}>
                                {button.value}
                            </RadioButton>
                        </div>
                    )}
                </div>
                <div className="black__line"></div>

                <button onClick={this.slideRight} className="slider__button_right">
                    <img src={arrow} alt="arrow.png"></img>
                </button>
                <button onClick={this.slideLeft} className="slider__button_left">
                    <img src={arrow} alt="arrow.png"></img>
                </button>
                <PriceContainer
                    baseOption={this.state.baseOption}
                    sliderOffset={this.state.offset}
                    slides={this.state.slides}
                    containerWidth={this.state.containerWidth}
                    sliderLocalOffset={this.state.sliderLocalOffset} />
            </div>
        );
    }
}


