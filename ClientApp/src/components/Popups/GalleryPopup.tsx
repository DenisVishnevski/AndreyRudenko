import * as React from 'react';
import { Component } from 'react';
import arrow from '../../assets/images/arrowWhite.svg'
import x from '../../assets/images/whiteX.svg'
import '../../css/Popups/GalleryPopup.css';

interface Props {
    closePopup: any,
    imagePath: string,
    actualImageName: string,
    imageArray: any
}
interface State {
    gallery: any
    actualGalleryIndex: any,
    isLoading: boolean

}
export class GalleryPopup extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            gallery: [],
            actualGalleryIndex: 0,
            isLoading: true
        }

        this.close = this.close.bind(this);
        this.nextImage = this.nextImage.bind(this);
        this.prevImage = this.prevImage.bind(this);
    }
    componentDidMount() {
        let { actualImageName, imageArray } = this.props

        let actualImageIndex: number = imageArray.findIndex((image: { name: string }) => image.name == actualImageName);
 
        let actualimageArray: any = [];
        for (let index = 0; index < imageArray.length; index++) {
            let newIndex: number = index + actualImageIndex;
            if (imageArray[newIndex] == undefined) {
                newIndex = index - imageArray.length + actualImageIndex;
            }
            actualimageArray[index] = imageArray[newIndex];
        }
        this.setState({
            gallery: actualimageArray,
            actualGalleryIndex: 0,
            isLoading: false
        });
    }
    nextImage() {
        let newGalleryIndex: number = this.state.actualGalleryIndex + 1
        if (this.state.gallery[newGalleryIndex] == undefined) {
            newGalleryIndex = 0;
        }
        this.changeImage(newGalleryIndex)
    }
    prevImage() {
        let newGalleryIndex: number = this.state.actualGalleryIndex - 1
        if (this.state.gallery[newGalleryIndex] == undefined) {
            newGalleryIndex = this.state.gallery.length - 1;
        }
        this.changeImage(newGalleryIndex)
    }
    changeImage(newGalleryIndex: number) {
        this.setState((state) => ({
            actualGalleryIndex: newGalleryIndex
        }));
        console.log(newGalleryIndex)
    }
    close() {
        this.props.closePopup();
    }
    render() {
        return (
            <div className="popup_background">
                <img className="popup_x" src={x} alt="Left Button" onClick={this.close} />
                <img className="popup_left_arrow" src={arrow} alt="Left Button" onClick={this.prevImage} />
                {this.state.isLoading
                    ? null
                    : <img className="popup_image" src={this.props.imagePath + this.state.gallery[this.state.actualGalleryIndex].name} alt="Image" />
                    }
                <img className="popup_right_arrow" src={arrow} alt="Right Button" onClick={this.nextImage} />
            </div>
        );
    }
}