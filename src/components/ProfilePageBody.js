import React from 'react';
import CardPreview from './CardPreview';

class ProfilePageBody extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
          return (
              <div id="profilePageBody" className="profilePageBody">
                  <CardPreview></CardPreview>
              </div>
          );
    }
  }

export default ProfilePageBody;