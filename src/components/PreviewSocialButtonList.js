import React from 'react';
import SocialButton from './SocialButton.js';

class PreviewSocialButtonList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul id="PreviewSocialButtonList" className="card__socialbuttons--list">
        <SocialButton/>
        <SocialButton/>
        <SocialButton/>
        <SocialButton/>
      </ul>
    );
  }
}

export default PreviewSocialButtonList;