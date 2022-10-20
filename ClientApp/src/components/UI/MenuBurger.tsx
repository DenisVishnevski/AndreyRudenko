import * as React from 'react';
import { Component } from 'react';
import '../../css/UI/MenuBurger.css';
import { DroprightMenu } from './DroprightMenu';

export class MenuBurger extends Component<{}, { classNames: string, isOpen: boolean }> {
    constructor(props: any) {
        super(props)
        this.state = {
            classNames: "header__burger",
            isOpen: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }


    handleClick() {
        this.openMenu();
        this.closeMenu();
    }
    openMenu() {
        if (this.state.isOpen == false) {
            this.setState(() => ({
                classNames: "header__burger open",
                isOpen: true
            }))
        }
    }
    closeMenu() {
        if (this.state.isOpen) {
            this.setState(() => ({
                classNames: "header__burger",
                isOpen: false
            }))
        }
    }

    render() {
        return (
            <div className="header__nav_menu">
                <div className={this.state.classNames} onClick={this.handleClick} >
                    <span></span>
                </div>
                
                <DroprightMenu closeMenu={this.closeMenu} isOpenMenu={this.state.isOpen} />
            </div>
        );
    }
}