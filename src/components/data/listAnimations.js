import React, { Component } from 'react';

export default class ListAnimations extends Component {

    render() {
        return (
            <div className="list-animations-btns">
                <span className="animation-btn">
                    <span>Астероид: </span>
                    <input type="checkbox" onClick={()=>{console.log("object")}}/>
                </span>
                <span className="animation-btn">
                    <span>Скан: </span>
                    <input type="checkbox" />
                </span>
                <span className="animation-btn">
                    <span>Мусор: </span>
                    <input type="checkbox" />
                </span>
            </div>
        );
    }
}
