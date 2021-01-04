import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import subscribe from '../../assets/images/subscribe.png';
import { Input, Button } from 'reactstrap';
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default class Subscribe extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div className="flexCenter" style={{backgroundImage: 'url(' + subscribe + ')', backgroundRepeat: "no-repeat", backgroundSize: "contain", backgroundPosition: 'center', height: '350px'}}>
                    <div className="width-70mm" style={{textAlign: 'center'}}>
                        <div style={{fontFamily: 'Nunito-Bold', fontSize: '44px', color: 'white', marginBottom: '40px'}}>Subscribe to our newsletter</div>
                        <div style={{ alignItems: 'center', width: '70%', margin: 'auto'}}>

                            {/* Begin Mailchimp Signup Form */}
                            <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css" />
                            {/*  <style type="text/css" dangerouslySetInnerHTML={{__html: "\n\t#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }\n\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. * /> */}
                            <div id="mc_embed_signup">
                              <form action="https://gmail.us2.list-manage.com/subscribe/post?u=b00ea9f4abca461eb44a0f419&id=9a15a1fb94" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate style={{textAlign: 'center' }}>
                                <div id="mc_embed_signup_scroll">
                                  <div className="mc-field-group">
                                    <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" style={{display: 'inline-block', borderRadius: '100px', border: 'none', padding: '20px', margin: 'auto', height: '58px', fontSize: '16px'}}/>
                                  </div>
                                  <div id="mce-responses" className="clear">
                                    <div className="response" id="mce-error-response" style={{display: 'none'}} />
                                    <div className="response" id="mce-success-response" style={{display: 'none'}} />
                                  </div>    {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true"><input type="text" name="b_b00ea9f4abca461eb44a0f419_9a15a1fb94" tabIndex={-1} defaultValue /></div>
                                  <div className="clear"><input type="submit" defaultValue="Subscribe" name="subscribe" id="mc-embedded-subscribe" style={{width: 'fit-content', borderRadius: '100px', border: 'none', background: '#DF8F06', padding: '10px 20px', height: '58px', fontSize: '15px', width: '200px'}}  className="button" /></div>
                                </div>
                              </form>
                            </div>
                            {/*End mc_embed_signup*/}
                          </div>

                        </div>
                    </div>

            </Fragment>
        )
    }
}
