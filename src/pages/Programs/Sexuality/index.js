import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import sexuality1 from '../../../assets/images/sexuality1.png';
import sexuality2 from '../../../assets/images/sexuality2.png';
import sexuality3 from '../../../assets/images/sexuality3.png';
import sexuality from '../../../assets/images/sexuality.png';
import curve1 from '../../../assets/images/curve1.png';
import curve2 from '../../../assets/images/curve2.png';
import { isMobile, isTablet } from 'react-device-detect';
import programBanner from '../../../assets/images/programBanner.png';
import RecentCourses from '../../../components/RecentCourses';
import Subscribe from '../../../components/Subscribe';
import Includes from '../../../components/Includes';

class Sexuality extends Component {

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
                    <div style={{fontsexuality: 'Nunito-Bold', fontSize: '30px'}}>Learn to embrace your sexuality</div>
                    <Row style={{marginTop: '20px'}}>
                        <Col md={8}>
                            <img src={sexuality} alt="" style={{width: '100%', height: '350px', objectFit: 'cover'}}/>
                        </Col>
                        <Col md={4}>
                            <Card className="noBorder shadowCard">
                                <CardBody>
                                    <div style={{fontsexuality: 'Roboto-SemiBold', fontSize: '16px', textAlign: 'center'}}>Begin your wellness journey now!</div>
                                    <div style={{fontSize: '14px', marginTop :'15px'}}>Program fee<span style={{float: 'right', color: '#DF8F06', fontSize: '20px', fontsexuality: 'Roboto-Bold'}}>₹4000</span></div>
                                    <div style={{fontSize: '14px', marginTop :'15px'}}>Program duration<span style={{float: 'right'}}>5 Sessions</span></div>
                                    <Button className="programButton" onClick={() => this.checkoutProgram(4000,5, this.state.program_id)}>Start Now</Button>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div className="stepsContainer">
                        <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr'}}>
                            <div><img src={sexuality1} alt="" style={{width: '100%'}}/></div>
                            <div>
                                <span className="programHeaders">You before this program</span>
                                <ul className="listProgram">
                                    <li>Have concerns about sexual orientation</li>
                                    <li>Find it difficult to communicate your desires with others</li>
                                    <li>Have distorted views about your sexuality</li>
                                </ul>
                            </div>
                        </div>
                        <div className="curveStyleProgram"><img src={curve1} alt=""/></div>
                        <div className="gridProgramP" style={{gridTemplateColumns: '1.3fr 1fr'}}>
                            <div>
                                <span className="programHeaders">You before this program</span>
                                <ul className="listProgram">
                                    <li>Learn to love yourself for who you are</li>
                                    <li>Gain knowledge about different types of sexualities</li>
                                    <li>Learn to feel comfortable talking about sexuality</li>
                                </ul>
                            </div>
                            <div><img src={sexuality2} alt="" style={{width: '100%'}}/></div>
                        </div>
                        <div className="curveStyleProgram"><img src={curve2} alt=""/></div>
                        <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr'}}>
                            <div><img src={sexuality3} alt="" style={{width: '100%'}}/></div>
                            <div>
                                <span className="programHeaders">You before this program</span>
                                <ul className="listProgram">
                                    <li>Feel more free towards your sexual identity</li>
                                    <li>Invest in self-care</li>
                                    <li>Grow intimacy in your relationship</li>
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

export default withRouter(Sexuality);
