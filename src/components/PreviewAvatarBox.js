import React from 'react';
// import Avatar from '../images/default-avatar.gif'
import Avatar from '../components/collapsables/Avatar';

class PreviewAvatarBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    };
    
    this.handleImage = this.handleImage.bind(this);

  }

  handleImage(img) {
    this.setState({
      img: img
    });
  }
  render() {
    console.log(this.props.inputFile)
    return (
     
      
      <div id="previewAvatarBox" className="card__avatar--box"> 
      <img src={this.props.inputFile} alt="Imagen"/>
      </div>
     
    );
  }
}
export default PreviewAvatarBox;
