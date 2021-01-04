import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button, Card, CardBody, Col, Row } from 'reactstrap';
import stress1 from '../../assets/images/stress1.png';
import stress2 from '../../assets/images/stress2.png';
import stress3 from '../../assets/images/stress3.png';
import stress from '../../assets/images/stress-mgmt.png';
import curve1 from '../../assets/images/curve1.png';
import curve2 from '../../assets/images/curve2.png';
import { isMobile, isTablet } from 'react-device-detect';
import programBanner from '../../assets/images/programBanner.png';
import RecentCourses from '../../components/RecentCourses';
import Subscribe from '../../components/Subscribe';
import Includes from '../../components/Includes';

class StressDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
      }
      render(){
        return(
          <Fragment>
              <div className="flexCenter height" style={{backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '340px'}}>
                  <div className="programTitle">Tension &amp; Stress Service Detail</div>
              </div>
              <div className={isMobile?"width-90m":"width-70m"}>
                  
                  <div className="stepsContainer">
                      <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr'}}>
                          <div><img src={stress1} alt="" style={{width: '100%'}}/></div>
                          <div>
                              <span className="programHeaders">You before this program</span>
                              <ul className="listProgram">
                                  <li>Have sleep and eating issues</li>
                                  <li>Feel insecure and restless</li>
                                  <li>Experience sudden anger outbursts</li>
                              </ul>
                          </div>
                      </div>

                      <div className="gridProgramP" style={{gridTemplateColumns: '1.3fr 1fr'}}>
                          <div>
                              <span className="programHeaders">You during this program</span>
                              <ul className="listProgram">
                                  <li>Learn relaxation techniques to manage your stress</li>
                                  <li>Improve your critical thinking skills</li>
                                  <li>Build up your inner strength</li>
                              </ul>
                          </div>
                          <div><img src={stress2} alt="" style={{width: '100%'}}/></div>
                      </div>
                      <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr'}}>
                          <div><img src={stress3} alt="" style={{width: '100%'}}/></div>
                          <div>
                              <span className="programHeaders">You after this program</span>
                              <ul className="listProgram">
                                  <li>Have a better work-life balance</li>
                                  <li>Easily cope with your daily responsibilities</li>
                                  <li>Overcome challenges with ease</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <Subscribe/>
          </Fragment>
        )
      }
}
export default withRouter(StressDetail);
