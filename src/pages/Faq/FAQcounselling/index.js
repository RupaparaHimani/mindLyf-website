import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQcounselling extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Counselling Psychologist FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is a counselling psychologist?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Counselling psychologists help people to cope with mental health issues, emotional problems and challenging situations using a range of psychological concepts and psychotherapeutic techniques. A counselling psychologist does not simply offer 3 guidance but encourages clients to make their own decisions. They do this by offering them a structured and focused way of addressing their problems.</div>
                        </Panel>
                        <Panel header="What kind of problems does a counselling psychologist deal with?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Counselling psychologists help people with all kinds of difficulties, from substance abuse and domestic violence to post-traumatic stress and eating disorders. Additionally, they can help clients deal with psychological issues such as depression, anxiety, stress and anger management. A counselling psychologist is trained to help people who have any form of mental health concern. They can work with children to the elderly. With children a counselling psychologist can help with issues such as handling peer pressure, bullying, learning disabilities and mood disorders. Counselling psychologists use psychological testing to aid in the diagnostic process. By gaining a clear idea of the issues each client is facing the counselling psychologist is able to create a bespoke treatment plan for each individual.</div>
                        </Panel>
                        <Panel header="Will my session be kept confidential?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">All the information that you provide to the counselling psychologist will be kept private and confidential. That means that your information will remain between the counsellor and yourself. The exception to this is if an individual proves to be a threat to themselves or others, in that case the counselling psychologist is liable to interact with the guardian mentioned in the case history form or recommend to the client to individuals who are specialised in dealing with such cases.</div>
                        </Panel>
                        <Panel header="What is the average duration of a session?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">On average a session with a counselling psychologist ranges from between forty-five minutes to one hour.</div>
                        </Panel>
                        <Panel header="Can a counselling psychologist also prescribe medicines?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">No, a counselling psychologist cannot prescribe medication. A psychiatrist, who is a medical doctor who is specialised in medically treating mental illnesses. However, a counselling psychologist is trained in various therapies that will help reduce symptoms.</div>
                        </Panel>
                        <Panel header="Can I book an emergency appointment?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">Yes, if there is an availability, we would be happy to provide any counselling services that you require.</div>
                        </Panel>
                        <Panel header="Will a counsellor visit my home for sessions?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">Yes, a counsellor will be able to visit your home, for home sessions, however, the chargers for such sessions will vary depending on factors such as distance.</div>
                        </Panel>
                        <Panel header="How much would a visit cost?" key="8" className="faq-collapse-custom-panel">
                            <div className="faqBody">On average the cost for a session ranging for forty-five minutes to one hour will cost 2,000 rupees.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQcounselling);