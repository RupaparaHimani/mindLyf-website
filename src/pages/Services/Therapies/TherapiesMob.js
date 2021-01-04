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

class TherapiesMob extends Component {

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
                <div className="direction_column flexCenter" style={{justifyContent: 'flex-end', textAlign: 'center', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: '140px'}}>
                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>Therapies</div>
                </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                <div className="width-90" style={{margin: '40px auto'}}>
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Art Therapy</span>
                                        <span style={{display: 'block'}}>A Mindlyf art therapist can help you develop self-awareness, resolve your conflicts...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>02</div>
                                    <div>
                                        <span className="servicesHead">Music Therapy</span>
                                        <span style={{display: 'block'}}>Are you seeking therapy to restore your mental health and improve the quality of your...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceTherapies2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Behavioral Therapy</span>
                                        <span style={{display: 'block'}}>Behavioral therapy can help you with the treatment of a broad range of mental health...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>04</div>
                                    <div>
                                        <span className="servicesHead">Cognitive-behavioral therapy (CBT)</span>
                                        <span style={{display: 'block'}}>A Mindlyf psychologist uses CBT to treat a wide range of mental health conditions, such...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceTherapies4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Rational emotive behavioral therapy (REBT)</span>
                                        <span style={{display: 'block'}}>REBT includes evaluating the underlying thoughts and emotions for your irrational beliefs...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>06</div>
                                    <div>
                                        <span className="servicesHead">Emotional freedom technique (EFT)</span>
                                        <span style={{display: 'block'}}>Mindlyf offers effective treatment for anxiety, PTSD, and other mental conditions using...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceTherapies6} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceTherapies7} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>07</div>
                                    <div>
                                        <span className="servicesHead">Gestalt therapy</span>
                                        <span style={{display: 'block'}}>Gestalt therapy helps you heal your painful memories and emotional wounds and become...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="curveStyle"><img src={serviceCurve1} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '2.5fr 1fr'}}>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>08</div>
                                    <div>
                                        <span className="servicesHead">Substance abuse</span>
                                        <span style={{display: 'block'}}>Mindlyf mental health clinic offers effective therapy for substance abuse, including...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
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

export default withRouter(TherapiesMob);