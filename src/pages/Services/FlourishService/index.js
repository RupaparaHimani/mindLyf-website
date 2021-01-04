import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import FlourishMob from './FlourishMob';
import FlourishWeb from './FlourishWeb';

export default class FlourishHealth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <FlourishMob/> : <FlourishWeb/>}
            </div>
        )
    }
}
