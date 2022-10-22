import * as React from 'react';
import { Component } from 'react';
import '../../css/Price.css';
import arrow from '../../assets/images/arrow.svg';
import arrowMobile from '../../assets/images/arrowMobile.svg';
import { PriceContainer } from './PriceContainer';
import { RadioButton } from '../UI/RadioButton';
import { baseOptions, photoOptions, videoOptions } from '../../data/shootingOptions';
import calcSlideWidth from '../../scripts/Price/slideWidthCalculator';
import { handleTouchEnd, handleTouchStart } from '../../scripts/touchHandling/touchHandler';

interface State {
    offset: number,
    slides: object[],
    containerWidth: number,
    sliderLocalOffset: number,
    baseOption: string,
    transition: string
}
let slideWidth: any = calcSlideWidth();
let actualOptionsLength: number = photoOptions.length;
let actualHandleOffset: number = 0;

export class Price extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            offset: slideWidth * photoOptions.length,
            slides: [...photoOptions, ...photoOptions, ...photoOptions],
            containerWidth: (slideWidth * photoOptions.length) * 3,
            sliderLocalOffset: 0,
            baseOption: 'photo',
            transition: 'left ease-out .4s'
        }
        this.slideRight = this.slideRight.bind(this);
        this.slideLeft = this.slideLeft.bind(this);
        this.switchTab = this.switchTab.bind(this);
        this.slidesWidthUpdate = this.slidesWidthUpdate.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
    }
    onTouchEnd(event: any) {
        this.actionHandler(handleTouchEnd(event));
    }
    actionHandler(swipeDirection: any) {
        switch (swipeDirection) {
            case 1:
                this.slideRight();
                break;
            case -1:
                this.slideLeft();
                break;
        }
    }

    slideRight() {
        const newSlide = this.state.slides[0];

        this.setState((state) => ({
            transition: 'left ease-out .4s',
            offset: state.offset + slideWidth,
            slides: [...state.slides, newSlide],
            containerWidth: state.containerWidth + slideWidth,
            sliderLocalOffset: state.sliderLocalOffset + slideWidth
        }))
        actualHandleOffset += slideWidth;
        this.state.slides.shift();
    }
    slideLeft() {
        const newSlide = this.state.slides[this.state.slides.length - 1];

        this.setState((state) => ({
            transition: 'left ease-out .4s',
            offset: state.offset - slideWidth,
            slides: [newSlide, ...state.slides],
            containerWidth: state.containerWidth + slideWidth,
            sliderLocalOffset: state.sliderLocalOffset - slideWidth
        }))
        actualHandleOffset -= slideWidth;
        this.state.slides.pop();
    }
    switchTab(event?: any) {
        let value: string = '';
        if (event) {
            value = event.target.value;
        }
        switch (value) {
            case 'video':
                this.setState((state) => ({
                    slides: [...videoOptions, ...videoOptions, ...videoOptions],
                    containerWidth: (slideWidth * videoOptions.length) * 3,
                }))
                actualOptionsLength = videoOptions.length
                break;
            case 'photo':
                this.setState((state) => ({
                    slides: [...photoOptions, ...photoOptions, ...photoOptions],
                    containerWidth: (slideWidth * photoOptions.length) * 3,
                }))
                actualOptionsLength = photoOptions.length
                break;
            default:
                this.setState((state) => ({
                    transition: 'none',
                    containerWidth: (slideWidth * actualOptionsLength) * 3,
                    offset: actualHandleOffset + slideWidth * actualOptionsLength
                }))
                break;
        }
        this.setState((state) => ({
            baseOption: value
        }))
    }
    slidesWidthUpdate(event: any) {
        slideWidth = calcSlideWidth();

        this.switchTab();
    }
    render() {
        window.addEventListener('resize', this.slidesWidthUpdate)
        return (
            <div className="component">
                <h1 id="4">Price</h1>
                <div className="price__button_panel">
                    <div className="radio_buttons__list">
                        {baseOptions.map((button: any) =>
                            <div className="radio_button" key={button.value}>
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
                    <div className="slider__buttons_mobile">
                        <img onClick={this.slideLeft} style={{ transform: "scale(-1, 1)" }} src={arrowMobile} alt="Next Slide" />
                        <img onClick={this.slideRight} src={arrowMobile} alt="Next Slide" />
                    </div>
                </div>
                <div className="black__line"></div>

                <div className="price__content" onTouchStart={handleTouchStart} onTouchEnd={this.onTouchEnd}>
                    <button onClick={this.slideRight} className="slider__button_right">
                        <img src={arrow} alt="arrow.png"/>
                    </button>
                    <button onClick={this.slideLeft} className="slider__button_left">
                        <img src={arrow} alt="arrow.png"/>
                    </button>
                    <PriceContainer
                        baseOption={this.state.baseOption}
                        sliderOffset={this.state.offset}
                        slides={this.state.slides}
                        containerWidth={this.state.containerWidth}
                        sliderLocalOffset={this.state.sliderLocalOffset}
                        transition={this.state.transition} />
                </div>
            </div>
        );
    }
}


