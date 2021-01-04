import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import HomeMob from './HomeMob';
import HomeWeb from './HomeWeb';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <HomeMob/> : <HomeWeb/>}
            </div>
        )
    }
}
