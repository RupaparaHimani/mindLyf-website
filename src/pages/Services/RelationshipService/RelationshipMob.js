import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceRelation1 from '../../../assets/images/serviceRelation1.png';
import serviceRelation10 from '../../../assets/images/serviceRelation10.png';
import serviceRelation11 from '../../../assets/images/serviceRelation11.png';
import serviceRelation12 from '../../../assets/images/serviceRelation12.png';
import serviceRelation2 from '../../../assets/images/serviceRelation2.png';
import serviceRelation3 from '../../../assets/images/serviceRelation3.png';
import serviceRelation4 from '../../../assets/images/serviceRelation4.png';
import serviceRelation5 from '../../../assets/images/serviceRelation5.png';
import serviceRelation6 from '../../../assets/images/serviceRelation6.png';
import serviceRelation7 from '../../../assets/images/serviceRelation7.png';
import serviceRelation8 from '../../../assets/images/serviceRelation8.png';
import serviceRelation9 from '../../../assets/images/serviceRelation9.png';
import Subscribe from '../../../components/Subscribe';
import serviceBody from '../../../assets/images/serviceBody.jpg';

class RelationshipMob extends Component {

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
                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>Relationship Counselling</div>
                    </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-90" style={{margin: '40px auto'}}>
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceRelation1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Lack of trust</span>
                                        <span style={{display: 'block'}}>If mistrust is preventing you from making a secure bond and developing an intimate relationship with your partner...</span>
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
                                        <span className="servicesHead">Breakup</span>
                                        <span style={{display: 'block'}}>Going through the post-breakup period can be painfully difficult for you. You can experience sadness, loneliness...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceRelation2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceRelation3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Falling out of love</span>
                                        <span style={{display: 'block'}}>Do you think the spark of your relationship is fading away? Have you stopped making efforts to please your partner...</span>
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
                                        <span className="servicesHead">Family bonding</span>
                                        <span style={{display: 'block'}}>When society is becoming more and more violent and mediocre every day, it can be quite challenging for a family to...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceRelation4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceRelation5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Dating</span>
                                        <span style={{display: 'block'}}>Do you often wonder what is blocking you from getting an excellent relationship with your date? While dating someone...</span>
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
                                        <span className="servicesHead">Cheating in relationship</span>
                                        <span style={{display: 'block'}}>Love can overcome anything, but cheating in a relationship can be heartbreaking for you and your partner. If your...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceRelation6} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceRelation7} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>07</div>
                                    <div>
                                        <span className="servicesHead">Cheating in marriage</span>
                                        <span style={{display: 'block'}}>From childhood issues, mental illness to sex addiction, anything can encourage a married person to cheat with his...</span>
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
                                        <span className="servicesHead">Habit of comparison</span>
                                        <span style={{display: 'block'}}>Comparing your present partner frequently with your ex or BFF may cause problems in your relationship. You may grow...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceRelation8} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceRelation9} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>09</div>
                                    <div>
                                        <span className="servicesHead">Couples counselling</span>
                                        <span style={{display: 'block'}}>Couples counselling is for resolving interpersonal conflicts and improving romantic relationships between you and your...</span>
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
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>10</div>
                                    <div>
                                        <span className="servicesHead">Family counselling</span>
                                        <span style={{display: 'block'}}>Family counselling helps you find a solution for all your family issues, including divorce, sibling relationships, and...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceRelation10} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceRelation11} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>11</div>
                                    <div>
                                        <span className="servicesHead">Compatibility issues</span>
                                        <span style={{display: 'block'}}>Are you and your partner on the same page when it comes to sexual needs, management of finances, taking responsibility...</span>
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
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>12</div>
                                    <div>
                                        <span className="servicesHead">Marriage counselling</span>
                                        <span style={{display: 'block'}}>If your marriage is in trouble, you should consult a marriage counsellor before it becomes too late to save your relation...</span>
                                        <div style={{display: 'flex', marginTop: '10px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '6px 14px', fontSize: '10px', color: '#DF8F06', marginRight: '10px'}}>Know More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 14px', fontSize: '10px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceRelation10} alt="" style={{width: '100%'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(RelationshipMob);