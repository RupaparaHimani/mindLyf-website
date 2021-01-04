import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import selfEsteem1 from '../../../assets/images/selfEsteem1.png';
import selfEsteem2 from '../../../assets/images/selfEsteem2.png';
import selfEsteem3 from '../../../assets/images/selfEsteem3.png';
import esteem from '../../../assets/images/esteem.png';
import curve1 from '../../../assets/images/curve1.png';
import curve2 from '../../../assets/images/curve2.png';
import { isMobile, isTablet } from 'react-device-detect';
import programBanner from '../../../assets/images/programBanner.png';
import RecentCourses from '../../../components/RecentCourses';
import Subscribe from '../../../components/Subscribe';
import Includes from '../../../components/Includes';

class SelfEsteem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            program_id: this.props.match.params.programID,
    }
}

onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
};

checkoutProgram = (amount,sessions, program_id) => {
    this.props.history.push({
        pathname: '/checkout',
        state: [amount, sessions, program_id, 'program'],
    })
  }

    render() {
        return (
            <Fragment>
                <div className="flexCenter height" style={{backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '340px'}}>
                    <div className="programTitle">Program Detail</div>
                </div>
                <div className={isMobile?"width-90m":"width-70m"}>
                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '30px'}}>Develop self-esteem and confidence</div>
                    <Row style={{marginTop: '20px'}}>
                        <Col md={8}>
                            <img src={esteem} alt="" style={{width: '100%', height: '350px', objectFit: 'cover'}}/>
                        </Col>
                        <Col md={4}>
                            <Card className="noBorder shadowCard">
                                <CardBody>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '16px', textAlign: 'center'}}>Begin your wellness journey now!</div>
                                    <div style={{fontSize: '14px', marginTop :'15px'}}>Program fee<span style={{float: 'right', color: '#DF8F06', fontSize: '20px', fontFamily: 'Roboto-Bold'}}>₹4000</span></div>
                                    <div style={{fontSize: '14px', marginTop :'15px'}}>Program duration<span style={{float: 'right'}}>5 Sessions</span></div>
                                    <Button className="programButton" onClick={() => this.checkoutProgram(4000,5, this.state.program_id)}>Start Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div className="stepsContainer">
                        <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr'}}>
                            <div><img src={selfEsteem1} alt="" style={{width: '100%'}}/></div>
                            <div>
                                <span className="programHeaders">You before this program</span>
                                <ul className="listProgram">
                                    <li>Judge yourself to be inferior to others</li>
                                    <li>Find it difficult to take initiatives on your own</li>
                                    <li>Doubt your value and abilities</li>
                                </ul>
                            </div>
                        </div>
                        <div className="curveStyleProgram"><img src={curve1} alt=""/></div>
                        <div className="gridProgramP" style={{gridTemplateColumns: '1.3fr 1fr'}}>
                            <div>
                                <span className="programHeaders">You during this program</span>
                                <ul className="listProgram">
                                    <li>Recognize underlying causes of your procrastination</li>
                                    <li>Embrace anti-procrastination strategies</li>
                                    <li>Learn to deal with your stress and anxiety</li>
                                </ul>
                            </div>
                            <div><img src={selfEsteem2} alt="" style={{width: '100%'}}/></div>
                        </div>
                        <div className="curveStyleProgram"><img src={curve2} alt=""/></div>
                        <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr'}}>
                            <div><img src={selfEsteem3} alt="" style={{width: '100%'}}/></div>
                            <div>
                                <span className="programHeaders">You after this program</span>
                                <ul className="listProgram">
                                    <li>Learn to change your negative thought patterns</li>
                                    <li>Become aware of your self-worth</li>
                                    <li>Discover tools to boost your confidence</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Includes/>
                <RecentCourses/>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(SelfEsteem);
