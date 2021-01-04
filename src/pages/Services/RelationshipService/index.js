import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import RelationshipMob from './RelationshipMob';
import RelationshipWeb from './RelationshipWeb';

export default class RelationshipService extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {isMobile || isTablet ? <RelationshipMob/> : <RelationshipWeb/>}
            </div>
        )
    }
}
