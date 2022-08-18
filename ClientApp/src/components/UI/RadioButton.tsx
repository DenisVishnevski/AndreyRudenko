import * as React from 'react';
import { Component } from 'react';
import '../../css/UI/RadioButtons.css';

interface Props {
    id: string,
    name: string,
    value: string,
    onChange: any,
    isChecked: boolean,
    children: string
}
export class RadioButton extends Component<Props> {
    render() {
        const { id, name, value, onChange, isChecked, children } = this.props;
        return (
            <div className="radio_button">
                <input type="radio" id={id} name={name} value={value} onChange={onChange} defaultChecked={isChecked}></input>
                <label className="radio_button__title" htmlFor={id} >{children}</label>
            </div>
        );
    }
}