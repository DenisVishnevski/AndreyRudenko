import * as React from 'react';
import { Component } from 'react';
import '../css/Footer.css';
import picture from '../assets/images/image 14.png';
import { changeName, changePhoneNumber } from '../store/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Selector } from './UI/Selector';

interface Props {
    name: string,
    phoneNumber: string,
    changeName?: any,
    changePhoneNumber?: any
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
class Footer extends Component<Props, { baseOptionsSelected: boolean }> {
    constructor(props: any) {
        super(props)
        this.state = {
            baseOptionsSelected: false
        }
        this.addOtherOptionSelector = this.addOtherOptionSelector.bind(this);
    }
    addOtherOptionSelector() {
        this.setState((state) => ({
            baseOptionsSelected: true
        }))
    }
    render() {
        const { name, phoneNumber, changeName, changePhoneNumber } = this.props;
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
                            <form action="#">

                                <input
                                    type="text"
                                    value={name}
                                    placeholder="Your name"
                                    name="name"
                                    onChange={(event) => {
                                        changeName(event.target.value);
                                    }}
                                    required></input>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    placeholder="Number"
                                    name="phone"
                                    onChange={(event) => {
                                        changePhoneNumber(event.target.value);
                                    }}
                                    required></input
                                >
                                <Selector selectorLabel="Select a service" options={baseOptionsMenu} isSelected={this.addOtherOptionSelector} zIndex={3} />
                                {this.state.baseOptionsSelected
                                    ? <Selector selectorLabel="Select a service" options={otherOptionsMenu} zIndex={2}  />
                                    : null}
                               
                            </form>
                            <button className="footer__button">
                                Sign up
                            </button>
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

            </footer>


        );
    }

}

const mapStateToProps = (state: any) => {
    return {
        name: state.name,
        phoneNumber: state.phoneNumber
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeName: bindActionCreators(changeName, dispatch),
        changePhoneNumber: bindActionCreators(changePhoneNumber, dispatch)
    }
}
let FooterWrapper = connect<Props>(mapStateToProps, mapDispatchToProps)(Footer);
export default FooterWrapper;