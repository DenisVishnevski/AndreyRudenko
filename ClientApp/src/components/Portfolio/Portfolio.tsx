import * as React from 'react';
import { Component } from 'react';
import '../../css/Portfolio.css';

let imageCount: number = 0;
let galleryRow: any = [];
export class Portfolio extends Component<{}, { gallery: any, loading: boolean, imageArray: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            imageArray: [],
            gallery: [],
            loading: true
        };
        this.addRow = this.addRow.bind(this);
    }
    componentDidMount() {
        this.addGallery();
    }
    addRow() {
        const imageMaxCount = imageCount + 3;
        let rowObject: { row: string[] } = {
            row: []
        };
        for (; imageCount < imageMaxCount; imageCount++) {
            if (this.state.imageArray[imageCount] != undefined) {
                rowObject.row.push(this.state.imageArray[imageCount]);
            }
        }
        galleryRow = [...galleryRow, rowObject.row]
    }
    galleryFilling() {
        let rowsLimit = 2;
        for (let i = 0; i < rowsLimit; i++) {
            this.addRow();
        }
        this.setState((state) => ({
            gallery: galleryRow
        }));
    }
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
                    <div className="gallery__portraits">
                        {this.state.gallery.map((row: any) =>
                            <div className='gallery__row'>
                                {row.map((image: any) =>
                                    <img className="gallery__image" src={'appGallery/' + image} alt="Image" />
                                )}
                            </div>
                        )}
                        
                    </div>

                    <div className="gallery__family_shooting"></div>

                    <div className="gallery__events"></div>

                </div>
                <button className="view_more__button">View more</button>
            </div>

        );
    }
    async addGallery() {
        const response = await fetch('gallery');
        const imagesUrl = await response.json();
        this.setState({
            imageArray: imagesUrl,
            loading: false
        });
        this.galleryFilling();
    }
}