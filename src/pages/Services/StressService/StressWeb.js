import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceBody from '../../../assets/images/serviceBody.jpg';
import serviceStress1 from '../../../assets/images/serviceStress1.png';
import serviceStress10 from '../../../assets/images/serviceStress10.png';
import serviceStress11 from '../../../assets/images/serviceStress11.png';
import serviceStress2 from '../../../assets/images/serviceStress2.png';
import serviceStress3 from '../../../assets/images/serviceStress3.png';
import serviceStress4 from '../../../assets/images/serviceStress4.png';
import serviceStress5 from '../../../assets/images/serviceStress5.png';
import serviceStress6 from '../../../assets/images/serviceStress6.png';
import serviceStress7 from '../../../assets/images/serviceStress7.png';
import serviceStress8 from '../../../assets/images/serviceStress8.png';
import serviceStress9 from '../../../assets/images/serviceStress9.png';
import Subscribe from '../../../components/Subscribe';

class StressWeb extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
};

    render() {
        return (
            <Fragment>
                <div>
                    <div className="direction_column flexCenter" style={{justifyContent: 'flex-end', textAlign: 'center', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: '310px'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Depression Counselling</div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-70m">
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceStress1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Tension &amp; Stress</span>
                                        <span style={{display: 'block'}}>If you keep feeling frustrated, nervous, and angry in your everyday life, cannot get rid of this
stress and your situation does not improve, it is time to talk with our Mindlyf mental health
counsellor before more damage takes place in your life.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Link className="linkStyle" to="/services/stress/tension_stress"><Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button></Link>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>02</div>
                                    <div>
                                        <span className="servicesHead">Depression &amp; Sadness</span>
                                        <span style={{display: 'block'}}>If you are persistently feeling hopeless in your life and showing physical symptoms, including changes in sleep and appetite, excessive feelings of guilt, loss of energy, and more, you may be depressed. Our Mindlyf psychologist can help you get better.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceStress2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceStress3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Anxiety</span>
                                        <span style={{display: 'block'}}>Mindlyf anxiety counsellor offers a customized treatment for your anxiety attacks and
disorders through identifying your stress points and replacing your obsessive thoughts by
developing healthy lifestyle habits and learn relaxation techniques to win your struggle.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Link className="linkStyle" to="/subPoint"><Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button></Link>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>04</div>
                                    <div>
                                        <span className="servicesHead">PTSD &amp; Trauma</span>
                                        <span style={{display: 'block'}}>Are you reliving the painful memories of a distressing event that occurred months or years
ago? Do you feel extreme fear, nervousness, or horror if someone makes a mention of that
experience? Yes? Then you may have PTSD. Talk to a Mindlyf therapist and heal problem.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceStress4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceStress5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Peer Pressure</span>
                                        <span style={{display: 'block'}}>Do you often surrender to peer pressure and make an unwanted choice only because your
friends or co-workers demand it? Learn how to be assertive and overcome the fear of peer
rejection and take control of the decisions you make by consulting Mindlyf</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>06</div>
                                    <div>
                                        <span className="servicesHead">Identity Crisis</span>
                                        <span style={{display: 'block'}}>Asking a question to yourself about who am I? Or what is my passion? Are inhibitions luring
in our mind right? Don&#39;t be troubled. A Mindlyf, counsellor can help you resolve this inner
conflict and find out who you truly are.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceStress6} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceStress7} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>07</div>
                                    <div>
                                        <span className="servicesHead">Phobia</span>
                                        <span style={{display: 'block'}}>Phobia makes you feel an intense, unreasonable fear of a situation, animal, object, or place.
A Mindlyf. therapist can help you control your anxiety for such an imagined threat and
overcome the fear that prevents you from functioning normally.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>08</div>
                                    <div>
                                        <span className="servicesHead">Financial Stress</span>
                                        <span style={{display: 'block'}}>Your financial stress can cause depression, insomnia, higher blood pressure, and more. It
can also cause unhealthy behavior, low self-esteem and relationship problems. Contact our
Mindlyf counsellor to learn how to cope with your financial stress and make you mind free.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceStress8} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceStress9} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>09</div>
                                    <div>
                                        <span className="servicesHead">Loneliness</span>
                                        <span style={{display: 'block'}}>Loneliness can damage your mental health by making you feel anxious and depressed all the
time. With the help of our Mindlyf psychologist, you can recognize the causes of your
loneliness and make a strategy to survive the emotional and mental habits of loneliness.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>10</div>
                                    <div>
                                        <span className="servicesHead">Performance Anxiety</span>
                                        <span style={{display: 'block'}}>If you experience anxiety before public performances or making a presentation in front of
your boss, you need to consult with a therapist. If not treated, this fear of performing well at
work can lead to panic attacks. Mindlyf provides effective counselling to deal with the stress</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceStress10} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceStress11} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>11</div>
                                    <div>
                                        <span className="servicesHead">Social Anxiety</span>
                                        <span style={{display: 'block'}}>Do you feel intensely stressed and anxious while interacting with others? Do you fear of
being humiliated by your actions in a social gathering? You may have a social anxiety
disorder that requires a customized treatment from a licensed therapist.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(StressWeb);
