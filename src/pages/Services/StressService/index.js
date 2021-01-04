import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import StressMob from './StressMob';
import StressWeb from './StressWeb';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <StressMob/> : <StressWeb/>}
            </div>
        )
    }
}
