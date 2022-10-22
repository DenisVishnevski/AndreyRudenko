import * as React from 'react';
import { Component } from 'react';
import '../../css/UI/Selector.css';
import store from '../../store/store';
import { RadioButton } from './RadioButton';

interface Props {
    options: object[],
    selectOption: any,
    zIndex: number,
    label: string
};
interface State {
    optionMenuHeight: number,
    arrowDirection: number
}
export class Selector extends Component<Props, State> {
    unsubscribe: any;
    constructor(props: any) {
        super(props)
        this.state = {
            optionMenuHeight: 0,
            arrowDirection: 1
        }
        this.optionsMenu = this.optionsMenu.bind(this);
        this.selectOption = this.selectOption.bind(this);
    }
    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.closeOptionsMenu();
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
        if (this.state.optionMenuHeight !== 0) {
            this.setState((state) => ({
                optionMenuHeight: 0,
                arrowDirection: 1
            }))
        }
    }
    openOptionsMenu() {
        if (this.state.optionMenuHeight === 0) {
            this.setState((state) => ({
                optionMenuHeight: this.props.options.length * 40,
                arrowDirection: -1
            }))
        }
    }
    selectOption(event: any) {
        let value = event.target.value;
        this.props.selectOption(value);
    }
    render() {
        return (
            <div className="selector">
                <button type="button" onClick={this.optionsMenu}>
                    {this.props.label}
                    <div className="arrow" style={{ transform: `scale(1, ${this.state.arrowDirection}) rotate(135deg)` }}></div>
                </button>
                <div className="optionsMenu" style={{ height: this.state.optionMenuHeight + 'px', zIndex: this.props.zIndex }}>
                    {this.props.options.map((button: any) =>
                        <div className="selector__option" key={button.value}>
                            <RadioButton
                                id={"s" + button.id}
                                name="option"
                                value={button.value}
                                onClick={this.selectOption}
                                isChecked={false}>
                                {button.value}
                            </RadioButton>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}