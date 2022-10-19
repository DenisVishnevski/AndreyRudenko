import * as React from 'react';
import { Component } from 'react';

interface Props {
    src: string,
    alt?: string,
    id?: string,
    className?: string,
    style?: React.CSSProperties
    onClick?: any
}
export class Img extends Component<Props, { style: React.CSSProperties }> {
    constructor(props: any) {
        super(props)
        this.state = {
            style: { visibility: "hidden" }
        }
        this.onClick = this.onClick.bind(this);
        this.showImage = this.showImage.bind(this);
    }
    componentDidUpdate(prevProps: any) {
        if (prevProps.src != this.props.src) {
            this.setState(() => ({
                style: { visibility: "hidden" }
            }));
        }
    }
    onClick(image: any) {
        if (this.props.onClick) {
            this.props.onClick(image);
        }
    }
    showImage() {
        this.setState(() => ({
            style: { visibility: "visible" }
        }));
    }
    render() {
        const { src, alt, id, className, style } = this.props;
        return (
                <img src={src}
                    alt={alt ? alt : "Image"}
                    id={id ? id : undefined}
                    className={className ? className : undefined}
                    style={(style ? Object.assign(style, this.state.style) : this.state.style)}
                    onClick={this.onClick}
                    onLoad={this.showImage}
                />
        );
    }
}