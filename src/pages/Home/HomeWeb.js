import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import moment from 'moment';
import ModalVideo from 'react-modal-video';
import { Link, withRouter } from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Typist from 'react-typist';
import { Button, Card, CardBody, CardImg, Col, Modal, ModalBody, Row } from 'reactstrap';
import anonymous from '../../assets/images/anonymous.png';
import blog_1 from '../../assets/images/blog-1.png';
import blog_2 from '../../assets/images/blog-2.png';
import blog_3 from '../../assets/images/blog-3.png';
import blog_4 from '../../assets/images/blog-4.png';
import card_1 from '../../assets/images/card-1.png';
import career from '../../assets/images/career.png';
import chat from '../../assets/images/chat.png';
import confidence from '../../assets/images/confidence.png';
import con1 from '../../assets/images/consultant/ASHA_DHANDHALIYA.jpg';
import con2 from '../../assets/images/consultant/ASHMI_SHAH.jpg';
import con3 from '../../assets/images/consultant/DELARA_SANJANA.jpg';
import con4 from '../../assets/images/consultant/DHWANI_MEHTA.png';
import con5 from '../../assets/images/consultant/DR_ADITA.jpg';
import con6 from '../../assets/images/consultant/EKTA_DHARIA.jpg';
import con7 from '../../assets/images/consultant/HARSHIKA.jpg';
import con8 from '../../assets/images/consultant/HIRAL_KHIMANI.jpg';
import con9 from '../../assets/images/consultant/JAINI_SAVLA.jpg';
import con10 from '../../assets/images/consultant/KAJAL_DAVE.jpg';
import con11 from '../../assets/images/consultant/NISTHA_SINGH.jpg';
import con12 from '../../assets/images/consultant/PARIDHI_PANSARI.jpg';
import con13 from '../../assets/images/consultant/RAHAT_LOOKMANJI.jpg';
import con14 from '../../assets/images/consultant/SAJEDA_ANSARI.jpg';
import con15 from '../../assets/images/consultant/SAKSHI_PAL.jpg';
import con16 from '../../assets/images/consultant/SANHITA_SAWANT.jpg';
import con17 from '../../assets/images/consultant/SANJANA_RAWAL.jpg';
import con18 from '../../assets/images/consultant/SHIVANGI_GUPTA.jpg';
import con19 from '../../assets/images/consultant/SURBHI_JOSHI.png';
import con20 from '../../assets/images/consultant/TANIA_GHOSH.jpg';
import con21 from '../../assets/images/consultant/TANUSHRI_PATANGE.jpg';
import con22 from '../../assets/images/consultant/TASNEEM.jpg';
import con23 from '../../assets/images/consultant/TRISHNA_ALMEDIA.jpg';
import couple from '../../assets/images/couple.png';
import depression from '../../assets/images/depression.png';
import emphatic from '../../assets/images/emphatic.png';
import header1 from '../../assets/images/header-1.png';
import header2 from '../../assets/images/header-2.png';
import headerBack from '../../assets/images/header-back.jpg';
import card_3 from '../../assets/images/healthy.png';
import overlay from '../../assets/images/overlay.png';
import privateImg from '../../assets/images/private.png';
import proof from '../../assets/images/proof.png';
import relation from '../../assets/images/relation.png';
import sensual from '../../assets/images/sensual.png';
import solution from '../../assets/images/solution.png';
import card_2 from '../../assets/images/solutions.png';
import stress from '../../assets/images/stress.png';
import video from '../../assets/images/video.png';
import work from '../../assets/images/work.png';
import Slots from '../../components/Slots';
import Subscribe from '../../components/Subscribe';
import api_url  from '../../api_url';

let cursor = {
    show: false,
    blink: true,
    element: '|',
    hideWhenDone: true,
    hideWhenDoneDelay: 1000,
  };

  const fadeImages = [
    header1,
    header2,
  ];

  const fadeProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: false
  }

