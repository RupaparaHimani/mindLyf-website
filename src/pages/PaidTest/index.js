import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import PaidMob from './PaidMob';
import PaidWeb from './PaidWeb';

export default class ServiceFee extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <PaidMob/> : <PaidWeb/>}
            </div>
        )
    }
}
