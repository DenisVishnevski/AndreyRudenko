import * as React from 'react';
import { Component } from 'react';
import '../css/Grid.css';

export class Grid extends Component {
    render() {
        const columnCount: number = 12;
        return (
            <div className="grid">
                {[...Array(columnCount)].map(() =>
                    <div className="grid__column"></div>
                )}
            </div>

        );
    }
}