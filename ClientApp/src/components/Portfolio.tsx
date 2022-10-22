import * as React from 'react';
import { Component } from 'react';
import '../css/Portfolio.css';
import { GalleryPopup } from './Popups/GalleryPopup';
import Img from './UI/Img';
import { RadioButton } from './UI/RadioButton';

interface State {
    gallery: any,
    loading: boolean,
    imageArray: any,
    popupImageArray: object[];
    imagePath: string,
    viewMoreButton: string,
    closeGalleryButton: string,
    isPopup: boolean
}

const defaultImageLimit: number = 6;
let imageCount: number = 0;
let imageLimit: number = 6;
let actualImageArray: any = [];
let actualGallery: any = [];

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
            popupImageArray: [],
            imagePath: 'galleries/portraits/',
            gallery: [],
            loading: true,
            viewMoreButton: 'block',
            closeGalleryButton: 'none',
            isPopup: false
        };
        this.switchTab = this.switchTab.bind(this);
        this.viewMore = this.viewMore.bind(this);
        this.closeGallery = this.closeGallery.bind(this);
        this.openImage = this.openImage.bind(this);
        this.closeImage = this.closeImage.bind(this);
    }
    imageNameOnClick: string = "";

    componentDidMount() {
        this.addImageArray();
    }
    addGalleryBlock(array: string[]) {
        const newGalleryBlock: string[] = []
        for (; imageCount < imageLimit; imageCount++) {
            if (array[imageCount]) {
                newGalleryBlock.push(array[imageCount]);
            }
            if (array[imageCount + 1] === undefined) {
                this.setState((state) => ({
                    viewMoreButton: 'none'
                }));
                break;
            }
        }
        return newGalleryBlock;
    }
    galleryFilling(array: any) {
        actualImageArray = array;
        actualGallery = [...actualGallery, ...this.addGalleryBlock(array)];

        if (actualGallery.length > imageLimit) {
            let cleanList = actualGallery.length - defaultImageLimit;
            for (let i = 0; i < cleanList; i++) {
                actualGallery.shift();
            }
        }
        this.setState((state) => ({
            gallery: actualGallery
        }));
    }
    switchTab(event?: any) {
        const imageArray = this.state.imageArray;
        let value: string = '';
        if (event) {
            value = event.target.value;
        }
        this.defaultSettings();
        switch (value) {
            case 'portraits':
                this.setState((state) => ({
                    imagePath: 'galleries/portraits/',
                    popupImageArray: imageArray.portraits
                }));
                this.galleryFilling(imageArray.portraits);
                break;
            case 'family':
                this.setState((state) => ({
                    imagePath: 'galleries/family/',
                    popupImageArray: imageArray.family
                }));
                this.galleryFilling(imageArray.family);
                break;
            case 'events':
                this.setState((state) => ({
                    imagePath: 'galleries/events/',
                    popupImageArray: imageArray.events
                }));
                this.galleryFilling(imageArray.events);
                break;
            default:
                this.galleryFilling(actualImageArray);
                break;
        }
    }
    defaultSettings() {
        imageCount = 0;
        imageLimit = defaultImageLimit;
        this.setState((state) => ({
            closeGalleryButton: 'none',
            viewMoreButton: 'block'
        }));
    }
    viewMore() {
        imageLimit += 6;
        this.galleryFilling(actualImageArray);
        this.setState((state) => ({
            closeGalleryButton: 'block'
        }));
    }
    closeGallery() {
        this.switchTab();
    }
    openImage(image: any) {
        this.setState((state) => ({
            isPopup: true
        }));
        this.imageNameOnClick = image.target.id;
    }
    closeImage() {
        this.setState((state) => ({
            isPopup: false
        }));
    }
    render() {
        const gallery = this.state.gallery;
        return (
            <div className="component">
                <h1 id="2">Portfolio</h1>
                <div className="radio_buttons__list">
                    {galleryButtons.map((button: any) =>
                        <div className="radio_button" key={button.value} >
                            <RadioButton className="radio_button__title" id={button.id} name="portfolio__button" value={button.value} onChange={this.switchTab} isChecked={button.isChecked}>{button.value}</RadioButton>
                        </div>
                    )}
                </div>
                <div className="black__line"></div>
                <div className="gallery">
                    {gallery.map((image: any) => 
                        <Img key={image.name} onClick={this.openImage} className="gallery__image" src={this.state.imagePath + image.name} alt="Image" id={image.name} />
                    )}
                </div>
                <div className="gallery__buttons">
                    <button className="view_more__button" onClick={this.closeGallery} style={{ display: this.state.closeGalleryButton }}>Close</button>
                    <button className="view_more__button" onClick={this.viewMore} style={{ display: this.state.viewMoreButton }}>View more</button>
                </div>
                {this.state.isPopup
                    ? <GalleryPopup imageArray={this.state.popupImageArray} imagePath={this.state.imagePath} actualImageName={this.imageNameOnClick} closePopup={this.closeImage} />
                    : null
                }
            </div>
        );
    }
    async addImageArray() {
        const response = await fetch('gallery');
        const imagesUrl = await response.json();
        this.setState({
            imageArray: imagesUrl,
            popupImageArray: imagesUrl.portraits,
            loading: false
        });
        this.galleryFilling(this.state.imageArray.portraits)
    }
}