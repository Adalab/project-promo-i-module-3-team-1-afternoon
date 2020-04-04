import React from 'react';

class PreviewProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="PreviewProfileInfo" className="card__profileInfo--box">
          <p id="PreviewProfileInfoName" className="card__profileInfo--name">Nombre Apellido</p>
          <p id="PreviewProfileInfoJob" className="card__profileInfo--job">Front-End Developer</p>
      </div>
    );
  }
}

export default PreviewProfileInfo;