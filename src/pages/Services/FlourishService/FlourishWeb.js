import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceFlourish1 from '../../../assets/images/serviceFlourish1.png';
import serviceFlourish2 from '../../../assets/images/serviceFlourish2.png';
import serviceFlourish3 from '../../../assets/images/serviceFlourish3.png';
import serviceFlourish4 from '../../../assets/images/serviceFlourish4.png';
import serviceFlourish5 from '../../../assets/images/serviceFlourish5.png';
import serviceFlourish6 from '../../../assets/images/serviceFlourish6.png';
import serviceFlourish7 from '../../../assets/images/serviceFlourish7.png';
import serviceFlourish8 from '../../../assets/images/serviceFlourish8.png';
import Subscribe from '../../../components/Subscribe';
import serviceBody from '../../../assets/images/serviceBody.jpg';

class FlourishService extends Component {

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
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Flourish at Work</div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-70m">
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceFlourish1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Non-comforting work environment</span>
                                        <span style={{display: 'block'}}>Lack of employee recognition, poor workplace culture, and insufficient support from your team can often cause distress in the workplace. A Mindlyf counsellor can surely help you address such issues and manage your frustration at work without harming your mental well-being.</span>
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
                                        <span className="servicesHead">Tough boss</span>
                                        <span style={{display: 'block'}}>Dealing with a tough boss who micromanages you and undermines your performance can decrease your productivity at work. Your boss&#39;s high standards and unrealistic deadlines can hurt your growth and make you quit your job. Talk to our psychology expert to learn effective strategies to cope with your difficult boss successfully.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceFlourish2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceFlourish3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">Unemployment</span>
                                        <span style={{display: 'block'}}>Losing a job can induce self-doubt, anxiety, and depression in your life. Unemployment requires fast changes in your lifestyle and may cause loss of control and helplessness. A Mindlyf therapist can help you normalize the problem and regain your self-esteem to deal with unemployment without further ado.</span>
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
                                        <span className="servicesHead">Teamwork</span>
                                        <span style={{display: 'block'}}>Do you often have conflicts with your team members over opinions and strategies? Do you want to become a reliable team player who efficiently performs the given tasks to accomplish a common goal? Our Mindlyf psychologist can help you boost your productivity as a responsible team member and nurture your relationships with your co- workers easily.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceFlourish4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceFlourish5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Balance work &amp; personal life</span>
                                        <span style={{display: 'block'}}>The happiness and satisfaction of your life depend on how you balance your professional and personal life successfully. To reduce stress and burnout, you may need to change the structure of your life for your overall well-being. A Mindlyf therapist can help you improve your work-life balance and sincerely look after your emotional and mental health.</span>
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
                                        <span className="servicesHead">Low motivation &amp; job satisfaction</span>
                                        <span style={{display: 'block'}}>Job dissatisfaction can cause a lack of interest, frustration, lower productivity at work. A Mindlyf therapist can help you increase job satisfaction and stay motivated in a challenging work environment. Also, learn how to find a job that makes you happy and gives meaning to your life by contacting our counselling expert right now.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceFlourish6} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceFlourish7} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>07</div>
                                    <div>
                                        <span className="servicesHead">Discrimination</span>
                                        <span style={{display: 'block'}}>Does your boss or manager play favorites when it comes to employee recognition, incentives, and other job benefits? Such discrimination at work can result in conflicts with your team members and management over time and affect your mental health. Contact a Mindlyf counsellor to resolve this problem without ruining your inner peace.</span>
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
                                        <span className="servicesHead">Harassment</span>
                                        <span style={{display: 'block'}}>Harassment in the workplace can hamper your growth and affect your mental and emotional health if you are not able to identify and prevent it on time. Our Mindlyf counselling psychologist can help you understand and address harassment correctly before any serious damage takes place in your life.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceFlourish8} alt="" style={{width: '100%'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(FlourishService);