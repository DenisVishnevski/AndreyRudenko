import * as React from 'react';
import { Component } from 'react';
import '../css/Footer.css';
import picture from '../assets/images/image 14.png';
import { Selector } from './UI/Selector';
import { FooterPopup } from './Popups/FooterPopup';

interface State {
    name: string,
    phoneNumber: string,
    baseOptionsSelected: boolean,
    baseOption: string,
    otherOption: string,
    selectorsLabelisDefault: boolean,
    popup: boolean
}
const baseOptionsMenu: object[] = [
    { id: "bo1", value: "photo", isChecked: false },
    { id: "bo2", value: "video", isChecked: false }
];
const otherOptionsMenu: object[] = [
    { id: "oo1", value: "portraits", isChecked: false },
    { id: "oo2", value: "family", isChecked: false },
    { id: "oo3", value: "events", isChecked: false }
];
export class Footer extends Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            name: "",
            phoneNumber: "",
            baseOptionsSelected: false,
            baseOption: "Сам",
            otherOption: "Спросишь",
            selectorsLabelisDefault: false,
            popup: false,
        }
        this.addOtherOptionSelector = this.addOtherOptionSelector.bind(this);
        this.selectBaseOption = this.selectBaseOption.bind(this);
        this.selectOtherOption = this.selectOtherOption.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.cancelSelectorsLabelDefault = this.cancelSelectorsLabelDefault.bind(this);
    }
    addOtherOptionSelector() {
        this.setState((state) => ({
            baseOptionsSelected: true
        }))
    }
    selectBaseOption(value: string) {
        this.setState((state) => ({
            baseOption: value
        }))
    }
    selectOtherOption(value: string) {
        this.setState((state) => ({
            otherOption: value
        }))
    }
    async onSubmit(event: any) {
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
            selectorsLabelisDefault: true,
            baseOptionsSelected: false
        }))
        event.preventDefault();
        this.openPopup();
    }
    cancelSelectorsLabelDefault() {
        this.setState((state) => ({
            selectorsLabelisDefault: false
        }))
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
                                <Selector canselDefault={this.cancelSelectorsLabelDefault } isDefault={this.state.selectorsLabelisDefault} selectorLabel="Select a service" options={baseOptionsMenu} isSelected={this.addOtherOptionSelector} selectOption={this.selectBaseOption} zIndex={3} />
                                {this.state.baseOptionsSelected
                                    ? <Selector isDefault={this.state.selectorsLabelisDefault} selectorLabel="Select a service" options={otherOptionsMenu} selectOption={this.selectOtherOption} zIndex={2}  />
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
