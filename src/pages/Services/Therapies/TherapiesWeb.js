import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceTherapies1 from '../../../assets/images/serviceTherapies1.png';
import serviceTherapies2 from '../../../assets/images/serviceTherapies2.png';
import serviceTherapies3 from '../../../assets/images/serviceTherapies3.png';
import serviceTherapies4 from '../../../assets/images/serviceTherapies4.png';
import serviceTherapies5 from '../../../assets/images/serviceTherapies5.png';
import serviceTherapies6 from '../../../assets/images/serviceTherapies6.png';
import serviceTherapies7 from '../../../assets/images/serviceTherapies7.png';
import serviceTherapies8 from '../../../assets/images/serviceTherapies8.png';
import Subscribe from '../../../components/Subscribe';
import serviceBody from '../../../assets/images/serviceBody.jpg';

class Therapies extends Component {

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
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Therapies</div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-70m">
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Art Therapy</span>
                                        <span style={{display: 'block'}}>A Mindlyf art therapist can help you develop self-awareness, resolve your conflicts, and improve your mental &amp; emotional well-being using the artistic methods, including drawing, painting, coloring, and more. Art therapy involves a creative process of making art to provide the healing and treatment you need to manage your behaviors and reduce anxiety in your life.</span>
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
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>02</div>
                                    <div>
                                        <span className="servicesHead">Music Therapy</span>
                                        <span style={{display: 'block'}}>Are you seeking therapy to restore your mental health and improve the quality of your life? A Mindlyf music therapist offers a treatment that comprises creating music, listening to it, singing, and more. This music therapy can help you express your feelings, improve social and communication skills, and overcome anxiety and fear.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceTherapies2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Behavioral Therapy</span>
                                        <span style={{display: 'block'}}>Behavioral therapy can help you with the treatment of a broad range of mental health disorders, including bipolar disorder, ADHD, OCD, depression, anxiety, substance abuse, and more. The therapy can benefit you to change the unhealthy habits you find alarming for your mental health.</span>
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
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>04</div>
                                    <div>
                                        <span className="servicesHead">Cognitive-behavioral therapy (CBT)</span>
                                        <span style={{display: 'block'}}>A Mindlyf psychologist uses CBT to treat a wide range of mental health conditions, such as PTSD, anger issues, depression, eating disorders, panic disorders, OCD, and more. The therapy helps you identify distressing feelings, change your thought patterns, and adjust your responses to stressful circumstances to regain the joy of your life.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceTherapies4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Rational emotive behavioral therapy (REBT)</span>
                                        <span style={{display: 'block'}}>REBT includes evaluating the underlying thoughts and emotions for your irrational beliefs and managing your behaviors and responses. The therapy helps you accept yourself with your imperfections and love your life with all its discomfort and obstacles.</span>
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
                                        <span className="servicesHead">Emotional freedom technique (EFT)</span>
                                        <span style={{display: 'block'}}>Mindlyf offers effective treatment for anxiety, PTSD, and other mental conditions using the Emotional Freedom Technique (EFT) that entails tapping specific points on your body. The technique helps you reduce the symptoms of your mental health issue and rediscover the happiness of your life once again.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceTherapies6} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies7} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>07</div>
                                    <div>
                                        <span className="servicesHead">Gestalt therapy</span>
                                        <span style={{display: 'block'}}>Gestalt therapy helps you heal your painful memories and emotional wounds and become self-aware about your negative thought patterns. A Mindlyf psychologist can guide you to accept your past, feel less anxious about your future, and live in the present moment for a peaceful life.</span>
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
                                        <span className="servicesHead">Substance abuse</span>
                                        <span style={{display: 'block'}}>Mindlyf mental health clinic offers effective therapy for substance abuse, including alcohol, Marijuana, cocaine, and other harmful drugs. A trained therapist can help you cope with drug cravings, prevent relapse, and overcome the addiction.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceTherapies8} alt="" style={{width: '100%'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Therapies);