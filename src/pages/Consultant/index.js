import { faCalendarAlt, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import Dotdotdot from 'react-dotdotdot';
import 'react-nice-dates/build/style.css';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, Col, Modal, ModalBody, Row } from 'reactstrap';
import con1 from '../../assets/images/consultant/ASHA_DHANDHALIYA.jpg';
import con2 from '../../assets/images/consultant/ASHMI_SHAH.jpg';
import con3 from '../../assets/images/consultant/DELARA_SANJANA.jpg';
import con4 from '../../assets/images/consultant/DHWANI_MEHTA.png';
import con5 from '../../assets/images/consultant/DR_ADITA.jpg';
import con6 from '../../assets/images/consultant/EKTA_DHARIA.jpg';
import con7 from '../../assets/images/consultant/HARSHIKA.jpg';
import con8 from '../../assets/images/consultant/HIRAL_KHIMANI.jpg';
import con9 from '../../assets/images/consultant/JAINI_SAVLA.jpg';
import con10 from '../../assets/images/consultant/KAJAL_DAVE.jpg';
import con11 from '../../assets/images/consultant/NISTHA_SINGH.jpg';
import con12 from '../../assets/images/consultant/PARIDHI_PANSARI.jpg';
import con13 from '../../assets/images/consultant/RAHAT_LOOKMANJI.jpg';
import con14 from '../../assets/images/consultant/SAJEDA_ANSARI.jpg';
import con15 from '../../assets/images/consultant/SAKSHI_PAL.jpg';
import con16 from '../../assets/images/consultant/SANHITA_SAWANT.jpg';
import con17 from '../../assets/images/consultant/SANJANA_RAWAL.jpg';
import con18 from '../../assets/images/consultant/SHIVANGI_GUPTA.jpg';
import con19 from '../../assets/images/consultant/SURBHI_JOSHI.png';
import con20 from '../../assets/images/consultant/TANIA_GHOSH.jpg';
import con21 from '../../assets/images/consultant/TANUSHRI_PATANGE.jpg';
import con22 from '../../assets/images/consultant/TASNEEM.jpg';
import con23 from '../../assets/images/consultant/TRISHNA_ALMEDIA.jpg';
import programBanner from '../../assets/images/programBanner.png';
import Slots from '../../components/Slots';
import Subscribe from '../../components/Subscribe';

class Consultant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: null,
            time: null,
            timeSelected: null,
            dateSelected: null,
            showSlotBook: false,
            dates: [],
    }
}

scheduled = () => {

}

componentDidMount = () => {
    // this.state.dates.push(moment(today));
    var today = moment();
    for (var i=0; i<13; i++) {
        this.state.dates.push(moment(today).add(i, 'days').format('MM-DD-YYYY'));
    }
    this.setState({
        state: this.state,
    })
}

setTime = time => {
    this.setState({
        timeSelected: time.formatted24,
    })
}

setDate = date => {
    this.setState({
        date: date,
        dateSelected: moment(date).format(),
    })
}

selectSlot = () => {
    this.setState({
        showSlotBook: true,
    })
}

hideAll = () => {
    this.setState({
        showSlotBook: false,
    })
}

