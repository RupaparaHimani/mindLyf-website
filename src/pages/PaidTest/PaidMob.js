import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import 'rc-tabs/assets/index.css';
import { isMobile, isTablet } from 'react-device-detect';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { Link, withRouter } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Card, CardBody, Col, Input, Modal, ModalBody, Row } from 'reactstrap';
import fb from '../../assets/images/fb.png';
import google from '../../assets/images/google-icon.png';
import programBanner from '../../assets/images/programBanner.png';
import registration from '../../assets/images/registration.png';
import Subscribe from '../../components/Subscribe';
import api_url  from '../../api_url';
import Swal from 'sweetalert2';
var validator = require("email-validator");

class PaidTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
    }
}

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

nameChange = event => {
    this.setState({ name: event.target.value });
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
    }
}

question = value => {
    localStorage.setItem('type',value);
}

openCheckout = (amount,sessions) => {
    if (localStorage.getItem('isLoggedIn')) {
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

  hideAll = () => {
      this.setState({
          showLogin: false,
      })
  }

    render() {
        return (
            <Fragment>
                <ToastContainer />
                <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showLogin} toggle={this.hideAll} >
                    <ModalBody style={{ textAlign: "center" }}>
                        <Row style={{padding: '0px'}}>
                            <Col md={5} className="flexCenter" style={{background: '#0061AB', flexDirection: 'column', textAlign: 'left', justifyContent: 'space-around', color: 'white', paddingLeft: '40px'}}>
                                <div>
                                    <span style={{fontSize: '1.6rem'}}>Login</span>
                                    <span style={{display: 'block', marginTop: '15px'}}>Get access to your Appointments, Profile, etc.</span>
                                </div>
                                <img src={registration} alt="" style={{width: '80%', objectFit: 'cover'}}/>
                            </Col>
                            <Col md={7} className="flexCenter" style={{flexDirection: 'column', padding: '40px'}}>
                                <div style={{fontSize: '1.4rem', fontFamily: 'Roboto-Bold', marginBottom: '15px'}}>Sign In to Your Account</div>
                                <div style={{margin: '10px 0px', width: '100%'}}><Input className='inputStyle' placeholder="Enter your email address" onChange={this.emailChange}/></div>
                                <div style={{margin: '20px 0px', width: '100%'}}><Input className='inputStyle' maxLength={10} placeholder="Enter your password" onChange={this.passChange}/></div>
                                <div style={{marginTop: '10px', textAlign: 'left', width: '100%'}}><Button onClick={this.login} style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', border: 'none', width: '100%', background: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>LOGIN NOW</Button></div>
                                <div style={{margin: '10px', color: '#9f9f9f', textAlign: 'center', fontSize: '1.2rem'}}>OR</div>
                                <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                                    <div>
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
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                <div>
                    <div className="direction_column flexCenter" style={{textAlign: 'center', justifyContent: 'flex-end', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: isMobile||isTablet?'140px':'330px'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: isMobile||isTablet?'30px':'60px', marginTop: '80px'}}>Paid-Tests</div>
                    </div>
                </div>
                <div style={{textAlign: 'center', width: (isMobile||isTablet)?'100%':'80%', margin: 'auto'}}>
                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                        <Row style={{marginBottom: '50px'}}>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(4200,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>MCMI</div>
                                        <div>₹ 4,200</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(4500,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>MPMI</div>
                                        <div>₹ 4,500</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(3700,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>TAT</div>
                                        <div>₹ 3,700</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(4800,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>ROR</div>
                                        <div>₹ 4,800</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(3700,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>Mascarenhas Interest Test</div>
                                        <div>₹ 3,700</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(2200,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>ADHD</div>
                                        <div>₹ 2,200</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(2400,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>Y-BOCS</div>
                                        <div>₹ 2,400</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(4800,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>16PF</div>
                                        <div>₹ 4,800</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(1900,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>Connos Add Checklist</div>
                                        <div>₹ 1,900</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(4600,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>SPM</div>
                                        <div>₹ 4,600</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(2300,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>HTP</div>
                                        <div>₹ 2,300</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(4900,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>CAT</div>
                                        <div>₹ 4,900</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col>
                                <Card className="shadowCard noBorder equalHeight paid" onClick={() => this.openCheckout(4600,1)}>
                                    <CardBody>
                                        <div style={{fontSize: '20px', fontFamily: 'Nunito-Bold'}}>DAP</div>
                                        <div>₹ 4,600</div>
                                        <Button className='buttonSolid' style={{marginTop: '10px'}}>Take Test</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(PaidTest);
