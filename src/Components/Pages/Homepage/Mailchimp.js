import React, { PureComponent } from 'react';






var displayNone = {
  display: "none",
};

var divStyle = {
  position: "absolute",
  left: "-5000px"
};

class Mailchimp extends PureComponent {
  componentDidMount() {

  }


  render() {
    return (
      
      <React.Fragment>
        <div id="mc_embed_signup">
          <form action="https://artwillsaveus.us19.list-manage.com/subscribe/post?u=bd80fab35ff40911dcb1d61e3&amp;id=d12e0fdb52" method="POST" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
            <div id="mc_embed_signup_scroll">
              <h2>Subscribe</h2>
              <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
              <div className="mc-field-group">
                <label for="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                <input type="email"  name="EMAIL" className="required email" id="mce-EMAIL" />
                <div id="mce-responses" className="clear">
                    <div className="response" id="mce-error-response" style={displayNone}></div>
                    <div className="response" id="mce-success-response" style={displayNone}></div>
                </div>    
              <div style={divStyle} aria-hidden="true"><input type="text" name="b_bd80fab35ff40911dcb1d61e3_d12e0fdb52" tabindex="-1" value="" /></div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
              </div>
            </div>
          </form>
        </div> 


      </React.Fragment>


    );
  }
}

export default Mailchimp;
