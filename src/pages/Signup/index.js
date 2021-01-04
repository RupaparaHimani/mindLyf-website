import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import fb from '../../assets/images/fb.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import registration from '../../assets/images/registration.png';
import google from '../../assets/images/google-icon.png';
import { isMobile, isTablet } from 'react-device-detect';
import { Button, Card, CardBody, Col, Input, Label, Row, Modal, ModalBody } from 'reactstrap';
import axios from 'axios';
import api_url  from '../../api_url';
var validator = require("email-validator");

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            name: '',
            email: '',
            number: '',
            showLogin: false,
            fname: '',
            lname: '',
            password: '',
            confirm: '',
        }
    }

  signup = () => {
    if (this.state.fname==='' || this.state.lname==='' || this.state.email==='' || this.state.number==='' || this.state.password==='' || this.state.confirm==='') {
      toast.error("Please enter all the fields!");
    }
    else if (this.state.password!==this.state.confirm) {
      toast.error("Both passwords should match!");
    }
    else if (validator.validate(this.state.email)===false) {
      toast.error("Please enter a valid email address!");
    }
    else if (this.state.number.length!==10) {
      toast.error("Please enter a 10-digit mobile number!");
    }
    else {
      let self = this;
        axios.post(api_url+'sign-up', {email: this.state.email, fname: this.state.fname, lname: this.state.lname, number: this.state.number, password: this.state.password})
            .then(function (response) {
                self.hideAll();
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
                window.location.assign('/');
            })
            .catch(function (error) {
                console.log(error);
            })
    }
  }

  hideAll = () => {
    this.setState({
      showLogin: false,
    })
  }

  nameChange = event => {
    this.setState({ name: event.target.value });
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

  emailChange = event => {
    this.setState({ email: event.target.value });
  }

  passChange = event => {
    this.setState({ password: event.target.value });
  }

  confirmChange = event => {
    this.setState({ confirm: event.target.value });
  }

    render() {
        return (
            <Fragment>
              <div className="signupContainer">
                <div className="width-70m">
                  <Card className='noBorder'>
                    <CardBody>
                    <Row style={{marginTop: '40px'}}>
                            <Col md={12}>
                                <div style={{fontFamily: 'Roboto-Bold', fontSize: isMobile||isTablet?'24px':'30px', marginBottom: '30px', textAlign: 'center'}}>Sign-Up</div>
                                <div>
                                    <Row style={{marginBottom: '35px'}}>
                                        <Col md={6}>
                                            <Label for="exampleSelect">First Name:</Label><Input className='inputStyleProfile' placeholder="Enter your first name" onChange={this.fname}/>
                                        </Col>
                                        <Col md={6}>
                                            <Label for="exampleSelect">Last Name:</Label><Input className='inputStyleProfile' placeholder="Enter your last name" onChange={this.lname}/>
                                        </Col>
                                    </Row>
                                    <Row style={{marginBottom: '35px'}}>
                                        <Col md={6}>
                                            <Label for="exampleSelect">Email Address:</Label><Input className='inputStyleProfile' placeholder="Enter your email address" onChange={this.emailChange}/>
                                        </Col>
                                        <Col md={6}>
                                            <Label for="exampleSelect">Mobile Number:</Label><Input maxLength={10} className='inputStyleProfile' placeholder="Enter your number" onChange={this.numberChange}/>
                                        </Col>
                                    </Row>
                                    <Row style={{marginBottom: '35px'}}>
                                      <Col md={6}>
                                        <Label for="exampleSelect">Password:</Label><Input className='inputStyleProfile' type="password" placeholder="Enter your password" onChange={this.passChange}/>
                                      </Col>
                                      <Col md={6}>
                                        <Label for="exampleSelect">Confirm Password:</Label><Input className='inputStyleProfile' type="password" placeholder="Re-enter your password" onChange={this.confirmChange}/>
                                      </Col>
                                    </Row>
                                </div>
                                <div style={{marginTop: '40px', marginBottom: '20px', textAlign: 'center'}}>
                                    {/* <Button onClick={this.clear} style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Cancel</Button> */}
                                    <Button onClick={this.signup} className='buttonSolid'>Sign-up<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                                </div>
                            </Col>
                        </Row>
                    </CardBody>
                  </Card>
                </div>
              </div>
            </Fragment>
        )
    }
}

export default withRouter(Signup);