class Home extends Component {

    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.state = {
            isVideoOpen: false,
            counsellors: [
                {img: con1, name: 'ASHA DHANDHALIYA', experience: '7+ years'},
                {img: con2, name: 'ASHMI SHAH', experience: '8+ years'},
                {img: con3, name: 'DELARA SANJANA', experience: '6+ years'},
                {img: con4, name: 'DHWANI MEHTA', experience: '7+ years'},
                {img: con5, name: 'DR ADITA AGARWAL', experience: '8+ years'},
                {img: con6, name: 'EKTA DHARIA', experience: '11+ years'},
                {img: con7, name: 'HARSHIKA', experience: '5+ years'},
                {img: con8, name: 'HIRAL KHIMANI', experience: '15+ years'},
                {img: con9, name: 'JAINI SAVLA', experience: '7+ years'},
                {img: con10, name: 'KAJAL DAVE', experience: '7+ years'},
                {img: con11, name: 'NISTHA SINGH', experience: '7+ years'},
                {img: con12, name: 'PARIDHI PANSARI', experience: '6+ years'},
                {img: con13, name: 'RAHAT LOOKMANJI', experience: '5+ years'},
                {img: con14, name: 'SAJEDA ANSARI', experience: '8+ years'},
                {img: con15, name: 'SAKSHI PAL', experience: '8+ years'},
                {img: con16, name: 'SANHITA SAWANT', experience: '8+ years'},
                {img: con17, name: 'SANJANA RAWAL', experience: '5+ years'},
                {img: con18, name: 'SHIVANGI GUPTA', experience: '6+ years'},
                {img: con19, name: 'SURBHI JOSHI', experience: '3.5+ years'},
                {img: con20, name: 'TANIA GHOSH', experience: '3+ years'},
                {img: con21, name: 'TANUSHRI PATANGE', experience: '3.5+ years'},
                {img: con22, name: 'TASNEEM HUSSAIN', experience: '2+ years'},
                {img: con23, name: 'TRISHNA ALMEDIA', experience: '3+ years'},
            ],
            date: null,
            time: null,
            timeSelected: null,
            dateSelected: null,
            showSlotBook: false,
            dates: [],
    }
}

componentDidMount = () => {
    var today = moment();
    for (var i=0; i<13; i++) {
        this.state.dates.push(moment(today).add(i, 'days').format('MM-DD-YYYY'));
    }
    this.setState({
        state: this.state,
    })
}


selectSlot = () => {
    this.setState({
        showSlotBook: true,
    })
}

openModal = () => {
    this.setState({isVideoOpen: true})
}

    render() {
        return (
            <Fragment>
                <Modal isOpen={this.state.showSlotBook} centered={true} size='lg' toggle={this.hideAll}>
                    <ModalBody>
                        <div style={{textAlign: 'center', padding: '15px'}}>
                            <div style={{fontFamily: 'Nunito-SemiBold', fontSize: '26px'}}>Select your slot</div>
                            <div>
                                <Tabs
                                defaultActiveKey="0"
                                renderTabBar={() => <ScrollableInkTabBar/>}
                                renderTabContent={() => <TabContent/>}
                                >
                                    {
                                        this.state.dates.map((date, index) => (
                                            <TabPane tab={date} key={index}>
                                                <Slots/>
                                            </TabPane>
                                        ))
                                    }
                                </Tabs>
                            </div>
                            <div style={{textAlign: 'center', margin: '25px auto'}}>
                                <Button className='buttonSolid' onClick={this.service}>Book Now</Button>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
                <ModalVideo channel='youtube' isOpen={this.state.isVideoOpen} videoId='f1Lk-SyaYL8' onClose={() => this.setState({isVideoOpen: false})} />
                <div>
                    <img src={headerBack} style={{width: '100%', objectFit: 'cover'}}/>
                    <div className="homeSlider">
                        <div className="slide-container">
                            <Fade {...fadeProperties}>
                                <div className="each-fade">
                                <div className="image-container">
                                    <img src={fadeImages[0]} className="sliderHeight"/>
                                </div>
                                </div>
                                <div className="each-fade">
                                <div className="image-container">
                                    <img src={fadeImages[1]} className="sliderHeight"/>
                                </div>
                                </div>
                            </Fade>
                        </div>
                    </div>

                    <div style={{position: 'absolute', top: '40%', left: '20%', textAlign: 'left', width: '64%', zIndex: '99'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '40px'}}>Get professional<br/>counselling for <span style={{display: 'inline-flex'}}><Typist startDelay={1000} avgTypingDelay={200} cursor={cursor}>Anxiety<Typist.Delay ms={1000} /><Typist.Backspace count={7} delay={200} />Depression</Typist></span></div>
                        <div style={{fontSize: '20px'}}>Not only the help you need<br/>But also the help you deserve.</div>
                        <div style={{marginTop: '40px'}}>
                            <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Let's chat</Button>
                              <Link to="/service-fee"><Button className='buttonSolid' onClick={this.openSlot}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                        </div>
                        <Row style={{marginTop: '200px', textAlign: 'center'}}>
                            <Col md={3}>
                                <Card className="moveUp" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={privateImg} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Private &amp; Confidential</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} style={{marginTop: '35px'}}>
                                <Card className="moveUp" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={anonymous} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Anonymous Discussions</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="moveUp" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={solution} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Solution-based counselling services</div>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3} style={{marginTop: '35px'}}>
                                <Card className="moveUp" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={emphatic} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Emphatic mental health experts</div>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={{fontFamily: 'Poppins-Bold', fontSize: '28px', textAlign: 'center', marginTop: '430px', marginBottom: '30px'}}>How Mindlyf<br/>counsellor helps you</div>
                <Row className="width-70m">
                    <Col md={4}>
                        <Card className="shadowCard noBorder equalHeight moveUp">
                            <CardImg className="hoverImg" top src={card_1} alt="Card image cap" />
                            <CardBody>
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>01</div>
                                    <div>
                                        <span style={{fontFamily: 'Poppins-Bold', fontSize: '15px'}}>Share Your Problem</span>
                                        <span style={{fontSize: '14px', display: 'block'}}>Chat anonymously with a Mindlyf expert who's here to help you and not judge you.</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadowCard noBorder moveUp">
                            <CardImg top src={card_2} alt="Card image cap" />
                            <CardBody>
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>02</div>
                                    <div>
                                        <span style={{fontFamily: 'Poppins-Bold', fontSize: '15px'}}>Find a Solution</span>
                                        <span style={{fontSize: '14px', display: 'block'}}>Open up to your Expert in a space where you get the guidance you need, and your concerns get the attention they deserve.</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="shadowCard noBorder moveUp">
                            <CardImg top src={card_3} alt="Card image cap" />
                            <CardBody>
                                <div style={{display: 'grid', gridTemplateColumns: '1fr 4fr'}}>
                                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>03</div>
                                    <div>
                                        <span style={{fontFamily: 'Poppins-Bold', fontSize: '15px'}}>Live a Healthier Life</span>
                                        <span style={{fontSize: '14px', display: 'block'}}>With 24X7 support from our experts, bid goodbye to your old self and be on your way to becoming a better you.</span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row style={{width: '100%', background: '#FAFAFA', marginBottom: '50px'}}>
                    <Col md={6}>
                        <img src={proof} style={{width: '100%'}}/>
                    </Col>
                    <Col md={6} className="flexCenter direction_column" style={{alignItems: 'flex-start'}}>
                        <div style={{marginBottom: '20px'}} onClick={this.openModal}>
                            <span style={{background: '#005191', borderRadius: '100%', padding: '8px 12px', marginRight: '15px'}}><FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/></span><span style={{fontFamily: 'Poppins-Bold'}}>Play Video</span>
                        </div>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px'}}>Proof that anxiety and depression can strike anyone</div>
                        <div style={{fontSize: '18px', marginTop: '20px'}}>She had a great life. She had all the help she could need, still, she got depressed and struggled with it for a long time before she opened up about her mental health. You and I are no different if you are seeking help, Mindlyf is here to help.</div>
                        <Button className='buttonSolid' style={{marginTop: '20px'}}>Connect to your Counsellor<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                    </Col>
                </Row>
                <Row className="width-70m">
                    <Col md={4}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px', marginTop: '50px'}}>Services you want</div>
                        <div style={{fontSize: '16px', marginTop: '20px'}}>Mindlyf offers productive counselling services for individuals, couples, children, families, and corporates. Our professional counselors help you explore realistic solutions for the disturbing challenges you are going through in your personal or professional life</div>
                        <div style={{marginTop: '40px'}}>
                            <Link className="linkStyle" to="/services"><Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Know More</Button></Link>
                            <Link className="linkStyle" to="/service-fee"><Button className='buttonSolid'>Start Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                        </div>
                    </Col>
                    <Col md={4}>
                        <Link className="linkStyle" to="/services/stress"><div>
                            <img src={overlay} className="width-100 height-220" style={{position: 'absolute', top: 0, left: 0}}/>
                            <div style={{backgroundImage: 'url(' + stress + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Dealing with Stress</span>
                            </div>
                        </div></Link>
                        <Link className="linkStyle" to="/services/flourish"><div style={{marginTop: '30px'}}>
                            <img src={overlay} className="width-100 height-220" style={{position: 'absolute', bottom: 0, left: 0}}/>
                            <div style={{backgroundImage: 'url(' + work + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Flourish at Work</span>
                            </div>
                        </div></Link>
                    </Col>
                    <Col md={4}>
                        <Link className="linkStyle" to="/services/relationship"><div>
                            <img src={overlay} className="width-100 height-220" style={{position: 'absolute', top: 0, left: 0}}/>
                            <div style={{backgroundImage: 'url(' + couple + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Relationship Counselling</span>
                            </div>
                        </div></Link>
                        <Link className="linkStyle" to="/services/esteem"><div style={{marginTop: '30px'}}>
                            <img src={overlay} className="width-100 height-220" style={{position: 'absolute', bottom: 0, left: 0}}/>
                            <div style={{backgroundImage: 'url(' + confidence + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Boost Self-Esteem and Confidence</span>
                            </div>
                        </div></Link>
                    </Col>
                </Row>
                <div style={{background: '#FAFAFA', padding: '50px 0px'}}>
                    <Row className="width-70m" style={{marginBottom: '50px'}}>
                        <Col md={4}>
                            <Link className="linkStyle" to="/programs/relationship"><div>
                                <img src={overlay} className="width-100 height-220" style={{position: 'absolute', top: 0, left: 0}}/>
                                <div style={{backgroundImage: 'url(' + relation + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Improve your relationship with your partner</span>
                                </div>
                            </div></Link>
                            <Link className="linkStyle" to="/programs/sexuality"><div style={{marginTop: '30px'}}>
                                <img src={overlay} className="width-100 height-220" style={{position: 'absolute', bottom: 0, left: 0}}/>
                                <div style={{backgroundImage: 'url(' + sensual + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Learn to embrace your sexuality</span>
                                </div>
                            </div></Link>
                        </Col>
                        <Col md={4}>
                            <Link className="linkStyle" to="/programs/depression"><div>
                                <img src={overlay} className="width-100 height-220" style={{position: 'absolute', top: 0, left: 0}}/>
                                <div style={{backgroundImage: 'url(' + depression + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Overcome Depression &amp; Anxiety</span>
                                </div>
                            </div></Link>
                            <Link className="linkStyle" to="/programs/dream-career"><div style={{marginTop: '30px'}}>
                                <img src={overlay} className="width-100 height-220" style={{position: 'absolute', bottom: 0, left: 0}}/>
                                <div style={{backgroundImage: 'url(' + career + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end'}} className="width-100 height-220">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '12px', width: '40%'}}>Build your Dream Career</span>
                                </div>
                            </div></Link>
                        </Col>
                        <Col md={4}>
                            <div style={{fontFamily: 'Nunito-Bold', fontSize: '28px', marginTop: '50px'}}>Programs you need</div>
                            <div style={{fontSize: '16px', marginTop: '20px'}}>Create the first line of defense against mental health issues with well-structured Mindlyf development programs that allow you to excel at work, manage your conflicts with people, enrich your relationships, and uncover a better version of you.</div>
                            <div style={{marginTop: '40px'}}>
                                <Link className="linkStyle" to="/programs"><Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Know More</Button></Link>
                                <Link className="linkStyle" to="/service-fee"><Button className='buttonSolid'>Start Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={{background: 'linear-gradient(to bottom, rgba(0,81,145,1) 0%, rgba(0,81,145,1) 63%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%)', padding: '40px', textAlign: 'center'}}>
                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '44px', color: 'white'}}>Choose Your Counsellor</div>
                    <div className="width-80m" style={{paddingBottom: '12px'}}>
                        <CarouselProvider
                            naturalSlideWidth={70}
                            totalSlides={this.state.counsellors.length}
                            isPlaying={true}
                            touchEnabled={true}
                            interval={3000}
                            dragEnabled={true}
                            visibleSlides={3}>
                            <Slider style={{height: "175px"}}>
                                {
                                    this.state.counsellors.map((org, index) => (
                                        <Slide key={index} index={index} style={{ paddingBottom: '13%', marginTop: '7px' }}>
                                            <div style={{ textAlign: 'center' }}>
                                                <img style={{ height: "100px", width: '100px', marginBottom: "5px", borderRadius: '100px', objectFit: 'cover' }} src={org.img} />
                                                <div style={{ textAlign: "center", fontSize: "1.3rem", fontFamily: "Roboto-Bold", textTransform: 'capitalize', color: 'white' }}>{org.name}</div>
                                                <div style={{ textAlign: "center", fontSize: "1.3rem", color: 'white'}}>{org.experience}</div>
                                            </div>
                                        </Slide>
                                    ))}
                            </Slider>
                        </CarouselProvider>
                    </div>
                    <Card className="width-70m noBorder" style={{boxShadow: '0px 20px 50px #00000029', textAlign: 'left'}}>
                        <div style={{textAlign: 'center'}}><Link className="linkStyle" to="/consultant"><Button className='buttonSolid' style={{marginTop: '-28px'}}>Know More<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link></div>
                        <CardBody style={{padding: '55px'}}>
                            <Row>
                                <Col md={6} style={{borderRight: '3px solid #d3d3d3'}}>
                                    <Row>
                                        <Col md={3} style={{textAlign: 'right'}}>
                                            <img src={chat} style={{width: '50%'}}/>
                                        </Col>
                                        <Col md={9}>
                                            <div style={{fontFamily: 'Nunito-Bold', fontSize: '22px'}}>Chat to a counsellor</div>
                                            <div style={{fontSize: '14px', marginBottom: '15px'}}>Book a counselling session with a Mindlyf therapist to resolve your issues from the comfort of your home or office.</div>
                                            <Link className="linkStyle" to="/consultant"><Button className='buttonSolid'>Start Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6}>
                                    <Row>
                                        <Col md={3} style={{textAlign: 'right'}}>
                                            <img src={video} style={{width: '50%'}}/>
                                        </Col>
                                        <Col md={9}>
                                            <div style={{fontFamily: 'Nunito-Bold', fontSize: '22px'}}>Voice/Video Calling</div>
                                            <div style={{fontSize: '14px', marginBottom: '15px'}}>Talk to a Mindlyf Counsellor to get productive guidance to take your relationship, career, and life to the next level</div>
                                            <Button className='buttonSolid'>Connect Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
                <div style={{background: '#F4FBFA', padding: '50px 0px', textAlign: 'center'}}>
                    <div className="width-70m">
                        <div style={{fontFamily: 'Roboto-Bold'}}>OUR BLOGS</div>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '44px'}}>Read Our Latest Articles</div>
                        <Row style={{marginTop: '50px', textAlign: 'left'}}>
                            <Col md={3}>
                                <Card className="shadowCard noBorder equalHeight moveUp">
                                    <CardImg top src={blog_1} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-care for physician burnout: What does that mean?</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', paddingBottom: '10px', borderBottom: 'solid 2px #d3d3d3', marginBottom: '10px'}}>They say you learn a lot from your clients. Not in anesthesia, where I frequently feel great empathy for my sick patients and their families. Our connection in the peri-operative environment is too short-lived for this, I believe. But in therapy, where the relationship is both critical and deeper,</div></Dotdotdot>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="shadowCard noBorder moveUp">
                                    <CardImg top src={blog_2} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Physicians need to acknowledge implicit bias</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', paddingBottom: '10px', borderBottom: 'solid 2px #d3d3d3', marginBottom: '10px'}}>“Oh, you’re here to take me to my test.” I have heard this too many times to count, and I have come to perfect my response. “No, I am not patient transport, your social worker, or your nurse. I am your doctor.” After a moment of confusion, I usually see a facial expression signaling that the patient is</div></Dotdotdot>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="shadowCard noBorder moveUp">
                                    <CardImg top src={blog_3} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Are you happy with your decision to go into medicine?</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', paddingBottom: '10px', borderBottom: 'solid 2px #d3d3d3', marginBottom: '10px'}}>On a rare Sunday morning, I woke and had the time to make breakfast for my kids and their cousin, who'd stayed the night. My nephew said, "Thanks, Aunt Erin, I feel like I never see you." To which my oldest (10)</div></Dotdotdot>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col md={3}>
                                <Card className="shadowCard noBorder moveUp">
                                    <CardImg top src={blog_4} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>What to do next if your physician dream job isn’t available</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', paddingBottom: '10px', borderBottom: 'solid 2px #d3d3d3', marginBottom: '10px'}}>Human nature is to hold on tightly to the ideals of perfect. Once we find something that ticks all the boxes, we want it now and with firm conviction. The same holds when seeking that dream job. Competition, scarcity, and desire</div></Dotdotdot>
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

export default withRouter(Home);
