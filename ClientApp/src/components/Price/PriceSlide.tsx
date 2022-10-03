import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeShootingOptions } from '../../store/actions';

interface Props {
    children: string,
    title: string,
    price: number,
    id: number,
    baseOption: string,
    changeShootingOptions: any
}
class PriceSlide extends Component<Props> {
    render() {
        return (
            <div className="price__column">
                <div className="price__column_cntainer">
                    <div className="price__text">
                        <div className="price__title_container">
                            <div className="price__title">
                                <b>{this.props.title.toUpperCase()}</b>
                            </div>
                        </div>
                        <div className="price__description" >
                            <p>{this.props.children}</p>
                        </div>
                    </div>
                    <div className="price__line"></div>
                    <div className="price__button_container">
                        <a className="price__button"
                            href="#5"
                            onClick={() => this.props.changeShootingOptions({ baseOption: this.props.baseOption, otherOption: this.props.title })}>
                            {this.props.price + 'Р'}
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        shootingOptions: state.shootingOptions
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        changeShootingOptions: bindActionCreators(changeShootingOptions, dispatch)
    }
}
let PriceSlideWrapper = connect(mapStateToProps, mapDispatchToProps)(PriceSlide);
export default PriceSlideWrapper;