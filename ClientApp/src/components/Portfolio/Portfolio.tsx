import * as React from 'react';
import { Component } from 'react';
import '../../css/Portfolio.css';

interface State {
    gallery: any,
    loading: boolean,
    imageArray: any,
    imagePath: string,
    viewMoreButton: string
}

let imageCount: number = 0;
let rowsLimit: number = 2;
let galleryRow: object[] = [];
let actualImageArray: any = [];
let isViewMore: boolean = false;
export class Portfolio extends Component<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            imageArray: [],
            imagePath: 'galleries/portraits/',
            gallery: [],
            loading: true,
            viewMoreButton: 'block'
        };
        this.switchTab = this.switchTab.bind(this);
        this.viewMore = this.viewMore.bind(this);
    }
    componentDidMount() {
        this.addImageArray();
    }
    addRow(array: any) {
        const imageMaxCount = imageCount + 3;
        let rowObject: { row: string[] } = {
            row: []
        };
        for (; imageCount < imageMaxCount; imageCount++) {
            if (array[imageCount] != undefined) {
                rowObject.row.push(array[imageCount]);
            }
        }
        galleryRow = [...galleryRow, rowObject.row]
    }
    galleryFilling(array: any) {
        actualImageArray = array;
        this.setState((state) => ({
            viewMoreButton: 'block'
        }));
        for (let i = 0; i < rowsLimit; i++) {
            this.addRow(array);
            if (array[imageCount] == undefined) {
                this.setState((state) => ({
                    viewMoreButton: 'none'
                }));
                break;
            }
        }
        if (isViewMore == false && galleryRow.length > rowsLimit) {
            let cleanList = galleryRow.length - rowsLimit;
            for (let i = 0; i < (cleanList); i++) {
                galleryRow.shift();
            }
        }
        this.setState((state) => ({
            gallery: galleryRow
        }));
    }
    switchTab(event: any) {
        const imageArray = this.state.imageArray;
        let value = event.target.value;
        imageCount = 0;
        isViewMore = false;
        switch (value) {
            case 'portraits':
                this.setState((state) => ({
                    imagePath: 'galleries/portraits/'
                }));
                this.galleryFilling(imageArray.portraits);
                break;
            case 'family_shooting':
                this.setState((state) => ({
                    imagePath: 'galleries/family/'
                }));
                this.galleryFilling(imageArray.family);
                break;
            case 'events':
                this.setState((state) => ({
                    imagePath: 'galleries/events/'
                }));
                this.galleryFilling(imageArray.events);
                break;
        }
    }
    viewMore() {
        isViewMore = true;
        this.galleryFilling(actualImageArray);
    }
    render() {
        const gallery = this.state.gallery;
        return (
            <div className="component">
                <h1 id="2">Portfolio</h1>
                <ul className="portfolio__list">
                    <li className="portfolio__item">
                        <input type="radio" id="pb1" name="portfolio__button" value="portraits" onChange={this.switchTab} defaultChecked></input>
                        <label htmlFor="pb1" className="portfolio__title">portraits</label>
                    </li>
                    <li className="portfolio__item">
                        <input type="radio" id="pb2" name="portfolio__button" value="family_shooting" onChange={this.switchTab}></input>
                        <label htmlFor="pb2" className="portfolio__title">family shooting</label>
                    </li>
                    <li className="portfolio__item">
                        <input type="radio" id="pb3" name="portfolio__button" value="events" onChange={this.switchTab}></input>
                        <label htmlFor="pb3" className="portfolio__title">events</label>
                    </li>
                </ul>
                <div className="black__line"></div>

                <div className="gallery">
                    <div className="gallery__portraits">
                        {gallery.map((row: any) =>
                            <div className='gallery__row'>
                                {row.map((image: any) =>
                                    <img className="gallery__image" src={this.state.imagePath + image.name} alt="Image" />
                                )}
                            </div>
                        )}
                        
                    </div>

                    <div className="gallery__family_shooting"></div>

                    <div className="gallery__events"></div>

                </div>
                <button className="view_more__button" onClick={this.viewMore} style={{ display: this.state.viewMoreButton }}>View more</button>
            </div>

        );
    }
    async addImageArray() {
        const response = await fetch('gallery');
        const imagesUrl = await response.json();
        this.setState({
            imageArray: imagesUrl,
            loading: false
        });
        this.galleryFilling(this.state.imageArray.portraits)

    }
}