service = () => {
    this.props.history.push({
        pathname: '/service-fee',
    })
}

    render() {
        return (
            <Fragment>
                {/* <Modal isOpen={this.state.showSlotBook} centered={true} size='lg' toggle={this.hideAll}>
                    <ModalBody>
                        <div style={{textAlign: 'center', padding: '15px'}}>
                            <div style={{fontFamily: 'Nunito-SemiBold', fontSize: '30px', marginBottom: '15px'}}>Select your slot</div>
                            <Row>
                                <Col md={7}>
                                    <DatePickerCalendar date={this.state.date} onDateChange={(date) => this.setDate(date)} locale={enGB} />
                                </Col>
                                <Col md={5}>
                                    <TimeKeeper
                                        time={this.state.time}
                                        onChange={(newTime) => this.setTime(newTime)}
                                        switchToMinuteOnHourSelect
                                    />
                                </Col>
                            </Row>
                            <div style={{textAlign: 'center', margin: '25px auto'}}>
                                <Button className='buttonSolid' onClick={this.service}>Book Now</Button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal> */}
                <Modal isOpen={this.state.showSlotBook} centered={true} size='lg' toggle={this.hideAll}>
                    <ModalBody>
                        <div style={{textAlign: 'center', padding: '15px'}}>
                            <div style={{fontFamily: 'Nunito-SemiBold', fontSize: '26px'}}>Select your slot</div>
                            <div>
                                <Tabs
                                defaultActiveKey="0"
                                renderTabBar={() => <ScrollableInkTabBar/>}
                                renderTabContent={() => <TabContent/>}
                                >
                                    {
                                        this.state.dates.map((date, index) => (
                                            <TabPane tab={date} key={index}>
                                                <Slots/>
                                            </TabPane>
                                        ))
                                    }
                                </Tabs>
                            </div>
                            <div style={{textAlign: 'center', margin: '25px auto'}}>
                                <Button className='buttonSolid' onClick={this.service}>Book Now</Button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <div>
                    <div className="direction_column flexCenter" style={{textAlign: 'center', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: isMobile||isTablet?'300px':'420px', justifyContent: 'flex-end'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: isMobile||isTablet?'30px':'50px', marginTop: '80px'}}>Meet Our Consultants</div>
                        <div style={{fontSize: '16px', width: '70%', marginTop: '10px'}}>We at Mindlyf help you cope with any issue that might be hampering your personal and professional growth and relationships. You can share your innermost thoughts and feelings with our astute psychotherapist.
                        </div>
                    </div>
                </div>
                <div className={isMobile||isTablet?"width-90m":"width-70m"} style={{textAlign: 'center'}}>
                <div style={{margin: '50px 24px', textAlign: 'center'}}>
                    <div style={{fontFamily: 'Roboto-Bold', fontSize: isMobile||isTablet?'30px':'38px', marginBottom: '40px', marginTop: isMobile||isTablet?'auto':'80px'}}>Our Best Consultants Are<br/>Here To Help You</div>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con1} className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>ASHA DHANDHALIYA</div></Dotdotdot>
                                     <div className="qualHead">Sessions Taken: <span className="qualification">20</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">7+ years</span></div>
                                     <div className="seeMore">See More >></div>
                                     <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con2}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>ASHMI SHAH</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">24</span></div>
                                    <div className="qualHead">Experience: <span className="qualification">8+ years</span></div>
                                    <div className="seeMore">See More >></div>
                                    <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con3}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>DELARA SANJANA</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">27</span></div>
                                    <div className="qualHead">Experience: <span className="qualification">6+ years</span></div>
                                    <div className="seeMore">See More >></div>
                                        <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con4}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>DHWANI MEHTA</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">19</span></div>
                                    <div className="qualHead">Experience: <span className="qualification">7+ years</span></div>
                                    <div className="seeMore">See More >></div>
                                    <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con5}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>DR ADITA AGARWAL</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">24</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">8+ years</span></div>
                                     <div className="seeMore">See More >></div>
                                    <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con6}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>EKTA DHARIA</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">27</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">11+ years</span></div>
                                     <div className="seeMore">See More >></div>
                                    <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con7}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>HARSHIKA</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">22</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">5+ years</span></div>
                                     <div className="seeMore">See More >></div>
                                    <div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con8}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>HIRAL KHIMANI</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">27</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">15+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con9}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>JAINI SAVLA</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">15</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">7+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con10}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>KAJAL DAVE</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">28</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">5+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con11}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>NISTHA SINGH</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">23</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">5+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con12}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>PARIDHI PANSARI</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">21</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">6+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con13}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>RAHAT LOOKMANJI</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">25</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">5+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con14}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>SAJEDA ANSARI</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">29</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">8+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con15}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>SAKSHI PAL</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">14</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">8+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con16}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>SANHITA SAWANT</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">27</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">8+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con17}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>SANJANA RAWAL</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">20</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">5+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con18}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>SHIVANGI GUPTA</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">28</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">6+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con19}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>SURBHI JOSHI</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">16</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">3.5+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con20}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>TANIA GHOSH</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">22</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">3+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con21}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>TANUSHRI PATANGE</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">20</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">3.5+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: '50px'}}>
                        <Col xs={12} md={4} style={{marginBottom: isMobile||isTablet?'50px':''}}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con22}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>TASNEEM HUSSAIN</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">28</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">2+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs={12} md={4}>
                            <Card className="shadowCard noBorder equalHeight hoverConsultant">
                                <CardImg top src={con23}className="conImg" alt="Card image cap" />
                                <div className="bookApp" onClick={this.selectSlot}><span><FontAwesomeIcon icon={faCalendarAlt} style={{color: 'white', marginRight: '10px'}}/></span>Book Appointment</div>
                                <CardBody className="consultantCard" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', textTransform: 'capitalize'}}>TRISHNA ALMEDIA</div></Dotdotdot>
                                    <div className="qualHead">Sessions Taken: <span className="qualification">21</span></div>
                                     <div className="qualHead">Experience: <span className="qualification">3+ years</span></div>
                                     <div className="seeMore">See More >></div>
<div style={{marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                                        <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', fontSize: isMobile||isTablet?'12px':'14px', color: '#DF8F06'}}>Chat Now</Button>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', padding: '7px 10px', fontSize: isMobile||isTablet?'12px':'14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Consultant);
