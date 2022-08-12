import * as React from 'react';
import { ReactNode } from 'react';
import { Header } from './Header';
import Wrapper from './Footer';

export class Layout extends React.Component<{ children: ReactNode }> {
    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
                <Wrapper />
            </div>
        );
    }
}
