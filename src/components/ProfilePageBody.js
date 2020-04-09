import React from 'react';
import FormList from './FormList';
import CardPreview from './CardPreview';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
    this.handleInputValue= this.handleInputValue.bind(this);
    this.state = {
      activePanel:'' ,
      rotatearrow: '',
      userInfo:{
      name:'',
      job:'',
      email:'',
      phone:'',
      linkedin:'',
      github:'',
   
      }

    }
  }
  handleInputValue(currentTargetName,currentTargetValue) {
    this.setState (prevState => {
      return{
        userInfo:{
          ...prevState.userInfo,
          [currentTargetName]: currentTargetValue
          /* name:currentTarget.value,
          job:currentTarget.value,
          email:currentTarget.value,
          phone:currentTarget.value,
          linkedin:currentTarget.value,
          github:currentTarget.value */
          
        }
      }
    })
  }

  handleCollapse(targetId) {
    if(targetId !== this.state.activePanel){
      this.setState({activePanel:targetId})
      this.setState({rotatearrow:targetId})
    } else {
      this.setState({activePanel: ''})
      this.setState({rotatearrow: ''})
    }
  }

  render() {
    
    return (
        <div id="profilePageBody" className="profilePageBody">
            <CardPreview  valueName={this.state.userInfo.name}
                          valueJob={this.state.userInfo.job}
                          valueEmail={this.state.userInfo.email}
                          valuePhone={this.state.userInfo.phone}
                          valueLinkedin={this.state.userInfo.linkedin}
                          valueGithub={this.state.userInfo.github}
                          
                          

            />
            <FormList     handleCollapse={this.handleCollapse}
                          rotatearrow={this.state.rotatearrow}
                          activePanel={this.state.activePanel}
                          valueName={this.state.userInfo.name}
                          valueJob={this.state.userInfo.job}
                          valueEmail={this.state.userInfo.email}
                          valuePhone={this.state.userInfo.phone}
                          valueLinkedin={this.state.userInfo.linkedin}
                          valueGithub={this.state.userInfo.github}
                          handleInputValue={this.handleInputValue}


            />
        </div>
    );
  }
}
export default ProfilePageBody;