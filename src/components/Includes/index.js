import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import inc1 from '../../assets/images/inc1.png';
import inc2 from '../../assets/images/inc2.png';
import inc3 from '../../assets/images/inc3.png';
import inc4 from '../../assets/images/inc4.png';
import inc5 from '../../assets/images/inc5.png';

class Includes extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div style={{background: '#FAFAFA'}}>
                    <div className="width-70" style={{margin: 'auto', padding: '40px 0px'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '30px', marginBottom: '20px'}}>What includes on this program</div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}><img src={inc1} alt="" style={{height: '15px', objectFit: 'contain'}}/></span>
                            <span>5 interactive counselling sessions</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}><img src={inc2} alt="" style={{height: '15px', objectFit: 'contain'}}/></span>
                            <span>Personal Counsellor</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}><img src={inc3} alt="" style={{height: '15px', objectFit: 'contain'}}/></span>
                            <span>Practical Guidance</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left', marginBottom: '10px'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}><img src={inc4} alt="" style={{height: '15px', objectFit: 'contain'}}/></span>
                            <span>Tasks/Exercises</span>
                        </div>
                        <div className="flexCenter" style={{justifyContent: 'left'}}>
                            <span style={{fontFamily: 'Nunito-Bold', fontSize: '20px', marginRight: '15px'}}><img src={inc5} alt="" style={{height: '15px', objectFit: 'contain'}}/></span>
                            <span>Reports</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Includes);
