import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'rc-tabs/assets/index.css';
import React, { Component, Fragment } from 'react';
import Dotdotdot from 'react-dotdotdot';
import { Link, withRouter } from 'react-router-dom';
import { Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import boostEsteem from '../../assets/images/boostEsteem.png';
import coupleCounselling from '../../assets/images/couple-counselling.png';
import flourish from '../../assets/images/flourish-at-work.png';
import mental from '../../assets/images/mental.png';
import parenting from '../../assets/images/parenting.png';
import programBanner from '../../assets/images/programBanner.png';
import special from '../../assets/images/special.png';
import stressCounselling from '../../assets/images/stress-counselling.png';
import therapies from '../../assets/images/therapies.png';
import Subscribe from '../../components/Subscribe';
import axios from 'axios';
import api_url  from '../../api_url';

class ServicesWeb extends Component {

    constructor(props) {
        super(props);
        this.state = {
          services: [],
    }
  }

  componentDidMount = () => {
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
    this.state.services.filter((e) => e.title === condition).map((key, i) => (
      key_id = key.id
    ))
    return key_id
    };

    render() {
        return (
            <Fragment>
                <div>
                    <div className="direction_column flexCenter" style={{justifyContent: 'flex-end', textAlign: 'center', backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "repeat", backgroundSize: "cover", height: '320px'}}>
                        <div style={{fontFamily: 'Poppins-Bold', fontSize: '50px'}}>Services We Offer</div>
                    </div>
                </div>
                <div className="width-70m" style={{textAlign: 'center'}}>
                    <div style={{margin: '50px 24px', textAlign: 'center'}}>
                        <Row style={{marginBottom: '50px'}}>
                            <Col md={4}>
                                <Link to="/services/stress" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={stressCounselling} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Depression Counselling</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>WHO claims we all feel either of emotions in a lifetime, and it’s necessary for one to get the right help at the right time, there's a thin line between sadness and depression, be smart enough to not be fooled by your own emotions</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/stress" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Depression Counselling")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/services/relationship" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={coupleCounselling} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Relationship Counselling</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>They say it’s easy to jump into a relationship but difficult to maintain one, relationships are beautiful and need to be worked on time to time, here more for you to know</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/relationship" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Relationship Counselling")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/services/flourish" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={flourish} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Flourish at Work</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Success is something we're all looking for, it's easier when we flourish. Also, who doesn't want to walk with pride and a satisfactory smile every morning</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/stress" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Flourish at Work")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col md={4}>
                                <Link to="/services/esteem" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={boostEsteem} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Boost Self Esteem and Confidence</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Confidence and esteem is simply ours but sometimes we can lose it, let's bring it back and empower ourselves</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/esteem" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Boost Self Esteem and Confidence")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/services/parenting" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={parenting} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Parenting Done Right</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Not necessarily parents are right all the time, we can make mistakes, let's understand ourselves and children better to bring out the best in us by gracefully making the necessary changes</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/parenting" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Parenting Done Right")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/services/special-children" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={special} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Special Children</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>We are all special in a certain way, but there are much more special out there, Know More to understand learning disabilities, autism, down syndromes and more</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/special-children" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Special Children")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: '50px'}}>
                            <Col md={4}>
                                <Link to="/services/mental-health" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={mental} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Mental Health Disorders</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Let’s know in-depth about narcissism, schizophrenia, bipolar disorder, and many more that were faintly heard or known about</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/mental-health" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Mental Health Disorders")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                                <Link to="/services/therapies" className="linkStyle blackLink"><Card className="shadowCard noBorder equalHeight">
                                    <CardImg top src={therapies} alt="Card image cap" />
                                    <CardBody className="flexSpace">
                                        <Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-Bold', fontSize: '15px'}}>Therapies</div></Dotdotdot>
                                        <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}}>Now that there are problems, we do have our little ways to solve these problems by various therapies we use such as CBT, Gestalt, REBT, TA and many more</div></Dotdotdot>
                                        <div style={{fontFamily: 'Roboto-SemiBold', fontSize: '13px', borderTop: 'solid 1px #d2d2d2', paddingTop: '10px'}}><Link to="/services/therapies" className="linkStyle blackLink hoverLink"><span style={{float: 'left'}}>Know More<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link><Link to={`/service-fee/`+ this.get_service_id("Therapies")} className="linkStyle blackLink hoverLink"><span style={{float: 'right'}}>Start Now<FontAwesomeIcon icon={faChevronRight} style={{marginLeft: '10px'}}/></span></Link></div>
                                    </CardBody>
                                </Card>
                                </Link>
                            </Col>
                            <Col md={4}>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(ServicesWeb);
