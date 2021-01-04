import { faCheckSquare, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import {Link, withRouter} from 'react-router-dom';
import home from '../../assets/images/Corporate-counseling.jpg';
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import blog_1 from '../../assets/images/blog-1.png';
import blog_2 from '../../assets/images/blog-2.png';
import blog_3 from '../../assets/images/blog-3.png';
import blog_4 from '../../assets/images/blog-4.png';
import { isMobile, isTablet } from 'react-device-detect';
import corp1 from '../../assets/images/corp-1.png';
import corp2 from '../../assets/images/corp-2.png';
import corporate from '../../assets/images/corporate.png';
import programBanner from '../../assets/images/programBanner.png';
import anger from '../../assets/images/anger.png';
import anxiety from '../../assets/images/anxiety.png';
import motivation from '../../assets/images/motivation.png';
import coupleCounselling from '../../assets/images/couple-counselling.png';
import flourish from '../../assets/images/flourish-at-work.png';
import stressCounselling from '../../assets/images/stress-counselling.png';
import Subscribe from '../../components/Subscribe';

class CorporateCounselling extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div hidden={isMobile||isTablet}>
                    <img src={home} style={{width: '100%', objectFit: 'cover'}}/>
                    <div style={{position: 'absolute', top: '40%', left: '20%', textAlign: 'left', width: '25%'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Corporate<br/>counselling</div>
                        <div style={{fontSize: '16px'}}>Invest in your employees to grow your business
                        </div>
                        <div style={{marginTop: '40px'}}>
                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Let's chat</Button>
                            <Link className="linkStyle" to="/service-fee"><Button className='buttonSolid'>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                        </div>
                    </div>
                </div>
                <div hidden={!(isMobile||isTablet)}>
                    <img src={home} style={{width: '100%', objectFit: 'cover', marginTop: '60px'}}/>
                    <div style={{position: 'absolute', top: '10%', left: '10%', textAlign: 'left'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>Corporate<br/>counselling</div>
                        <div style={{fontSize: '10px'}}>Invest in your employees to<br/> grow your business
                        </div>
                        <div style={{marginTop: '50px'}}>
                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '12px', color: '#DF8F06', marginRight: '10px'}}>Let's chat</Button>
                            <Button className='buttonSolid'>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                        </div>
                    </div>
                </div>
                <div className={isMobile||isTablet?"width-90m":"width-70m"}>
                    <Row style={{marginBottom: '70px'}}>
                        <Col md={5}>
                            <img src={corp1} style={{width: '100%', objectFit: 'contain', height: (isMobile||isTablet)?'240px':'350px'}}/>
                        </Col>
                        <Col md={7}>
                            <div style={{fontFamily: 'Nunito-Bold', fontSize: '26px', marginBottom: '10px', margin: isMobile||isTablet?'20px 0px':'auto'}}>How corporate counselling helps your business</div>
                            <div>Your company’s performance depends on your employees.</div>
                            <div style={{marginTop: '15px'}}>And your employees’ performance depends on their emotional and psychological well-being.</div>
                            <div className="divPoint">
                                <div><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>50% of corporate India is under chronic stress.</div>
                            </div>
                            <div className="divPoint" style={{marginTop: '20px'}}>
                                <div><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>According to WHO, depression and anxiety disorders cost the global economy US$1 trillion each year.</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="flexCenter" style={{boxShadow: '0px 20px 60px #0000001A', borderRadius: '30px', overflow: 'hidden', margin: 'auto'}}>
                        <Col md={5} style={{padding: '35px'}}>
                            <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px', marginBottom: '10px'}}>How corporate counselling helps your business</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>To increase productivity and engagement.</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>To develop a positive workplace environment.</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>To address issues before they become conflicts.</div>
                            <div style={{marginBottom: '10px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>To reduce the attrition rate in your company.</div>
                        </Col>
                        <Col md={7} style={{paddingRight: '0px'}}>
                            <img src={corporate} style={{width: '100%', objectFit: 'cover', height: '370px'}}/>
                        </Col>
                    </Row>
                    <Row style={{margin: '80px 0px', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover"}}>
                        <Col md={5}>
                            <img src={corp2} style={{width: '100%', objectFit: 'contain', height: (isMobile||isTablet)?'240px':'300px'}}/>
                        </Col>
                        <Col md={7}>
                            <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px', marginBottom: '10px'}}>Corporate Counselling helps your employees</div>
                            <div style={{margin: '10px 0px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>Grow their confidence and self-esteem.</div>
                            <div style={{margin: '10px 0px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>Become self-motivated and take initiatives.</div>
                            <div style={{margin: '10px 0px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>Learn strategies to handle work stress.</div>
                            <div style={{margin: '10px 0px'}}><FontAwesomeIcon icon={faCheckSquare} style={{color: '#E98E00', marginRight: '10px', fontSize: '18px'}}/>Improve work-life balance.</div>
                        </Col>
                    </Row>
                </div>
                <div style={{fontFamily: 'Roboto-Bold', margin: '80px 0px 30px 0px', textAlign: 'center', fontSize: '28px'}}>Our services for your<br/>employees</div>
                <Row className="width-70" style={{margin: '50px auto', textAlign: 'center'}}>
                    <Col md={4}>
                        <Card className="shadowBlack noBorder equalHeight">
                            <CardImg top src={stressCounselling} alt="Card image cap" />
                            <CardBody>
                                <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Stress, Anxiety, &amp; Depression</div></Dotdotdot>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadowBlack noBorder">
                            <CardImg top src={coupleCounselling} alt="Card image cap" />
                            <CardBody>
                                <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Relationship Counselling</div></Dotdotdot>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadowBlack noBorder">
                            <CardImg top src={flourish} alt="Card image cap" />
                            <CardBody>
                                <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Flourish at Work</div></Dotdotdot>
                                <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <div style={{textAlign: 'center', marginBottom: '50px'}}>
                    <Button style={{marginTop: '15px', borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>View All Services</Button>
                </div>
                <div style={{background: '#F5F5F5', padding: '40px 0px'}}>
                    <div style={{fontFamily: 'Roboto-Bold', margin: '50px 0px 30px 0px', textAlign: 'center', fontSize: '28px'}}>Our most successful programs<br/>for professionals</div>
                    <Row className="width-70m" style={{textAlign: 'center'}}>
                        <Col md={4} style={{marginTop: '25px'}}>
                            <Card className="shadowBlack noBorder equalHeight">
                                <CardImg top src={anger} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Anger Management</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4} style={{marginTop: isMobile||isTablet?'25px':'0px'}}>
                            <Card className="shadowBlack noBorder">
                                <CardImg top src={anxiety} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Overcome Depression and anxiety</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md={4} style={{marginTop: '25px'}}>
                            <Card className="shadowBlack noBorder">
                                <CardImg top src={motivation} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-motivation</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div style={{textAlign: 'center', marginBottom: '50px'}}>
                        <Button style={{marginTop: '15px', borderRadius: '100px', background: 'transparent', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>View All Services</Button>
                    </div>
                </div>
                <div style={{padding: '50px 0px', textAlign: 'center'}}>
                    <div className="width-70m">
                        <div style={{fontFamily: 'Roboto-Bold'}}>OUR BLOGS</div>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '44px'}}>Read Our Latest Articles</div>
                        <Row style={{marginTop: '50px', textAlign: 'left'}}>
                            <Col md={3}>
                                <Card className="shadowBlack noBorder equalHeight moveUp">
                                    <CardImg top src={blog_1} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-care for physician burnout: What does that mean?</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>They say you learn a lot from your clients. Not in anesthesia, where I frequently feel great empathy for my sick patients and their families. Our connection in the peri-operative environment is too short-lived for this, I believe. But in therapy, where the relationship is both critical and deeper,</div></Dotdotdot>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} style={{marginTop: isMobile||isTablet?'25px':'0px'}}>>
                                <Card className="shadowBlack noBorder moveUp">
                                    <CardImg top src={blog_2} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Physicians need to acknowledge implicit bias</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>“Oh, you’re here to take me to my test.” I have heard this too many times to count, and I have come to perfect my response. “No, I am not patient transport, your social worker, or your nurse. I am your doctor.” After a moment of confusion, I usually see a facial expression signaling that the patient is</div></Dotdotdot>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} style={{marginTop: isMobile||isTablet?'25px':'0px'}}>
                                <Card className="shadowBlack noBorder moveUp">
                                    <CardImg top src={blog_3} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Are you happy with your decision to go into medicine?</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>On a rare Sunday morning, I woke and had the time to make breakfast for my kids and their cousin, who'd stayed the night. My nephew said, "Thanks, Aunt Erin, I feel like I never see you." To which my oldest (10)</div></Dotdotdot>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} style={{marginTop: isMobile||isTablet?'25px':'0px'}}>
                                <Card className="shadowBlack noBorder moveUp">
                                    <CardImg top src={blog_4} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>What to do next if your physician dream job isn’t available</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>Human nature is to hold on tightly to the ideals of perfect. Once we find something that ticks all the boxes, we want it now and with firm conviction. The same holds when seeking that dream job. Competition, scarcity, and desire</div></Dotdotdot>
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

export default withRouter(CorporateCounselling);