import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceEsteem1 from '../../../assets/images/serviceEsteem1.png';
import serviceEsteem2 from '../../../assets/images/serviceEsteem2.png';
import serviceEsteem3 from '../../../assets/images/serviceEsteem3.png';
import serviceEsteem4 from '../../../assets/images/serviceEsteem4.png';
import serviceEsteem5 from '../../../assets/images/serviceEsteem5.png';
import serviceEsteem6 from '../../../assets/images/serviceEsteem6.png';
import Subscribe from '../../../components/Subscribe';
import serviceBody from '../../../assets/images/serviceBody.jpg';

class EsteemMob extends Component {

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
                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>Boost Self Esteem and Confidence</div>
                </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-90" style={{margin: '40px auto'}}>
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceEsteem1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Enhance confidence</span>
                                        <span style={{display: 'block'}}>Can you speak freely to your manager or boss? Can you discuss with your parents about how your views about life...</span>
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
                                        <span className="servicesHead">Superiority | Inferiority Complex</span>
                                        <span style={{display: 'block'}}>Do you often boast your achievements and make false claims to show yourself superior to others? Do you feel inadequate...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceEsteem2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceEsteem3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Self-doubt</span>
                                        <span style={{display: 'block'}}>Self-doubt can make you underestimate your abilities and question your knowledge before you make an essential choice...</span>
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
                                        <span className="servicesHead">Personality development</span>
                                        <span style={{display: 'block'}}>Your personality makes you stand out from others and succeed in your personal and professional life. Our Mindlyf counsellor...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceEsteem4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceEsteem5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Bullying</span>
                                        <span style={{display: 'block'}}>Bullying can be physical or psychological. No matter you are a child, teen, or an adult, you can be a victim of bullying, and...</span>
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
                                        <span className="servicesHead">Body image</span>
                                        <span style={{display: 'block'}}>Do you frequently compare the shape of your body with others or feel insecure about your weight? If not managed, this mental...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceEsteem6} alt="" style={{width: '100%'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(EsteemMob);