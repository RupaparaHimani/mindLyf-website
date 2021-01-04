import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import ServiceFeeMob from './ServiceFeeMob';
import ServiceFeeWeb from './ServiceFeeWeb';

export default class ServiceFee extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <ServiceFeeMob/> : <ServiceFeeWeb/>}
            </div>
        )
    }
}
