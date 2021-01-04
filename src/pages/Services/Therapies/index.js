import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import TherapiesMob from './TherapiesMob';
import TherapiesWeb from './TherapiesWeb';

export default class Services extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <TherapiesMob/> : <TherapiesWeb/>}
            </div>
        )
    }
}
