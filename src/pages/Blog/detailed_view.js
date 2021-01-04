import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import Subscribe from '../../components/Subscribe';
import defaultBlog from '../../assets/images/blog_default.png';
import programBanner from '../../assets/images/programBanner.png';
import family from '../../assets/images/family.png';
import { isMobile, isTablet } from 'react-device-detect';
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import api_url  from '../../api_url';


class BlogDetail extends Component {

    constructor(props) {
      super(props);
      this.state = {
        title: '',
        description: '',
        imgurl: '',
      }
    }

    componentDidMount(){
      console.log(this.props);
      axios.get(api_url+"get_blog/"+this.props.match.params.blogID)
      .then((response) => {
          this.setState({ title: response.data.data.title })
          this.setState({ description: response.data.data.description })
          const buffer = response.data.data.image;
          var img = document.querySelector( "#img" );
          if(response.data.data.image != null){
          this.setState({ imageURL:  response.data.data.image })
          const b64 = new Buffer(buffer).toString('base64')
          const mimeType = 'image/*';
          img.src = `data:${mimeType};base64,${b64}`;
        }else{
          img.src = defaultBlog
        }
          console.log(this.state);
      }).catch((error) => {
        console.log(error);
      });
    }

    render() {
        return (
            <Fragment>
                <div className="flexCenter height" style={{backgroundImage: 'url(' + programBanner + ')', backgroundRepeat: "no-repeat", backgroundSize: "cover", height: '340px'}}>
                    <div className="programTitle">Blog Detail</div>
                </div>
                <div className={isMobile?"width-90m":"width-70m"}>
                    <div style={{fontFamily: 'Nunito-Bold', fontSize: '30px'}}>{this.state.title}</div>
                    <Row style={{marginTop: '20px'}}>
                        <Col md={12}>
                            <img id="img" alt="" style={{width: '100%', height: '350px', objectFit: 'cover'}}/>
                        </Col>

                    </Row>
                    <div className="stepsContainer">
                        <div className="gridProgramP" style={{gridTemplateColumns: '1fr 1.3fr', display: 'block'}}>
                          <p dangerouslySetInnerHTML={{__html: this.state.description}}></p>
                        </div>
                    </div>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(BlogDetail);
