import 'pure-react-carousel/dist/react-carousel.es.css';
import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import anger from '../../assets/images/anger.png';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import anxiety from '../../assets/images/anxiety.png';
import { Button, Card, CardBody, CardImg } from 'reactstrap';
import careerTrans from '../../assets/images/career-trans.png';
import dreamCareer from '../../assets/images/dream-career.png';
import entrepreneur from '../../assets/images/entrepreneur.png';
import esteem from '../../assets/images/esteem.png';
import family from '../../assets/images/family.png';
import loneliness from '../../assets/images/loneliness.png';
import marriageJitter from '../../assets/images/marriage-jitter.png';
import marriage from '../../assets/images/marriage.png';
import procrastination from '../../assets/images/procrastination.png';
import relationship from '../../assets/images/relationship.png';
import selfMotivation from '../../assets/images/selfMotivation.png';
import sexuality from '../../assets/images/sexuality.png';
import stressMgmt from '../../assets/images/stress-mgmt.png';
import { isMobile, isTablet } from 'react-device-detect';
import Dotdotdot from 'react-dotdotdot';

class RecentCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            programs: [
                {img: anger, name: 'Anger Management', link:"/programs/anger-management", desc: 'Life gets messy sometimes, it’s okay to get angry, but when you feel you’re losing control of your emotions, don’t resist, seek help'},
                {img: anxiety, name: 'Overcome Depression and anxiety', link:"/programs/depression", desc: 'Constantly feeling sad or depressed / anxious? don’t let that the insect grow, here’s a chance to kill the bug and be the person you wish to be'},
                {img: selfMotivation, name: 'Self-Motivation', link:"/programs/motivation", desc: 'Learn to be self-motivated by understanding what’s stopping you from doing and thinking right'},
                {img: loneliness, name: 'Overcome Loneliness', link:"/programs/loneliness", desc: 'Why gather dust sitting at one corner feeling unloved and uncared. Let’s beat loneliness together'},
                {img: procrastination, name: 'Leave Your Procrastination', link:"/programs/procrastination", desc: 'Delaying anything will delay success. Spontaneity is what we need. Procrastination is as dangerous as a fish out of water'},
                {img: esteem, name: 'Develop Self-Esteem and Confidence', link:"/programs/self-esteem", desc: 'If you are able to develop self-esteem and confidence, you can stand on your feet anywhere and anytime on this planet'},
                {img: stressMgmt, name: 'Stress Management', link:"/programs/stress", desc: 'It is a practice of calming your nerves so that you do not drown under pressure. Stress management will help you float on water all the time'},
                {img: family, name: 'Resolve Your Family Issues', link:"/programs/family", desc: 'Together we stand, divided we fall. Resolving family issues should always be a priority'},
                {img: relationship, name: 'Improve Your Relationship With your…', link:"/programs/relationship", desc: 'With two people, come conflicts and love, let us learn to strike a balance and live happier. A little effort is no harm'},
                {img: marriage, name: 'Improve Your Marriage', link:"/programs/marriage", desc: 'Marriage is not just about love, differences can hamper slowly, lets sort them by bringing a middle way'},
                {img: marriageJitter, name: 'Manage Pre-Wedding Jitters', link:"/programs/marriage-jitters", desc: 'Feeling cold feet before marriage is okay, But, to calm those jitters and imagine a happy married life is priceless'},
                {img: dreamCareer, name: 'Build Your Dream Career', link:"/programs/dream-career", desc: 'Witnessing a dream career turns into reality is the most cherishing moment in life.  A career that revolves around you makes YOU!'},
                {img: careerTrans, name: 'Easy Career Transition', link:"/programs/career-transition", desc: 'Changing jobs can be difficult at times. No transition is ever easy. But having a mentor would make it like having a walk in a park'},
                {img: entrepreneur, name: 'Counselling for Entrepreneurs', link:"/programs/entrepreneurs", desc: 'Entrepreneurship is like making a new dish but not knowing whether people will like it or no. This phase of entrepreneurs is the most sensitive one which needs counselling'},
                {img: sexuality, name: 'Learn to Embrace Your Sexuality', link:"/programs/sexuality", desc: 'Knowing yourself is not wrong! A hidden sexuality is a sign of reluctancy. A sign that you don’t like yourself which results in unhappiness and enraged mood swings'},
            ],
    }
}
    render() {
        return (
            <Fragment>
                <div className="width-70" style={{textAlign: 'center', margin: '30px auto 30px auto'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '30px', marginBottom: '20px'}}>More Like This</div>
                        <div style={{marginBottom: '50px'}}>
                            <CarouselProvider
                                naturalSlideWidth={70}
                                // naturalSlideHeight={290}
                                totalSlides={this.state.programs.length}
                                isPlaying={true}
                                touchEnabled={true}
                                interval={3000}
                                dragEnabled={true}
                                visibleSlides={isMobile||isTablet?1:3}>
                                <Slider style={{height: "450px"}}>
                                    {
                                        this.state.programs.map((org, index) => (
                                            <Slide key={index} index={index} style={{ paddingBottom: '0%', marginTop: '7px'}}>
                                                <Link to={org.link} className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight" style={{margin: '20px'}} >
                                                    <CardImg top src={org.img} alt="Card image cap"/>
                                                    <CardBody>
                                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>{org.name}</div></Dotdotdot>
                                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>{org.desc}</div></Dotdotdot>
                                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                                    </CardBody>
                                                </Card>
                                                </Link>
                                            </Slide>
                                        ))}
                                </Slider>
                            </CarouselProvider>
                        </div>
                        {/* <Row style={{marginBottom: '50px'}}>
                            <Col md={4}>
                                <Link to="/programs/anger-management" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={anger} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Anger Management</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/programs/depression" className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                    <CardImg top src={anxiety} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Overcome Depression and anxiety</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/programs/motivation" className="linkStyle blackLink"><Card className="shadowCard noBorder">
                                    <CardImg top src={selfMotivation} alt="Card image cap" />
                                    <CardBody>
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Self-motivation</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px'}}>Learn More</div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                        </Row> */}
                    </div>
            </Fragment>
        )
    }
}

export default withRouter(RecentCourses);
