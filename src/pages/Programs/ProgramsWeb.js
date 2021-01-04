import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tabs, { TabPane } from 'rc-tabs';
import 'rc-tabs/assets/index.css';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import anger from '../../assets/images/anger.png';
import anxiety from '../../assets/images/anxiety.png';
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
import programBanner from '../../assets/images/programBanner.png';
import relationship from '../../assets/images/relationship.png';
import selfMotivation from '../../assets/images/selfMotivation.png';
import sexAbuse from '../../assets/images/sex-abuse.png';
import sexDis from '../../assets/images/sex-dis.png';
import sexEd from '../../assets/images/sex-ed.png';
import sexuality from '../../assets/images/sexuality.png';
import stressMgmt from '../../assets/images/stress-mgmt.png';
import Subscribe from '../../components/Subscribe';
import axios from 'axios';
import api_url  from '../../api_url';

class ProgramsWeb extends Component {

    constructor(props) {
        super(props);
        this.state = {
          programs: [],
    }
}

componentDidMount = () => {
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
  this.state.programs.filter((e) => e.title === condition).map((key, i) => (
    key_id = key.id
  ))
  return key_id
  };
    render() {
        return (
            <Fragment>
                <div>
                    <div className="direction_column flexCenter" style={{justifyContent: 'flex-end', textAlign: 'center', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: '320px'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Our Programs</div>
                    </div>
                </div>
                <div className="width-70m" style={{textAlign: 'center'}}>
                    <Row>
                        <Col>
                            <Tabs
                            defaultActiveKey="1"
                            renderTabBar={() => <ScrollableInkTabBar/>}
                            renderTabContent={() => <TabContent/>}
                            >
                                <TabPane tab='All' key="1">
                                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={`/programs/anger-management/` + this.get_program_id("Anger Management")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={anger} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Anger Management</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Life gets messy sometimes, it’s okay to get angry, but when you feel you’re losing control of your emotions, don’t resist, seek help</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={`/programs/anger-management/` + this.get_program_id("Anger Management")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/depression/" + this.get_program_id("Overcome Depression and anxiety")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={anxiety} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Overcome Depression and anxiety</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Constantly feeling sad or depressed / anxious? don’t let that the insect grow, here’s a chance to kill the bug and be the person you wish to be</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/depression/" + this.get_program_id("Overcome Depression and anxiety")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/motivation/" + this.get_program_id("Self-Motivation")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={selfMotivation} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-Motivation</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Learn to be self-motivated by understanding what’s stopping you from doing and thinking right</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/motivation/" + this.get_program_id("Self-Motivation")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/loneliness/" + this.get_program_id("Overcome Loneliness")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={loneliness} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Overcome Loneliness</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Why gather dust sitting at one corner feeling unloved and uncared. Let’s beat loneliness together</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/loneliness/" + this.get_program_id("Overcome Loneliness")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/procrastination/" + this.get_program_id("Leave Your Procrastination")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={procrastination} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Leave Your Procrastination</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Delaying anything will delay success. Spontaneity is what we need. Procrastination is as dangerous as a fish out of water</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/procrastination/" + this.get_program_id("Leave Your Procrastination")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/self-esteem/" + this.get_program_id("Develop Self-Esteem and Confidence")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={esteem} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Develop Self-Esteem and Confidence</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>If you are able to develop self-esteem and confidence, you can stand on your feet anywhere and anytime on this planet</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/self-esteem/" + this.get_program_id("Develop Self-Esteem and Confidence")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/stress/" + this.get_program_id("Stress Management")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={stressMgmt} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Stress Management</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>It is a practice of calming your nerves so that you don't drown under pressure. Stress management will help you float on water all the time</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/stress/" + this.get_program_id("Stress Management")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/family/" + this.get_program_id("Resolve Your Family Issues")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={family} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Resolve Your Family Issues</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Together we stand, divided we fall. Resolving family issues should always be a priority</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/family/" + this.get_program_id("Resolve Your Family Issues")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/relationship/" + this.get_program_id("Improve Your Relationship With your…")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={relationship} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Improve Your Relationship With your…</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>With two people, come conflicts and love, let's learn to strike a balance and live happier. A little effort is no harm</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/relationship/" + this.get_program_id("Improve Your Relationship With your…")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/marriage/" + this.get_program_id("Improve Your Marriage")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={marriage} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Improve Your Marriage</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Marriage is not just about love, differences can hamper slowly, lets sort them by bringing a middle way</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/marriage/" + this.get_program_id("Improve Your Marriage")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/marriage-jitters/" + this.get_program_id("Manage Pre-Wedding Jitters")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={marriageJitter} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Manage Pre-Wedding Jitters</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Feeling cold feet before marriage is okay, But, to calm those jitters and imagine a happy married life is priceless</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/marriage-jitters/" + this.get_program_id("Manage Pre-Wedding Jitters")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/dream-career/" + this.get_program_id("Build Your Dream Career")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={dreamCareer} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Build Your Dream Career</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Witnessing a dream career turns into reality is the most cherishing moment in life.  A career that revolves around you makes YOU!</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/dream-career/" + this.get_program_id("Build Your Dream Career")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/career-transition/" + this.get_program_id("Easy Career Transition")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={careerTrans} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Easy Career Transition</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Changing jobs can be difficult at times. No transition is ever easy. But having a mentor would make it like having a walk in a park</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/career-transition/" + this.get_program_id("Easy Career Transition")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/entrepreneurs/" + this.get_program_id("Counselling for Entrepreneurs")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={entrepreneur} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Counselling for Entrepreneurs</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Entrepreneurship is like making a new dish but not knowing whether people will like it or no. This phase of entrepreneurs is the most sensitive one which needs counselling</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/entrepreneurs/" + this.get_program_id("Counselling for Entrepreneurs")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/sexuality/" + this.get_program_id("Learn to Embrace Your Sexuality")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={sexuality} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Learn to Embrace Your Sexuality</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Knowing yourself is not wrong! A hidden sexuality is a sign of reluctancy. A sign that you don’t like yourself which results in unhappiness and enraged mood swings</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sexuality/" + this.get_program_id("Learn to Embrace Your Sexuality")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/sex-education/" + this.get_program_id("Sex Education")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={sexEd} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Sex Education</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Sex Education is the study of one's sexuality and desires. Let’s end the stigma by ending the curiosity and being open about it</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sex-education/" + this.get_program_id("Sex Education")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/sexual-disorder/" + this.get_program_id("Identify Sexual Disorders")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={sexDis} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Identify Sexual Disorders</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Sexual disorders are extremely harmful as it might affect relationships. Identifying them and opening up plus getting a solution should not be a shy thing</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sexual-disorder/" + this.get_program_id("Identify Sexual Disorders")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/sexual-abuse/" + this.get_program_id("Therapy for Sexual Abuse")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={sexAbuse} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Therapy for Sexual Abuse</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Sexual abuse destroys one’s inner peace, it’s all the more difficult to live with it, why not find a way to make peace in our minds</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sexual-abuse/" + this.get_program_id("Therapy for Sexual Abuse")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4} style={{margin: 'auto'}}>
                                                <Link to={"/programs/lgbtq/" + this.get_program_id("Counselling for LGBTQIA Individual")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={lgbtq} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Counselling for LGBTQIA Individual</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Why are we looked differently in the society, bothering you too much? Let’s get it sorted in our head. LGBTQIA should also be given importance</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/lgbtq/" + this.get_program_id("Counselling for LGBTQIA Individual")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tab='Self' key="2">
                                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/anger-management/" + this.get_program_id("Anger Management")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={anger} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Anger Management</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Life gets messy sometimes, it’s okay to get angry, but when you feel you’re losing control of your emotions, don’t resist, seek help</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/anger-management/" + this.get_program_id("Anger Management")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/depression/" + this.get_program_id("Overcome Depression and anxiety")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={anxiety} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Overcome Depression and anxiety</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Constantly feeling sad or depressed / anxious? don’t let that the insect grow, here’s a chance to kill the bug and be the person you wish to be</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/depression/" + this.get_program_id("Overcome Depression and anxiety")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/motivation/" + this.get_program_id("Self-Motivation")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={selfMotivation} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-Motivation</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Learn to be self-motivated by understanding what’s stopping you from doing and thinking right</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/motivation/" + this.get_program_id("Self-Motivation")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/loneliness/" + this.get_program_id("Overcome Loneliness")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={loneliness} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Overcome Loneliness</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Why gather dust sitting at one corner feeling unloved and uncared. Let’s beat loneliness together</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/loneliness/" + this.get_program_id("Overcome Loneliness")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/procrastination/" + this.get_program_id("Leave Your Procrastination")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={procrastination} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Leave Your Procrastination</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Delaying anything will delay success. Spontaneity is what we need. Procrastination is as dangerous as a fish out of water</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/procrastination/" + this.get_program_id("Leave Your Procrastination")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/self-esteem/" + this.get_program_id("Develop Self-Esteem and Confidence")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={esteem} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Develop Self-Esteem and Confidence</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>If you are able to develop self-esteem and confidence, you can stand on your feet anywhere and anytime on this planet</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/self-esteem/" + this.get_program_id("Develop Self-Esteem and Confidence")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/stress/" + this.get_program_id("Stress Management")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={stressMgmt} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Stress Management</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>It is a practice of calming your nerves so that you don't drown under pressure. Stress management will help you float on water all the time</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/stress/" + this.get_program_id("Stress Management")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tab='Relationship' key="3">
                                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/family/" + this.get_program_id("Resolve Your Family Issues")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={family} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Resolve Your Family Issues</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Together we stand, divided we fall. Resolving family issues should always be a priority</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/family/" + this.get_program_id("Resolve Your Family Issues")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/relationship/" + this.get_program_id("Improve Your Relationship With your…")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={relationship} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Improve Your Relationship With your…</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>With two people, come conflicts and love, let's learn to strike a balance and live happier. A little effort is no harm</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/relationship/" + this.get_program_id("Improve Your Relationship With your…")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/marriage/" + this.get_program_id("Improve Your Marriage")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={marriage} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Improve Your Marriage</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Marriage is not just about love, differences can hamper slowly, lets sort them by bringing a middle way</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/marriage/" + this.get_program_id("Improve Your Marriage")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/marriage-jitters/" + this.get_program_id("Manage Pre-Wedding Jitters")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={marriageJitter} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Manage Pre-Wedding Jitters</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Feeling cold feet before marriage is okay, But, to calm those jitters and imagine a happy married life is priceless</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/marriage-jitters/" + this.get_program_id("Manage Pre-Wedding Jitters")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tab='Career' key="4">
                                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/dream-career/" + this.get_program_id("Build Your Dream Career")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={dreamCareer} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Build Your Dream Career</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Witnessing a dream career turns into reality is the most cherishing moment in life.  A career that revolves around you makes YOU!</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/dream-career/" + this.get_program_id("Build Your Dream Career")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/career-transition/" + this.get_program_id("Easy Career Transition")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={careerTrans} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Easy Career Transition</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Changing jobs can be difficult at times. No transition is ever easy. But having a mentor would make it like having a walk in a park</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/career-transition/" + this.get_program_id("Easy Career Transition")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/entrepreneurs/" + this.get_program_id("Counselling for Entrepreneurs")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={entrepreneur} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Counselling for Entrepreneurs</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Entrepreneurship is like making a new dish but not knowing whether people will like it or no. This phase of entrepreneurs is the most sensitive one which needs counselling</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/entrepreneurs/" + this.get_program_id("Counselling for Entrepreneurs")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
                                </TabPane>
                                <TabPane tab='Sex' key="5">
                                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/sexuality/" + this.get_program_id("Learn to Embrace Your Sexuality")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={sexuality} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Learn to Embrace Your Sexuality</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Knowing yourself is not wrong! A hidden sexuality is a sign of reluctancy. A sign that you don’t like yourself which results in unhappiness and enraged mood swings</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sexuality/" + this.get_program_id("Learn to Embrace Your Sexuality")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/sex-education/" + this.get_program_id("Sex Education")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={sexEd} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Sex Education</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Sex Education is the study of one's sexuality and desires. Let’s end the stigma by ending the curiosity and being open about it</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sex-education/" + this.get_program_id("Sex Education")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4}>
                                                <Link to={"/programs/sexual-disorder/" + this.get_program_id("Identify Sexual Disorders")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={sexDis} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Identify Sexual Disorders</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Sexual disorders are extremely harmful as it might affect relationships. Identifying them and opening up plus getting a solution should not be a shy thing</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sexual-disorder/" + this.get_program_id("Identify Sexual Disorders")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                        <Row style={{marginBottom: '50px'}}>
                                            <Col md={4}>
                                                <Link to={"/programs/sexual-abuse/" + this.get_program_id("Therapy for Sexual Abuse")} className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                                    <CardImg top src={sexAbuse} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Therapy for Sexual Abuse</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Sexual abuse destroys one’s inner peace, it’s all the more difficult to live with it, why not find a way to make peace in our minds</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/sexual-abuse/" + this.get_program_id("Therapy for Sexual Abuse")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                            <Col md={4} style={{margin: 'auto'}}>
                                                <Link to={"/programs/lgbtq/" + this.get_program_id(">Counselling for LGBTQIA Individual")} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                                    <CardImg top src={lgbtq} alt="Card image cap" />
                                                    <CardBody className="flexSpace">
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Counselling for LGBTQIA Individual</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Why are we looked differently in the society, bothering you too much? Let’s get it sorted in our head. LGBTQIA should also be given importance</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to={"/programs/lgbtq/" + this.get_program_id(">Counselling for LGBTQIA Individual")} className="linkStyle blackLink hoverLink"><span>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Col>
                                        </Row>
                                    </div>
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

export default withRouter(ProgramsWeb);
