import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQbehavioural extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Behavioural Therapy FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is behavioural therapy?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Behavioural Therapy is a term for types of therapy that treat mental health disorders using behaviourism. This form of therapy seeks to identify and help change potentially unhealthy behaviours. It functio</div>
                        </Panel>
                        <Panel header="What is behavioural therapy used to treat?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Behavioural therapy can benefit people with a wide range of disorders including depression, anxiety, panic disorders, anger issues, eating disorders, post-traumatic stress disorder (PTSD), bipolar disorder, ADHD, phobias, including social phobias, obsessive compulsive disorder (OCD), self-harm and substance abuse.</div>
                        </Panel>
                        <Panel header="What does a child behavioural therapist do?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">Child behaviour therapist modify a child’s behaviour with the use of behavioural techniques such as Cognitive Behavioural Play Therapy in which Children play in different ways and those different ways help give a therapist insight into what the child is going through. This is followed by the use of intervention methods to alter unwanted behaviour.</div>
                        </Panel>
                        <Panel header="What are examples of behavioural disorders?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">Examples of Behavioural disorders include: attention deficit hyperactivity disorder (ADHD), oppositional defiant disorder (ODD), anxiety disorder, depression, bipolar disorder, learning disorders, conduct disorders, etc.</div>
                        </Panel>
                        <Panel header="What are signs of behavioural problems??" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">Emotional Signs of Behavioural Disorders, Easily getting annoyed or nervous, Often appearing angry, Putting blame on others, Refusing to follow rules or questioning authority, Arguing and throwing temper tantrums, Having difficulty in handling frustration, Physical Symptoms of Behavioural Disorders.</div>
                        </Panel>
                        <Panel header="What are the causes of behavioural problems?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">A behavioural disorder can have a variety of causes. Some biological causes may include: Physical illness or disability, Malnutrition, Brain damage, Hereditary factors. Other factors may include major stressors caused due to life events like divorce, death of a loves one, relocating, etc.</div>
                        </Panel>
                        <Panel header="What are the benefits of behavioural therapy?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">Behavioural Therapy helps build a client’s self-esteem as the disorder is conquered due to their own efforts. Negative thinking becomes automatic with many patients. Cognitive Behavioural Therapy teaches patients how to turn negative thoughts into positive, realistic ones. It teaches patients various methods to help control emotional responses and to assist them in recognizing the reasons behind the anger. Cognitive Behavioural Therapy helps patients to learn how to communicate their feelings to others without becoming anger or feeling shame. Cognitive Behavioural Therapy provides patients avenues to deal with such situations. They learn to express themselves instead of bottling things up.</div>
                        </Panel>
                        <Panel header="What are the different types of behavioural therapy?" key="8" className="faq-collapse-custom-panel">
                            <div className="faqBody">The different types of behavioural therapy include: Cognitive Behavioural Therapy (the client’s thoughts are unhealthy and that by changing them it will be possible to change more than just perception, but the way that the client interacts with the world.), Cognitive Behavioural Play Therapy (Children play in different ways and those different ways will help give a therapist insight into what the child is going through.), System Desensitization (It involves things like learning relaxation techniques and slowly going through exposure therapy.) Aversion Therapy (It teaches the association between the negative action that they no longer want and some form of unpleasant stimuli.).</div>
                        </Panel>
                        <Panel header="How long does it take for behavioural therapy to work?" key="9" className="faq-collapse-custom-panel">
                            <div className="faqBody">It usually takes between 5 and 20 weekly or fortnightly sessions, with each session lasting 30 to 60 minutes.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQbehavioural);