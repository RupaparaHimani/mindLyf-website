import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import SubscribeMob from './SubscribeMob';
import SubscribeWeb from './SubscribeWeb';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <SubscribeMob/> : <SubscribeWeb/>}
            </div>
        )
    }
}
