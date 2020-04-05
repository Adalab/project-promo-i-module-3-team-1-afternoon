import React from 'react';

class SocialButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li id="socialButtonBox" className="card__socialbuttons--box">
                <a id="emailButtonLink" class="preview__socialButton preview__socialButton--email buttonStyle1" href="" target="_blank" title="email address">
                    <i class={`icon ${this.props.iconType}`}></i>
                </a>
            </li>
        );
    }
}

export default SocialButton;