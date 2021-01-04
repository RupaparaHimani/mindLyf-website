import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import boostEsteem from '../../assets/images/boostEsteem.png';
import coupleCounselling from '../../assets/images/couple-counselling.png';
import img1 from '../../assets/images/img-1.png';
import img2 from '../../assets/images/img-2.png';
import img3 from '../../assets/images/img-3.png';
import programBanner from '../../assets/images/programBanner.png';
import img4 from '../../assets/images/img-4.png';
import stressCounselling from '../../assets/images/stress-counselling.png';
import img5 from '../../assets/images/img-5.png';
import Subscribe from '../../components/Subscribe';

class ServicesWeb extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}

question = value => {
    localStorage.setItem('type',value);
}

    render() {
        return (
            <Fragment>
                <div>
                    <div className="direction_column flexCenter" style={{textAlign: 'center', justifyContent: 'flex-end', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: '330px'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '60px', marginTop: '80px'}}>Self-Tests</div>
                    </div>
                </div>
                <div className="width-70m" style={{textAlign: 'center'}}>
                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                        <Row style={{marginBottom: '50px'}}>
                            <Col md={4}>
                                <Link to="/test" onClick={() => this.question('emotional')} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight moveUp">
                                    <CardImg top src={img1} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>1) Emotional wellness test:</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Our emotional wellbeing is just as vital to our physical and mental health. Gaining an understanding about your emotional health help you understand more about yourself; the way you react to situations, the way you behave with the people in your life, as well as your attitudes towards the world and towards yourself.</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}><Link to="/test" className="linkStyle blackLink">Take Test<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/test" onClick={() => this.question('romantic')} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight moveUp">
                                    <CardImg top src={img2} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>2) Romantic Personality/Compatibility test:</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Falling in love is a magical experience. But sometimes we want to know if the person we are with is compatible with us. We want to know if the two of us as a couple are going to make it, go the distance. Learn more about your relationship and your compatibility with your partner by answering the following questions.</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}><Link to="/test" className="linkStyle blackLink">Take Test<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/test" onClick={() => this.question('anger')} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight moveUp">
                                    <CardImg top src={img3} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>3) Anger test:</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Do you have difficulty controlling your temper? Anger is a powerful emotion that can lead to serious problems in your relationships and career if left unbridled. Learn more about your ability to manage it by taking this anger test. It's designed to evaluate the manner in which you approach and handle anger-inducing situations.</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}><Link to="/test" className="linkStyle blackLink">Take Test<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col md={4} style={{margin: 'auto'}}>
                                <Link to="/test" onClick={() => this.question('memory')} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight moveUp">
                                    <CardImg top src={img4} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>4) Memory test:</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Do you have a knack for remembering names and numbers or are you the type of person who forgets things from one moment to the next? Find out if you have the proverbial memory of an elephant by taking this test.</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}><Link to="/test" className="linkStyle blackLink">Take Test<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4} style={{margin: 'auto'}}>
                                <Link to="/test" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight moveUp">
                                    <CardImg top src={img5} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>5) Mental Health assessment :</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Are you thinking about seeking the help of a therapist? If certain issues have been causing problems in your life and you aren't sure how to make the necessary changes, therapy can help. With the help of a professional, you can get out of an unhealthy cognitive, emotional, and behavioural pattern.</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}><Link to="/test" className="linkStyle blackLink">Take Test<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(ServicesWeb);