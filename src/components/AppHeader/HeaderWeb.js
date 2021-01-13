import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEdit, faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FacebookLogin from 'react-facebook-login';
import axios from 'axios';
import React, { Component, Fragment } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';
import { Link, withRouter } from 'react-router-dom';
import Select, { components } from "react-select";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, Modal, ModalBody, Row } from 'reactstrap';
import Swal from 'sweetalert2';
import english from '../../assets/images/english.png';
import fb from '../../assets/images/fb.png';
import germany from '../../assets/images/germany.png';
import google from '../../assets/images/google-icon.png';
import logo from '../../assets/images/mind-lyf-04.png';
import registration from '../../assets/images/registration.png';
import spain from '../../assets/images/spain.jpg';
import MyInput from './AutoComplete';
import ReactQuill from 'react-quill';
import api_url  from '../../api_url';

let user = {};
var validator = require("email-validator");

const formatOptionLabel = ({ value, label, logo }) => (
    <div style={{ display: "flex" }}>
        <img style={{width: '20px', objectFit: 'contain', marginRight: '5px'}} src={logo}/><span>{label}</span>
    </div>
  );

const CaretDownIcon = () => {
    return <FontAwesomeIcon icon={faSearch} color="grey" />;
  };

  const SearchIndicator = props => {
    return (
      <components.DropdownIndicator {...props}>
        <CaretDownIcon />
      </components.DropdownIndicator>
    );
  };

  const items = [
      {
        id: 0,
        name: "Cobol",
      },
      {
        id: 1,
        name: "JavaScript",
      },
      {
        id: 2,
        name: "Basic",
      },
      {
        id: 3,
        name: "PHP",
      },
      {
        id: 4,
        name: "Java",
      },
    ]
    const handleOnSearch = (string, cached) => {

    // onSearch returns the string searched and if
    // the values are cached. If the values are cached
    // "cached" contains the cached values, if not, returns false
    // let keyword = event.target.value;
    // console.log(keyword);
    // let self = this;
    //
    // axios.get(api_url+'getsearchresult/'+keyword)
    //     .then(function (response) {
    //         console.log("111111111", response)
    //         console.log(response.data);
    //           if(response.data != undefined){
    //             console.log("------------");
    //             var c = [...response.data.services, ...response.data.programs]
    //             console.log("========", c);
    //             self.setState({
    //               item: true,
    //             })
    //           // self.setState({
    //               // services: response.data.data,
    //           // })
    //         }
    //     })
    // console.log(string);
  }

  // const handleOnSelect = item => {
  //   // the item selected
  //   console.log("-", string);
  //   this.setState({
  //     test: item.value
  //   })
  //   console.log(item);
  // }

  const handleOnFocus = () => {
    console.log("Focused");
  }

const customStyles = {
    placeholder: () => ({
      color: 'grey',
    }),
    control: () => ({
        background: 'transparent',
        display: 'flex',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    dropdownIndicator: () => ({
        color: 'grey',
    }),
    input: () => ({
        color: 'grey',
    }),
  }


class AppHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currencyList: [],
            selectedCurrency: null,
            countryList: [
                {label: 'English', value:'English', logo: english},
                {label: 'German', value:'German', logo: spain},
                {label: 'Spanish', value:'Spanish', logo: germany},
            ],
            country: '',
            test: '',
            showPass: false,
            dropdownOpen: false,
            dropdownOpenTest: false,
            loggedIn: false,
            showLogin: false,
            showBecameCounsellor: false,
            selectedOption: null,
            isSearchable: true,
            currency: '',
            name: '',
            password: '',
            number: '',
            email: '',
            fname: '',
            lname: '',
            comment: '',
            searchenabled: false,
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
    console.log("========state", this.state);
}

handleCurrency = (selectedCurrency) => {
    this.setState({
        currency: selectedCurrency.value,
    })
}

 // handleOnSelect = item => {
 //  // the item selected
 //  console.log("-", item.id);
 //  this.setState({
 //    test: 1
 //  })
//   console.log(item, this.state.test);
// }
responseGoogle = (response) => {
  console.log(response);
    let res = response.profileObj;
    let self = this
    axios.post(api_url+'sign-up', {email: res.email, fname: res.givenName, lname: res.familyName})
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
                localStorage.setItem('userData',JSON.stringify(user));
                localStorage.setItem('isLoggedIn',true);
                self.hideAll();
                self.componentDidMount();
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
    })
}

