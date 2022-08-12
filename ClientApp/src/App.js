import React, { Component } from 'react';
import { Layout } from './components/Layout';
import { AboutMe } from './components/AboutMe';
import { Portfolio } from './components/Portfolio';
import { StagesOfWork } from './components/StagesOfWork';
import { Video } from './components/Video';
import { Price } from './components/Price/Price';
import './css/global.css';



export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <div className="wrapper">
                    <AboutMe />
                    <Portfolio />
                    <StagesOfWork />
                    <Video />
                    <Price />
                </div>
            </Layout>
        );
    }
}
