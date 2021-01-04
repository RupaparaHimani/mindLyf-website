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

class ParentingService extends Component {

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
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Parenting Done Right</div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-70m">
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceParenting1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Nagging</span>
                                        <span style={{display: 'block'}}>Nagging is ineffective and can hurt the parent-child bond you share with your little ones. A Mindlyf parenting counsellor can guide you on how to collaborate with your children effectively and improve their behavior without becoming a controlling parent.</span>
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
                                        <span className="servicesHead">Overprotection</span>
                                        <span style={{display: 'block'}}>Do you micromanage every area of your children&#39;s lives and feel overprotective and insecure about their health and welfare? Our Mindlyf psychologist offers knowledge and techniques to take care of your child without harming your child&#39;s mental and social development.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceParenting2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceParenting3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Parenting styles</span>
                                        <span style={{display: 'block'}}>Do you want your child to have excellent social skills, high self-esteem, and healthy mental habits? Our Mindlyf parenting counsellor can help you understand various parenting styles and their outcomes on your child&#39;s growth. Book an appointment now to find out the best ways to nurture your children conveniently.</span>
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
                                        <span className="servicesHead">Is your parenting influenced by how your parents raised you</span>
                                        <span style={{display: 'block'}}>Do you treat your children the same way your parents did in your childhood? The challenges you faced as a child were far different than the difficulties your child is going through today. A Mindlyf counsellor can guide you to use modern methods of parenting to nourish your children the best way possible.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceParenting4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceParenting5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Freedom given to the children</span>
                                        <span style={{display: 'block'}}>A healthy social environment is essential for a child&#39;s consistent growth. Talk to our counsellor to learn how to give your children ample freedom to test their limits and make mistakes. Also, learn to balance this freedom with discipline for keeping the bad habits and influence at bay.</span>
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

export default withRouter(ParentingService);