import React, { Component } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import { faSun, faCloudSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import $ from "jquery";

export default class Slots extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openAfter: false,
            openEven: false,
            openMorn: true,
            selected: '',
        };
    }

    toggleAfter = () => {
        this.setState(prevState => ({
            openAfter: !prevState.openAfter,
            openMorn: false,
            openEven: false,
        }));
    }

    toggleEven = () => {
        this.setState(prevState => ({
            openEven: !prevState.openEven,
            openAfter: false,
            openMorn: false,
        }));
    }

    toggleMorn = () => {
        this.setState(prevState => ({
            openMorn: !prevState.openMorn,
            openEven: false,
            openAfter: false,
        }));
    }

    select = (time) => {
        var $cols = $('.slot').click(function(e) {
            $cols.removeClass('selected');
            $(this).addClass('selected');
        });
        this.setState({
            selected: time
        })
    }

    render() {
        return (
            <div>
                <div onClick={this.toggleMorn} className="dayTime">Morning<span><FontAwesomeIcon icon={faSun} style={{color: '#005191', fontSize: '20px', marginLeft: '20px'}}/></span></div>
                <Collapse isOpen={this.state.openMorn}>
                    <div className="slotGrid">
                        <div className="slot" onClick={() => this.select('9:00 AM')}>9:00 AM</div>
                        <div className="slot" onClick={() => this.select('9:30 AM')}>9:45 AM</div>
                        <div className="slot" onClick={() => this.select('10:00 AM')}>10:30 AM</div>
                        <div className="slot" onClick={() => this.select('10:30 AM')}>11:15 AM</div>
                        <div className="slot" onClick={() => this.select('11:00 AM')}>12:00 AM</div>
                    </div>
                </Collapse>
                <div onClick={this.toggleAfter} className="dayTime">Afternoon<span><FontAwesomeIcon icon={faCloudSun} style={{color: '#005191', fontSize: '20px', marginLeft: '20px'}}/></span></div>
                <Collapse isOpen={this.state.openAfter}>
                    <div className="slotGrid">
                        <div className="slot" onClick={() => this.select('12:30 AM')}>12:45 PM</div>
                        <div className="slot" onClick={() => this.select('1:00 AM')}>1:30 PM</div>
                        <div className="slot" onClick={() => this.select('1:30 AM')}>2:15 PM</div>
                        <div className="slot" onClick={() => this.select('2:00 AM')}>3:00 PM</div>
                        <div className="slot" onClick={() => this.select('2:30 AM')}>3:45 PM</div>
                        <div className="slot" onClick={() => this.select('3:00 AM')}>4:30 PM</div>
                    </div>
                </Collapse>
                <div onClick={this.toggleEven} className="dayTime">Evening<span><FontAwesomeIcon icon={faMoon} style={{color: '#005191', fontSize: '20px', marginLeft: '20px'}}/></span></div>
                <Collapse isOpen={this.state.openEven}>
                    <div className="slotGrid">
                        <div className="slot" onClick={() => this.select('4:30 AM')}>5:15 PM</div>
                        <div className="slot" onClick={() => this.select('5:00 AM')}>6:00 PM</div>
                        <div className="slot" onClick={() => this.select('5:30 AM')}>6:45 PM</div>
                        <div className="slot" onClick={() => this.select('6:00 AM')}>7:30 PM</div>
                        <div className="slot" onClick={() => this.select('6:30 AM')}>8:15 PM</div>
                    </div>
                </Collapse>
            </div>
        )
    }
}
