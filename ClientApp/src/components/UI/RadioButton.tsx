import * as React from 'react';
import { Component } from 'react';
import '../../css/UI/TitleButtons.css';

interface Props {
    id: string,
    name: string,
    value: string,
    onChange?: any,
    onClick?: any,
    isChecked: boolean,
    className?: string,
    children: string
}
export class RadioButton extends Component<Props> {
    render() {
        const { id, name, value, onChange, onClick, isChecked, children, className } = this.props;
        return (
            <div>
                <input type="radio" id={id} name={name} value={value} onChange={onChange} onClick={onClick} defaultChecked={isChecked}></input>
                <label className={className} htmlFor={id} >{children}</label>
            </div>
        );
    }
}