import * as React from 'react';
import { Component } from 'react';
import '../css/Footer.css';
import picture from '../assets/images/image 14.png';
import { Selector } from './UI/Selector';
import { FooterPopup } from './Popups/FooterPopup';
import { baseOptions, photoOptions, videoOptions } from '../data/shootingOptions';
import { bindActionCreators } from 'redux';
import { changeShootingOptions } from '../store/actions';
import { connect } from 'react-redux';

interface State {
    name: string,
    phoneNumber: string,
    baseOptionsSelected: boolean,
    baseOption: string,
    otherOptions: object[],
    otherOption: string,
    popup: boolean
}
enum Selectors {
    baseSelector,
    otherSelector
}
class Footer extends Component<{ shootingOptions: any }, State> {
    defaultSelectorLabel: string = "Select a service";
    constructor(props: any) {
        super(props)
        this.state = {
            name: "",
            phoneNumber: "",
            baseOptionsSelected: false,
            baseOption: this.defaultSelectorLabel,
            otherOptions: [],
            otherOption: this.defaultSelectorLabel,
            popup: false
        }
        this.selectBaseOption = this.selectBaseOption.bind(this);
        this.selectOtherOption = this.selectOtherOption.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidUpdate(prevProps: any) {
        if (prevProps.shootingOptions != this.props.shootingOptions) {
            this.selectBaseOption(this.props.shootingOptions.baseOption);
            this.selectOtherOption(this.props.shootingOptions.otherOption);
        }
    }
    addOtherOptionSelector(baseOptionValue: string) {
        switch (baseOptionValue) {
            case "photo": {
                this.setState((state) => ({
                    otherOptions: photoOptions,
                    baseOptionsSelected: true
                }));
            }
                break;
            case "video": {
                this.setState((state) => ({
                    otherOptions: videoOptions,
                    baseOptionsSelected: true
                }));
            }
                break;
        }
        this.selectorsLabelDefault(Selectors.otherSelector);
    }
    async onSubmit(event: any) {
        const inputValidation: boolean =
            this.state.baseOption != this.defaultSelectorLabel &&
            this.state.otherOption != this.defaultSelectorLabel &&
            this.state.name.length != 0 &&
            this.state.phoneNumber.length != 0
        if (inputValidation) {
            fetch('email', {
                method: 'POST',
                body: JSON.stringify({
                    name: this.state.name,
                    contactDetails: this.state.phoneNumber,
                    baseOption: this.state.baseOption,
                    otheroption: this.state.otherOption
                }),
                headers: {
                    'Accept': 'application/json; charset=utf-8',
                    'Content-Type': 'application/json;charset=UTF-8'
                }
            });
            this.setState((state) => ({
                name: "",
                phoneNumber: "",
                baseOptionsSelected: false
            }))
            this.selectorsLabelDefault();
            this.openPopup();
        }
        event.preventDefault();
    }
    selectorsLabelDefault(selector?: Selectors) {
        if (selector == Selectors.baseSelector) {
            this.setState((state) => ({
                baseOption: this.defaultSelectorLabel
            }))
        }
        else if (selector == Selectors.otherSelector) {
            this.setState((state) => ({
                otherOption: this.defaultSelectorLabel
            }))
        }
        else {
            this.setState((state) => ({
                baseOption: this.defaultSelectorLabel,
                otherOption: this.defaultSelectorLabel
            }))
        }
    }
    selectBaseOption(value: any) {
        let capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        this.setState((state) => ({
            baseOption: capitalizedValue,
            baseOptionsSelected: true
        }));
        this.addOtherOptionSelector(value);
    }
    selectOtherOption(value: any) {
        let capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        this.setState((state) => ({
            otherOption: capitalizedValue
        }));
    }
    openPopup() {
        this.setState((state) => ({
            popup: true
        }))
    }
    closePopup() {
        this.setState((state) => ({
            popup: false
        }))
    }
    render() {
        return (
            <footer>
                <div className="wrapper">
                    <div className="footer__content">
                        <img className="footer__picture" src={picture} alt="" />
                        <div className="footer__registration">
                            <h1 id="5">Get in touch with me</h1>
                            <div className="footer__subtitle">
                                <h2>Did you like my work? Leave a request and I will contact you</h2>
                            </div>
                            <form onSubmit={this.onSubmit}>

                                <input
                                    type="text"
                                    value={this.state.name}
                                    placeholder="Your name"
                                    name="name"
                                    onChange={(event) => {
                                        this.setState((state) => ({
                                            name: event.target.value
                                        }))
                                    }}></input>
                                <input
                                    type="tel"
                                    value={this.state.phoneNumber}
                                    placeholder="Contact Details"
                                    name="phone"
                                    onChange={(event) => {
                                        this.setState((state) => ({
                                            phoneNumber: event.target.value
                                        }))
                                    }}></input
                                >
                                <Selector
                                    label={this.state.baseOption}
                                    options={baseOptions}
                                    selectOption={this.selectBaseOption}
                                    zIndex={3} />
                                {this.state.baseOptionsSelected
                                    ? <Selector
                                        label={this.state.otherOption}
                                        options={this.state.otherOptions}
                                        selectOption={this.selectOtherOption}
                                        zIndex={2} />
                                    : null}
                                <button className="footer__button">
                                    Send
                                </button>
                            </form>

                        </div>
                    </div>
                    <div className="footer__contacts_container">
                        <ul className="header__list">
                            <li className="header__item">
                                <a href="#1" className="header__link">Instagram</a>
                            </li>
                            <li className="header__item">
                                <a href="#1" className="header__link">VK</a>
                            </li>
                            <li className="header__item">
                                <a href="#1" className="header__link">YouTube</a>
                            </li>
                        </ul>
                        <div className="footer__contacts">
                            <ul className="footer__list">
                                <li className="header__item">Krasnodar</li>
                                <li className="header__item">+7 (989) 814-30-16</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {this.state.popup
                    ? <FooterPopup closePopup={this.closePopup} />
                    : null
                }
            </footer>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        shootingOptions: state.shootingOptions
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeShootingOptions: bindActionCreators(changeShootingOptions, dispatch)
    }
}
let FooterWrapper = connect(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterWrapper;