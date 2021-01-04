import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import ServicesMob from './ServicesMob';
import ServicesWeb from './ServicesWeb';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <ServicesMob/> : <ServicesWeb/>}
            </div>
        )
    }
}
