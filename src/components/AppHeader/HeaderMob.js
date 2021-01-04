import { faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { bubble as Menu } from 'react-burger-menu';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Input, Modal, ModalBody, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import fb from '../../assets/images/fb.png';
import google from '../../assets/images/google-icon.png';
import logoWhite from '../../assets/images/logo.png';
import menu from '../../assets/images/menu.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/images/mind-lyf-04.png';
import api_url  from '../../api_url';
var validator = require("email-validator");

let user = {};

class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
        this.state = {
            loggedIn: false,
            showLogin: false,
            sidebarOpen: false,
            selectedOption: null,
            isSearchable: true,
            courseList: [
                {label: 'Depression Counselling', value:'services/stress'},
                {label: 'Relationship Counselling', value:'services/relationship'},
                {label: 'Flourish at Work', value:'services/flourish'},
                {label: 'Boost Self Esteem and Confidence', value:'services/esteem'},
                {label: 'Parenting Done Right', value:'services/parenting'},
                {label: 'Special Children', value:'services/special-children'},
                {label: 'Mental Health Disorders', value:'services/mental-health'},
                {label: 'Therapies', value:'services/therapies'},
                {label: 'Anger Management', value:'programs/anger-management'},
                {label: 'Overcome Depression And Anxiety', value:'programs/depression'},
                {label: 'Overcome Your Lonliness', value:'programs/loneliness'},
                {label: 'Leave Your Procastination', value:'programs/procrastination'},
                {label: 'Develop Self Esteem And Confidence', value:'programs/self-esteem'},
                {label: 'Stress Management', value:'programs/stress'},
                {label: 'Resolve your family issues', value:'programs/family'},
                {label: 'Improve your relationship with your partner', value:'programs/relationship'},
                {label: 'Improve your Marriage', value:'programs/marriage'},
                {label: 'Manage  pre-wedding jitters', value:'programs/marriage-jitters'},
                {label: 'Counselling for entrepreneurs', value:'programs/entrepreneurs'},
                {label: 'Easy Career trasition', value:'programs/career-transition'},
                {label: 'Build your Dream Career', value:'programs/dream-career'},
                {label: 'Counselling for LGBTQ Individuals', value:'programs/lgbtq'},
                {label: 'Therapy for Sexual Abuse', value:'programs/sexual-abuse'},
                {label: 'Indentify Sexual Disorders', value:'programs/sexual-disorder'},
                {label: 'Sex Education', value:'programs/sex-education'},
                {label: 'Learn to Embrace your Sexuality', value:'programs/sexuality'},
            ],
    }
}

onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
}

showLogin = () => {
    this.onSetSidebarOpen(false);
    this.setState({showLogin: true})
}

componentDidMount = () => {
    if (localStorage.getItem('isLoggedIn')) {
        user = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            loggedIn: true,
            showLogin: false,
            selectedOption: null,
            isSearchable: true,
            name: '',
            number: '',
            courseList: [
                {label: 'Depression Counselling', value:'services/stress'},
                {label: 'Relationship Counselling', value:'services/relationship'},
                {label: 'Flourish at Work', value:'services/flourish'},
                {label: 'Boost Self Esteem and Confidence', value:'services/esteem'},
                {label: 'Parenting Done Right', value:'services/parenting'},
                {label: 'Special Children', value:'services/special-children'},
                {label: 'Mental Health Disorders', value:'services/mental-health'},
                {label: 'Therapies', value:'services/therapies'},
                {label: 'Anger Management', value:'programs/anger-management'},
                {label: 'Overcome Depression And Anxiety', value:'programs/depression'},
                {label: 'Overcome Your Lonliness', value:'programs/loneliness'},
                {label: 'Leave Your Procastination', value:'programs/procrastination'},
                {label: 'Develop Self Esteem And Confidence', value:'programs/self-esteem'},
                {label: 'Stress Management', value:'programs/stress'},
                {label: 'Resolve your family issues', value:'programs/family'},
                {label: 'Improve your relationship with your partner', value:'programs/relationship'},
                {label: 'Improve your Marriage', value:'programs/marriage'},
                {label: 'Manage  pre-wedding jitters', value:'programs/marriage-jitters'},
                {label: 'Counselling for entrepreneurs', value:'programs/entrepreneurs'},
                {label: 'Easy Career trasition', value:'programs/career-transition'},
                {label: 'Build your Dream Career', value:'programs/dream-career'},
                {label: 'Counselling for LGBTQ Individuals', value:'programs/lgbtq'},
                {label: 'Therapy for Sexual Abuse', value:'programs/sexual-abuse'},
                {label: 'Indentify Sexual Disorders', value:'programs/sexual-disorder'},
                {label: 'Sex Education', value:'programs/sex-education'},
                {label: 'Learn to Embrace your Sexuality', value:'programs/sexuality'},
            ],
        })
    }
}

nameChange = event => {
    this.setState({ name: event.target.value });
}

