import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQoccupation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Occupational Therapy FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is occupational therapy?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Occupational therapy is the use of intervention to develop and maintain the meaningful activities or occupations, of clients. It is a mental health profession performed by occupational therapists.</div>
                        </Panel>
                        <Panel header="What does the occupational therapist do?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Occupational therapists treat clients through use of everyday activities. They help these patients develop, recover, improve, as well as maintain the skills needed for daily living and working. The therapist looks at how a client performs a particular activity. Then they come up with a plan to improve the way the client does it to make it easier or less painful.</div>
                        </Panel>
                        <Panel header="What conditions do occupational therapist treat?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">Occupational Therapists treat people with Work related injuries, Amputees and people with special prosthetics, Stroke or heart attack victims, People with arthritis, multiple sclerosis or permanent disabilities, People with mental health problems by teaching them coping skills, People with head injuries, People suffering from severe burns and spinal cord trauma, etc.</div>
                        </Panel>
                        <Panel header="Why would a child need occupational therapy?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">Children suffering from the following conditions may need occupational therapy: birth injuries or birth defects, sensory processing disorders, traumatic injuries (brain or spinal cord), learning problems, autism/pervasive, developmental disorders, juvenile rheumatoid arthritis, mental health or behavioural problems, broken bones or other orthopedic injuries, developmental delays, post-surgical conditions, burns, spina bifida, traumatic amputations, cancer, severe hand injuries, multiple sclerosis, cerebral palsy, and other chronic illnesses. Occupational therapists might help kids work on fine motor skills so they can grasp and release toys and develop good handwriting skills.</div>
                        </Panel>
                        <Panel header="What are the benefits of occupational therapy?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">The benefits of occupational therapy are as follows:  Helps Prevent Return Hospital Stays  Helps Regain Independence  Develops Memory Aids  Helps clients to Gain Meaningful Employment  Teaches Important job skills,  Improves Sleep/Wake Schedule</div>
                        </Panel>
                        <Panel header="How can occupational therapist help my child?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">Occupational therapists can help your child achieve independence in their daily life. A few examples of different areas Occupational Therapists work on are: Self-Care Skills, School Readiness, Play Skills and Social/Emotional Regulation.</div>
                        </Panel>
                        <Panel header="What are the occupational therapy activities?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">Some of the most frequently used activities by occupational therapists for children include making a sensory bin, Target practise using a swing, using video clips to address social skills, using play dough, having a straw race, Making a coping flip book, engaging in repetitive activity, playing Simon says, and making an emotional thermometer. For adults, activities like stringing beads, Origami paper folding, Ball tossing, Memoir writing, and yoga are used.</div>
                        </Panel>
                        <Panel header="Is an occupational therapist a doctor?" key="8" className="faq-collapse-custom-panel">
                            <div className="faqBody">Occupational Therapy is an allied mental health field and Occupational Therapists are not doctors. They may have ‘Dr’ in front of their names denoting that they have completed their doctorate degree, however, they are not medical practitioners.</div>
                        </Panel>
                        <Panel header="How effective is occupational therapy?" key="9" className="faq-collapse-custom-panel">
                            <div className="faqBody">Occupational Therapy has been found to be highly effective specially when it comes to children and adults suffering from chronic physical and mental illnesses.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQoccupation);