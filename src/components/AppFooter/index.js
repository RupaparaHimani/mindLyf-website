import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import FooterMob from './FooterMob';
import FooterWeb from './FooterWeb';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <FooterMob/> : <FooterWeb/>}
            </div>
        )
    }
}
