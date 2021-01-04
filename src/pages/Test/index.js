import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import TestMob from './TestMob';
import TestWeb from './TestWeb';

export default class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <TestMob/> : <TestWeb/>}
            </div>
        )
    }
}
