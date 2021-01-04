import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQmusic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Music Therapy FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is music therapy?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Music therapy is the clinical use of musical interventions to treat psychopathology. Music therapists use help clients improve their health in cognitive, motor, emotional, communicative, social, sensory, and educational domains. These experiences include improvisation, re-creation, composition, receptive methods, and discussion of music.</div>
                        </Panel>
                        <Panel header="How does music therapy work?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Music therapy is a form of healing that uses music to provide therapy to patients. Therapists use music therapy in a variety of ways, including having people sing along to the music, meditate and relax while music plays and conduct various exercises and movements. It also provides emotional healing, helping people to develop positive self-image and aids in prioritizing stress and pain.</div>
                        </Panel>
                        <Panel header="Why is music therapy used?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">Music therapy can be used to express common themes of the human experience, such as love, loss, grief, anger, excitement, celebration, jealousy, etc as well as a therapy technique to reduce symptoms of psychological illness.</div>
                        </Panel>
                        <Panel header="What are the benefits of music therapy?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">Music therapy reduces anxiety, improves healing, reduces depression reduces symptoms of psychological disorders including schizophrenia and improves self-expression and communication</div>
                        </Panel>
                        <Panel header="How long are music therapy sessions?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">Depending on the individual or group, music therapy sessions generally range between 15-60 minutes.</div>
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

export default withRouter(FAQmusic);