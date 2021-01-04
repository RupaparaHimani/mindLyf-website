import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Card, CardBody, Row, Col } from 'reactstrap';
import Subscribe from '../../components/Subscribe';
import { isMobile, isTablet } from 'react-device-detect';
import axios from "axios";
import generatePDF from "../../services/reportGenerator";

const webStyle = {paddingTop: '15%', paddingBottom: '40px', margin: 'auto', width: '50%'};
const mobStyle = {paddingTop: '25%', paddingBottom: '40px', margin: 'auto', width: '90%'};

class Results extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: '',
            explain: '',
            resultArray: this.props.location.resultArray,
    }
}

componentDidMount = () => {
    let data = this.props.location.state;
    let result;
    let explain;
    if (data.A > data.B && data.A > data.C) {
		// this.setState({
    //         result: 'A',
    //         explain: 'You have a high level of emotional wellbeing. You feel comfortable with yourself and are able to put yourself first. You give time to you interests and goals. Overcoming failures is relatively easy for you and you do not tend to dwell on past failures, thus limiting the impact these failures have on your self confidence. You like yourself, which is very important, as you are able to spend time with yourself.'
    //     });
      result = 'A';
      explain = 'You have a high level of emotional wellbeing. You feel comfortable with yourself and are able to put yourself first. You give time to you interests and goals. Overcoming failures is relatively easy for you and you do not tend to dwell on past failures, thus limiting the impact these failures have on your self confidence. You like yourself, which is very important, as you are able to spend time with yourself.';
	}
    else if(data.B > data.A && data.B > data.C) {
        // this.setState({
        //     result: 'B',
        //     explain: 'Your score was in pretty average. Remember that is okay. There will be periods of your life when you feel more emotionally well then others. It is important to make yourself a priority. Focus on time management, achieving our goals and maintaining healthy relationships. Don’t be too tough on yourself about failures in your life. ‘Getting back on the horse after falling off’ is half the battle. Engage in Self-Care activities; things that make you feel good and happy. This can help you feel more connected to yourself.'
        // });
        result = 'B';
        explain = 'Your score was in pretty average. Remember that is okay. There will be periods of your life when you feel more emotionally well then others. It is important to make yourself a priority. Focus on time management, achieving our goals and maintaining healthy relationships. Don’t be too tough on yourself about failures in your life. ‘Getting back on the horse after falling off’ is half the battle. Engage in Self-Care activities; things that make you feel good and happy. This can help you feel more connected to yourself.'
    }
    else if(data.C > data.A && data.C > data.A) {
        // this.setState({
        //     result: 'C',
        //     explain: 'Your score was quite low. Remember that is okay. There will be periods of your life when you lessl more emotionally well then others. It is important to make yourself a priority. Focus on time management, achieving our goals and maintaining healthy relationships. Don’t be too tough on yourself about failures in your life. ‘Getting back on the horse after falling off’ is half the battle. Engage in Self-Care activities; things that make you feel good and happy. This can help you feel more connected to yourself.'
        // });

        result = 'C';
        explain = 'Your score was quite low. Remember that is okay. There will be periods of your life when you lessl more emotionally well then others. It is important to make yourself a priority. Focus on time management, achieving our goals and maintaining healthy relationships. Don’t be too tough on yourself about failures in your life. ‘Getting back on the horse after falling off’ is half the battle. Engage in Self-Care activities; things that make you feel good and happy. This can help you feel more connected to yourself.'
}
    this.setState({
        result: result,
        explain: explain
    });
    if (localStorage.getItem('userData')!==null) {
        let user = JSON.parse(localStorage.getItem('userData'));
        axios.post('https://api.mindlyf.com/api/email', {
            email: user.email,
            subject: 'Test Completed',
            html: 'Your result is <b>{result}</b> <br /><p>{explain}</p>'
        })
        .then(function (response) {
                console.log("Mail send");
        })
        .catch(function (error) {
                console.log(error);
        })
      }
      generatePDF(this.state.resultArray)
  }

next = () => {

}

    render() {
        return (
            <Fragment>
                <div style={{background: '#ECF3F8'}}>
                    <div style={isMobile ? mobStyle : webStyle}>
                        <Card style={{boxShadow: '0px 6px 25px #0000001A', marginTop: '20px', border: 'none'}}>
                        <div style={{background: '#F6F6F6', padding: '30px 20px', fontFamily: 'Nunito-Bold'}}>
                        <div>Your Score</div>
                        </div>
                            <CardBody>
                                <div style={{fontSize: '14px'}}>
                                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '16px'}}>As per your response below is the result</div>
                                    <div style={{marginTop: '10px', fontFamily: 'Nunito-Bold', color: '#005191', fontSize: '16px'}}>Mostly {this.state.result} responses</div>
                                    <div style={{marginTop: '10px'}}>{this.state.explain}</div>
                                    <div style={{marginTop: '40px'}}>
                                        <Link className="linkStyle" to="/"><Button style={{borderRadius: '100px', background: '#fff', border: 'solid thin #DF8F06', padding: '10px 20px', fontSize: '14px', color: '#DF8F06', marginRight: '30px'}}>Go to home</Button></Link>
                                        <Link className="linkStyle" to="/service-fee"><Button style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px'}}>Connect to Counsellor<span><FontAwesomeIcon icon={faChevronRight} className="iconRight"/></span></Button></Link>
                                        { /* <button className="btn btn-primary" style={{borderRadius: '100px', background: '#DF8F06', border: 'none', boxShadow: '0px 12px 24px #BD79054D', padding: '10px 20px', fontSize: '14px', marginLeft: '30px'}}  onClick={() => generatePDF(this.state.resultArray)} > Download PDF </button> */}
                                    </div>
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

export default withRouter(Results);
