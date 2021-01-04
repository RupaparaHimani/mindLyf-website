import 'rc-tabs/assets/index.css';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { withRouter } from 'react-router-dom';
import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card, CardBody, Col, Row, Label, Input, Button } from 'reactstrap';
import gift from '../../assets/images/gift-back.png';
import gift1000 from '../../assets/images/gift-1000.png';
import gift2500 from '../../assets/images/gift-2500.png';
import gift5000 from '../../assets/images/gift-5000.png';
import programBanner from '../../assets/images/programBanner.png';
import Subscribe from '../../components/Subscribe';
import Swal from 'sweetalert2';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

var validator = require("email-validator");

class Gift extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: gift,
            recEmail: '',
            recNumber: '',
            email: '',
            amount: 0,
            sessions: 0.
    }
}

recEmail = event => {
    this.setState({ recEmail: event.target.value });
}

recNumber = event => {
    this.setState({ recNumber: event.target.value });
}

emailChange = event => {
    this.setState({ email: event.target.value });
}

amount = value => {
    if (value===1000) {
        this.setState({
            img: gift1000,
            amount: 1000,
            sessions: 1,
        })
    }
    else if (value===2500) {
        this.setState({
            img: gift2500,
            amount: 2500,
            sessions: 3,
        })
    }
    else if (value===5000) {
        this.setState({
            img: gift5000,
            amount: 5000,
            sessions: 5,
        })
    }
}

componentDidMount = () => {
    if (localStorage.getItem('userData')!==null) {
        let user = JSON.parse(localStorage.getItem('userData'));
        this.setState({
            email: user.email,
        })
    }
}

submit = (amount,sessions) => {
    if (this.state.email==="" || validator.validate(this.state.email)===false || this.state.recEmail==='' || validator.validate(this.state.recEmail)===false) {
        toast.error("Please enter a valid email address!");
    }
    else if (this.state.recNumber.length!==10) {
        toast.error("Please enter a valid mobile number!");
    }
    else if (this.state.amount===0) {
        toast.error("Please select a gift card amount!");
    }
    else {
        this.props.history.push({
            pathname: '/checkout',
            state: [amount, sessions],
        })
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{paddingTop: '17%'}}>
                        <Card className="shadowCard noBorder flexCenter" style={{width: isMobile||isTablet?'90%':'70%', margin: 'auto'}}>
                            <CardBody style={{width: isMobile||isTablet?'':'90%'}}>
                                <div style={{textAlign: 'center', fontFamily: 'Roboto-Bold', fontSize: isMobile||isTablet?'24px':'30px'}}>Send A Gift of Happiness To Your Loved Ones</div>
                                <div style={{textAlign: 'center', margin: '30px'}}>
                                    <img src={this.state.img} alt="" style={{height: '200px', objectFit: 'contain', borderRadius: '20px'}}/>
                                </div>
                                <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                                    <div className={this.state.img===gift1000?'highlight':'price'} onClick={() => this.amount(1000)}>₹1000</div>
                                    <div className={this.state.img===gift2500?'highlight':'price'} onClick={() => this.amount(2500)}>₹2500</div>
                                    <div className={this.state.img===gift5000?'highlight':'price'} onClick={() => this.amount(5000)}>₹5000</div>
                                </div>
                                <Row style={{marginTop: '30px', marginBottom: '30px'}}>
                                    <Col md={6}>
                                        <Label for="exampleSelect">Recipient's Number:</Label><Input className='inputStyleProfile' placeholder="Enter recipient's number" maxLength={10} onChange={this.recNumber}/>
                                    </Col>
                                    <Col md={6} style={{marginTop: isMobile||isTablet?'30px':''}}>
                                        <Label for="exampleSelect">Recipient's Email:</Label><Input className='inputStyleProfile' placeholder="Enter recipient's email" onChange={this.recEmail}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <Label for="exampleSelect">Your Email:</Label><Input className='inputStyleProfile' value={this.state.email} placeholder="Enter your email" onChange={this.emailChange}/>
                                    </Col>
                                </Row>
                                <div style={{marginTop: '40px', marginBottom: '20px', textAlign: 'center'}}>
                                    <Button onClick={() => this.submit(this.state.amount,this.state.sessions)} className='buttonSolid'>Gift Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                                </div>
                                <div style={{marginBottom: '20px', textAlign: 'left'}}>
                                    <div style={{margin: '15px auto', fontFamily: 'Nunito-Bold'}}>Terms &amp; Conditions</div>
                                    <div style={{fontSize: '14px'}}>
                                        <ol>
                                            <li>The Gift Card cannot be cancelled, refunded or returned.</li>
                                            <li>The Gift Cards can be redeemed online on www.mindlyf.com or against cash payment for Face to Face sessions at our Mindlyf Office Only.</li>
                                            <li>Gift Cards Cannot be used to purchase other Gift Cards through Partial Payment</li>
                                            <li>If the Order exceeds the Gift Card amount, the balance must be paid by Credit/Debit Card, Netbanking, PayTm Wallet, Bank Transfer or By Cash in our Mindlyf Office. </li>
                                            <li>Gift Card is Valid for 6 months from the date of Issue, although the subscription/Session balance transferred into the account by Gift card has no time validity.</li>
                                            <li>Mindlyf reserves the right to cancel the gift card if the same has been found to be purchased through fraudulent means. In such case, funds will be credited back to the same source from where these were received.</li>
                                            <li>Gift cards cannot be resold.</li>
                                        </ol>
                                    </div>
                                </div>
                            </CardBody>    
                        </Card>
                    </div>
                    <div className={isMobile||isTablet?"":"width-70m"} style={{textAlign: 'left'}}>
                    <div style={{margin: '50px 24px', textAlign: 'left'}}>
                        {/* <div><Link className="linkStyle" to="/services"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px', marginTop: '10px'}}>See More<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link></div> */}
                        
                    </div>
                    </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Gift);