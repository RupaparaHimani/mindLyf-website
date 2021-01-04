import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import faqBanner from '../../assets/images/faqBanner.png';
import Subscribe from '../../components/Subscribe';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';
import FAQmusic from './FAQmusic';
import FAQcognitive from './FAQcognitive';
import { isMobile, isTablet } from 'react-device-detect';
import FAQart from './FAQart';
import FAQcareer from './FAQcareer';
import FAQbehavioural from './FAQbehavioural';
import FAQremedial from './FAQremedial';
import FAQpsycho from './FAQpsycho';
import FAQoccupation from './FAQoccupation';
import FAQpsych from './FAQpsych';
import FAQcounselling from './FAQcounselling';

const { Panel } = Collapse;

const FAQstyle = {
    background: 'white', 
    padding: '30px', 
    paddingTop: '16px'
};

const FAQMobstyle = {
    background: 'white', 
    padding: '30px', 
    marginTop: '30px',
    paddingTop: '16px'
};

class Faq extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
            hideMusic: false,
            hideCognitive: true,
            hideArt: true,
            hidePsycho: true,
            hidePsych: true,
            hideOccupation: true,
            hideRemedial: true,
            hideBehave: true,
            hideCareer: true,
            hideCounselling: true,
    }
}

onChange = e => {
    console.log('radio checked', e.target.value);
    this.hideAll();
    if (e.target.value===1) {
        this.setState({hideMusic: false})
    }
    else if (e.target.value===2) {
        this.setState({hideMusic: false})
    }
    else if (e.target.value===3) {
        this.setState({hideCognitive: false})
    }
    else if (e.target.value===4) {
        this.setState({hideOccupation: false})
    }
    else if (e.target.value===5) {
        this.setState({hideBehave: false})
    }
    else if (e.target.value===6) {
        this.setState({hideRemedial: false})
    }
    else if (e.target.value===7) {
        this.setState({hideArt: false})
    }
    else if (e.target.value===8) {
        this.setState({hidePsych: false})
    }
    else if (e.target.value===9) {
        this.setState({hideCounselling: false})
    }
    else if (e.target.value===10) {
        this.setState({hidePsycho: false})
    }
    else if (e.target.value===11) {
        this.setState({hideCareer: false})
    }
    this.setState({
      value: e.target.value,
    });
};

hideAll = () => {
    this.setState({
        hideMusic: true,
        hideCognitive: true,
        hideArt: true,
        hidePsycho: true,
        hidePsych: true,
        hideOccupation: true,
        hideRemedial: true,
        hideBehave: true,
        hideCareer: true,
    })
}

    render() {
        return (
            <Fragment>
                <div className="flexCenter" style={{backgroundImage: 'url(' + faqBanner + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '440px'}}>
                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '60px', color: 'white', marginBottom: '30px', alignSelf: 'flex-end'}}>Support Center</div>
                </div>
                <div style={{background: '#ECF3F8'}}>
                    <div className="width-70" style={{margin: 'auto', padding: '50px 0px'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '30px', textAlign: 'center'}}>Frequently Asked Questions</div>
                        <div style={{textAlign: 'center'}}>Aenean aliquet risus risus, in convallis velit egestas ac. Morbi et ipsum molestie, vehicula turpis id, porttitor elit.</div>
                        <Row style={{marginTop: '50px'}}>
                            <Col md={4}>
                                <Collapse
                                    bordered={false}
                                    defaultActiveKey={['1']}
                                    expandIcon={({ isActive }) => <DownOutlined rotate={isActive ? 180 : 0}/>}
                                    className="site-collapse-custom-collapse"
                                    expandIconPosition='right'
                                >
                                    <Panel style={{fontFamily: 'Nunito-Bold'}} header="Therapy" key="1" className="site-collapse-custom-panel">
                                    <div>
                                        <Radio.Group onChange={this.onChange} value={this.state.value}>
                                            <Radio className="radioFaq" value={1}><span style={{margin: '0px 5px'}}>Speech Therapy</span></Radio>
                                            <Radio className="radioFaq" value={2}><span style={{margin: '0px 5px'}}>Music Therapy</span></Radio>
                                            <Radio className="radioFaq" value={3}><span style={{margin: '0px 5px'}}>Cognitive Therapy</span></Radio>
                                            <Radio className="radioFaq" value={4}><span style={{margin: '0px 5px'}}>Occupational Therapy</span></Radio>
                                            <Radio className="radioFaq" value={5}><span style={{margin: '0px 5px'}}>Behavioural Therapy</span></Radio>
                                            <Radio className="radioFaq" value={6}><span style={{margin: '0px 5px'}}>Remedial Therapy</span></Radio>
                                            <Radio className="radioFaq" value={7}><span style={{margin: '0px 5px'}}>Art Therapy</span></Radio>
                                        </Radio.Group>
                                    </div>
                                    </Panel>
                                    <Panel style={{fontFamily: 'Nunito-Bold'}} header="Consultation" key="2" className="site-collapse-custom-panel">
                                    <div>
                                    <Radio.Group onChange={this.onChange} value={this.state.value}>
                                        <Radio className="radioFaq" value={8}><span style={{margin: '0px 5px'}}>Psychiatric Consultation</span></Radio>
                                        <Radio className="radioFaq" value={9}><span style={{margin: '0px 5px'}}>Counselling Psychologist</span></Radio>
                                        <Radio className="radioFaq" value={10}><span style={{margin: '0px 5px'}}>Psychological Testing</span></Radio>
                                        <Radio className="radioFaq" value={11}><span style={{margin: '0px 5px'}}>Career counselling</span></Radio>
                                    </Radio.Group>
                                    </div>
                                    </Panel>
                                </Collapse>
                            </Col>
                            <Col md={8} style={isMobile?FAQMobstyle:FAQstyle}>
                                <div hidden={this.state.hideMusic}><FAQmusic/></div>
                                <div hidden={this.state.hideCognitive}><FAQcognitive/></div>
                                <div hidden={this.state.hideArt}><FAQart/></div>
                                <div hidden={this.state.hideBehave}><FAQbehavioural/></div>
                                <div hidden={this.state.hideCareer}><FAQcareer/></div>
                                <div hidden={this.state.hideOccupation}><FAQoccupation/></div>
                                <div hidden={this.state.hidePsych}><FAQpsych/></div>
                                <div hidden={this.state.hidePsycho}><FAQpsycho/></div>
                                <div hidden={this.state.hideRemedial}><FAQremedial/></div>
                                <div hidden={this.state.hideCounselling}><FAQcounselling/></div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Faq);