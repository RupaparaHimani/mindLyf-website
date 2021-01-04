import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import ProgramsMob from './ProgramsMob';
import ProgramsWeb from './ProgramsWeb';

export default class Programs extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <ProgramsMob/> : <ProgramsWeb/>}
            </div>
        )
    }
}
