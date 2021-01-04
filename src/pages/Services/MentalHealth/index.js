import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import MentalMob from './MentalMob';
import MentalWeb from './MentalWeb';

export default class MentalHealth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <MentalMob/> : <MentalWeb/>}
            </div>
        )
    }
}
