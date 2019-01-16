import React, { PureComponent } from 'react';

class Mailchimp extends PureComponent {
  componentDidMount() {

  }


  render() {
    return (
      <React.Fragment>
        <div id="mc_embed_signup">
          <form action="https://artwillsaveus.us19.list-manage.com/subscribe/post?u=bd80fab35ff40911dcb1d61e3&amp;id=d12e0fdb52" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe to our mailing list</h2>
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group">
                	<label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                	<input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                </div>
                <div className="mc-field-group">
                	<label for="mce-FNAME">First Name </label>
                	<input type="text" value="" name="FNAME" className="" id="mce-FNAME" />
                </div>
                <div className="mc-field-group">
                	<label for="mce-LNAME">Last Name </label>
                	<input type="text" value="" name="LNAME" className="" id="mce-LNAME" />
                </div>
                	<div id="mce-responses" className="clear">
                		<div className="response" id="mce-error-response" style="display:none"></div>
                		<div className="response" id="mce-success-response" style="display:none"></div>
                	</div>
                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_bd80fab35ff40911dcb1d61e3_d12e0fdb52" tabindex="-1" value="" /></div>
                    <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
          </form>
        </div>

      </React.Fragment>
    );
  }
}

export default Mailchimp;
