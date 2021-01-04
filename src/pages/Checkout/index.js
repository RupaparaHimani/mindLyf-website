import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { Link, withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import Select, { components } from "react-select";
import countryList from 'react-select-country-list';
import upi from '../../assets/images/upi.jpg';
import master from '../../assets/images/mastercard.jpg';
import visa from '../../assets/images/visa.jpg';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fb from '../../assets/images/fb.png';
import registration from '../../assets/images/registration.png';
import google from '../../assets/images/google-icon.png';
import axios from 'axios';
import { Button, Card, CardBody, Col, Input, Label, Row, Modal, ModalBody } from 'reactstrap';
import api_url  from '../../api_url';
var validator = require("email-validator");

const customStyles = {
    placeholder: () => ({
      color: 'grey',
      fontSize: '16px'
    }),
    container: () => ({
        width: '100%',
      }),
    control: () => ({
        background: 'transparent',
        display: 'flex',
        padding: '12px',
        borderRadius: '4px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    dropdownIndicator: () => ({
        color: 'grey',
    }),
    input: () => ({
        color: 'grey',
        fontSize: '16px'
    }),
  };

class Checkout extends Component {

    constructor(props) {
        super(props);
        this.state = {
            countryList: countryList().getData(),
            value: 1,
            selectedOption: null,
            loggedIn: false,
            name: '',
            email: '',
            id: null,
            number: '',
            showLogin: false,
            fname: '',
            lname: '',
            state: '',
            isSearchable: true,
        }
    }


handleChange = (selectedOption) => {
    console.log(selectedOption);
    this.setState({
        selectedOption: selectedOption,
    })
}

  componentDidMount = () => {
    let user;
    if (localStorage.getItem('isLoggedIn')) {
      user = JSON.parse(localStorage.getItem('userData'));
      this.setState({
          id: user.id,
          fname: user.first_name,
          lname: user.last_name,
          number: user.number,
          email: user.email,
          loggedIn: true,
      })
    }
    else {
      this.setState({
        showLogin: true,
      })
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

  hideAll = () => {
    this.setState({
      showLogin: false,
    })
  }

  numberChange = event => {
      this.setState({ number: event.target.value });
  }

  fname = event => {
    this.setState({ fname: event.target.value });
}

lname = event => {
    this.setState({ lname: event.target.value });
}

state = event => {
    this.setState({ state: event.target.value });
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
                    Swal.fire({
                        icon: 'success',
                        type: 'success',
                        text: 'No user found',
                        showConfirmButton: true,
                        timer: 3500
                    });
                    // self.props.history.push({
                    //     pathname: '/signup',
                    // })
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

  onChange = e => {
      console.log('radio checked', e.target.value);
      this.setState({
        value: e.target.value,
      });
  };

  openCheckout = () => {
    console.log("openCheckout", this.props.location.state);
    let self = this;

    if (this.state.loggedIn) {
      let options = {
        // "key": "rzp_live_7Z0yW7O941D235",
        "key": "rzp_test_jc28m4cjRc1GoH",
        "amount": this.props.location.state[0]*100,
        "name": "Mindlyf",
        "description": "Consultation Booking",
        "image": "",
        "handler":  (response)=>{
            if(this.props.location.state[3] == 'service'){
              axios.post(api_url+'order', {orderID: response.razorpay_payment_id, userID: this.state.id, amount: this.props.location.state[0], purpose: this.props.location.state[1], service_id: this.props.location.state[2]}).then(function (response) {
                  Swal.fire({
                      icon: 'success',
                      type: 'success',
                      text: 'Your session has been booked successfully! You can find the booking in Packages section of your Profile.',
                      showConfirmButton: true,
                  })
                  .then((result) => {
                      if (result.value) {
                          self.props.history.push({
                              pathname: '/profile',
                          })
                      }
                  })
              })
              .catch(function (response) {
                  console.log(response);
              })
            }else if(this.props.location.state[3] == 'paid-test'){
              console.log("else paid test");
              axios.post(api_url+'order', {orderID: response.razorpay_payment_id, userID: this.state.id, amount: this.props.location.state[0], purpose: this.props.location.state[1], test_id: this.props.location.state[2]}).then(function (response) {
                  Swal.fire({
                      icon: 'success',
                      type: 'success',
                      text: 'Your session has been booked successfully! You can find the booking in Packages section of your Profile.',
                      showConfirmButton: true,
                  })
                  .then((result) => {

                      if (result.value) {
                        if(self.props.location.state[3] === "paid-test"){
                          console.log("---");
                          localStorage.setItem('paid_test_test_is', response.data.order);
                            self.props.history.push({
                                pathname: '/test',
                                state: self.props.location.state[3]
                            })
                        } else {
                            self.props.history.push({
                                pathname: '/profile',
                            })
                        }
                      }
                  })
              })
              .catch(function (response) {
                  console.log(response);
              })
            }
            else{
              console.log("else");
              axios.post(api_url+'order', {orderID: response.razorpay_payment_id, userID: this.state.id, amount: this.props.location.state[0], purpose: this.props.location.state[1], program_id: this.props.location.state[2]}).then(function (response) {
                  Swal.fire({
                      icon: 'success',
                      type: 'success',
                      text: 'Your session has been booked successfully! You can find the booking in Packages section of your Profile.',
                      showConfirmButton: true,
                  })
                  .then((result) => {
                      if (result.value) {
                        if(self.props.location.state[3] === "paid-test"){
                          console.log("---");
                            self.props.history.push({
                                pathname: '/test',
                                state: self.props.location.state[3]
                            })
                        } else {
                            self.props.history.push({
                                pathname: '/profile',
                            })
                        }
                      }
                  })
              })
              .catch(function (response) {
                  console.log(response);
              })
            }
        },
        "prefill": {
          "name": this.state.name,
          "vads_threeds_mpi" : 0,
          "email": this.state.email,
          "contact": this.state.number
        },
        "notes": {
          "address": "Hello World"
        },
        "theme": {
          "color": "#005191"
        }
      };
    let rzp =   new window.Razorpay(options);
    rzp.open();
    }
    else {
      this.setState({
        showLogin: true,
      })
    }
  }

  fname = event => {
    this.setState({ fname: event.target.value });
  }

  hide = () => {
    this.setState({ showLogin: false });
  }

    render() {
        return (
            <Fragment>
              <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showLogin} toggle={this.hide} >
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
                                <div style={{margin: '10px', color: '#9f9f9f', textAlign: 'center', fontSize: '1.2rem'}}>OR</div>
                                <div style={{marginTop: '10px', textAlign: 'left', width: '100%'}}><Link className="linkStyle" to="/signup" onClick={this.hideAll}><Button style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', background: 'none', width: '100%', border: 'solid 1px #DF8F06', color: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>SIGN UP</Button></Link></div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>
                <div style={{paddingTop: isMobile||isTablet?'90px':'240px', borderBottom: 'solid 2px lightgrey', marginBottom: '30px'}}>
                    <div style={{ fontFamily: 'Poppins-Bold', fontSize: '30px', textAlign: 'center' }}>Checkout</div>
                    <Row style={{margin: '30px'}}>
                        <Col md={8}>
                            <Row className="mb-25">
                                <Col md={6}>
                                    <Label for="exampleSelect">First Name:</Label>
                                    <Input className='inputStyleCheckout' placeholder="Enter your first name" value={this.state.fname} onChange={this.fname}/>
                                </Col>
                                <Col md={6}>
                                    <Label for="exampleSelect">Last Name:</Label>
                                    <Input className='inputStyleCheckout' placeholder="Enter your last name" value={this.state.lname} onChange={this.lname}/>
                                </Col>
                            </Row>
                            <Row className="mb-25">
                                <Col md={6}>
                                    <Label for="exampleSelect">Email Address:</Label>
                                    <Input className='inputStyleCheckout' placeholder="Enter your email address" value={this.state.email} onChange={this.emailChange}/>
                                </Col>
                                <Col md={6}>
                                    <Label for="exampleSelect">Mobile Number:</Label>
                                    <Input className='inputStyleCheckout' placeholder="Enter your mobile number" value={this.state.number} onChange={this.numberChange}/>
                                </Col>
                            </Row>
                            <Row className="mb-25">
                                <Col md={6}>
                                    <Label for="exampleSelect">Country:</Label>
                                    <div style={{color: 'black', display: 'flex'}}>
                                        <Select
                                        id="global-search"
                                        className="basic-singleSearch"
                                        classNamePrefix="select"
                                        value={this.state.selectedOption}
                                        placeholder="Enter your country"
                                        styles={customStyles}
                                        onChange={(selectedOption) => this.handleChange(selectedOption)}
                                        isSearchable={this.state.isSearchable}
                                        name="color"
                                        options={this.state.countryList} />
                                    </div>
                                    {/* <Input className='inputStyleCheckout' placeholder="Enter your country" onChange={this.fname}/> */}
                                </Col>
                                <Col md={6}>
                                    <Label for="exampleSelect">State:</Label>
                                    <Input className='inputStyleCheckout' placeholder="Enter your state" onChange={this.state}/>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={4}>
                            <Card className="shadowCard noBorder">
                                <CardBody>
                                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '15px'}}>
                                        <span style={{fontFamily: 'Nunito-Bold', fontSize: '25px'}}>Product</span>
                                        <span style={{fontFamily: 'Nunito-Bold', fontSize: '25px'}}>Total</span>
                                    </div>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span style={{fontFamily: 'Nunito', fontSize: '18px'}}>{this.props.location.state[1]} Sessions</span>
                                        <span style={{fontFamily: 'Nunito', fontSize: '18px'}}>₹ {this.props.location.state[0]}</span>
                                    </div>
                                    <hr/>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <span style={{fontFamily: 'Nunito', fontSize: '18px'}}>Cart Subtotal</span>
                                        <span style={{fontFamily: 'Nunito', fontSize: '18px'}}>₹ {this.props.location.state[0]}</span>
                                    </div>
                                    <hr/>
                                    <div style={{width: '70%', margin: 'auto', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                      <img src={upi} style={{height: '20px'}}/>
                                      <img src={visa} style={{height: '20px'}}/>
                                      <img src={master} style={{height: '20px'}}/>
                                    </div>
                                    <div style={{textAlign: 'center', margin: '10px 0px'}}><Button onClick={this.openCheckout} style={{borderRadius: '10px', background: '#DF8F06', border: 'none', padding: '10px 40px', fontSize: '14px'}}>Pay Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Checkout);
