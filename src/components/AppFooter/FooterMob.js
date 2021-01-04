import { faComments, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { Link, withRouter } from 'react-router-dom';
import fb from '../../assets/images/fb.png';
import li from '../../assets/images/li.png';
import logo from '../../assets/images/mind-lyf-04.png';
import twitter from '../../assets/images/twitter.png';

class AppFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div className="width-90" style={{textAlign: 'left', margin: '15px auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', alignItems: (isMobile||isTablet)?'center':'flex-start'}}>
                    <div>
                        <img src={logo} style={{width: '80%'}}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <div className="mb-10" style={{fontFamily: 'Roboto-Bold', fontSize: '10px'}}>Contact Us</div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <div className="mb-10" style={{fontFamily: 'Roboto-Bold', fontSize: '10px'}}>Counselling Services</div>
                    </div>
                    <div style={{fontSize: '6px', display: 'flex', alignItems: 'flex-end'}}>
                        <div className="mb-10" style={{fontFamily: 'Roboto-Bold', fontSize: '10px'}}>Useful Links</div>
                    </div>
                </div>
                <div className="width-90" style={{textAlign: 'left', borderBottom: '3px solid #d3d3d3', margin: '15px auto', marginBottom: '0px', paddingBottom: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <span><img src={fb} style={{height: '25px'}}/></span>
                            <span><img src={li} style={{height: '25px'}}/></span>
                            <span><img src={twitter} style={{height: '25px'}}/></span>
                        </div>
                    </div>
                    <div>
                        <span style={{background: '#005191', borderRadius: '100px', padding: '5px 8px', margin: '0px 5px'}}><FontAwesomeIcon icon={faPhone} style={{color: 'white', fontSize: '12px'}}/></span>
                        <span style={{background: '#005191', borderRadius: '100px', padding: '5px 8px'}}><FontAwesomeIcon icon={faComments} style={{color: 'white', fontSize: '12px'}}/></span>
                    </div>
                    <div style={{fontSize: '6px'}}>
                        <Link className="linkStyle" to="/programs/depression"><div className="mb-10 linkFooter">Depression Counselling</div></Link>
                        <Link className="linkStyle" to="/programs/relationship"><div className="mb-10 linkFooter">Relationship Counselling</div></Link>
                        <Link className="linkStyle" to="/services/flourish"><div className="mb-10 linkFooter">Flourish At Work</div></Link>
                        <Link className="linkStyle" to="/programs/self-esteem"><div className="mb-10 linkFooter">Build Self-Esteem and Confidence</div></Link>
                        <Link className="linkStyle" to="/services/parenting"><div className="mb-10 linkFooter">Parenting Done Right</div></Link>
                        <Link className="linkStyle" to="/services/special-children"><div className="mb-10 linkFooter">Special Children</div></Link>
                        <Link className="linkStyle" to="/services/mental-health"><div className="mb-10 linkFooter">Mental Health Disorder</div></Link>
                        <Link className="linkStyle" to="/services/therapies"><div className="linkFooter">Therapies</div></Link>
                    </div>
                    <div style={{fontSize: '6px'}}>
                        <Link className="linkStyle" to="/blog"><div className="mb-10 linkFooter">Blogs</div></Link>
                        <Link className="linkStyle" to="/terms"><div className="mb-10 linkFooter">FAQ</div></Link>
                        <Link className="linkStyle" to="/privacy"><div className="mb-10 linkFooter">Privacy Policy</div></Link>
                        <Link className="linkStyle" to="/terms"><div className="mb-10 linkFooter">Refund &amp; Cancellation Policy</div></Link>
                        <Link className="linkStyle" to="/terms"><div className="mb-10 linkFooter">Terms</div></Link>
                    </div>
                </div>
                <div className="flexCenter width-90" style={{justifyContent: 'space-between', margin: '10px auto'}}>
                    <span style={{fontSize: '6px'}}>Copyrights © 2020 Devdesign Studio. All rights reserved.</span>
                    <span style={{justifyContent: 'flex-end', fontSize: '6px'}}>
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