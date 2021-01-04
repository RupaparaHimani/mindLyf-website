import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceMental1 from '../../../assets/images/serviceMental1.png';
import serviceMental2 from '../../../assets/images/serviceMental2.png';
import serviceMental3 from '../../../assets/images/serviceMental3.png';
import serviceMental4 from '../../../assets/images/serviceMental4.png';
import serviceMental5 from '../../../assets/images/serviceMental5.png';
import serviceMental6 from '../../../assets/images/serviceMental6.png';
import serviceMental7 from '../../../assets/images/serviceMental7.png';
import serviceMental8 from '../../../assets/images/serviceMental8.png';
import Subscribe from '../../../components/Subscribe';
import serviceBody from '../../../assets/images/serviceBody.jpg';

class MentalMob extends Component {

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
                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>Mental Health<br/>Disorders</div>
                    </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-90" style={{margin: '40px auto'}}>
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceMental1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Eating disorders</span>
                                        <span style={{display: 'block'}}>Are you suffering from binge eating disorder? Do you fear to gain weight and regularly feel troubled...</span>
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
                                        <span className="servicesHead">Mood swings</span>
                                        <span style={{display: 'block'}}>Frequent mood shifts can cause a debilitating effect on your emotional and mental well-being. Therapy...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceMental2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceMental3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Narcissistic Personality Disorder</span>
                                        <span style={{display: 'block'}}>If you show an exaggerated sense of superiority, lack empathy for other people, and feel an intense...</span>
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
                                        <span className="servicesHead">Bipolar Disorder </span>
                                        <span style={{display: 'block'}}>A person who has bipolar disorder sometimes may feel hyper-excited, extremely happy, and overly confident...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceMental4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceMental5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Obsessive-Compulsive Disorder (OCD)</span>
                                        <span style={{display: 'block'}}>Do you keep having reoccurring thoughts that are unreasonable and unwanted? Do you often find yourself...</span>
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
                                        <span className="servicesHead">Paranoia</span>
                                        <span style={{display: 'block'}}>An individual challenged by paranoia may have irrational and groundless suspicions of peoples&#39;...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceMental6} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceMental7} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>07</div>
                                    <div>
                                        <span className="servicesHead">Schizophrenia</span>
                                        <span style={{display: 'block'}}>If you are a patient of schizophrenia, you may experience hallucinations (A false perception of objects...</span>
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
                                        <span style={{display: 'block'}}>Mindlyf mental health clinic offers effective therapy for substance abuse, including alcohol...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceMental8} alt="" style={{width: '100%'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(MentalMob);