import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQcareer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Career counselling FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is career counselling?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Career counsellors help individuals with the task of self-assessment and self-analysis. Using standardised testing, the psychologist can assess a client’s; intelligence, personality, interests and aptitude, which is an individual’s inborn talent. By assessing these various aspects, a psychologist can help the client see where their strengths and interests lie as well as what sort of profession would be the best fit with their personality.</div>
                        </Panel>
                        <Panel header="If I do not have an aptitude in a certain area, does that mean I cannot succeed in that field?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">No. Through hard work and perseverance you can achieve anything you set your mind to. Though you may not have an inborn talent for a specific area, practice and dedication can be just as important to success.</div>
                        </Panel>
                        <Panel header="Why is career planning and guidance important? Does career guidance make a difference?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">You are in charge of your future education and career. Career planning and guidance helps one to develop a set of career goals, strategies and options based on your aptitude, interests, personality, values and skills. Once you have a plan, you will be equipped to self-manage your career and take advantage of changes in the economy and job market. Because your career decisions will dramatically impact your lifestyle, such as your education, occupation, income, where you live to name a few, it is important to have a well thought out plan. Having a plan that you are confident in can make entering the workforce or picking what college to go to and what to study much easier. Additionally, knowing your strengths can help one focus their career choice according to their inherent assets and attributes.</div>
                        </Panel>
                        <Panel header="When do people seek career counselling?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">People who at various stages in their life opt for career counselling. These stages include;  Students who are at a crossroad in their lives; needing guidance in relation to what future subjects to choose, to understand what types of career paths are open to them based up on their grades and degrees.  Professionals who are seeking new opportunities because they were dissatisfied with their current jobs.  Professionals who are seeking employment after a break in their work history, for example after taking a year off to have a child.</div>
                        </Panel>
                        <Panel header="What types of tests can be used to help with career counselling?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">Tests that are commonly used in career counselling include: 
                                <ul>
                                    <li>Aptitude testing tests that help the counsellor understand where the client’s innate strengths lie.</li>
                                    <li>Intelligence tests understanding a client IQ level is very helpful in understanding what career paths would be best suited for the client; what career options the client would be most likely to excel in.</li>
                                    <li>Personality tests these tests help in understanding the personality traits within the client. These traits and qualities are seem as relatively stable and can be used in helping to determine which kinds of jobs would be more suitable. For example if a client’s personality test shows that they are very extroverted – outgoing – working with other people, in marketing or sales may be advisable.</li>
                                </ul>
                            </div>
                        </Panel>
                        <Panel header="How is music therapy conducted?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">The intervention methods employed in conducting music therapy can be roughly divided into active and receptive techniques. When a client or therapist is making music, whether by singing, chanting, playing musical instruments, composing, or improvising music, that person is using active techniques. Receptive techniques, on the other hand, involve listening to and responding to music, such as through dance or the analysis of lyrics.</div>
                        </Panel>
                        <Panel header="What can music therapy cure?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">Music Therapy is used for many different psychological issues, from stress relief to mental and emotional problems. It has been shown to help treat depression and anxiety, and is often used to help elderly clients deal with memory loss associated with diseases such as Alzheimer&#39;s Disease and Dementia.</div>
                        </Panel>
                        <Panel header="What do music therapists do?" key="8" className="faq-collapse-custom-panel">
                            <div className="faqBody">Music therapists assess emotional well-being, physical health, social functioning, communication abilities, and cognitive skills through musical responses, design music sessions for individuals and groups based on client needs using music improvisation, etc.</div>
                        </Panel>
                        <Panel header="How much does music therapy cost?" key="9" className="faq-collapse-custom-panel">
                            <div className="faqBody">Music therapy session roughly cost Rs. 2000, however, the cost may vary.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQcareer);