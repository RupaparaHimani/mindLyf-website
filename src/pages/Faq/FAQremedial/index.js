import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQremedial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Remedial Therapy FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is remedial therapy?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Remedial therapy is a form of therapy which utilises a multidimensional approach which are tailored to a child’s specific needs. It can incorporate written and verbal skills and tools in one on one sessions to help the child improve their skills and knowledge, rather than the content.</div>
                        </Panel>
                        <Panel header="What are the uses of remedial therapy?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Remedial therapy is used to help children cope with the demands of their school curriculum. Usually this is for a child who has learning disabilities, developmental delays or other disorders that can hamper their ability to learn, such as Attention Deficit Hyperactive Disorder.</div>
                        </Panel>
                        <Panel header="What is a learning disability?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">A learning disability is a difficulty in the ability to learn. In simple terms, a learning disability results from a difference in the way a person&#39;s brain is &quot;wired.&quot; Children with learning disabilities might have an IQ level in level to those of their peers. However, they may learn differently to others and may require specialised attention to help them reach their full potential.</div>
                        </Panel>
                        <Panel header="What are the main categories of learning disabilities?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">There are three main categories of learning disabilities;  Dyslexia: Is a difficulty with reading, spelling, the ability hear and manipulate sounds in words. Dyslexic students often struggle to understand what they read as well as develop vocabulary at a slower rate.  Dysgraphia: The term dysgraphia refers to more than simply having poor handwriting. This term refers to those who struggle with the motor skills necessary to write thoughts on paper, spelling, and the thinking skills needed for vocabulary retrieval, clarity of thought, grammar, and memory.  Dyscalculia: This term refers to those who struggle with basic number sense and early number concepts as well as have difficulties with math calculations and math reasoning.</div>
                        </Panel>
                        <Panel header="What are some of the signs that my child may have a learning disability?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">Common signs of a learning disability include;  Short attention span,  Poor memory,  Difficulty following directions,  Inability to discriminate between/among letters, numerals, or sounds,  Poor reading and/or writing ability,  Eye-hand coordination problems or being poorly coordinated,  Fine and gross motor skills  Difficulties with sequencing,  Disorganization and other sensory difficulties, such as being overtly sensitive to sounds, smells and textures,  Difficulty knowing the differencing between right and left,  Difficulties adjusting to change.</div>
                        </Panel>
                        <Panel header="How can remedial therapy help?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">Although a learning disability is a life long condition and cannot be cured, there are strategies and therapies that can be implemented to help the individual. These specialised teaching techniques aid the individual by adapting to the way they learn, as people with learning disabilities learn differently. Remedial therapy is also used for individuals who have autism spectrum disorders as well as ADHD. Furthermore, remedial therapy can help in areas such as social interaction and motor skill development.</div>
                        </Panel>
                        <Panel header="Does having a learning disability mean that my child will not be able to succeed?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">No! Many of the most successful people had learning disabilities; such as Bill Gates, Walt Disney and Albert Einstein. Early intervention can help a child adapt and learn the skills that will enable them to succeed. Remedial therapy also helps the child learn confidence and understand that though they are different they are not incapable of learning.</div>
                        </Panel>
                        <Panel header="How long are remedial therapy sessions?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">Sessions typically last between forty five minutes to one hour. This time period is short enough that the child is abled to stay engaged without becoming fatigued, or completely uninterested.</div>
                        </Panel>
                        <Panel header="How much does remedial therapy cost?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">On average a session that lasts for between forty-five minutes, to one hour will cost two thousand rupees at Mindlyf.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQremedial);