import * as React from 'react';
import { Component } from 'react';
import PriceSlide from './PriceSlide';

interface Props {
    slides: any,
    containerWidth: number,
    sliderLocalOffset: number,
    sliderOffset: number,
    baseOption: string
}
export class PriceContainer extends Component<Props> {

    render() {
        const styles = {
            Row: {
                left: -this.props.sliderOffset + 'px',
                width: this.props.containerWidth + 'px'
            },
            RowWrapper: {
                left: this.props.sliderLocalOffset
            }
        }
        return (
            <div className="price__container">
                <div className='price__row_wrapper' style={styles.RowWrapper}>
                    <div className="price__row_photo" style={styles.Row}>
                        {this.props.slides.map((slide: any) =>
                            <PriceSlide
                                baseOption={this.props.baseOption}
                                id={slide.id}
                                title={String(slide.value)}
                                price={slide.price}>
                                Code till here is self-explanatory,
                                we have created containers and components
                                as shown in the dom tree with code snippets.
                                Whatever comes after this is where you need to pay attention.
                            </PriceSlide>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
