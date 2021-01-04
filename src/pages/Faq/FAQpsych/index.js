import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQpsych extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Psychiatric Consultation FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is a psychiatrist?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">A psychiatrist is a medical doctor, who has specialized in the treatment of mental illnesses. A psychiatrist is able to prescribe a patient medication to help alleviate the symptoms of psychological distress they are experiencing.</div>
                        </Panel>
                        <Panel header="How long until I see the effects of the medication?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Allopathic Medication begins to have an effect of a person’s body after on average after ten days. Therefore, it is very important to take the medication as prescribed without missing doses.</div>
                        </Panel>
                        <Panel header="If I am taking medication for a mental health concern, do I still need therapy?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">Medication helps the client on a biological level. For example, correcting an imbalance in hormones. Therapy in conjunction with medication can help the client by targeting psychological and social factors such as life stressors and family relationships. Together therapy and medication provide a more holistic treatment plan. Though, not all clients will require medication, while others will not require therapy. This is dependent upon their individual symptoms and diagnosis.</div>
                        </Panel>
                        <Panel header="Can I stop taking the medication when the prescription is over?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">It is advisable to see your psychiatrist prior to stopping any medication. This is because some medications need to be gradually reduced, so that the gains made by the client are not lost. Additionally, it is important that your psychiatrist gauges your progress before medication can be stopped.</div>
                        </Panel>
                        <Panel header="Do I need to see a psychiatrist?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">If you suffer from a mental illness and are willing to take medication to treat it, it is advisable to see a psychiatrist. However, to determine if you have a mental health 2 illness, it is important to seek out a psychologist who can help with psychological testing, which can help in the diagnosis.</div>
                        </Panel>
                        <Panel header="Will the information and details I share with the psychiatrist remain confidential?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">As like with all other health professionals, psychiatrists are also held to the same confidentiality standards. This means that your information will be kept private and confidential, unless you are a danger to yourself or to others. Additionally, if you are a minor – someone below the age of 18 – the psychiatrist is legally required to share the information with your parents.</div>
                        </Panel>
                        <Panel header="How does a psychiatrist diagnose?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">A psychiatrist uses the Diagnostic and Statistical Manual of Mental Health Disorders (Fifth-Edition) to help them make a diagnosis about a person’s mental health.</div>
                        </Panel>
                        <Panel header="What are the conditions that a psychiatrist treats?" key="8" className="faq-collapse-custom-panel">
                            <div className="faqBody">Psychiatrists commonly use medication to help in treating; depression, anxiety, schizophrenia, bipolar disorder, attention deficit hyperactive disorder, insomnia, mania and may other forms of mental illness.</div>
                        </Panel>
                        <Panel header="How much does it cost for an appointment with a psychiatrist?" key="9" className="faq-collapse-custom-panel">
                            <div className="faqBody">Although charges can vary form psychiatrist to psychiatrist. Most psychiatrists affiliated with Mindlyf charge 2,000 rupees for a consultation.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQpsych);