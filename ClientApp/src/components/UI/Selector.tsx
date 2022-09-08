import * as React from 'react';
import { Component } from 'react';
import '../../css/UI/Selector.css';
import store from '../../store/store';
import { RadioButton } from './RadioButton';

interface Props {
    selectorLabel: string,
    options: object[],
    selectOption: any,
    isDefault: boolean,
    canselDefault?: any,
    isSelected?: any
    zIndex: number
};
interface State {
    optionMenuHeight: number,
    arrowDirection: number,
    label: string
}
export class Selector extends Component<Props, State> {
    unsubscribe: any;
    constructor(props: any) {
        super(props)
        this.state = {
            optionMenuHeight: 0,
            arrowDirection: 1,
            label: props.selectorLabel
        }
        this.optionsMenu = this.optionsMenu.bind(this);
        this.selectOption = this.selectOption.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.closeOptionsMenu();
            if (this.props.isDefault) {
                this.setState((state) => ({
                    label: this.props.selectorLabel
                }))
                if (this.props.canselDefault) {
                    this.props.canselDefault();
                }
               
            }
        });
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    optionsMenu() {
        this.closeOptionsMenu();
        this.openOptionsMenu();
    }
    closeOptionsMenu() {
        if (this.state.optionMenuHeight != 0) {
            this.setState((state) => ({
                optionMenuHeight: 0,
                arrowDirection: 1
            }))
        }
    }
    openOptionsMenu() {
        if (this.state.optionMenuHeight == 0) {
            this.setState((state) => ({
                optionMenuHeight: this.props.options.length * 40,
                arrowDirection: -1
            }))
        }
    }
    selectOption(event: any) {
        let value = event.target.value;
        let capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
        this.setState((state) => ({
            label: capitalizedValue
        }));
        this.props.selectOption(capitalizedValue);
        if (this.props.isSelected != undefined) {
            this.props.isSelected();
        }
    }
    render() {
        return (
            <div className="selector">
                <button type="button" onClick={this.optionsMenu}>
                    {this.state.label}
                    <div className="arrow" style={{ transform: `scale(1, ${this.state.arrowDirection}) rotate(135deg)` }}></div>
                </button>
                <div className="optionsMenu" style={{ height: this.state.optionMenuHeight + 'px', zIndex: this.props.zIndex }}>
                    {this.props.options.map((button: any) =>
                        <div className="selector__option">
                            <RadioButton id={button.id} name="option" value={button.value} onClick={this.selectOption} isChecked={button.isChecked}>{button.value}</RadioButton>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}