responseFacebook = (response) => {
  let res = response;
  let self = this
  axios.post(api_url+'sign-up', {email: res.email, lname: res.name})
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
        localStorage.setItem('userData',JSON.stringify(user));
        localStorage.setItem('isLoggedIn',true);
        self.hideAll();
        self.componentDidMount();
        window.location.reload();
    })
    .catch(function (error) {
        console.log(error);
  })
}

handleCountry = (selectedCountry) => {
    this.setState({
        country: selectedCountry.value,
    })
}

showLogin = () => {
    this.setState({showLogin: true})
}
showBecameCounsellor = () => {
    this.setState({showBecameCounsellor: true})
}

handleChange = (selectedOption) => {
    this.props.history.push({
        pathname: '/'+selectedOption.value,
    })
}

hideAll = () => {
    this.setState({
        showLogin: false,
        showPass: false,
        showBecameCounsellor: false,
        comment: '',
    })
}

componentDidMount = () => {
    this.setState({
        currencyList: [
            {value: 'INR', label: 'INR'},
            {value: 'USD', label: 'USD'},
            {value: 'CAD', label: 'CAD'},
        ],
    })

    if (localStorage.getItem('isLoggedIn')) {
        user = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            name: user.name,
            loggedIn: true,
        })
    }
    // if (localStorage.getItem('location')==null) {
    //   navigator.geolocation.getCurrentPosition(function(position) {
    //     axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyD2VWtnOl4W4sYgLo7HHdizjDauYKyE1cQ')
    //         .then(function (response) {
    //           console.log(response);
    //         })
    //     console.log("Latitude is :", position.coords.latitude);
    //     console.log("Longitude is :", position.coords.longitude);
    //   });
    // }
}

nameChange = event => {
    this.setState({ name: event.target.value });
}

emailChange = event => {
    this.setState({ email: event.target.value });
}

fnamechange = event => {
    console.log(event.target.value)
    this.setState({ fname: event.target.value });
    console.log(this.state.fname)
}

lnameChange = event => {
    this.setState({ lname: event.target.value });
}

commentChange = value => {
    this.setState({ comment: value })
  }


numberChange = event => {
    this.setState({ number: event.target.value });
}

passChange = event => {
    this.setState({ password: event.target.value });
}

login = () => {
  console.log("login");
    if (this.state.email=="" || validator.validate(this.state.email)===false) {
        toast.error("Please enter a valid email address!");
    }
    else if (this.state.password=='') {
        toast.error("Please enter a password!");
    }
    else {
      console.log("else");
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

becameCounsellor = () => {
  console.log(this.state);
  if (this.state.fname==='' || this.state.lname==='' || this.state.email==='' || this.state.number==='') {
    toast.error("Please enter all the fields!");
  }else if (validator.validate(this.state.email)===false) {
    toast.error("Please enter a valid email address!");
  }
  else if (this.state.number.length!==10) {
    toast.error("Please enter a 10-digit mobile number!");
  }
  else {
    let self = this;
      axios.post(api_url+'sign-up', {email: this.state.email, fname: this.state.fname, lname: this.state.lname, number: this.state.number, counsellor: 1, comment: this.state.comment})
          .then(function (response) {
              self.hideAll();
              self.setState({showBecameCounsellor: false})
              Swal.fire({
                  icon: 'success',
                  type: 'success',
                  text: 'As a Counsellor Registered successfully!',
                  showConfirmButton: true,
                  timer: 3500
              });
              // window.location.assign('/');
          })
          .catch(function (error) {
              console.log(error);
          })
  }
}


toggleDrop = () => {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
}

toggleDropTest = () => {
    this.setState(prevState => ({
        dropdownOpenTest: !prevState.dropdownOpenTest
    }));
}

nav = value => {
    if (value==='profile') {
        this.props.history.push({
            pathname: '/profile',
        })
    }
    else if (value==='sessions') {
        this.props.history.push({
            pathname: '/sessions',
        })
    }
    else if (value==='dashboard') {
        this.props.history.push({
            pathname: '/dashboard',
        })
    }
    else if (value==='password') {
        this.setState({
            showPass: true,
        })
    }
    else if (value==='logout') {
        localStorage.clear();
        window.location.href="/";
    }
    else if (value==='self-test') {
        this.props.history.push({
            pathname: '/self-test',
        })
    }
    else if (value==='paid-test') {
        this.props.history.push({
            pathname: '/paid-test',
        })
    }
}

searchSpace=(event)=>{

    let keyword = event.target.value;
    console.log(keyword);
    let self = this;
    self.setState({
      searchenabled: true,
    })
    axios.get(api_url+'getsearchresult/'+keyword)
        .then(function (response) {
            console.log("111111111", response)
            console.log(response.data);
              if(response.data != undefined){
                console.log("------------");
                var c = [...response.data.services, ...response.data.programs]
                console.log("========", c);
              // self.setState({
                  // services: response.data.data,
              // })
            }
        })
  }

changePassword = () => {
  console.log("--");
    this.hideAll();
    Swal.fire({
        icon: 'success',
        type: 'success',
        text: 'Your password has been changed successfully!',
        showConfirmButton: true,
        timer: 3500
    })
}

getSelectedItem(){
   const item = this.props.options.find((opt)=>{
     if (opt.value == this.props.selectedValue)
       return opt;
   })
   return item || {};
 }
    render() {
      const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
        const { isSearchable, selectedOption, selectedCountry, selectedCurrency } = this.state;
        const searchenabled = this.state.searchenabled;

        return (
          <div>
            { searchenabled ? ("Search enabled") :
              (<Fragment>
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
                                  <div style={{margin: '20px 0px', width: '100%'}}><Input className='inputStyle' type="password" placeholder="Enter your password" onChange={this.passChange}/></div>
                                  <div style={{marginTop: '10px', textAlign: 'left', width: '100%'}}><Button onClick={this.login} style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', border: 'none', width: '100%', background: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>LOGIN NOW</Button></div>
                                  <div style={{marginTop: '20px', display: 'flex', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                                      <div>
                                          <FacebookLogin
                                              // appId="415183802809776 // Himani"
                                              // appId="318952325788846"
                                              appId="723101981629769"
                                              fields="name,email,picture"
                                              // scope="public_profile,user_friends"
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
                  <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showBecameCounsellor} toggle={this.hideAll} >
                      <ModalBody style={{ textAlign: "center" }}>
                          <Row style={{padding: '0px'}}>
                              <Col md={12} className="flexCenter" style={{flexDirection: 'column', padding: '40px'}}>
                                  <Row>
                                    <div style={{fontSize: '1.4rem', fontFamily: 'Roboto-Bold', marginBottom: '15px'}}>Became A Counsellor</div>
                                  </Row>

                                  <Row style={{marginBottom: '35px', width: '100%'}}>
                                      <Col md={6}>
                                          <div style={{margin: '10px 0px'}}><Input className='inputStyle' placeholder="First Name" onChange={this.fnamechange}/></div>
                                      </Col>
                                      <Col md={6}>
                                          <div style={{margin: '10px 0px'}}><Input className='inputStyle' placeholder="Last Name" onChange={this.lnameChange}/></div>
                                      </Col>
                                  </Row>

                                  <Row style={{marginBottom: '35px', width: '100%'}}>
                                      <Col md={6}>
                                          <div style={{margin: '10px 0px'}}><Input className='inputStyle' placeholder="Email-ID" onChange={this.emailChange}/></div>
                                      </Col>
                                      <Col md={6}>
                                          <div style={{margin: '10px 0px'}}><Input className='inputStyle' placeholder="Phone Number" onChange={this.numberChange}/></div>
                                      </Col>
                                  </Row >
                                  <Row style={{marginBottom: '35px', width: '100%'}}>
                                    <ReactQuill value={this.state.comment} onChange={this.commentChange} style={{marginBottom: '35px', width: '100%'}}/>
                                  </Row>
                                  <Row style={{marginTop: '20px', width: '30%', textAlign: 'left'}}>
                                      <Button onClick={this.becameCounsellor} style={{fontFamily: 'Roboto-Bold', borderRadius: '8px', border: 'none', width: '100%', background: '#DF8F06', padding: '10px 16px', fontSize: '1rem'}}>Register Now</Button>
                                  </Row>
                              </Col>
                          </Row>
                      </ModalBody>
                  </Modal>

                  <Modal centered={true} style={{ textAlign: "center"}} isOpen={this.state.showPass} toggle={this.hideAll} >
                      <ModalBody style={{ textAlign: "center" }}>
                          <div style={{fontSize: '1.4rem', fontFamily: 'Roboto-Bold', marginBottom: '15px'}}>Change Password</div>
                          <div style={{margin: '20px 0px'}}><Input className='inputStyle' placeholder="Enter new password" onChange={this.passChange}/></div>
                          <div style={{marginTop: '10px', textAlign: 'left'}}><Button onClick={this.changePassword} style={{borderRadius: '40px', background: 'black', padding: '10px 16px', fontSize: '0.8rem'}}>Change Password</Button></div>
                      </ModalBody>
                  </Modal>
                  <div className="headerWidth">
                      <div className="topOrder">
                          <a href="https://www.facebook.com/Mindlyf-103845977940812" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faFacebookF} style={{color: 'white', fontSize: '18px'}}/></span></a>
                          <a href="https://twitter.com/mindlyf" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faTwitter} style={{color: 'white', fontSize: '18px'}}/></span></a>
                          <a href="https://www.instagram.com/mindlyf/" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faYoutube} style={{color: 'white', fontSize: '18px'}}/></span></a>
                          <a href="https://www.linkedin.com/company/33269743/admin/" target="_blank"><span style={{marginRight: '20px'}}><FontAwesomeIcon icon={faLinkedinIn} style={{color: 'white', fontSize: '18px'}}/></span></a>
                      </div>
                      <div className="headerBottom flexCenter" style={{justifyContent: 'space-around', display: 'grid', gridTemplateColumns: 'auto 1fr'}}>
                          <div style={{background: 'white', width: 'min-content', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', padding: '7px 12px'}}><Link className="linkStyle" to="/" style={{color: 'white'}}><img src={logo} alt="" style={{height: "74px"}}/></Link></div>
                          <div style={{color: 'black', display: 'flex', justifySelf: 'flex-end'}}>
                              <span style={{display: 'flex', justifyContent: 'flex-end'}}>
                                  <div style={{color: 'black', display: 'flex', marginRight: '10px'}}>
                                      <MyInput/>
                                  {/*<input type="text" placeholder="Enter item to be searched" onChange={(e)=>this.searchSpace(e)} /> */}
                                  {/* <Select
                                      id="global-search"
                                      className="basic-singleSearch"
                                      classNamePrefix="select"
                                      value={selectedOption}
                                      placeholder="Search..."
                                      styles={customStyles}
                                      components={{ DropdownIndicator: SearchIndicator }}
                                      onChange={(selectedOption) => this.handleChange(selectedOption)}
                                      isSearchable={isSearchable}
                                      name="color"
                                      options={this.state.courseList} />*/}
                                  </div>
                                  <div style={{color: 'black', display: 'flex', marginRight: '10px'}}>

                                      {/* <div><FontAwesomeIcon icon={faMapMarkerAlt} color="white" /></div> */}
                                      <Select
                                          id="global-search"
                                          className="basic-singleCountry"
                                          classNamePrefix="select"
                                          value={selectedCountry}
                                          placeholder="IND"
                                          styles={customStyles}
                                          formatOptionLabel={formatOptionLabel}
                                          // components={{ DropdownIndicator }}
                                          onChange={(selectedCountry) => this.handleCountry(selectedCountry)}
                                          isSearchable={isSearchable}
                                          name="color"
                                          options={this.state.countryList} />
                                  </div>
                                  <div style={{color: 'black', display: 'flex', marginRight: '25px'}}>
                                      {/* <div><FontAwesomeIcon icon={faDollarSign} color="white" /></div> */}
                                      <Select
                                          id="global-search"
                                          className="basic-singleCurrency"
                                          classNamePrefix="select"
                                          value={selectedCurrency}
                                          placeholder="₹"
                                          styles={customStyles}
                                          // components={{ DropdownIndicator }}
                                          onChange={(selectedCurrency) => this.handleCurrency(selectedCurrency)}
                                          isSearchable={isSearchable}
                                          name="color"
                                          options={this.state.currencyList} />
                                  </div>
                              </span>
                          </div>
                          </div>
                      <div className="headerTop">
                          <div style={{fontSize: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0px 100px'}}>
                              <Link className="headerLink" to="/services"><div className="linkHeader">Services</div></Link>
                              <Link className="headerLink" to="/programs"><div className="linkHeader">Programs</div></Link>
                              <div className="headerLink" style={{cursor: 'pointer'}} onClick={this.showBecameCounsellor}>Become A Counsellor</div>
                              <Link className="headerLink" to="/consultant"><div className="linkHeader">Our Experts</div></Link>
                              <Link className="headerLink" to="/corporate-counselling"><div className="linkHeader">For Corporates</div></Link>
                              <Dropdown isOpen={this.state.dropdownOpenTest} style={{display: 'inline'}} toggle={this.toggleDropTest}>
                                  <DropdownToggle style={{background: 'transparent', border: 'none'}}>
                                      <FontAwesomeIcon icon={faEdit} color="white" style={{marginRight: '10px'}} />Test
                                  </DropdownToggle>
                                  <DropdownMenu>
                                      <DropdownItem onClick={() => this.nav('self-test')}>Self - Test</DropdownItem>
                                      <DropdownItem onClick={() => this.nav('paid-test')}>Paid - Test</DropdownItem>
                                  </DropdownMenu>
                              </Dropdown>
                              {/* <Link className="headerLink" to="/self-test"><div className="linkHeader">Test</div></Link> */}
                              <Link className="headerLink" to="/blog"><div className="linkHeader">Blog</div></Link>
                              <Link className="headerLink" to="/gift"><div className="linkHeader">Gift Hapiness</div></Link>
                              <div style={{cursor: 'pointer'}} hidden={this.state.loggedIn} onClick={this.showLogin}><FontAwesomeIcon icon={faUser} color="white" style={{marginRight: '10px'}} />Login</div>
                              <Dropdown hidden={!this.state.loggedIn} isOpen={this.state.dropdownOpen} style={{display: 'inline'}} toggle={this.toggleDrop}>
                                  <DropdownToggle style={{background: 'transparent', border: 'none'}}>
                                      <FontAwesomeIcon icon={faUser} color="white" style={{marginRight: '10px'}} />Profile
                                  </DropdownToggle>
                                  <DropdownMenu>
                                      <DropdownItem onClick={() => this.nav('profile')}>My Profile</DropdownItem>
                                      {/* <DropdownItem onClick={() => this.nav('sessions')}>My Sessions</DropdownItem> */}
                                      <DropdownItem onClick={() => this.nav('dashboard')}>Dashboard</DropdownItem>
                                       {/*<DropdownItem onClick={() => this.nav('password')}>Change Password</DropdownItem> */}
                                      <DropdownItem onClick={() => this.nav('logout')}>Logout</DropdownItem>
                                  </DropdownMenu>
                              </Dropdown>
                              {/* <div style={{marginRight: '20px', border: 'solid 2px white', borderRadius: '4px', padding: '5px 15px', background: 'white', color: '#0061AB'}}>Sign up</div> */}
                          </div>
                      </div>
                  </div>
              </Fragment>)
            }
          </div>
        )
    }
}

export default withRouter(AppHeader);
