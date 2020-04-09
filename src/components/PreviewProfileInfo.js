import React from 'react';
import '../stylesheets/Preview.scss';


class PreviewProfileInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      // infoStyle1  {`ralph-wrapper ${props.colorPalette === '1' ? "red" : props.colorPalette === '2' ? "blue" : "green"}`}>
      
      // "card__profileInfo--name"
      <div id="PreviewProfileInfo" className="card__profileInfo--box">
          <p id="PreviewProfileInfoName" className={`card__profileInfo--name ${this.props.value === "1" ? "red" : this.props.checked === "2" ? "red" : this.props.checked === "3" ? "red" : "red"}`}>
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