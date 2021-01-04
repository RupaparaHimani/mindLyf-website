import React, { Component, Fragment } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { withRouter } from 'react-router-dom';

class Terms extends Component {

    constructor(props) {
        super(props);
        this.state = {
    }
}
    render() {
        return (
            <Fragment>
                <div style={{margin: '0px 25px', paddingTop: isMobile||isTablet?'':'76px'}}>
                <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', paddingTop:'94px',textAlign: 'center'}}>TERMS AND CONDITIONS</div>
                    <div>By accessing the website www.mindlyf.com you are agreeing to be bound by these terms of service,
                        all applicable laws and regulations, and agree that you are responsible for compliance with any
                        applicable local laws. If you do not agree with any of these terms, you are prohibited from using or
                        accessing this site. The materials contained in this website are protected by applicable copyright and
                        trademark law.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Privacy Policy</div>
                        <div>It is mindlyf LLP’s policy to respect your privacy regarding any information we may collect while
                        operating our website. Accordingly, we have developed this privacy policy in order for you to
                        understand how we collect, use, communicate, disclose and otherwise make use of personal
                        information. We have outlined our privacy policy below. We will collect personal information by lawful
                        and fair means and, where appropriate, with the knowledge or consent of the individual concerned.
                        Before or at the time of collecting personal information, we will identify the purposes for which
                        information is being collected. We will collect and use personal information solely for fulfilling those
                        purposes specified by us and for other ancillary purposes, unless we obtain the consent of the
                        individual concerned or as required by law. Personal data should be relevant to the purposes for
                        which it is to be used, and, to the extent necessary for those purposes, should be accurate,
                        complete, and up-to-date. We will protect personal information by using reasonable security
                        safeguards against loss or theft, as well as unauthorized access, disclosure, copying, use or
                        modification. We will readily make available to client the information about our policies and practices
                        relating to the management of personal information. We will only retain personal information for as
                        long as necessary for the fulfilment of those purposes. We are committed to conducting our business
                        in accordance with these principles in order to ensure that the confidentiality of personal information
                        is protected and maintained. mindlyf LLP may change this privacy policy from time to time at mindlyf
                        LLP’s sole discretion.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Confidentiality</div>
                    <div>Confidentiality is an essential part of all counselling and psychotherapy. It underpins the client&#39;s
                        sense of safety and trust and contributes to making the therapeutic relationship different from any
                        other. The Therapy Practice holds all records securely and will ensure confidentiality in the
                        treatment of any information held about its clients, All information recorded and held is solely for the
                        purpose of maintaining effective therapeutic treatment. All information will be kept confidential unless
                        the client and therapist agree to discuss something with a third party. Where appropriate a consent
                        form will be used. The only reasons for breaking confidentiality would be if the therapist considered
                        that your life was at risk, if another person&#39;s life was at risk or if the therapist was liable to civil or
                        criminal court proceedings if the information was not disclosed. If at all possible this would be
                        discussed beforehand.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Disclaimer</div>
                    <div>The materials on mindlyf LLP’s website are provided on an ‘as is’ basis. mindlyf LLP makes no
                        warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                        without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose,
                        or non-infringement of intellectual property or other violation of rights. Further, mindlyf LLP does not
                        warrant or make any representations conce]rning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this
                        site.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Anti-discrimination policy</div>
                    <div>Mindlyf is strongly committed to anti-discrimination. It values difference and diversity and does not
                        discriminate on the grounds of age, gender and gender identity, sexual preference or orientation,
                        marital/partnership status, religion, race, colour, national origin, disability, heritage or political belief.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Cancellation and missed session policy</div>
                    <div>If for any reason you are unable to attend your appointment, please let us know as soon as possible.
                        The required notice for cancellation is 48 hours. Where there is less notice of cancellation or if you
                        do not attend your appointment you will be charged the full fee. With adequate advanced notice,
                        where possible, you may be offered an alternative appointment. You will be given as much advance
                        notice as possible in terms of the holidays or needing to cancel your appointment for any other
                        reason.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Fees And Payments</div>
                    <div>The duration of any Counsellor session would range from 40-60 minutes. You will be charged
                        according to the therapist assigned to you. You confirm and agree that all payment related
                        information that you provided and will provide in the future, to or through the Platform, are accurate,
                        current and correct and will continue to be accurate, current and correct. You confirm and agree to
                        use only payment means (credit cards or others) which you are dully and fully authorized to use.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Limitations</div>
                    <div>In no event shall mindlyf LLP or its suppliers be liable for any damages (including, without limitation,
                        damages for loss of data or profit, or due to business interruption) arising out of the use or inability to
                        use the materials on mindlyf LLP’s website, even if mindlyf LLP or a mindlyf LLP authorized
                        representative has been notified orally or in writing of the possibility of such damage. Because some
                        jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential
                        or incidental damages, these limitations may not apply to you.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Modifications</div>
                    <div>Mindlyf LLP may revise these terms of service for its website at any time without notice. By using
                        this website, you are agreeing to be bound by the then current version of these terms of service.</div>
                    <div style={{fontSize: '1.3rem', fontFamily: 'Roboto-Bold', marginTop:'30px',textAlign: 'center'}}>Governing Law</div>
                    <div>These terms and conditions are governed by and construed in accordance with the laws of
                        Maharashtra and you irrevocably submit to the exclusive jurisdiction of the courts in that State or
                        location.</div><br/>
                    <div style={{marginBottom: '40px'}}>Mindlyf follows the Code of ethics</div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Terms);