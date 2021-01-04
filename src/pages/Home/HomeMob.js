import { faChevronRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardImg } from 'reactstrap';
import anonymous from '../../assets/images/anonymous.png';
import blog_1 from '../../assets/images/blog-1.png';
import blog_2 from '../../assets/images/blog-2.png';
import blog_3 from '../../assets/images/blog-3.png';
import blog_4 from '../../assets/images/blog-4.png';
import ModalVideo from 'react-modal-video';
import card_1 from '../../assets/images/card-1.png';
import career from '../../assets/images/career.png';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import chat from '../../assets/images/chat.png';
import confidence from '../../assets/images/confidence.png';
import couple from '../../assets/images/couple.png';
import depression from '../../assets/images/depression.png';
import emphatic from '../../assets/images/emphatic.png';
import card_3 from '../../assets/images/healthy.png';
import home from '../../assets/images/home-banner.png';
import privateImg from '../../assets/images/private.png';
import proof from '../../assets/images/proof.png';
import relation from '../../assets/images/relation.png';
import sensual from '../../assets/images/sensual.png';
import solution from '../../assets/images/solution.png';
import card_2 from '../../assets/images/solutions.png';
import stress from '../../assets/images/stress.png';
import video from '../../assets/images/video.png';
import work from '../../assets/images/work.png';
import Subscribe from '../../components/Subscribe';
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
import api_url  from '../../api_url';

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
    }
}

openModal = () => {
    this.setState({isVideoOpen: true})
}

    render() {
        return (
            <Fragment>
                <ModalVideo channel='youtube' isOpen={this.state.isVideoOpen} videoId='f1Lk-SyaYL8' onClose={() => this.setState({isVideoOpen: false})} />
                <div className="hideOverflow">
                    <div>
                        <img src={home} style={{width: '100%', objectFit: 'cover'}}/>
                        <div style={{position: 'absolute', top: '12%', left: '12%', textAlign: 'left'}}>
                            <div style={{fontFamily: 'Poppins-Bold', fontSize: '16px'}}>Get professional<br/>counselling for Anxiety</div>
                            <div style={{fontSize: '12px'}}>Not only the help you need<br/>But also the help you deserve.</div>
                            <div style={{marginTop: '40px'}}>
                                <Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Let's chat</Button>
                                <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Get Appointment<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                            </div>
                        </div>
                        <div className="mobGrid-2" style={{margin: 'auto', marginTop: '50px', textAlign: 'center', width: '90%', fontSize: '14px'}}>
                            <div style={{margin: '15px'}}>
                                <Card className="equalHeight" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={privateImg} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Private &amp; Confidential</div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div style={{margin: '15px'}}>
                                <Card className="equalHeight" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={anonymous} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Anonymous Discussions</div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div style={{margin: '15px'}}>
                                <Card className="equalHeight" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={solution} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Solution-based counselling services</div>
                                    </CardBody>
                                </Card>
                            </div>
                            <div style={{margin: '15px'}}>
                                <Card className="equalHeight" style={{boxShadow: '0px 20px 50px #0A534426', border: 'none'}}>
                                    <CardBody>
                                        <img src={emphatic} style={{width: '100%'}}/>
                                        <div style={{fontFamily: 'Poppins-Bold', marginTop: '15px'}}>Emphatic mental health experts</div>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div style={{fontFamily: 'Poppins-Bold', fontSize: '28px', textAlign: 'center', marginTop: '60px'}}>How Mindlyf<br/>counsellor helps you</div>
                    <div className="width-90m">
                        <div className="mobGrid-2H">
                            <img src={card_1} alt="Card image cap" />
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 3.5fr'}}>
                                <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>01</div>
                                <div>
                                    <span style={{fontFamily: 'Poppins-Bold', fontSize: '14px'}}>Share Your Problem</span>
                                    <span style={{fontSize: '12px', display: 'block'}}>Chat anonymously with a Mindlyf expert who's here to help you and not judge you.</span>
                                </div>
                            </div>
                        </div>
                        <div className="mobGrid-2H" style={{gridTemplateColumns: '1.8fr 1fr'}}>
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 3.5fr'}}>
                                <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>02</div>
                                <div>
                                    <span style={{fontFamily: 'Poppins-Bold', fontSize: '14px'}}>Find a Solution</span>
                                    <span style={{fontSize: '12px', display: 'block'}}>Open up to your Expert in a space where you get the guidance you need, and your concerns get the attention they deserve.</span>
                                </div>
                            </div>
                            <img src={card_2} alt="Card image cap" />
                        </div>
                        <div className="mobGrid-2H">
                            <img src={card_3} alt="Card image cap" />
                            <div style={{display: 'grid', gridTemplateColumns: '1fr 3.5fr'}}>
                                <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>03</div>
                                <div>
                                    <span style={{fontFamily: 'Poppins-Bold', fontSize: '14px'}}>Live a Healthier Life</span>
                                    <span style={{fontSize: '12px', display: 'block'}}>With 24X7 support from our experts, bid goodbye to your old self and be on your way to becoming a better you.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', background: '#FAFAFA', paddingBottom: '50px'}}>
                        <div>
                            <img src={proof} style={{width: '100%'}}/>
                        </div>
                        <div className="flexCenter direction_column" style={{alignItems: 'flex-start', margin: '20px', marginBottom: "0px"}}>
                            <div style={{marginBottom: '20px'}} onClick={this.openModal}>
                                <span style={{background: '#005191', borderRadius: '100%', padding: '10px 14px', marginRight: '15px'}}><FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/></span><span style={{fontFamily: 'Poppins-Bold'}}>Play Video</span>
                            </div>
                            <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>Proof that anxiety and depression can strike anyone</div>
                            <div style={{fontSize: '14px', marginTop: '15px'}}>She had a great life. She had all the help she could need, still, she got depressed and struggled with it for a long time before she opened up about her mental health. You and I are no different if you are seeking help, Mindlyf mental health clinic is here to help.</div>
                            <Button style={{marginTop: '20px', borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Connect to your Counsellor<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button>
                        </div>
                    </div>
                    <div className="width-90m">
                        <div>
                            <div style={{fontFamily: 'Poppins-Bold', fontSize: '28px', marginTop: '50px'}}>Services you want</div>
                            <div style={{fontSize: '14px', marginTop: '20px'}}>Mindlyf offers productive counselling services for individuals, couples, children, families, and corporates. Our professional counselors help you explore realistic solutions for the disturbing challenges you are going through in your personal or professional life</div>
                        </div>
                        <div className="mobGrid-2">
                            <Link className="linkStyle" to="/services/stress"><div className="m-15">
                                <div style={{backgroundImage: 'url(' + stress + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Dealing with Stress</span>
                                </div>
                            </div></Link>
                            <Link className="linkStyle" to="/services/flourish"><div className="m-15">
                                <div style={{backgroundImage: 'url(' + work + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Flourish at Work</span>
                                </div>
                            </div></Link>
                        </div>
                        <div className="mobGrid-2">
                            <Link className="linkStyle" to="/services/relationship"><div className="m-15">
                                <div style={{backgroundImage: 'url(' + couple + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Relationship Counselling</span>
                                </div>
                            </div></Link>
                            <Link className="linkStyle" to="/services/esteem"><div className="m-15">
                                <div style={{backgroundImage: 'url(' + confidence + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                    <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Boost Self-esteem and Confidence</span>
                                </div>
                            </div></Link>
                        </div>
                        <div style={{textAlign: 'center'}}><Link to="/services"><Button style={{marginTop: '20px', borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Know More<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link></div>
                    </div>
                    <div style={{background: '#FAFAFA', padding: '20px 0px'}}>
                        <div className="width-90m" style={{marginBottom: '30px'}}>
                            <div>
                                <div style={{fontFamily: 'Poppins-Bold', fontSize: '28px', marginTop: '20px'}}>Programs you need</div>
                                <div style={{fontSize: '14px', marginTop: '10px'}}>Create the first line of defense against mental health issues with well-structured Mindlyf development programs that allow you to excel at work, manage your conflicts with people, enrich your relationships, and uncover a better version of you.</div>
                            </div>
                            <div className="mobGrid-2">
                                <Link className="linkStyle" to="/programs/relationship"><div className="m-15">
                                    <div style={{backgroundImage: 'url(' + relation + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                        <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Improve your relationship with your partner</span>
                                    </div>
                                </div></Link>
                                <Link className="linkStyle" to="/programs/sexuality"><div className="m-15">
                                    <div style={{backgroundImage: 'url(' + sensual + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                        <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Learn to embrace your sexuality</span>
                                    </div>
                                </div></Link>
                            </div>
                            <div className="mobGrid-2">
                                <Link className="linkStyle" to="/programs/depression"><div className="m-15">
                                    <div style={{backgroundImage: 'url(' + depression + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                        <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Overcome Depression &amp; Anxiety</span>
                                    </div>
                                </div></Link>
                                <Link className="linkStyle" to="/programs/dream-career"><div className="m-15">
                                    <div style={{backgroundImage: 'url(' + career + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'flex-end', height: '130px'}} className="width-100">
                                        <span style={{color: 'white', zIndex: '99', marginBottom: '14px', textAlign: 'center', fontSize: '8px', width: '40%'}}>Build your Dream Career</span>
                                    </div>
                                </div></Link>
                            </div>
                        </div>
                        <div style={{textAlign: 'center'}}><Link to="/programs"><Button style={{marginBottom: '20px', borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Know More<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link></div>
                    </div>
                    <div style={{background: 'linear-gradient(to bottom, rgba(0,81,145,1) 0%, rgba(0,81,145,1) 63%, rgba(255,255,255,1) 63%, rgba(255,255,255,1) 100%)', padding: '20px', textAlign: 'center'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px', color: 'white', marginBottom: '25px'}}>Choose Your Counsellor</div>
                        <Card className="noBorder" style={{boxShadow: '0px 20px 50px #00000029', textAlign: 'left'}}>
                            <CardBody style={{padding: '15px'}}>
                                <div style={{marginBottom: '20px'}}>
                                    <CarouselProvider
                                        naturalSlideWidth={70}
                                        // naturalSlideHeight={290}
                                        totalSlides={this.state.counsellors.length}
                                        isPlaying={true}
                                        touchEnabled={true}
                                        interval={3000}
                                        dragEnabled={true}
                                        visibleSlides={1}>
                                        <Slider style={{height: "180px"}}>
                                            {
                                                this.state.counsellors.map((org, index) => (
                                                    <Slide key={index} index={index} style={{ paddingBottom: '14%', marginTop: '7px' }}>
                                                        <div style={{ textAlign: 'center' }}>
                                                            <img style={{ height: "100px", width: '100px', marginBottom: "5px", borderRadius: '100px', objectFit: 'cover' }} src={org.img} />
                                                            <div style={{ textAlign: "center", fontSize: "1.3rem", fontFamily: "Roboto-Bold", textTransform: 'capitalize' }}>{org.name}</div>
                                                            <div style={{ textAlign: "center", fontSize: "1.3rem"}}>{org.experience}</div>
                                                        </div>
                                                    </Slide>
                                                ))}
                                        </Slider>
                                    </CarouselProvider>
                                </div>
                                <div style={{marginBottom: '35px'}}>
                                    <div style={{textAlign: 'center'}}>
                                        <img src={chat} style={{width: '50px', marginBottom: '10px'}}/>
                                    </div>
                                    <div>
                                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>Chat with a counsellor</div>
                                        <div style={{fontSize: '14px'}}>Book a counselling session with a Mindlyf therapist to resolve your issues from the comfort of your home or office.</div>
                                        <div style={{textAlign: 'center'}}><Button style={{marginTop: '15px', borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 10px', fontSize: '12px'}}>Start Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{textAlign: 'center'}}>
                                        <img src={video} style={{width: '50px', marginBottom: '10px'}}/>
                                    </div>
                                    <div>
                                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '20px'}}>Voice/Video Calling</div>
                                        <div style={{fontSize: '14px'}}>Talk to a Mindlyf Counsellor to get productive guidance to take your relationship, career, and life to the next level</div>
                                        <div style={{textAlign: 'center'}}><Button style={{marginTop: '15px', borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 10px', fontSize: '12px'}}>Connect Now<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                    <div style={{background: '#F4FBFA', padding: '40px 0px', textAlign: 'center'}}>
                        <div className="width-90m">
                            <div style={{fontFamily: 'Roboto-Bold'}}>OUR BLOGS</div>
                            <div style={{fontFamily: 'Poppins-Bold', fontSize: '30px'}}>Read Our Latest Articles</div>
                            <div className="mobGrid-2" style={{marginTop: '20px', textAlign: 'left'}}>
                                <div className="m-15">
                                    <Card className="shadowCard noBorder equalHeight">
                                        <CardImg top src={blog_1} alt="Card image cap" />
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-care for physician burnout: What does that mean?</div></Dotdotdot>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>They say you learn a lot from your clients. Not in anesthesia, where I frequently feel great empathy for my sick patients and their families. Our connection in the peri-operative environment is too short-lived for this, I believe. But in therapy, where the relationship is both critical and deeper,</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="m-15">
                                    <Card className="shadowCard noBorder">
                                        <CardImg top src={blog_2} alt="Card image cap" />
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Physicians need to acknowledge implicit bias</div></Dotdotdot>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>“Oh, you’re here to take me to my test.” I have heard this too many times to count, and I have come to perfect my response. “No, I am not patient transport, your social worker, or your nurse. I am your doctor.” After a moment of confusion, I usually see a facial expression signaling that the patient is</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="m-15">
                                    <Card className="shadowCard noBorder">
                                        <CardImg top src={blog_3} alt="Card image cap" />
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Are you happy with your decision to go into medicine?</div></Dotdotdot>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>On a rare Sunday morning, I woke and had the time to make breakfast for my kids and their cousin, who'd stayed the night. My nephew said, "Thanks, Aunt Erin, I feel like I never see you." To which my oldest (10)</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="m-15">
                                    <Card className="shadowCard noBorder">
                                        <CardImg top src={blog_4} alt="Card image cap" />
                                        <CardBody>
                                            <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>What to do next if your physician dream job isn’t available</div></Dotdotdot>
                                            <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>Human nature is to hold on tightly to the ideals of perfect. Once we find something that ticks all the boxes, we want it now and with firm conviction. The same holds when seeking that dream job. Competition, scarcity, and desire</div></Dotdotdot>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Home);
