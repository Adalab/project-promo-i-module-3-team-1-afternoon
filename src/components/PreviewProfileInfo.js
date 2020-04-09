import React from 'react';

class PreviewProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="PreviewProfileInfo" className="card__profileInfo--box">
          <p id="PreviewProfileInfoName" className="card__profileInfo--name">
          {(this.props.name === '' ? 'Nombre Apellido' : this.props.name)}
          </p>
          <p id="PreviewProfileInfoJob" className="card__profileInfo--job">{(this.props.job === '' ? 'Front-End Developer' : this.props.job)}
          </p>
      </div>
    );
  }
}
/* PreviewProfileInfo.defaultProps = {
  name: 'Nombre Apellido',
  job: 'Front-End Developer'
} */

export default PreviewProfileInfo;