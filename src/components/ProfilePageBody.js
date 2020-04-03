import React from 'react';
import FormList from './FormList';
import CardPreview from './CardPreview';

class ProfilePageBody extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
          return (
              <div id="profilePageBody" className="profilePageBody">
                  <CardPreview></CardPreview>
                  <FormList></FormList>
              </div>
          );
    }
  }

export default ProfilePageBody;