import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import vision from '../../assets/images/vision.png';
import about from '../../assets/images/about.png';
import business from '../../assets/images/business.png';
import devil from '../../assets/images/devil.png';
import Subscribe from '../../components/Subscribe';
import {Link, withRouter} from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div>
                    <img src={about} style={{width: '100%', objectFit: 'cover'}}/>
                    <div style={{position: 'absolute', top: '35%', left: '15%', textAlign: 'left', width: '30%'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '36px'}}>About Us</div>
                        <div style={{fontSize: '16px'}}>We at Mindlyf help you cope with any issue that might be hampering your personal and professional growth and relationships. You can share your innermost thoughts and feelings with our astute psychotherapist.<br/><br/>
                        Mindlyf offers world class treatment of mental conditions under one roof right in the heart of Mumbai. Experienced professionals in Psychiatry, Clinical Psychology, and Psychotherapy bring to Mindlyf. expertise in treating nearly all mental health problems from phobias and anxieties to several disorders.
                        </div>
                        <div style={{marginTop: '40px'}}>
                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Let's chat</Button>
                            <Link className="linkStyle" to="/service-fee"><Button className='buttonSolid'>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                        </div>
                    </div>
                </div>
                <Row className="width-70m flexCenter">
                    <Col md={6}>
                        <img src={vision} style={{width: '100%', height: '310px', objectFit: 'contain'}}/>
                    </Col>
                    <Col md={6}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px'}}>Our Vision &amp;<br/> Mission</div>
                        <div style={{fontSize: '14px'}}>To be known as a centre of excellence equipped with influential leaders and innovators throughout the globe in the field of mental health.<br/><br/>To promote person-focused supreme service that is radical, integrated and accessible to all To pursue continuous research to achieve excellence.</div>
                    </Col>
                </Row>
                <Row className="width-70" style={{margin: '100px auto 50px'}}>
                    <Col md={3}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '12px'}}>WE ARE THERE FOR YOU</div>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px'}}>Meet Our Team Member</div>
                        <Button style={{marginTop: '15px', borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>See All Member</Button>
                        <Card className="shadowCardMasonry noBorder">
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px'}}>I have completed my Masters in Counselling Psychology from Maniben Nanavati college which is affiliated to SNDT University...</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                        <Card className="shadowCardMasonry noBorder">
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px'}}>I have completed my Masters in Counselling Psychology from Maniben Nanavati college which is affiliated to SNDT University...</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="shadowCardMasonry noBorder" style={{marginTop: '0px'}}>
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px'}}>I have completed my Masters in Counselling Psychology from Maniben Nanavati college which is affiliated to SNDT University...</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                        <Card className="shadowCardMasonry noBorder">
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>I have completed my Masters in Counselling Psychology from Maniben Nanavati college which is affiliated to SNDT University...</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="shadowCardMasonry noBorder" style={{marginTop: '100px'}}>
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px'}}>I have completed my Masters in Counselling Psychology from Maniben Nanavati college which is affiliated to SNDT University...</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                        <Card className="shadowCardMasonry noBorder">
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px'}}>I have completed my Masters in Counselling Psychology from Maniben Nanavati college which is affiliated to SNDT University...</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <Card className="shadowCardMasonry noBorder" style={{marginTop: '0px'}}>
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px'}}>I have completed my Masters in Counselling Psychology from Maniben Nanavati college which is affiliated to SNDT University...</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                        <Card className="shadowCardMasonry noBorder">
                            <CardImg top src={devil} alt="Card image cap" />
                            <CardBody>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Devil Roy Barman</div>
                                <div style={{fontSize: '12px', marginTop: '5px', paddingBottom: '10px', marginBottom: '10px'}}>Consulting Physician</div>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div style={{background: '#FEF7EC'}}>
                    <div className="width-70" style={{margin: 'auto'}}>
                        <Row style={{padding: '90px 0px', textAlign: 'left'}}>
                            <Col md={4}>
                                <div style={{fontSize: '15px'}}>TESTIMONIALS</div>
                                <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px'}}>What our clients say about our Counselling.</div>
                            </Col>
                            <Col md={8}>
                                <img src={business} style={{height: '40px', objectFit: 'contain', marginBottom: '10px'}}/>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Nice organization</div>
                                <div style={{ffontSize: '18px'}}>"Congenial work atmosphere, dignity of the organization and task related experience and academic qualification."</div>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: '15px', marginTop: "20px"}}>Devil Roy Barman</div>
                                <div style={{ffontSize: '18px'}}>Project Manager, Devdesign Studio</div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px', textAlign: 'center', margin: '50px'}}>Our Gallery</div>                
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(About);