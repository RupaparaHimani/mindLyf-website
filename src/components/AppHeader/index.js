import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import HeaderMob from './HeaderMob';
import HeaderWeb from './HeaderWeb';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <HeaderMob/> : <HeaderWeb/>}
            </div>
        )
    }
}
