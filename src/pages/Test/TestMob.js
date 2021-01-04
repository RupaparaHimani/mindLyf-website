import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody } from 'reactstrap';
import Subscribe from '../../components/Subscribe';

class TestMob extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
    }
}

start = () => {
    this.props.history.push({
        pathname: '/start',
    })
}

    render() {
        return (
            <Fragment>
                <div style={{background: '#ECF3F8'}}>
                    <div className="width-90" style={{paddingTop: '25%', paddingBottom: '40px', margin: 'auto'}}>
                        <div style={{fontFamily: 'Work', fontSize: '20px'}}>Mindlyf Emotional wellness<br/> SELF-TESTS</div>
                        <Card style={{boxShadow: '0px 6px 25px #0000001A', marginTop: '20px', border: 'none'}}>
                            <CardBody>
                                <div style={{fontSize: '14px'}}>Our emotional wellbeing is just as vital to our physical and mental health. Gaining an understanding about your emotional health help you understand more about yourself; the way you react to situations, the way you behave with the people in your life, as well as your attitudes towards the world and towards yourself.
                                    <br/><br/>Examine the following statements and choose the answer option that best applies to you. There may be some questions describing situations that may not be relevant to you. In such cases, select the answer you would most likely choose if you ever found yourself in that type of situation. In order to receive the most accurate results, please answer as truthfully as possible.
                                    <br/><br/><strong>Note: </strong>Passing this test is required in order to be eligible for the Rising Talent program.
                                    <div style={{margin: '20px 0px'}}><Button onClick={this.start} style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06'}}>Start Test<FontAwesomeIcon icon={faChevronRight} style={{color: '#DF8F06', marginLeft: '20px'}}/></Button></div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(TestMob);