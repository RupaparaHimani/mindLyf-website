import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, Row, Col } from 'reactstrap';
import Subscribe from '../../components/Subscribe';

const webStyle = {paddingTop: '15%', paddingBottom: '40px', margin: 'auto', width: '50%'};
const mobStyle = {paddingTop: '25%', paddingBottom: '40px', margin: 'auto', width: '90%'};

class StartTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

questions = () => {
    this.props.history.push({
        pathname: '/questions',
    })
}

    render() {
        return (
            <Fragment>
                <div style={{background: '#ECF3F8'}}>
                    <div style={isMobile?mobStyle:webStyle}>
                        <Card style={{boxShadow: '0px 6px 25px #0000001A', marginTop: '20px', border: 'none'}}>
                         <div style={{background: '#F6F6F6', padding: '30px 20px', fontFamily: 'Nunito-Bold'}}>Mindlyf Emotional wellness {this.props.location.state && this.props.location.state[2] === "paid-test" ? "PAID-TESTS" :"SELF-TESTS"}</div>
                            <CardBody>
                                <div style={{fontSize: '14px'}}>
                                    <Row>
                                        <Col md={4}>
                                            <div>Questions:</div>
                                            <div style={{margin: '10px 0px'}}>Time:</div>
                                            <div>Difficulty:</div>
                                        </Col>
                                        <Col md={8}>
                                            <div>10</div>
                                            <div style={{margin: '10px 0px'}}>About 20 minutes</div>
                                            <div>The test will provide a variety of questions from easy to hard ones</div>
                                        </Col>
                                    </Row>
                                    <div style={{margin: '20px 0px'}}><Button onClick={this.questions} style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>Continue<FontAwesomeIcon icon={faChevronRight} style={{color: '#DF8F06', marginLeft: '20px'}}/></Button></div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(StartTest);
