import * as React from 'react';
import { Component } from 'react';
import '../../css/Portfolio.css';
import { RadioButton } from '../UI/RadioButton';

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

const galleryButtons: object[] = [
    { id: "gb1", value: "portraits", isChecked: true },
    { id: "gb2", value: "family", isChecked: false },
    { id: "gb3", value: "events", isChecked: false }
];
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
            if (array[imageCount] !== undefined) {
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
            case 'family':
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
                <div className="radio_buttons__list">
                    {galleryButtons.map((button: any) =>
                        <div className="radio_button" >
                            <RadioButton className="radio_button__title" id={button.id} name="portfolio__button" value={button.value} onChange={this.switchTab} isChecked={button.isChecked}>{button.value}</RadioButton>
                        </div>
                    )}
                </div>
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