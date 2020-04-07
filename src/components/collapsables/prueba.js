import React from 'react';
import FormList from './FormList';
import CardPreview from './CardPreview';
​
class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
    this.state = {
      activePanel:'' ,
      rotatearrow: '',
    }
  }
​
  handleCollapse(targetId) {
    if(targetId !== this.state.activePanel){
      this.setState({activePanel:targetId})
      this.setState({rotatearrow:targetId})
    } else {
      this.setState({activePanel: ''})
      this.setState({rotatearrow: ''})
    }
  }
​
  render() {
        return (
            <div id="profilePageBody" className="profilePageBody">
                <CardPreview></CardPreview>
                <FormList handleCollapse={this.handleCollapse}
                rotatearrow={this.state.rotatearrow}
                 activePanel={this.state.activePanel}></FormList>
            </div>
        );
  }
}
​
export default ProfilePageBody;