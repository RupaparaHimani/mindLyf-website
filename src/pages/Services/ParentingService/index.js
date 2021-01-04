import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import ParentingMob from './ParentingMob';
import ParentingWeb from './ParentingWeb';

export default class ParentingService extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <ParentingMob/> : <ParentingWeb/>}
            </div>
        )
    }
}
