import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceParenting1 from '../../../assets/images/serviceParenting1.png';
import serviceParenting2 from '../../../assets/images/serviceParenting2.png';
import serviceParenting3 from '../../../assets/images/serviceParenting3.png';
import serviceParenting4 from '../../../assets/images/serviceParenting4.png';
import serviceParenting5 from '../../../assets/images/serviceParenting5.png';
import Subscribe from '../../../components/Subscribe';
import serviceBody from '../../../assets/images/serviceBody.jpg';

class ParentingWeb extends Component {

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
                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>Parenting Done<br/>Right</div>
                    </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-90" style={{margin: '40px auto'}}>
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceParenting1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Nagging</span>
                                        <span style={{display: 'block'}}>Nagging is ineffective and can hurt the parent-child bond you share with your little ones. A Mindlyf parenting...</span>
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
                                        <span className="servicesHead">Overprotection</span>
                                        <span style={{display: 'block'}}>Do you micromanage every area of your children&#39;s lives and feel overprotective and insecure about their...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceParenting2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceParenting3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Parenting styles</span>
                                        <span style={{display: 'block'}}>Do you want your child to have excellent social skills, high self-esteem, and healthy mental habits? Our...</span>
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
                                        <span className="servicesHead">Is your parenting influenced by how your parents raised you</span>
                                        <span style={{display: 'block'}}>Do you treat your children the same way your parents did in your childhood? The challenges you faced as...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceParenting4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceParenting5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Freedom given to the children</span>
                                        <span style={{display: 'block'}}>A healthy social environment is essential for a child&#39;s consistent growth. Talk to our counsellor...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
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

export default withRouter(ParentingWeb);