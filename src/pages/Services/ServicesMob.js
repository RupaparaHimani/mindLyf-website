import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, div } from 'reactstrap';
import boostEsteem from '../../assets/images/boostEsteem.png';
import coupleCounselling from '../../assets/images/couple-counselling.png';
import flourish from '../../assets/images/flourish-at-work.png';
import mental from '../../assets/images/mental.png';
import parenting from '../../assets/images/parenting.png';
import programBanner from '../../assets/images/programBanner.png';
import special from '../../assets/images/special.png';
import stressCounselling from '../../assets/images/stress-counselling.png';
import therapies from '../../assets/images/therapies.png';
import Subscribe from '../../components/Subscribe';

class ServicesMob extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div className="direction_column flexCenter" style={{justifyContent: 'flex-end', textAlign: 'center', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: '210px'}}>
                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px', paddingTop: '20px'}}>Services We Offer</div>
                    <div style={{fontSize: '10px', width: '80%'}}>You are only human just like everyone else.<br/> You feel pain, you feel stress, you feel fear, and <br/>sometimes you feel lost. Sooner or later, we all go<br/> through such phases of life where the only thing<br/> we want to do is to give up.
                    </div>
                </div>
                <div style={{margin: '50px 24px', textAlign: 'center'}}>
                    <div className="mobGrid-2" style={{marginBottom: '30px'}}>
                        <div className="m-10">
                            <Link to="/services/stress" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={stressCounselling} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Depression Counselling</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>WHO claims we all feel either of emotions in a lifetime, and it’s necessary for one to get the right help at the right time, there's a thin line between sadness and depression, be smart enough to not be fooled by your own emotions</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                        <div className="m-10">
                            <Link to="/services/relationship" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={coupleCounselling} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Relationship Counselling</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>They say it’s easy to jump into a relationship but difficult to maintain one, relationships are beautiful and need to be worked on time to time, here more for you to know</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                    </div>
                    <div className="mobGrid-2" style={{marginBottom: '30px'}}>
                        <div className="m-10">
                            <Link to="/services/flourish" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={flourish} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Flourish at Work</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>Success is something we're all looking for, it's easier when we flourish. Also, who doesn't want to walk with pride and a satisfactory smile every morning</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                        <div className="m-10">
                            <Link to="/services/esteem" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={boostEsteem} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Boost Self Esteem and Confidence</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>Confidence and esteem is simply ours but sometimes we can lose it, let's bring it back and empower ourselves</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                    </div>
                    <div className="mobGrid-2" style={{marginBottom: '30px'}}>
                        <div className="m-10">
                            <Link to="/services/parenting" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={parenting} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Parenting Done Right</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>Not necessarily parents are right all the time, we can make mistakes, let's understand ourselves and children better to bring out the best in us by gracefully making the necessary changes</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                        <div className="m-10">
                            <Link to="/services/special-children" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={special} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Special Children</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>We are all special in a certain way, but there are much more special out there, read more to understand learning disabilities, autism, down syndromes and more</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                    </div>
                    <div className="mobGrid-2" style={{marginBottom: '30px'}}>
                        <div className="m-10">
                            <Link to="/services/mental-health" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={mental} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Mental Health Disorders</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>Let’s know in-depth about narcissism, schizophrenia, bipolar disorder, and many more that were faintly heard or known about</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                        <div className="m-10">
                            <Link to="/services/therapies" className="linkStyle blackLink"><Card className="shadowCard equalHeight noBorder">
                                <CardImg className="mobCardImg" top src={therapies} alt="Card image cap" />
                                <CardBody>
                                    <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '13px'}}>Therapies</div></Dotdotdot>
                                    <Dotdotdot clamp={3}><div style={{fontSize: '8px', marginTop: '10px', marginBottom: '10px'}}>Now that there are problems, we do have our little ways to solve these problems by various therapies we use such as CBT, Gestalt, REBT, TA and many more</div></Dotdotdot>
                                    <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Know More</div>
                                </CardBody>
                            </Card>
                            </Link>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(ServicesMob);