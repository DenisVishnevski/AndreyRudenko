import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeIsAutoScrolling } from '../../store/actions';
import '../../css/UI/Img.css';

interface Props {
    src: string,
    alt?: string,
    id?: string,
    className?: string,
    style?: React.CSSProperties
    onClick?: any,
    isAutoScrolling: boolean
}
class Img extends Component<Props, { imageStyle: React.CSSProperties, backgroundStyle: React.CSSProperties }> {
    constructor(props: any) {
        super(props)
        this.state = {
            imageStyle: { visibility: "hidden" },
            backgroundStyle: { display: "block" }
        }
        this.onClick = this.onClick.bind(this);
        this.showImage = this.showImage.bind(this);
    }
    componentDidUpdate(prevProps: any) {
        if (prevProps.src !== this.props.src) {
            this.setState(() => ({
                imageStyle: { visibility: "hidden" },
                backgroundStyle: { display: "block" }
            }));
        }
        if (prevProps.isAutoScrolling !== this.props.isAutoScrolling) {
            if (this.props.isAutoScrolling) {
                this.setState(() => ({
                    imageStyle: { visibility: "hidden" },
                    backgroundStyle: { display: "block" }
                }));

            }
            else {
                this.setState(() => ({
                    imageStyle: { visibility: "visible" },
                    backgroundStyle: { display: "none" }
                }));
            }
        }
    }
    onClick(image: any) {
        if (this.props.onClick) {
            this.props.onClick(image);
        }
    }
    showImage() {
        this.setState(() => ({
            imageStyle: { visibility: "visible" },
            backgroundStyle: { display: "none" }
        }));
    }
    render() {
        const { src, alt, id, className, style } = this.props;
        return (
            <div className="img_container">
                <div className="img_background" style={this.state.backgroundStyle}>Loading...</div>
                <img src={src}
                    alt={alt ? alt : "Image"}
                    id={id ? id : undefined}
                    className={className ? className : undefined}
                    style={(style ? Object.assign(style, this.state.imageStyle) : this.state.imageStyle)}
                    onClick={this.onClick}
                    onLoad={this.showImage}
                />
            </div>
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
let PortfolioWrapper = connect(mapStateToProps, mapDispatchToProps)(Img);
export default PortfolioWrapper;