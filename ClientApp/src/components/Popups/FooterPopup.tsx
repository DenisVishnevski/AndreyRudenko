import * as React from 'react';
import { Component } from 'react';
import tick from '../../assets/images/tick.png'
import x from '../../assets/images/x.png'
import '../../css/Popups/footerPopup.css';



export class FooterPopup extends Component<{ closePopup: any }> {
    constructor(props: any) {
        super(props)

        this.close = this.close.bind(this);
    }
    close() {
        this.props.closePopup();
    }
    render() {
        return (
            <div className="popup_background">
                <div className="footer_popup">
                    <button className="popup__close_button" onClick={this.close}>
                        <img src={x}/>
                    </button>
                    <div className="footer_popup__content">
                        <img src={tick} className="footer_popup__icon_tick" />
                        <div className="footer_popup__text">
                            <h1>Thanks for the application.</h1>
                            <p>The application will be considered during the day.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}