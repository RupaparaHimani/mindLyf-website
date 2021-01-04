import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Radio } from 'antd';
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { Link, withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Card, CardBody, Col, Input, Modal, ModalBody, Row } from 'reactstrap';
import serviceBack from '../../assets/images/Elements.png';
import fb from '../../assets/images/fb.png';
import google from '../../assets/images/google-icon.png';
import Subscribe from '../../components/Subscribe';
import Price from 'react-forex-price';
import api_url  from '../../api_url';
import Swal from 'sweetalert2';
var validator = require("email-validator");

class ServiceFee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            name: '',
            email: '',
            number: '',
            loggedIn: false,
            showLogin: false,
    }
}

onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
};

responseGoogle = (response) => {
    console.log(response);
    let res = response.profileObj;
    let data = {
        name: res.name,
        email: res.email,
    };
    localStorage.setItem('userData',JSON.stringify(data));
    localStorage.setItem('isLoggedIn',true);
    this.hideAll();
    this.componentDidMount();
    window.location.reload();
  }

  responseFacebook = (response) => {
    console.log(response);
    let res = response.profileObj;
    let data = {
        name: res.name,
        email: res.email,
    };
    localStorage.setItem('userData',JSON.stringify(data));
    localStorage.setItem('isLoggedIn',true);
    this.hideAll();
    this.componentDidMount();
    window.location.reload();
  }

  hideAll = () => {
    this.setState({
      showLogin: false,
    })
  }

  componentDidMount = () => {
    let user;
    if (localStorage.getItem('isLoggedIn')) {
      user = JSON.parse(localStorage.getItem('userData'));
      this.setState({
          name: user.name,
          email: user.email,
          number: user.number,
          loggedIn: true,
      })
    }
  }

  openCheckout = (amount,sessions) => {
    if (this.state.loggedIn) {
    this.props.history.push({
        pathname: '/checkout',
        state: [amount, sessions],
    })
    }
    else {
      this.setState({
        showLogin: true,
      })
    }
  }

emailChange = event => {
    this.setState({ email: event.target.value });
}

passChange = event => {
    this.setState({ password: event.target.value });
}

login = () => {
    if (this.state.email=="" || validator.validate(this.state.email)===false) {
        toast.error("Please enter a valid email address!");
    }
    else if (this.state.password=='') {
        toast.error("Please enter a password!");
    }
    else {
        let self = this;
        axios.post(api_url+'login', {email: this.state.email, password: this.state.password})
            .then(function (response) {
                if (response.data.message==='No user found') {
                    self.hideAll();
                    // self.props.history.push({
                    //     pathname: '/signup',
                    // })
                    Swal.fire({
                        icon: 'success',
                        type: 'success',
                        text: 'No user found',
                        showConfirmButton: true,
                        timer: 3500
                    });
                }
                else {
                    let data = response.data.user;
                    let user = {
                    id: data.id,
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    number: data.number
                    }
                    localStorage.setItem('isLoggedIn',true);
                    localStorage.setItem('userData',JSON.stringify(user));
                    window.location.reload();
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

        // let data = {
        //     email: this.state.email,
        // };
        // localStorage.setItem('userData',JSON.stringify(data));
    }
}

    render() {
        return (
            <Fragment>
                <ToastContainer />
                <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showLogin} toggle={this.hideAll} >
                    <ModalBody style={{ textAlign: "center" }}>
                        <Row style={{padding: '0px'}}>
                            <Col className="flexCenter" style={{flexDirection: 'column', padding: '40px'}}>
                                <div style={{fontSize: '1.4rem', fontFamily: 'Roboto-Bold', marginBottom: '15px'}}>Sign In to Your Account</div>
                                <div style={{margin: '10px 0px', width: '100%'}}><Input className='inputStyle' placeholder="Enter your email address" onChange={this.emailChange}/></div>
                                <div style={{margin: '20px 0px', width: '100%'}}><Input className='inputStyle' maxLength={10} placeholder="Enter your password" onChange={this.passChange}/></div>
                                <div style={{marginTop: '10px', textAlign: 'left', width: '100%'}}><Button onClick={this.login} style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', border: 'none', width: '100%', background: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>LOGIN NOW</Button></div>
                                <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                                    <div style={{marginRight: '10px'}}>
                                        <FacebookLogin
                                            appId="318952325788846"
                                            // autoLoad
                                            callback={this.responseFacebook}
                                            render={renderProps => (
                                                    <span style={{cursor: 'pointer', fontSize: '13px', background: '#3b5998', color: 'white', padding: '6px 10px', display: 'inline-flex', alignItems: 'center', borderRadius: '8px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={fb} style={{height: '30px', marginRight: '10px', borderRadius: '6px'}}/><span>Login with Facebook</span></span>
                                                )}
                                            />
                                    </div>
                                    <div>
                                        <GoogleLogin
                                            clientId="666008965252-p0f44125gort69gcqa1m6e25o3tujpvp.apps.googleusercontent.com"
                                            render={renderProps => (
                                                <span style={{cursor: 'pointer', fontSize: '13px', background: '#4285F4', color: 'white', padding: '6px 10px', display: 'inline-flex', alignItems: 'center', borderRadius: '8px'}} onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={google} style={{height: '30px', width: '30px', objectFit: 'contain', marginRight: '10px', padding: '5px', background: 'white', borderRadius: '6px'}}/><span>Login with Google</span></span>
                                            )}
                                            buttonText="Login"
                                            onSuccess={this.responseGoogle}
                                            // onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </div>
                                </div>
                                <div style={{margin: '10px', color: '#9f9f9f', textAlign: 'center', fontSize: '1.2rem'}}>OR</div>
                                <div style={{marginTop: '10px', textAlign: 'left', width: '100%'}}><Link className="linkStyle" to="/signup" onClick={this.hideAll}><Button style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', background: 'none', width: '100%', border: 'solid 1px #DF8F06', color: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>SIGN UP</Button></Link></div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                <div style={{paddingTop: '20%'}}>
                    <div style={{ fontFamily: 'Poppins-Bold', fontSize: '30px', textAlign: 'center', marginBottom: '20px' }}>Our customized counselling packages:</div>
                    <div style={{textAlign: 'center', margin: '0px 10px', fontSize: '14px'}}>Select any of the below packages and kickstart your journey of healing your Mind, Health and Optimizing life</div>
                </div>
                <div style={{marginTop: '0px'}}>
                    <div style={{margin: 'auto', padding: '50px 0px', width: '80%'}}>
                        <div>I would like to talk to my counsellor via</div>
                        <div style={{marginTop: '20px'}}>
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={1}><span style={{margin: '0px 18px'}}>Chat</span></Radio>
                                <Radio value={2}><span style={{margin: '0px 18px'}}>Call</span></Radio>
                                <Radio value={3}><span style={{margin: '0px 18px'}}>Video</span></Radio>
                            </Radio.Group>
                        </div>
                        ---------------
                        <p>I bought a dress for <Price amount={123.45} />.</p>
                        <Row style={{marginTop: '20px'}}>
                            <Col xs={12}>
                                <Card className='noBorder' style={{boxShadow: '0px 10px 25px #0000000F', height: '100%', backgroundImage: 'url(' + serviceBack + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <CardBody>
                                        <div style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#DF8F06'}}>Learn</div>
                                        <div style={{textAlign: 'center', fontFamily: 'Nunito-Bold', fontSize: '28px', marginTop: '10px'}}>₹ 1,00000/-</div>

                                        <hr style={{color: '#D3E2EE', width: '50%', border: '1px solid'}}/>
                                        <Button style={{borderRadius: '4px', background: '#005191', border: 'none', padding: '10px 20px', fontSize: '14px', color: 'white', marginTop: '20px', width: '100%'}} onClick={() => this.openCheckout(1000,1)}>Book appointment</Button>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>1 session</div>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Discuss how to solve them with ease</div>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Share your problems</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} style={{marginTop: '20px'}}>
                                <Card className='noBorder' style={{boxShadow: '0px 10px 25px #0000000F', height: '100%', backgroundImage: 'url(' + serviceBack + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <CardBody>
                                        <div style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#DF8F06'}}>Learn and Experience</div>
                                        <div style={{textAlign: 'center', fontFamily: 'Nunito-Bold', fontSize: '28px', marginTop: '10px'}}>₹ 2,500/-</div>
                                        <hr style={{color: '#D3E2EE', width: '50%', border: '1px solid'}}/>
                                        <Button style={{borderRadius: '4px', background: '#005191', border: 'none', padding: '10px 20px', fontSize: '14px', color: 'white', marginTop: '20px', width: '100%'}} onClick={() => this.openCheckout(2500,3)}>Book appointment</Button>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>3 sessions</div>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Share problems and discuss practical solutions</div>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Determine therapy goals</div>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Become self-aware and confident</div>
                                        <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Restore happiness of your life</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} style={{marginTop: '20px'}}>
                                <Card className='noBorder' style={{boxShadow: '0px 10px 25px #0000000F', paddingBottom: '15px', height: '100%', backgroundImage: 'url(' + serviceBack + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                                    <CardBody>
                                        <div style={{textAlign: 'center', fontFamily: 'Nunito-Bold', color: '#DF8F06'}}>Learn, Experience, and Thrive</div>
                                        <div style={{textAlign: 'center', fontFamily: 'Nunito-Bold', fontSize: '28px', marginTop: '10px'}}>₹ 4,000/-</div>
                                        <hr style={{color: '#D3E2EE', width: '50%', border: '1px solid'}}/>
                                        <Button style={{borderRadius: '4px', background: '#005191', border: 'none', padding: '10px 20px', fontSize: '14px', color: 'white', marginTop: '20px', width: '100%'}} onClick={() => this.openCheckout(4000,5)}>Book appointment</Button>
                                        <div>
                                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>5 sessions</div>
                                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Share problems and discuss practical solutions</div>
                                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Determine therapy goals</div>
                                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Become self-aware and confident</div>
                                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Restore happiness of your life</div>
                                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Learn strategies to overcome life’s challenges</div>
                                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Discover a new version of yourself</div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <div style={{width: '100%', margin: 'auto', marginTop: '20px'}}>
                            <div style={{fontFamily: 'Nunito-Bold'}}>Common features of all plans:</div>
                            <div className="serviceFeeGrid">
                                <div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>
                                <div>45 minutes session</div>
                            </div>
                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Counselling by a trained psychologist</div>
                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>You choose timings for your sessions</div>
                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Anonymous discussions</div>
                            <div className="serviceFeeGrid"><div><FontAwesomeIcon icon={faCheck} style={{color: '#DF8F06', marginRight: '20px'}}/></div>Private &amp; confidential</div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(ServiceFee);
