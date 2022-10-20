import * as React from 'react';
import { Component } from 'react';
import '../../css/UI/Input.css';
import errorIcon from '../../assets/images/Error.svg'
import { navList } from '../../data/navList';

interface Props {
    isOpenMenu: boolean,
    closeMenu: any
}
interface State {
    droprightMenuHeight: number
}
export class DroprightMenu extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            droprightMenuHeight: 0
        }
    }
    componentDidUpdate(prevProps: any) {
        if (prevProps.isOpenMenu != this.props.isOpenMenu) {
            this.closeMenu();
            this.openMenu();

        }
    }
    closeMenu() {
        if (this.state.droprightMenuHeight != 0) {
            this.setState(() => ({
                droprightMenuHeight: 0
            }))
        }
    }
    openMenu() {
        if (this.state.droprightMenuHeight == 0) {
            this.setState(() => ({
                droprightMenuHeight: 480
            }))
        }
    }

    render() {
        return (
            <div className="dropright_menu" style={{ width: this.state.droprightMenuHeight + 'px' }}>
                {navList.map((nav: any) =>
                    <div className="header__item">
                        <a href={nav.href} className="header__link" onClick={this.props.closeMenu} >{nav.name}</a>
                    </div>
                )}
                <div className="header__contacts">
                    <ul className="header__list">
                        <li className="header__item">Krasnodar</li>
                        <li className="header__item">+7 (989) 814-30-16</li>
                    </ul>
                </div>
                {this.state.droprightMenuHeight > 0
                    ? <div className="popup_background" style={{ zIndex: -5 }}></div>
                    : null
                }
            </div>
        );
    }
}