import React from 'react';
import Avatar from '../images/default-avatar.gif'
/* import Avatar from '../components/collapsables/Avatar'; */
const fr = new FileReader();

class PreviewAvatarBox extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      img: ''
    };
 } 
  render() {
    
    return (
     
      
      <div id="previewAvatarBox" className="card__avatar--box"> 
      <img src={this.props.inputFile} alt="Imagen"/>
      </div>
     
    );
  }
}
export default PreviewAvatarBox;
