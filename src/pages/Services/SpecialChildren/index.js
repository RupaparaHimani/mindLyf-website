import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import SpecialMob from './SpecialMob';
import SpecialWeb from './SpecialWeb';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <SpecialMob/> : <SpecialWeb/>}
            </div>
        )
    }
}
