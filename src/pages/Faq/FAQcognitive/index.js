import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQcognitive extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
};

checkoutProgram = (amount,sessions) => {
    this.props.history.push({
        pathname: '/checkout',
        state: [amount, sessions],
    })
  }

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Cognitive Therapy FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is cognitive therapy?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Cognitive Therapy is a type of psychotherapy in which negative patterns of thought are challenged in order to alter unwanted behaviour patterns or treat mental disorders.</div>
                        </Panel>
                        <Panel header="What is cognitive therapy used to treat?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">In addition to depression or anxiety disorders, CBT can also help people with bipolar disorder, borderline personality disorder, eating disorders such as anorexia and bulimia, obsessive compulsive disorder , panic disorder, phobias, post-traumatic stress disorder, sleep problems such as insomnia and problems related to alcohol misuse.</div>
                        </Panel>
                        <Panel header="What does a child CBT do?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">CBT for children Cognitive Behavioural therapy (CBT) for children and adolescents usually differs from other therapy approaches by focusing on the ways that a child or adolescent’s thoughts, emotions, and behaviours are interconnected, and how they each affect one another. These treatments have been proven to be effective in treating many psychological disorders among children and adolescents, such as anxiety, depression, post-traumatic stress disorder, behaviour problems, and substance abuse.</div>
                        </Panel>
                        <Panel header="What are examples of cognitive disorders?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">Examples of cognitive disorders include Dementia, Alzheimer’s, Mild Cognitive Impairment, Parkinson’s disease, autism, Down Syndrome, and traumatic brain injury (TBI). Less severe cognitive conditions include attention deficit disorder (ADD), dyslexia (difficulty reading), dyscalculia (difficulty with math), and learning disabilities in general.</div>
                        </Panel>
                        <Panel header="What are signs of cognitive problems?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">Cognitive disorder signs may vary according to the particular disorder, however, there are some common symptoms such as Confusion, Poor motor coordination, Loss of short-term or long-term memory, Identity confusion and Impaired judgment. Some cognitive disorders develop in stages and symptoms increase in severity the further the disease progresses.</div>
                        </Panel>
                        <Panel header="What are the causes of behavioural problems?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">Problem behaviours are those that considered typically unacceptable in society. Nearly everyone can have a moment of disruptive behaviour or an error in judgment. However, problem behaviour is a recurrent act and is a consistent pattern. Problem behaviours can have many symptoms, including but not limited to abuse of alcohol or drugs, defiant behaviours, excessive, disruptive talking, poor judgment, property damage, self-injury, etc. There are multiple causes associated with problem behaviours. The individual portraying these behaviours may be suffering from anxiety disorders, attention deficit hyperactivity disorder (ADHD), bipolar disorder, conduct disorder, delirium, dementia, depression, obsessive-compulsive disorder, oppositional defiant disorder, postpartum depression, post-traumatic stress disorder (PTSD), psychosis, schizophrenia or substance abuse.</div>
                        </Panel>
                        <Panel header="What are the benefits of cognitive therapy?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">Cognitive-Behavioural Therapies are research-supported approaches to counselling / psychotherapy with distinct advantages.  Cognitive-Behavioural Therapies are very instructive and client’s patients understand how to counsel themselves.  Cognitive-Behavioural Therapies are shorte-term.  Cognitive-Behavioural Therapies are cross-cultural. They are based on universal laws of human behaviour.  Cognitive-Behavioural Therapies are structured.</div>
                        </Panel>
                        <Panel header="What are the different types of cognitive therapy?" key="8" className="faq-collapse-custom-panel">
                            <div className="faqBody">Cognitive emotional behavioural therapy has the following types: Cognitive emotional behavioural therapy (CEBT) , Structured cognitive behavioural training, Moral resonation therapy, Stress inoculation training, Mindfulness-based cognitive behavioural hypnotherapy.</div>
                        </Panel>
                        <Panel header="How long does it take for cognitive therapy to work?" key="9" className="faq-collapse-custom-panel">
                            <div className="faqBody">It usually takes between 5 and 20 weekly or fortnightly sessions, with each session lasting 30 to 60 minutes.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQcognitive);