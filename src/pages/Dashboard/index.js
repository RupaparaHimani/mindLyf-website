import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'rc-tabs/assets/index.css';
import how1 from '../../assets/images/how1.png';
import how2 from '../../assets/images/how2.png';
import how3 from '../../assets/images/how3.png';
import how4 from '../../assets/images/how4.png';

//Programs
import careerTrans from '../../assets/images/career-trans.png';
import dreamCareer from '../../assets/images/dream-career.png';
import entrepreneur from '../../assets/images/entrepreneur.png';
import esteem from '../../assets/images/esteem.png';
import family from '../../assets/images/family.png';
import lgbtq from '../../assets/images/lgbtq.png';
import loneliness from '../../assets/images/loneliness.png';
import marriageJitter from '../../assets/images/marriage-jitter.png';
import marriage from '../../assets/images/marriage.png';
import procrastination from '../../assets/images/procrastination.png';
import relationship from '../../assets/images/relationship.png';
import selfMotivation from '../../assets/images/selfMotivation.png';
import sexAbuse from '../../assets/images/sex-abuse.png';
import sexDis from '../../assets/images/sex-dis.png';
import sexEd from '../../assets/images/sex-ed.png';
import sexuality from '../../assets/images/sexuality.png';
import stressMgmt from '../../assets/images/stress-mgmt.png';
import axios from 'axios';
import config  from '../../api_url';
//Services
import boostEsteem from '../../assets/images/boostEsteem.png';
import parenting from '../../assets/images/parenting.png';
import special from '../../assets/images/special.png';
import stressCounselling from '../../assets/images/stress-counselling.png';
import therapies from '../../assets/images/therapies.png';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import { isMobile, isTablet } from 'react-device-detect';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Col, Row, Modal, ModalBody,ModalHeader } from 'reactstrap';
import angry from '../../assets/images/angry.png';
import blog_1 from '../../assets/images/blog-1.png';
import blog_2 from '../../assets/images/blog-2.png';
import anger from '../../assets/images/anger.png';
import anxiety from '../../assets/images/anxiety.png';
import blog_3 from '../../assets/images/blog-3.png';
import blog_4 from '../../assets/images/blog-4.png';
import coupleCounselling from '../../assets/images/couple-counselling.png';
import depressed from '../../assets/images/depressed.png';
import flourish from '../../assets/images/flourish-at-work.png';
import quote from '../../assets/images/quotes.png';
import mental from '../../assets/images/mental.png';
import happy from '../../assets/images/happy.png';
import programBanner from '../../assets/images/programBanner.png';
import sad from '../../assets/images/sad.png';
import smile from '../../assets/images/smile.png';
import gift from '../../assets/images/box.png';
import banner from '../../assets/images/banner-subs.png';
import customer from '../../assets/images/customer-service.png';
import chat from '../../assets/images/No_message.png';
import Subscribe from '../../components/Subscribe';

let textArray = [
    'The Way Get Started Is To Quit Talking And Begin Doing',
    'The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty',
    'Don’t Let Yesterday Take Up Too Much Of Today',
    'You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.',
    'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up',
    'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough',
    'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur',
    'We May Encounter Many Defeats But We Must Not Be Defeated',
    'Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?',
    'Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing',
    'The Man Who Has Confidence In Himself Gains The Confidence Of Others',
];

let randomNumber = Math.floor(Math.random()*textArray.length);
let user = ''
class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                {name: 'Depression Counselling', desc: "WHO claims we all feel either of emotions in a lifetime, and it’s necessary for one to get the right help at the right time, there's a thin line between sadness and depression, be smart enough to not be fooled by your own emotions", img: stressCounselling, link:'/services/stress'},
                {name: 'Relationship Counselling', desc: "They say it’s easy to jump into a relationship but difficult to maintain one, relationships are beautiful and need to be worked on time to time, here more for you to know", img: coupleCounselling, link:'/services/relationship'},
                {name: 'Flourish at Work', desc: "Success is something we're all looking for, it's easier when we flourish. Also, who doesn't want to walk with pride and a satisfactory smile every morning", img: flourish, link:'/services/flourish'},
                {name: 'Boost Self Esteem and Confidence', desc: "Confidence and esteem is simply ours but sometimes we can lose it, let's bring it back and empower ourselves", img: boostEsteem, link:'/services/esteem'},
                {name: 'Parenting Done Right', desc: "Not necessarily parents are right all the time, we can make mistakes, let's understand ourselves and children better to bring out the best in us by gracefully making the necessary changes", img: parenting, link:'/services/parenting'},
                {name: 'Special Children', desc: "We are all special in a certain way, but there are much more special out there, Know More to understand learning disabilities, autism, down syndromes and more", img: special, link:'/services/special-children'},
                {name: 'Mental Health Disorders', desc: "Let’s know in-depth about narcissism, schizophrenia, bipolar disorder, and many more that were faintly heard or known about", img: mental, link:'/services/mental-health'},
                {name: 'Therapies', desc: "Now that there are problems, we do have our little ways to solve these problems by various therapies we use such as CBT, Gestalt, REBT, TA and many more", img: therapies, link:'/services/therapies'},
            ],
            programs: [
                {name: 'Anger Management', desc: "Life gets messy sometimes, it’s okay to get angry, but when you feel you’re losing control of your emotions, don’t resist, seek help", img: anger, link:'/programs/anger-management'},
                {name: 'Overcome Depression and anxiety', desc: "Constantly feeling sad or depressed / anxious? don’t let that the insect grow, here’s a chance to kill the bug and be the person you wish to be", img: anxiety, link:'/programs/depression'},
                {name: 'Self-Motivation', desc: "Learn to be self-motivated by understanding what’s stopping you from doing and thinking right", img: selfMotivation, link:'/programs/motivation'},
                {name: 'Overcome Loneliness', desc: "Why gather dust sitting at one corner feeling unloved and uncared. Let’s beat loneliness together", img: loneliness, link:'/programs/loneliness'},
                {name: 'Leave Your Procrastination', desc: "Delaying anything will delay success. Spontaneity is what we need. Procrastination is as dangerous as a fish out of water", img: procrastination, link:'/programs/procrastination'},
                {name: 'Develop Self-Esteem and Confidence', desc: "If you are able to develop self-esteem and confidence, you can stand on your feet anywhere and anytime on this planet", img: esteem, link:'/programs/self-esteem'},
                {name: 'Stress Management', desc: "It is a practice of calming your nerves so that you don't drown under pressure. Stress management will help you float on water all the time", img: stressMgmt, link:'/programs/stress'},
                {name: 'Resolve Your Family Issues', desc: "Together we stand, divided we fall. Resolving family issues should always be a priority", img: family, link:'/programs/family'},
            ],
            my_services: 0,
            my_tests: 0,
            my_programs: 0,
            packages: [],
            programs: [],
            services:[],
            tests: [],
            showProgram: false,
            showService: false,
            showTest: false
    }
  }
  componentDidMount = () => {
    user = JSON.parse(localStorage.getItem('userData'));
    this.my_tests();
    this.my_services();
    this.my_programs();
    this.getPackage();
    this.getPrograms();
    this.getServices();
    this.getTests();
  }

  my_services = () => {
    var self = this
    axios({
      method: 'get',
      url: config+'my_services',
      params: {
         user_id: `${user.id}`,
      }
    })
    .then(function (response) {
      self.setState({my_services: response.data.data.my_services})
    })
    .catch(function (error) {
      console.log(error);
    })
  }
  my_tests = () => {
    var self = this
    axios({
      method: 'get',
      url: config+'my_tests',
      params: {
         user_id: `${user.id}`,
      }
    })
    .then(function (response) {
      self.setState({my_tests: response.data.data.my_tests})
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  my_programs = () => {
    var self = this
    axios({
      method: 'get',
      url: config+'my_programs',
      params: {
         user_id: `${user.id}`,
      }
    })
    .then(function (response) {
      self.setState({my_programs: response.data.data.my_programs})
    })
    .catch(function (error) {
      console.log(error);
    })
  }


  getPackage = () => {
      let self = this;
      let user = JSON.parse(localStorage.getItem('userData'));
      axios.post(config+'getPackage', {id: user.id})
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
    axios.get(config+'getprograms')
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
    axios.get(config+'getservices')
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
  getTests = () => {
    axios.get(config+'get_tests')
    .then(function (response) {
      return response;
    }).then((response) => this.setState({tests: response.data.data}))
    .catch(function (error) {
      console.log(error);
    })
  }


  get_test_name = (condition) => {
    // //console.log(condition);
    let name = '';
      this.state.tests.filter((e) => e.id === condition).map((key, i) => (
        name = key.name
      ))
    return name
    };




  modalService = (e) => {
    e.preventDefault();
    this.setState({ showService: true})
  }
  modalProgram = (e) => {
    e.preventDefault();
    this.setState({ showProgram: true})
  }
  modalTest = (e) => {
    e.preventDefault();
    this.setState({ showTest: true})
  }

  hideAll = () => {
    this.setState({ showTest: false, showProgram: false, showService: false})
  }

    render() {
        return (
            <Fragment>
                <div style={{overflow: 'hidden'}}>
                  <div className="flexCenter heightProfile" style={{backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: isMobile||isTablet?'180px':'440px', alignItems: 'flex-end'}}>
                      <div className="flexCenter" style={{flexDirection: 'column', backgroundImage: 'url(' + banner + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", width: '90%', height: isMobile||isTablet?'120px':'204px', color: 'white', backgroundPosition: 'center'}}>
                          <div style={{fontSize: isMobile||isTablet?'1rem':'1.6rem'}}>Customized Services For You</div>
                          <div style={{fontSize: isMobile||isTablet?'0.8rem':'1.3rem'}}>Choose the best service that suits your requirements</div>
                      </div>
                  </div>
                  <Row style={{marginTop: isMobile||isTablet?'30px':'40px'}}>
                      <Col md={4} onClick={event => this.modalService(event)}>
                        <Card style={{borderRadius: '20px', height: '230px', width: '230px', margin: '0px auto',marginRight: '-12px', backgroundImage: 'linear-gradient(to bottom, #005191 0%, #33ccff 100%)'}}>
                        <CardBody style={{textAlign: 'center', marginTop: '55px', fontSize: 'xxx-large'}}>
                        <CardTitle tag="h5">My Services</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <CardText>{this.state.my_services}</CardText>
                        </CardBody>
                        </Card>
                      </Col>
                      <Col md={4} onClick={event => this.modalProgram(event)}>
                        <Card style={{borderRadius: '20px',height: '230px', width: '230px', margin: '0px auto', backgroundImage: 'linear-gradient(to bottom, #005191 0%, #33ccff 100%)'}}>
                        <CardBody style={{textAlign: 'center', marginTop: '55px', fontSize: 'xxx-large'}}>
                        <CardTitle tag="h5">My Programs</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <CardText>{this.state.my_programs}</CardText>
                        </CardBody>
                        </Card>
                      </Col>
                      <Col md={4} onClick={event => this.modalTest(event)}>
                        <Card style={{borderRadius: '20px',height: '230px', width: '230px', backgroundImage: 'linear-gradient(to bottom, #005191 0%, #33ccff 100%)'}}>
                        <CardBody style={{textAlign: 'center', marginTop: '55px', fontSize: 'xxx-large'}}>
                        <CardTitle tag="h5">My Tests</CardTitle>
                        <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                        <CardText>{this.state.my_tests}</CardText>
                        </CardBody>
                        </Card>
                      </Col>
                    </Row>
                  <div style={{textAlign: 'center', display: isMobile||isTablet?'':'grid', gridTemplateColumns: isMobile||isTablet?'':'1fr 2fr', width: '90%', margin: 'auto', marginTop: "20px"}}>
                      <div style={{width: '90%', margin: 'auto', marginTop: isMobile||isTablet?'':'40px', height: "100%"}}>
                          <Card className="shadowCard noBorder" style={{padding: '7px 0px', marginBottom: isMobile||isTablet?'30px':''}}>
                              <CardBody>
                                  <div>
                                      <img src={customer} alt="" style={{height: '100px'}}/>
                                      <div style={{margin: '15px 0px'}}>Browse our knowledge base and get support from service base</div>
                                      <div><Link className="linkStyle" to="/services"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px', marginTop: '10px'}}>Chat With An Expert<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link></div>
                                  </div>
                              </CardBody>
                          </Card>
                      </div>
                      <div style={{textAlign: 'center'}}>
                          <Row style={{marginTop: isMobile||isTablet?'':'40px'}}>
                              <Col md={12}>
                                  <Card className="shadowCard noBorder">
                                      <CardBody>
                                          <div style={{fontFamily: 'Roboto-Bold', fontSize: isMobile||isTablet?'24px':'30px', marginBottom: '30px'}}>How are you feeling today?</div>
                                          <div style={{display: 'flex', justifyContent: 'space-between', width: '90%', margin: 'auto'}}>
                                              <img src={happy} alt="" style={{height: '55px', objectFit: 'contain'}}/>
                                              <img src={smile} alt="" style={{height: '55px', objectFit: 'contain'}}/>
                                              <img src={sad} alt="" style={{height: '55px', objectFit: 'contain'}}/>
                                              <img hidden={isMobile||isTablet} src={depressed} alt="" style={{height: '55px', objectFit: 'contain'}}/>
                                              <img hidden={isMobile||isTablet} src={angry} alt="" style={{height: '55px', objectFit: 'contain'}}/>
                                          </div>
                                          <div hidden={!isMobile||isTablet} style={{display: 'flex', justifyContent: 'space-around', width: '90%', margin: 'auto', marginTop: '30px'}}>
                                              <img src={depressed} alt="" style={{height: '55px', objectFit: 'contain'}}/>
                                              <img src={angry} alt="" style={{height: '55px', objectFit: 'contain'}}/>
                                          </div>
                                      </CardBody>
                                  </Card>
                              </Col>
                          </Row>
                          <Row style={{marginTop: isMobile||isTablet?'30px':'40px'}}>
                              <Col md={12}>
                                  <Card className="shadowCard noBorder">
                                      <CardBody>
                                          <div style={{fontSize: isMobile||isTablet?'16px':'20px'}}>
                                          <span><img src={quote} alt="" style={{height: '30px', marginRight: '15px'}}/></span>"{textArray[randomNumber]}"</div>
                                      </CardBody>
                                  </Card>
                              </Col>
                          </Row>
                      </div>
                  </div>
                  <div style={{width: '90%', margin: 'auto'}}>
                      <div style={{fontFamily: 'Roboto-Bold', fontSize: isMobile||isTablet?'24px':'36px', margin: '0px', marginTop: isMobile||isTablet?'70px':'100px', textAlign: 'center'}}>Where do you need help?</div>
                      <Row style={{marginBottom: isMobile||isTablet?'0px':'50px'}}>
                          <Col style={{padding: isMobile||isTablet?'0px':'auto'}}>
                              <CarouselProvider
                                  naturalSlideWidth={90}
                                  totalSlides={this.state.services.length}
                                  isPlaying={true}
                                  touchEnabled={true}
                                  interval={3000}
                                  dragEnabled={true}
                                  visibleSlides={isMobile||isTablet?2:3} >
                                  <Slider style={{marginTop: "10x"}}>
                                      {
                                          this.state.services.map((item,index) => {
                                              return (
                                                  <Slide index={index} style={{height: isMobile||isTablet?'360px':"500px"}}>
                                                      <Link to={item.link} className="linkStyle blackLink" style={{padding: '15px'}}><Card className="shadowCard noBorder" style={{margin: isMobile||isTablet?'14px':'30px'}}>
                                                          <CardImg top src={item.img} alt="Card image cap" />
                                                          <CardBody className="flexSpace">
                                                              <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>{item.name}</div></Dotdotdot>
                                                              <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{item.desc}</div></Dotdotdot>
                                                              {/* <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/stress" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to="/service-fee" className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div> */}
                                                          </CardBody>
                                                      </Card>
                                                      </Link>
                                                  </Slide>
                                              )
                                          })
                                      }
                                  </Slider>
                              </CarouselProvider>
                          </Col>
                      </Row>
                      <div style={{fontFamily: 'Roboto-Bold', fontSize: isMobile||isTablet?'24px':'36px', textAlign: 'center'}}>Our Programs</div>
                      <Row style={{marginBottom: isMobile||isTablet?'0px':'50px'}}>
                          <Col style={{padding: '0px'}}>
                              <CarouselProvider
                                  naturalSlideWidth={90}
                                  totalSlides={this.state.programs.length}
                                  isPlaying={true}
                                  touchEnabled={true}
                                  interval={3000}
                                  dragEnabled={true}
                                  visibleSlides={isMobile||isTablet?2:3} >
                                  <Slider style={{marginTop: "10x"}}>
                                      {
                                          this.state.programs.map((item,index) => {
                                              return (
                                                  <Slide index={index} style={{height: isMobile||isTablet?'360px':"500px"}}>
                                                      <Link to={item.link} className="linkStyle blackLink" style={{padding: '15px'}}><Card className="shadowCard noBorder" style={{margin: isMobile||isTablet?'14px':'30px'}}>
                                                          <CardImg top src={item.img} alt="Card image cap" />
                                                          <CardBody className="flexSpace">
                                                              <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>{item.name}</div></Dotdotdot>
                                                              <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{item.desc}</div></Dotdotdot>
                                                              {/* <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/stress" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to="/service-fee" className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div> */}
                                                          </CardBody>
                                                      </Card>
                                                      </Link>
                                                  </Slide>
                                              )
                                          })
                                      }
                                  </Slider>
                              </CarouselProvider>
                          </Col>
                      </Row>
                  </div>
                  <div style={{marginBottom: '50px', background: '#ecebe6', padding: isMobile||isTablet?'30px':'50px'}}>
                      <div style={{fontFamily: 'Roboto-Bold', fontSize: isMobile||isTablet?'24px':'36px', textAlign: 'center', marginBottom: '25px'}}>How it works?</div>
                      <Row style={{textAlign: "center"}}>
                          <Col md={3}>
                              <div>
                                  <img src={how1} style={{width: '160px', height: '160px', objectFit: 'contain'}}/>
                                  <div style={{fontFamily: 'Nunito-Bold', fontSize: '24px', margin: '10px 0px'}}>Open Your Heart</div>
                                  <div>No matter how much you profess to love your partner.</div>
                              </div>
                          </Col>
                          <Col md={3} style={{marginTop: '25px'}}>
                              <div>
                                  <img src={how2} style={{width: '160px', height: '160px', objectFit: 'contain'}}/>
                                  <div style={{fontFamily: 'Nunito-Bold', fontSize: '24px', margin: '10px 0px'}}>Healing a Trust</div>
                                  <div>Trust is the bedrock of what makes relationships work.</div>
                              </div>
                          </Col>
                          <Col md={3} style={{marginTop: '25px'}}>
                              <div>
                                  <img src={how3} style={{width: '160px', height: '160px', objectFit: 'contain'}}/>
                                  <div style={{fontFamily: 'Nunito-Bold', fontSize: '24px', margin: '10px 0px'}}>Understand a Partner</div>
                                  <div>All of us want to be seen, heard and understood.</div>
                              </div>
                          </Col>
                          <Col md={3} style={{marginTop: '25px'}}>
                              <div>
                                  <img src={how4} style={{width: '160px', height: '160px', objectFit: 'contain'}}/>
                                  <div style={{fontFamily: 'Nunito-Bold', fontSize: '24px', margin: '10px 0px'}}>Taking Care of Love</div>
                                  <div>Love begins by taking care of the closest ones.</div>
                              </div>
                          </Col>
                      </Row>
                  </div>
                  <div style={{width: '90%', margin: 'auto'}}>
                      <div style={{fontFamily: 'Roboto-Bold', fontSize: '30px', textAlign: 'center'}}>Our Blogs</div>
                      <div style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginBottom: '30px', textAlign: 'center'}}>Read Our Latest Articles</div>
                      <Row style={{marginTop: '50px', textAlign: 'left'}}>
                          <Col xs={6} md={3}>
                              <Card className="shadowCard noBorder equalHeight moveUp">
                                  <CardImg top src={blog_1} alt="Card image cap" />
                                  <CardBody>
                                      <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-care for physician burnout: What does that mean?</div></Dotdotdot>
                                      <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>They say you learn a lot from your clients. Not in anesthesia, where I frequently feel great empathy for my sick patients and their families. Our connection in the peri-operative environment is too short-lived for this, I believe. But in therapy, where the relationship is both critical and deeper,</div></Dotdotdot>
                                  </CardBody>
                              </Card>
                          </Col>
                          <Col xs={6} md={3}>
                              <Card className="shadowCard noBorder moveUp">
                                  <CardImg top src={blog_2} alt="Card image cap" />
                                  <CardBody>
                                      <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Physicians need to acknowledge implicit bias</div></Dotdotdot>
                                      <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>“Oh, you’re here to take me to my test.” I have heard this too many times to count, and I have come to perfect my response. “No, I am not patient transport, your social worker, or your nurse. I am your doctor.” After a moment of confusion, I usually see a facial expression signaling that the patient is</div></Dotdotdot>
                                  </CardBody>
                              </Card>
                          </Col>
                          <Col xs={6} md={3} style={{marginTop: isMobile||isTablet?'30px':'0px'}}>
                              <Card className="shadowCard noBorder moveUp">
                                  <CardImg top src={blog_3} alt="Card image cap" />
                                  <CardBody>
                                      <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Are you happy with your decision to go into medicine?</div></Dotdotdot>
                                      <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>On a rare Sunday morning, I woke and had the time to make breakfast for my kids and their cousin, who'd stayed the night. My nephew said, "Thanks, Aunt Erin, I feel like I never see you." To which my oldest (10)</div></Dotdotdot>
                                  </CardBody>
                              </Card>
                          </Col>
                          <Col xs={6} md={3} style={{marginTop: isMobile||isTablet?'30px':'0px'}}>
                              <Card className="shadowCard noBorder moveUp">
                                  <CardImg top src={blog_4} alt="Card image cap" />
                                  <CardBody>
                                      <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>What to do next if your physician dream job isn’t available</div></Dotdotdot>
                                      <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px'}}>Human nature is to hold on tightly to the ideals of perfect. Once we find something that ticks all the boxes, we want it now and with firm conviction. The same holds when seeking that dream job. Competition, scarcity, and desire</div></Dotdotdot>
                                  </CardBody>
                              </Card>
                          </Col>
                      </Row>
                  </div>
                </div>
                <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showProgram} toggle={this.hideAll} >
                    <ModalHeader>
                    My Programs
                    </ModalHeader>
                    <ModalBody style={{ textAlign: "center" }}>
                      <Row style={{marginBottom: '50px'}}>
                        {this.state.packages.length===0 ?
                            <div style={{margin: '20px auto', color: 'grey'}}>You have no therapy package available right now.</div> :
                            this.state.packages.map((p,i) =>(
                              (p.programID != null ?
                                <Col md={4} key={p.id}>
                                    <Card style={{width: 'max-content', marginBottom: '20px', margin: '10px auto' }}>
                                        <CardBody style={{padding: '1.10rem'}} >
                                            <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>description: </span>{this.get_program_id(p.programID) }</div>
                                            <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>Sessions: </span>{p.purpose}</div>
                                            <div><span style={{fontWeight: '600'}}>Amount: </span>{p.amount}</div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                : '')
                            ))
                          }
                      </Row>
                   </ModalBody>
                </Modal>
                <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showService} toggle={this.hideAll} >
                    <ModalHeader>
                    My Services
                    </ModalHeader>
                    <ModalBody style={{ textAlign: "center" }}>
                      <Row style={{marginBottom: '50px'}}>
                        {this.state.packages.length===0 ?
                            <div style={{margin: '20px auto', color: 'grey'}}>You have no therapy package available right now.</div> :
                            this.state.packages.map((p,i) =>(
                              (p.serviceID != null ?
                                <Col md={4} key={p.id}>
                                    <Card style={{width: 'max-content', marginBottom: '20px', margin: '10px auto' }}>
                                        <CardBody style={{padding: '1.10rem'}} >
                                            <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>description: </span>{this.get_service_id(p.serviceID) }</div>
                                            <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>Sessions: </span>{p.purpose}</div>
                                            <div><span style={{fontWeight: '600'}}>Amount: </span>{p.amount}</div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                : '')
                            ))
                          }
                      </Row>
                   </ModalBody>
                </Modal>
                <Modal size="lg" centered={true} style={{ textAlign: "center"}} isOpen={this.state.showTest} toggle={this.hideAll} >
                    <ModalHeader>
                    My Tests
                    </ModalHeader>
                    <ModalBody style={{ textAlign: "center" }}>
                      <Row style={{marginBottom: '50px'}}>
                        {this.state.packages.length===0 ?
                            <div style={{margin: '20px auto', color: 'grey'}}>You have no therapy package available right now.</div> :
                            this.state.packages.map((p,i) =>(
                              (p.testID != null ?
                                <Col md={4} key={p.id}>
                                    <Card style={{width: 'max-content', marginBottom: '20px', margin: '10px auto' }}>
                                        <CardBody style={{padding: '1.10rem'}} >
                                            <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>description: </span>{this.get_test_name(p.testID) }</div>
                                            <div style={{margin: '10px 0px'}}><span style={{fontWeight: '600'}}>Sessions: </span>{p.purpose}</div>
                                            <div><span style={{fontWeight: '600'}}>Amount: </span>{p.amount}</div>
                                        </CardBody>
                                    </Card>
                                </Col>
                                : '')
                            ))
                          }
                      </Row>
                   </ModalBody>
                </Modal>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Dashboard);