numberChange = event => {
    this.setState({ number: event.target.value });
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
                    self.props.history.push({
                        pathname: '/signup',
                    })
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

hideAll = () => {
    this.setState({
        showLogin: false,
    })
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
    // let res = response.profileObj;
    // let data = {
    //     name: res.name,
    //     email: res.email,
    // };
    // localStorage.setItem('userData',JSON.stringify(data));
    // localStorage.setItem('isLoggedIn',true);
    // this.hideAll();
    // this.componentDidMount();
    // window.location.reload();
}

emailChange = event => {
    this.setState({ email: event.target.value });
}

passChange = event => {
    this.setState({ password: event.target.value });
}

handleChange = (selectedOption) => {
    this.props.history.push({
        pathname: '/'+selectedOption.value,
    })
}

nav = value => {
    if (value==='self-test') {
        this.props.history.push({
            pathname: '/self-test',
        })
    }
    else if (value==='paid-test') {
        this.props.history.push({
            pathname: '/paid-test',
        })
    }
    else if (value==='services') {
        this.props.history.push({
            pathname: '/services',
        })
    }
    else if (value==='dashboard') {
        this.props.history.push({
            pathname: '/dashboard',
        })
    }
    else if (value==='programs') {
        this.props.history.push({
            pathname: '/programs',
        })
    }
    else if (value==='corporate-counselling') {
        this.props.history.push({
            pathname: '/corporate-counselling',
        })
    }
    else if (value==='consultant') {
        this.props.history.push({
            pathname: '/consultant',
        })
    }
    else if (value==='gift') {
        this.props.history.push({
            pathname: '/gift',
        })
    }
    else if (value==='logout') {
        localStorage.clear();
        window.location.href="/";
    }
    this.onSetSidebarOpen(false);
}

    render() {
        const { isSearchable, selectedOption } = this.state;
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
                <Menu isOpen={ this.state.sidebarOpen }>
                    <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'space-between', width: '100%'}}>
                        <span><Link className="linkStyle" onClick={() => this.onSetSidebarOpen(false)} to="/" style={{color: 'white'}}><img src={logoWhite} alt="" style={{height: "35px", margin: '0px 10px'}}/></Link></span>
                    </div>
                    <div style={{margin: '30px 0px'}}>
                        <span hidden={this.state.loggedIn} onClick={this.showLogin} style={{marginRight: '20px', border: 'solid 2px white', borderRadius: '4px', padding: '5px 15px'}}>Log in</span>
                        <span hidden={!this.state.loggedIn}>{this.state.name}</span>
                    </div>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('home')} className="linkStyle" to="/"><span className="linkHeader" style={{marginRight: '10px'}}>Home</span></Link>
                    <Link hidden={!this.state.loggedIn} style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('dashboard')} className="linkStyle" to="/dashboard"><span className="linkHeader" style={{marginRight: '10px'}}>Dashboard</span></Link>
                    <Link hidden={!this.state.loggedIn} style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('profile')} className="linkStyle" to="/profile"><span className="linkHeader" style={{marginRight: '10px'}}>My Profile</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('services')} className="linkStyle"><span className="linkHeader" style={{marginRight: '10px'}}>Services</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('programs')} className="linkStyle" to="/programs"><span className="linkHeader" style={{marginRight: '10px'}}>Programs</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('programs')} className="linkStyle" to="/programs"><span className="linkHeader" style={{marginRight: '10px'}}>Become a Counsellor</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('corporate-counselling')} className="linkStyle" to="/corporate-counselling"><span className="linkHeader" style={{marginRight: '10px'}}>For Corporate</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('self-test')} className="linkStyle" to="/self-test"><span className="linkHeader" style={{marginRight: '10px'}}>Self Test</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('paid-test')} className="linkStyle" to="/paid-test"><span className="linkHeader" style={{marginRight: '10px'}}>Paid Test</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('consultant')} className="linkStyle" to="/consultant"><span className="linkHeader" style={{marginRight: '10px'}}>Choose Counsellor</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('programs')} className="linkStyle" to="/self-test"><span className="linkHeader" style={{marginRight: '10px'}}>Discussion Forum</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('test')} className="linkStyle" to="/test"><span className="linkHeader" style={{marginRight: '10px'}}>Blog</span></Link>
                    <Link style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('gift')} className="linkStyle" to="/gift"><span className="linkHeader" style={{marginRight: '10px'}}>Gift</span></Link>
                    <Link hidden={!this.state.loggedIn} style={{marginBottom: '20px', fontSize: '1.3rem'}} onClick={() => this.nav('logout')} className="linkStyle" to="/gift"><span className="linkHeader" style={{marginRight: '10px'}}>Logout</span></Link>
                </Menu>
                <div className="headerWidth">
                {/* <Select
                                id="global-search"
                                className="basic-single"
                                classNamePrefix="select"
                                value={selectedOption}
                                placeholder="Search..."
                                onChange={(selectedOption) => this.handleChange(selectedOption)}
                                isSearchable={isSearchable}
                                name="color"
                                options={this.state.courseList} />  */}
                    <div className="headerBottom flexCenter" style={{justifyContent: 'space-between'}}>
                        <img src={menu} style={{height: '25px'}} onClick={() => this.onSetSidebarOpen(true)}/>
                        <Link className="linkStyle" to="/" style={{color: 'white'}}><img src={logo} alt="" style={{height: "35px", margin: '0px 10px'}}/></Link>
                        <div style={{color: 'black', width: '60%'}}>
                            <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', float: 'right', border: 'solid thin #DF8F06', padding: '5px 14px', fontSize: '14px', color: 'white', marginRight: '30px'}}>Start Now</Button></Link>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(AppHeader);
