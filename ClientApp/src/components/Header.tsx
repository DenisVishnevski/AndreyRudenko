import * as React from 'react';
import { Component } from 'react';
import portrait from '../assets/images/IMAGE 2022-05-06 13_12_23 1 1.png';
import '../css/Header.css';

export class Header extends Component {
    render() {
        return (
            <main>
                <header>
                    <div className="wrapper">
                        <div className="header__wrapper">
                            <nav className="header__nav">
                                <ul className="header__list">
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
                            <div className="header__burger">
                                <img src="Burger.png" alt="Burger" width="40" height="40"></img>
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
                                <button className="intro__button">
                                    Sign up for shooting
                                </button>
                                <button className="intro__button_mobile">
                                    Sign up
                                </button>
                                <div className="intro__languages">
                                    <a href="#1" className="header__link">En </a>
                                    <a href="#1" className="header__link">Ru</a>
                                </div>

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