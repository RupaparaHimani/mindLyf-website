import { Collapse, Radio } from 'antd';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { PlusCircleOutlined, DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

class FAQart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

    render() {
        return (
            <Fragment>
                    <div style={{fontFamily: 'Work', fontSize: '30px', marginBottom: '15px'}}>Art Therapy FAQ</div>
                     <Collapse accordion
                        bordered={false}
                        defaultActiveKey={['1']}
                        expandIcon={({ isActive }) => <PlusCircleOutlined rotate={isActive ? 90 : 0} style={{fontSize: '16px'}}/>}
                        className="site-collapse-custom-collapse"
                        expandIconPosition='left'
                    >
                        <Panel header="What is art therapy?" key="1" className="faq-collapse-custom-panel">
                            <div className="faqBody">Art therapy is an expressive therapy which uses various mediums, such as drawing, painting, colouring, collage, or sculpting. These various techniques are used to help the client to express their feelings, thoughts, hopes, dreams, fears and their creativity. The psychologist assesses the client’s artwork and doing so is able to understand the psychology and emotional state of the client.</div>
                        </Panel>
                        <Panel header="Who can benefit from art therapy?" key="2" className="faq-collapse-custom-panel">
                            <div className="faqBody">Art therapy can be beneficial for children, adolescents and for adults.</div>
                        </Panel>
                        <Panel header="What are the benefits of art therapy?" key="3" className="faq-collapse-custom-panel">
                            <div className="faqBody">Art therapy can help a client explore, express and understand their emotions. It is also helpful in improving a client’s self esteem, reducing stress, anxiety and depression. Art therapy has also been helpful as a therapy for addictions, marital difficulties as well as coping with past trauma.</div>
                        </Panel>
                        <Panel header="How long are art therapy sessions?" key="4" className="faq-collapse-custom-panel">
                            <div className="faqBody">Sessions last on average between forty five minutes to one hour.</div>
                        </Panel>
                        <Panel header="How does art therapy cost?" key="5" className="faq-collapse-custom-panel">
                            <div className="faqBody">On average a session of Art therapy will cost on average two thousand rupees.</div>
                        </Panel>
                        <Panel header="How does it work?" key="6" className="faq-collapse-custom-panel">
                            <div className="faqBody">Art therapy is based upon the principle of the unconscious mind. The unconscious is the art of one’s mind that you cannot access. But though art the emotions, thoughts, beliefs, fears and traumas held in the unconscious mind can be accessed and in dong so can help a client resolve their conflicts.</div>
                        </Panel>
                        <Panel header="How art therapy helps people heal?" key="7" className="faq-collapse-custom-panel">
                            <div className="faqBody">By helping the client understand their emotions, the client is then able to address them. Because sometimes we are unaware of why we are feeling the way we are, the art that is produced can help the therapist understand the causes of the client’s emotional state. In some circumstances a person may have experienced trauma in their lives. Using art to recreate the event can be helpful in helping them process and overcome it.</div>
                        </Panel>
                    </Collapse>
            </Fragment>
        )
    }
}

export default withRouter(FAQart);