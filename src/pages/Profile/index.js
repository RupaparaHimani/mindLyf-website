import 'rc-tabs/assets/index.css';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { withRouter, Link } from 'react-router-dom';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardBody, Col, Row, Label, Input, Button } from 'reactstrap';
import profile from '../../assets/images/profile.png';
import programBanner from '../../assets/images/programBanner.png';
import Subscribe from '../../components/Subscribe';
import Swal from 'sweetalert2';
import { Tabs, Select, Space } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FileSaver from 'file-saver';
import api_url  from '../../api_url';
var validator = require("email-validator");

const { TabPane } = Tabs;
const { Option } = Select;

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: '',
            tabPosition: (isMobile||isTablet)?'top':'left',
            packages: [],
            programs: [],
            services:[],
            fname: '',
            lname: '',
            number: '',
            email: '',
            password: '',
            confirm: '',
            amount: 0,
            purpose: '',
            pdf_blob: null,
    }
}

componentDidMount = () => {
    if (localStorage.getItem('userData')!==null) {
        let user = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            id: user.id,
            fname: user.first_name,
            lname: user.last_name,
            number: user.number,
            email: user.email,
            loggedIn: true,
        })
        this.getPackage();
        this.getPrograms();
        this.getServices();
        // this.getpdf()

    }
    else {
        window.location.assign('/');
    }
}

getPackage = () => {
    let self = this;
    let user = JSON.parse(localStorage.getItem('userData'));
    axios.post(api_url+'getPackage', {id: user.id})
        .then(function (response) {
            console.log(response)
              if(response.data.users != undefined){
              self.setState({
                  packages: response.data.users,
              })
              console.log("packages", self.state.packages);

            }
        })
}
getPrograms = () => {
  let self = this;
  axios.get(api_url+'getprograms')
      .then(function (response) {
          console.log(response)
            if(response.data.data != undefined){
            self.setState({
                programs: response.data.data,
            })
          }
      })
}

get_program_id = (condition) => {
  let key_id;
  console.log(this.state.programs, condition);
  this.state.programs.filter((e) => e.id === condition).map((key, i) => (
    key_id = key.title
  ))
  return key_id
};

getServices = () => {
  let self = this;
  axios.get(api_url+'getservices')
      .then(function (response) {
          console.log(response)
            if(response.data.data != undefined){
            self.setState({
                services: response.data.data,
            })
          }
      })
}

get_service_id = (condition) => {
  let key_id;
  this.state.programs.filter((e) => e.id === condition).map((key, i) => (
    key_id = key.title
  ))
  return key_id
};

forURL = (value) => {
  let self = this, joinpath = '';
  if (value == "Depression Counselling"){
    joinpath = "/services/stress"
  }else if (value == "Relationship Counselling"){
    joinpath = "/services/relationship"
  }else if (value == "Flourish at Work"){
    joinpath = "/services/flourish"
  }else if (value == "Boost Self Esteem and Confidence"){
    joinpath = "/services/esteem"
  }else if (value == "Parenting Done Right"){
    joinpath = "/services/parenting"
  }else if (value == "Special Children"){
    joinpath = "/services/special-children"
  }else if (value == "Mental Health Disorders"){
    joinpath = "/services/mental-health"
  }else if (value == "Therapies"){
    joinpath = "/services/therapies"
  }else if (value == "Anger Management"){
    joinpath = "/programs/anger-management/1"
  }else if (value == "Overcome Depression and anxiety"){
    joinpath = "/programs/depression/2"
  }else if (value == "Self-Motivation"){
    joinpath = "/programs/motivation/3"
  }else if (value == "Overcome Loneliness"){
    joinpath = "/programs/loneliness/4"
  }else if (value == "Leave Your Procrastination"){
    joinpath = "/programs/procrastination/5"
  }else if (value == "Develop Self-Esteem and Confidence"){
    joinpath = "/programs/self-esteem/6"
  }else if (value == "Stress Management"){
    joinpath = "/programs/stress/7"
  }else if (value == "Resolve Your Family Issues"){
    joinpath = "/programs/family/8"
  }else if (value == "Improve Your Relationship With your…"){
    joinpath = "/programs/relationship/9"
  }else if (value == "Improve Your Marriage"){
    joinpath = "/programs/marriage/10"
  }else if (value == "Manage Pre-Wedding Jitters"){
    joinpath = "/programs/marriage-jitters/11"
  }else if (value == "Build Your Dream Career"){
    joinpath = "/programs/dream-career/12"
  }else if (value == "Easy Career Transition"){
    joinpath = "/programs/career-transition/13"
  }else if (value == "Counselling for Entrepreneurs"){
    joinpath = "/programs/entrepreneurs/14"
  }else if (value == "Learn to Embrace Your Sexuality"){
    joinpath = "/programs/sexuality/15"
  }else if (value == "Sex Education"){
    joinpath = "/programs/sex-education/16"
  }else if (value == "Identify Sexual Disorders"){
    joinpath = "/programs/sexual-disorder/17"
  }else if (value == "Therapy for Sexual Abuse "){
    joinpath = "/programs/sexual-abuse/18"
  }else if (value == "Counselling for LGBTQIA Individual"){
    joinpath = "/programs/lgbtq/19"
  }
  return joinpath
}

getpdf = () => {
  let self = this;
  let user = JSON.parse(localStorage.getItem('userData'));
  axios.get(api_url+'get_pdf/'+user.id,{ ContentType: 'application/pdf'})
      .then(function (response) {
            if(response.data.users != undefined){
            self.setState({
                pdf_blob: response.data.users,
            })
            var blob = new Blob([response.data.users.pdf_blob], {type: 'application/pdf'});
            FileSaver.saveAs(blob, "test_result.pdf");
          }
      })
}

clear = () => {

}

emailChange = event => {
    this.setState({ email: event.target.value });
}

fname = event => {
    this.setState({ fname: event.target.value });
}

lname = event => {
    this.setState({ lname: event.target.value });
}

password = event => {
    this.setState({ password: event.target.value });
}

confirm = event => {
    this.setState({ confirm: event.target.value });
}

numberChange = event => {
    this.setState({ number: event.target.value });
}

changePassword = () => {
  console.log("--");
     if (this.state.password!==this.state.confirm) {
      toast.error("Both passwords should match!");
    }else{
      axios.post(api_url+'change_password', {id: this.state.id, password: this.state.password})
        .then(function (response) {
          console.log("response");
            Swal.fire({
                icon: 'success',
                text: 'Your password has been updated successfully!',
                showConfirmButton: true,
                timer: 3500
            });
        })
      }
}

update = () => {
    axios.post(api_url+'update', {id: this.state.id, email: this.state.email, fname: this.state.fname, lname: this.state.lname, number: this.state.number})
        .then(function (response) {
            Swal.fire({
                icon: 'success',
                type: 'success',
                text: 'Your profile has been updated successfully!',
                showConfirmButton: true,
                timer: 3500
            });
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
        })
}

    render() {
        return (
            <Fragment>
                <div style={{paddingTop: '17%', width: '80%', margin: 'auto'}}>
                    <Row>
                        <Col>
                            <Tabs tabPosition={this.state.tabPosition}>
                                <TabPane tab="Your Details" key="1">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Your Details</div>
                                    <Row>
                                        <Col md={6}>
                                            <Label>First Name</Label><Input className='inputStyleProfile' value={this.state.fname} placeholder="Enter your first name" onChange={this.fname}/>
                                        </Col>
                                        <Col md={6} style={{marginTop: isMobile||isTablet?'10px':'0px'}}>
                                            <Label>Last Name</Label><Input className='inputStyleProfile' value={this.state.lname} placeholder="Enter your last name" onChange={this.lname}/>
                                        </Col>
                                    </Row>
                                    <Row style={{marginTop: '20px'}}>
                                        <Col md={6}>
                                            <Label>Email Address</Label><Input className='inputStyleProfile' value={this.state.email} placeholder="Enter your email address" onChange={this.emailChange}/>
                                        </Col>
                                        <Col md={6} style={{marginTop: isMobile||isTablet?'10px':'0px'}}>
                                            <Label>Mobile Number</Label><Input className='inputStyleProfile' value={this.state.number} placeholder="Enter your mobile number" onChange={this.numberChange}/>
                                        </Col>
                                    </Row>
                                    <div style={{marginTop: '20px', paddingBottom: '30px'}}>
                                        <Button onClick={this.update} className='buttonSolid'>Update Details<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="Packages" key="2">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Therapy Packages</div>
                                    <Row style={{marginBottom: '50px'}}>

                                    {this.state.packages.length===0 ?
                                        <div style={{margin: '20px auto', color: 'grey'}}>You have no therapy package available right now.</div> :
                                        this.state.packages.map((p,i) =>(
                                          <Link className="linkStyle" style={{color: 'rgba(0, 0, 0, 0.65)'}} to={p.serviceID > 0 ? this.forURL(this.get_service_id(p.serviceID))  : this.forURL(this.get_program_id(p.programID))}>
                                            <Col md={4} key={p.id}>
                                                <Card style={{width: 'max-content', marginBottom: '20px'}}>
                                                    <CardBody style={{padding: '1.10rem'}} >
                                                        <div>You have booked an appointment for</div>
                                                        <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>description: </span>{p.serviceID > 0 ? this.get_service_id(p.serviceID)  : this.get_program_id(p.programID)}</div>
                                                        <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>Sessions: </span>{p.purpose}</div>
                                                        <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>Type: </span>{p.serviceID > 0 ? "Service"  : "Program"}</div>
                                                        <div><span style={{fontWeight: '600'}}>Amount: </span>{p.amount}</div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                          </Link>
                                        ))
                                      }
                                      </Row>

                                </TabPane>
                                <TabPane tab="Password" key="3">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Change Password</div>
                                    <Row>
                                        <Col md={6}>
                                            <Label>New Password</Label><Input className='inputStyleProfile' placeholder="Enter your new password" onChange={this.password}/>
                                        </Col>
                                        <Col md={6} style={{marginTop: isMobile||isTablet?'10px':'0px'}}>
                                            <Label>Confirm Password</Label><Input className='inputStyleProfile' placeholder="Re-enter your password" onChange={this.confirm}/>
                                        </Col>
                                    </Row>
                                    <div style={{marginTop: '20px', paddingBottom: '30px'}}>
                                        <Button className='buttonSolid' onClick={this.changePassword} >Change Password<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                                    </div>
                                </TabPane>
                                <TabPane tab="Help &amp; Support" key="4">
                                    <div style={{marginBottom: '20px', fontSize: '24px', fontFamily: 'Nunito-Bold'}}>Help &amp; Support</div>
                                    <Link className="linkStyle" to="/faq"><div>FAQ<span><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '12px', marginLeft: '10px'}}/></span></div></Link>
                                    <hr/>
                                    <Link className="linkStyle" to="/programs"><div>Therapies<span><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '12px', marginLeft: '10px'}}/></span></div></Link>
                                    <hr/>
                                    <Link className="linkStyle" to="/contact"><div>Contact Us<span><FontAwesomeIcon icon={faChevronRight} style={{fontSize: '12px', marginLeft: '10px'}}/></span></div></Link>
                                </TabPane>
                            </Tabs>
                        </Col>
                    </Row>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Profile);
