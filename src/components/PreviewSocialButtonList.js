import React from 'react';
import SocialButton from './SocialButton.js';

class PreviewSocialButtonList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul id="PreviewSocialButtonList" className="card__socialbuttons--list">
        <SocialButton iconType="far fa-envelope"/>
        <SocialButton iconType="fas fa-mobile-alt"/>
        <SocialButton iconType="fab fa-linkedin-in"/>
        <SocialButton iconType="fab fa-github-alt"/>
      </ul>
    );
  }
}

export default PreviewSocialButtonList;