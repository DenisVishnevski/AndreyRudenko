import * as React from 'react';
import { Component } from 'react';
import '../../css/UI/Input.css';
import errorIcon from '../../assets/images/Error.svg'

interface Props {
    type: string,
    value: string,
    children: string,
    name: string,
    elementsColor: string,
    onChange: any
}
export class Input extends Component<Props> {
    constructor(props: any) {
        super(props)
        this.state = {
            inputElementsColor: "white"
        }
    }
    render() {
        const { type, name, value, onChange, children} = this.props;
        return (
            <fieldset className="input" style={{ borderColor: this.props.elementsColor }}>
                <input
                    type={type}
                    value={value}
                    placeholder={children}
                    name={name}
                    onChange={onChange}>
                </input>
                {this.props.elementsColor == "#FF3E3E" 
                    ? <img src={errorIcon} />
                    : null
                }
            </fieldset>
        );
    }
}