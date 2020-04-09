import React from 'react';
import FormList from './FormList';
import CardPreview from './CardPreview';

class ProfilePageBody extends React.Component {
  constructor(props) {
    super(props);
    this.handleCollapse = this.handleCollapse.bind(this)
    this.handlePaletteChange = this.handlePaletteChange.bind(this)
    this.state = {
      activePanel: '',
      rotatearrow: '',

      

      }
    }
  

  handleCollapse(targetId) {
    if (targetId !== this.state.activePanel) {
      this.setState({ activePanel: targetId })
      this.setState({ rotatearrow: targetId })
    } else {
      this.setState({ activePanel: '' })
      this.setState({ rotatearrow: '' })
    }
  }

//   handlePaletteChange(checkedPaletteValue) {
//     this.setState((prevState) => {
//         let newPaletteValue = prevState.paletteValue;
//         let newUserInfo = prevState.userInfo;

//         if (checkedPaletteValue === '1') {
//             newPaletteValue = '1'
//         }
//         if (checkedPaletteValue === '2') {
//             newPaletteValue = '2'
//         }
//         if (checkedPaletteValue === '3') {
//             newPaletteValue = '3'
//         }
//         return {
//             userInfo: { ...newUserInfo, "palette": newPaletteValue}
//         }
//     })
// }

  render() {
    return (
      <div id="profilePageBody" className="profilePageBody">
        <CardPreview></CardPreview>
        <FormList handleCollapse={this.handleCollapse}
          rotatearrow={this.state.rotatearrow}
          activePanel={this.state.activePanel}
          handlePaletteChange = {this.handlePaletteChange}>

          </FormList>
      </div>
    );
  }
}

export default ProfilePageBody;