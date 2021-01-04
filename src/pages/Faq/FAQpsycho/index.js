import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQpsycho extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Psychological Testing FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is psychological testing?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Many mental health concerns are not visibly evident and therefore can be difficult to diagnose. Mental health professionals use psychological tests, which range from paper pencil tests, performance test to verbal tests. These tests have been designed to be standardised and objective to help provide the most accurate results. The results from psychological tests are used as a diagnostic tool.</div>
                        </Panel>
                        <Panel header="Why do I need such a test?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Psychological testing aids mental health professionals in formulating a diagnosis, which can be used to form a treatment plan for the client. Additionally, psychological test results can help the client when they require assistance from services outside of the mental health field. For example, if a child is diagnosed with a learning disability, the psychological test reports can help the child’s school in making adjustments to facilitate the child’s learning.</div>
                        </Panel>
                        <Panel header="What are the different types of psychological tests?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">The different types of psychological tests include;  Intelligence Tests  Projective Tests  Diagnostic Tests  Personality Tests  Aptitude Tests  Achievement Tests  Neurological Tests</div>
                        </Panel>
                        <Panel header="What is a full psychological evaluation?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">A full psychological evaluation will;  Assess a client’s mental health by testing for various mental illnesses and disorders.  Assess a client’s emotional health, their needs and the pressures that they feel they face from the world.  Assess to see if a client is of sound mind, or has any neurological defects.  Assess the client’s aptitude – innate ability to succeed in various areas.  Assess the personality traits of a client.  Assessments to gauge a better understanding of the client’s achievement.</div>
                        </Panel>
                        <Panel header="How long does a psychological evaluation take?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">The time taken to complete a psychological test varies. For personality, diagnostic and projective tests, the average time taken to complete the test is between half an hour and one hour. Aptitude tests, depending on the number of areas being tested can take between one and three hours to complete. Intelligence and learning disability testing in total can take three to four hours, but may be spread over multiple days. This is because if the client taking the test is a child they are likely to become tired faster. Once fatigue sets in, and if they are made to continue the test, their results may be adversely affected. Here at Mindlyf reports take between four to five working days to be made.</div>
                        </Panel>
                        <Panel header="What does a psychological evaluation determine?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">A psychological evaluation can help determine the intelligence, aptitude, and achievement of the client. Additionally, testing can be done to help diagnosis learning disabilities, developmental delays, neurological deficits, and mental health illnesses. Scores on various tests can help the therapist to determine a treatment play, or if a referral to a psychiatrist is needed.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQpsycho);