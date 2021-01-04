import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import serviceCurve1 from '../../../assets/images/curveService1.png';
import serviceCurve2 from '../../../assets/images/curveService2.png';
import programBanner from '../../../assets/images/programBanner.png';
import serviceSpecial1 from '../../../assets/images/serviceSpecial1.png';
import serviceSpecial2 from '../../../assets/images/serviceSpecial2.png';
import serviceSpecial3 from '../../../assets/images/serviceSpecial3.png';
import serviceSpecial4 from '../../../assets/images/serviceSpecial4.png';
import serviceSpecial5 from '../../../assets/images/serviceSpecial5.png';
import serviceSpecial6 from '../../../assets/images/serviceSpecial6.png';
import serviceSpecial7 from '../../../assets/images/serviceSpecial7.png';
import serviceSpecial8 from '../../../assets/images/serviceSpecial8.png';
import Subscribe from '../../../components/Subscribe';
import serviceBody from '../../../assets/images/serviceBody.jpg';

class SpecialChildren extends Component {

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
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Special Children</div>
                    </div>
                </div>
                <div style={{backgroundImage: 'url(' + serviceBody + ')', backgroundRepeat: "repeat-y", backgroundSize: "cover"}}>
                    <div className="width-70m">
                        <div style={{marginTop: '40px'}}>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceSpecial1} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>01</div>
                                    <div>
                                        <span className="servicesHead">Slow learners</span>
                                        <span style={{display: 'block'}}>If your child is a slow learner, don&#39;t get disappointed. A Mindlyf psychologist can help your child in adjusting to a regular learning program with his or her slower ability. With proper observation and guidance, your child can grow confident and socially adjusted with time.</span>
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
                                        <span className="servicesHead">Dyslexia, Dysgraphia, and Dyscalculia</span>
                                        <span style={{display: 'block'}}>Growing up and getting an education is always a challenging task for a child who is suffering from a learning disorder. Our Mindlyf therapist can develop and implement an effective intervention program to help your child improve his or her performance at school.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceSpecial2} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceSpecial3} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>03</div>
                                    <div>
                                        <span className="servicesHead">ASD</span>
                                        <span style={{display: 'block'}}>Are you unsure about how to find the best treatment for your child with Autism Spectrum Disorder (ASD)? A Mindlyf psychologist can help your child overcome a wide variety of developmental challenges to grow and thrive in life and lessen the symptoms of autism over time.</span>
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
                                        <span className="servicesHead">Attention Deficit Hyperactivity Disorder (ADHD)</span>
                                        <span style={{display: 'block'}}>If your child is showing symptoms of inattention, hyperactivity, and impulsivity, he or she may have ADHD. A Mindlyf therapist can guide your child to make the most of his or her abilities and provide a personalized treatment plan to manage the ADHD symptoms with time.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceSpecial4} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceSpecial5} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>05</div>
                                    <div>
                                        <span className="servicesHead">Down Syndrome</span>
                                        <span style={{display: 'block'}}>Down syndrome may cause intellectual disability and developmental delays in your child. A team of Mindlyf therapists and special educators can provide early intervention programs to manage your child&#39;s learning disabilities. The treatment also helps you improve the quality of your child&#39;s life.</span>
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
                                        <span className="servicesHead">Low IQ</span>
                                        <span style={{display: 'block'}}>Children with low IQ not only find it challenging to communicate and learn but also lack personal care and problem-solving skills. With the help of effective therapeutic interventions, a Mindlyf counsellor can support your child to learn the life skills essential for a healthy life.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceSpecial6} alt="" style={{width: '100%'}}/></div>
                            </div>
                            <div className="curveStyle curve2"><img src={serviceCurve2} alt=""/></div>
                            <div className="gridProgram mt-40" style={{gridTemplateColumns: '1fr 2.5fr'}}>
                                <div><img src={serviceSpecial7} alt="" style={{width: '100%'}}/></div>
                                <div className="servicesContent">
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '38px'}}>07</div>
                                    <div>
                                        <span className="servicesHead">Love &amp; treatment</span>
                                        <span style={{display: 'block'}}>The value of your encouragement, support, and affection in your child&#39;s life is immense. A Mindlyf counsellor can guide you in creating a healthy environment for your child, where he or she has the freedom to make mistakes and grow without any limitations.</span>
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
                                        <span className="servicesHead">Effects on children when their parents ignore them</span>
                                        <span style={{display: 'block'}}>If you do not approve and love your child with required emotional warmth and attention, it can affect the child&#39;s emotional development and cause mental health issues in the future. Our Mindlyf psychologist can help you understand the emotional needs of your child and nurture him or her with a positive influence.</span>
                                        <div style={{marginTop: '20px'}}>
                                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Read More</Button>
                                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Consult Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </div>
                                    </div>
                                </div>
                                <div><img src={serviceSpecial8} alt="" style={{width: '100%'}}/></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(SpecialChildren);