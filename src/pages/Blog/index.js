import { faChevronRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'rc-tabs/assets/index.css';
import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import Dotdotdot from 'react-dotdotdot';
import family from '../../assets/images/family.png';
import defaultBlog from '../../assets/images/blog_default.png';
import { Link, withRouter } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, Col, Row } from 'reactstrap';
import programBanner from '../../assets/images/programBanner.png';
import Subscribe from '../../components/Subscribe';
import axios from 'axios';
import api_url  from '../../api_url';
import ImageToBase64 from 'image-to-base64';
var Buffer = require('buffer/').Buffer

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
        blogs: null,
        selectedFile: null,
        imageURLs: null,
      }
    }


componentDidMount = () => {
  this.get_blogs()
}

onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
    })
  var image_url = window.URL.createObjectURL(event.target.files[0]);
  this.setState({imageURL :image_url })
  }

  onClickHandler = (e) => {
     e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.selectedFile);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post(api_url+"create_blog",formData,config)
            .then((response) => {
                alert("The file is successfully uploaded");
            }).catch((error) => {
        });
    }

    get_blogs = () => {
      console.log("get blog");
      axios.get(api_url+"get_blogs")
      .then((response) => {
        this.setState({ blogs: response.data.data})
        const mimeType = 'image/*';
        var ary=[];
        response.data.data.map((res, index) => {
          if(res.image != null){
            const buffer = res.image;
            this.setState({imageURL:  res.image})
            const b64 = new Buffer(buffer).toString('base64')
            ary.push({'id': res.id, url: `data:${mimeType};base64,${b64}`})
          }
          this.setState({ imageURLs: ary})
        })
      }).catch((error) => {
        console.log(error);
      });
    }

    render() {
        return (
            <Fragment>
                <div style={{textAlign: 'center', paddingTop: '260px', width: '80%', margin: 'auto'}}>
                {/*<Row>
                <input type="file" name="file" onChange={this.onChangeHandler}/>
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
                <img src={(event) => this.temp(this.setState.imageURL)} />
                <img id="img" />
                </Row> */}
                    <Row>
                        <Col md={12}>
                            <Row>
                                { this.state.blogs != null ? this.state.blogs.map((blog, index) =>
                                  <Col md={4} key={index}>
                                  <Link to={`/blog/details/${blog.id}`}  className="linkStyle blackLink"><Card className="shadowCard noBorder mb-30">
                                      <CardImg top src={this.state.imageURLs !=null ? (this.state.imageURLs.find(x => x.id === blog.id) != undefined ? this.state.imageURLs.find(x => x.id === blog.id).url : defaultBlog) : ''} alt="Card image cap" className={index%3 == 0 ? "img_360" : "img_240"}/>
                                      <CardBody>
                                          {/*}<Dotdotdot clamp={1}><div style={{fontFamily: 'Roboto-SemiBold', fontSize: '15px'}}>{blog.title}</div></Dotdotdot> */}
                                          <div style={{fontFamily: 'Roboto-Bold', fontSize: '26px'}}>{blog.title}</div>
                                          <Dotdotdot clamp={3}><div style={{fontSize: '12px', marginTop: '10px', marginBottom: '10px'}} dangerouslySetInnerHTML={{__html: blog.description}}></div></Dotdotdot>
                                      </CardBody>
                                  </Card>
                                  </Link>
                                  </Col>
                                  ) : ''}
                            </Row>
                        </Col>

                    </Row>
                </div>
                <Subscribe/>
            </Fragment>
        )
    }
}

export default withRouter(Blog);
