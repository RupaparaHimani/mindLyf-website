import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import entrepreneurs1 from '../../../assets/images/entrepreneur1.png';
import entrepreneurs2 from '../../../assets/images/entrepreneur2.png';
import entrepreneurs3 from '../../../assets/images/entrepreneur3.png';
import entrepreneurs from '../../../assets/images/entrepreneur.png';
import curve1 from '../../../assets/images/curve1.png';
import curve2 from '../../../assets/images/curve2.png';
import { isMobile, isTablet } from 'react-device-detect';
import programBanner from '../../../assets/images/programBanner.png';
import RecentCourses from '../../../components/RecentCourses';
import Subscribe from '../../../components/Subscribe';
import Includes from '../../../components/Includes';

class Entrepreneurs extends Component {

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
                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '30px'}}>Counselling for entrepreneurs</div>
                    <Row style={{marginTop: '20px'}}>
                        <Col md={8}>
                            <img src={entrepreneurs} alt="" style={{width: '100%', height: '350px', objectFit: 'cover'}}/>
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
                            <div><img src={entrepreneurs1} alt="" style={{width: '100%'}}/></div>
                            <div>
                                <span className="programHeaders">You before this program</span>
                                <ul className="listProgram">
                                    <li>Find it difficult to manage and motivate your team</li>
                                    <li>Feel stressed, overwhelmed, and unable to relax</li>
                                    <li>Unable to create a work-life balance</li>
                                </ul>
                            </div>
                        </div>
                        <div className="curveStyleProgram"><img src={curve1} alt=""/></div>
                        <div className="gridProgramP" style={{gridTemplateColumns: '1.3fr 1fr'}}>
                            <div>
                                <span className="programHeaders">You before this program</span>
                                <ul className="listProgram">
                                    <li>Learn strategies to keep everything on track</li>
                                    <li>Improve your skills to resolve problems on time</li>
                                    <li>Explore techniques to cope with work-stress</li>
                                </ul>
                            </div>
                            <div><img src={entrepreneurs2} alt="" style={{width: '100%'}}/></div>
                        </div>
                        <div className="curveStyleProgram"><img src={curve2} alt=""/></div>
                        <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr'}}>
                            <div><img src={entrepreneurs3} alt="" style={{width: '100%'}}/></div>
                            <div>
                                <span className="programHeaders">You before this program</span>
                                <ul className="listProgram">
                                    <li>Redesign your life and increase your productivity</li>
                                    <li>Inspire your team to become strong and efficient</li>
                                    <li>Look after your mental health for a healthy life</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{background: '#FAFAFA'}}>
                    <div className="width-70" style={{margin: 'auto', padding: '40px 0px'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '30px', marginBottom: '20px'}}>What includes on this program</div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}>01</span>
                            <span>5 interactive counselling sessions</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}>02</span>
                            <span>Personal Counsellor</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}>03</span>
                            <span>Practical Guidance</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}>04</span>
                            <span>Tasks/Exercises</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}>05</span>
                            <span>Reports</span>
                        </div>
                    </div>
                </div>
                <RecentCourses/>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Entrepreneurs);
