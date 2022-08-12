import * as React from 'react';
import { Component } from 'react';
import '../css/Portfolio.css';


export class Portfolio extends Component {
    render() {
        return (
            <div className="component">
                <h1 id="2">Portfolio</h1>
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <input type="radio" id="pb1" name="portfolio__button" value="portraits" defaultChecked></input>
                        <label htmlFor="pb1" className="portfolio__title">portraits</label>
                    </li>
                    <li className="portfolio__item">
                        <input type="radio" id="pb2" name="portfolio__button" value="family_shooting"></input>
                        <label htmlFor="pb2" className="portfolio__title">family shooting</label>
                    </li>
                    <li className="portfolio__item">
                        <input type="radio" id="pb3" name="portfolio__button" value="events"></input>
                        <label htmlFor="pb3" className="portfolio__title">events</label>
                    </li>
                </ul>
                <div className="black__line"></div>

                <div className="gallery">
                    <div className="gallery__portraits"></div>

                    <div className="gallery__family_shooting"></div>

                    <div className="gallery__events"></div>

                </div>
                <button className="view_more__button">View more</button>
            </div>

        );
    }
}