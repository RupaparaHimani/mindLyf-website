import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import EsteemMob from './EsteemMob';
import EsteemWeb from './EsteemWeb';

export default class EsteemHealth extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <EsteemMob/> : <EsteemWeb/>}
            </div>
        )
    }
}
