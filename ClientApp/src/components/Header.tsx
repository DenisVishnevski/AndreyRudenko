import * as React from 'react';
import { Component } from 'react';
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import portrait from '../assets/images/IMAGE 2022-05-06 13_12_23 1 1.png';
import '../css/Header.css';
import { changeIsAutoScrolling } from '../store/actions';
import { MenuBurger } from './UI/MenuBurger';

class Header extends Component<{ isAutoScrolling: boolean, changeIsAutoScrolling: (scrolling: boolean) => void }> {
    constructor(props: any) {
        super(props)

        this.finishAutoScrolling = this.finishAutoScrolling.bind(this);
        this.startAutoScrolling = this.startAutoScrolling.bind(this);
    }
    startAutoScrolling() {
        this.props.changeIsAutoScrolling(true);
        setTimeout(this.finishAutoScrolling, 700);
    }
    finishAutoScrolling() {
        this.props.changeIsAutoScrolling(false);
    }
    render() {
        return (
            <main>
                <header>
                    <div className="wrapper">
                        <div className="header__wrapper">
                            <MenuBurger startAutoScrolling={this.startAutoScrolling} />
                            <nav className="header__nav">
                                <ul className="header__list" onClick={this.startAutoScrolling}>
                                    <li className="header__item">
                                        <a href="#1" className="header__link">about me</a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#2" className="header__link">portfolio</a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#3" className="header__link">stages of work</a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#4" className="header__link">price</a>
                                    </li>
                                    <li className="header__item">
                                        <a href="#5" className="header__link">contacts</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="header__contacts">
                                <ul className="header__list">
                                    <li className="header__item">Krasnodar</li>
                                    <li className="header__item">+7 (989) 814-30-16</li>
                                </ul>
                            </div>
                        </div>

                        <section className="intro">
                            <div className="intro_information">
                                <h1 className="intro__title">
                                    Andrey Rudenko
                                </h1>
                                <h4 className="intro__subtitle">
                                    Photographer and videographer
                                </h4>
                                <a className="intro__button" href="#5" onClick={this.startAutoScrolling}>
                                    Sign up for shooting
                                </a>

                            </div>
                            <div className="intro__photo">
                                <img src={portrait} alt="Andrey Rudenko" width="700" height="650"></img>
                            </div>

                        </section>
                    </div>

                </header>

            </main>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
        isAutoScrolling: state.isAutoScrolling
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeIsAutoScrolling: bindActionCreators(changeIsAutoScrolling, dispatch)
    }
}
let HeaderWrapper = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderWrapper;