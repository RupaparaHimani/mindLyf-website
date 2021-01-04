import React, { Component, Fragment } from 'react';
import {Row, Col} from 'reactstrap';
import logo from '../../assets/images/mind-lyf-04.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faComments } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {Link, withRouter} from 'react-router-dom';

class AppFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <Row className="width-70" style={{textAlign: 'left', margin: '15px auto'}}>
                    <Col md={3}>
                        <img src={logo} style={{width: '50%'}}/>
                    </Col>
                    <Col md={3} style={{display: 'flex', alignItems: 'flex-end'}}>
                        <div className="mb-10" style={{fontFamily: 'Roboto-Bold', fontSize: '16px'}}>Contact Us</div>
                    </Col>
                    <Col md={3} style={{display: 'flex', alignItems: 'flex-end'}}>
                        <div className="mb-10" style={{fontFamily: 'Roboto-Bold', fontSize: '16px'}}>Counselling Services</div>
                    </Col>
                    <Col md={3} style={{fontSize: '12px', display: 'flex', alignItems: 'flex-end'}}>
                        <div className="mb-10" style={{fontFamily: 'Roboto-Bold', fontSize: '16px'}}>Useful Links</div>
                    </Col>
                </Row>
                <Row className="width-70" style={{textAlign: 'left', borderBottom: '3px solid #d3d3d3', margin: '15px auto', marginBottom: '0px', paddingBottom: '30px'}}>
                    <Col md={3}>
                        <div>
                            <span style={{background: '#005191', borderRadius: '100px', padding: '5px 11px', marginRight: '10px'}}><FontAwesomeIcon icon={faFacebookF} style={{color: 'white', fontSize: '12px'}}/></span>
                            <span style={{background: '#005191', borderRadius: '100px', padding: '5px 9px', marginRight: '10px'}}><FontAwesomeIcon icon={faTwitter} style={{color: 'white', fontSize: '12px'}}/></span>
                            <span style={{background: '#005191', borderRadius: '100px', padding: '5px 10px'}}><FontAwesomeIcon icon={faLinkedinIn} style={{color: 'white', fontSize: '12px'}}/></span>
                        </div>
                    </Col>
                    <Col md={3} style={{fontSize: '12px'}}>
                        <div>
                            <span style={{background: '#005191', borderRadius: '100px', padding: '9px 11px', marginRight: '10px'}}><FontAwesomeIcon icon={faPhone} style={{color: 'white', fontSize: '12px'}}/></span>
                            <span style={{background: '#005191', borderRadius: '100px', padding: '9px 10px'}}><FontAwesomeIcon icon={faComments} style={{color: 'white', fontSize: '12px'}}/></span>
                        </div>
                    </Col>
                    <Col md={3} style={{fontSize: '14px'}}>
                        <Link className="linkStyle" to="/programs/depression/2"><div className="mb-10 linkFooter">Depression Counselling</div></Link>
                        <Link className="linkStyle" to="/programs/relationship/3"><div className="mb-10 linkFooter">Relationship Counselling</div></Link>
                        <Link className="linkStyle" to="/services/flourish/4"><div className="mb-10 linkFooter">Flourish At Work</div></Link>
                        <Link className="linkStyle" to="/programs/self-esteem/5"><div className="mb-10 linkFooter">Build Self-Esteem and Confidence</div></Link>
                        <Link className="linkStyle" to="/services/parenting/6"><div className="mb-10 linkFooter">Parenting Done Right</div></Link>
                        <Link className="linkStyle" to="/services/special-children/7"><div className="mb-10 linkFooter">Special Children</div></Link>
                        <Link className="linkStyle" to="/services/mental-health/8"><div className="mb-10 linkFooter">Mental Health Disorder</div></Link>
                        <Link className="linkStyle" to="/services/therapies/9"><div className="linkFooter">Therapies</div></Link>
                    </Col>
                    <Col md={3} style={{fontSize: '14px'}}>
                        <Link className="linkStyle" to="/blog"><div className="mb-10 linkFooter">Blogs</div></Link>
                        <Link className="linkStyle" to="/terms"><div className="mb-10 linkFooter">FAQ</div></Link>
                        <Link className="linkStyle" to="/privacy"><div className="linkFooter">Privacy Policy</div></Link>
                        <Link className="linkStyle" to="/terms"><div className="mb-10 linkFooter">Refund &amp; Cancellation Policy</div></Link>
                        <Link className="linkStyle" to="/terms"><div className="linkFooter">Terms</div></Link>
                    </Col>
                </Row>
                <div className="flexCenter width-70" style={{justifyContent: 'space-between', margin: '10px auto'}}>
                    <span style={{fontSize: '13px'}}>Copyrights © 2020 Devdesign Studio. All rights reserved.</span>
                    <span style={{justifyContent: 'flex-end', fontSize: '13px'}}>
                        <Link className="linkStyle" to="/"><span className="linkFooter" style={{marginRight: '20px'}}>Home</span></Link>
                        <Link className="linkStyle" to="/about"><span className="linkFooter" style={{marginRight: '10px'}}>About Us</span></Link>
                        <Link className="linkStyle" to="/services"><span style={{marginRight: '10px'}}>Services</span></Link>
                        {/* <Link className="linkStyle" to="/about"><span style={{marginRight: '10px'}}>Courses</span></Link> */}
                        <Link className="linkStyle" to="/programs"><span style={{marginRight: '10px'}}>Programs</span></Link>
                        {/* <Link className="linkStyle" to="/contact"> <span style={{marginRight: '20px'}}>Contact</span></Link> */}
                    </span>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(AppFooter);
