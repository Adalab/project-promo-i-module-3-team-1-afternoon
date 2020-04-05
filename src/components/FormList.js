import React from 'react';
import Collapsables from './Collapsables';
import Design from './Design';
import Share from './Share.js';
import Fill from './Fill';

import '../stylesheets/ProfilePage.scss';


class FormList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('hey :)');
    return (
      <div className="grid-1">
        <ul id="formList" className="formList">
          <Collapsables>
            <h2 className="form__title"><i className="form__icon far fa-object-ungroup"></i>Diseña</h2>
            <button className="form__arrow--design" aria-label="Desplegar"><i className="fas fa-chevron-down"></i></button>
          </Collapsables>
        
        <Design />

          <Collapsables>
            <h2 className="form__title"><i className="form__icon far fa-keyboard"></i>Rellena</h2> <button className="form__arrow--fill" aria-label="Desplegar"><i className="fas fa-chevron-down"></i></button>
          </Collapsables>
        <Fill />
          <Collapsables>
            <h2 className="form__title"><i className="form__icon fas fa-share-alt"></i>Comparte</h2> <button className="form__arrow--fill" aria-label="Desplegar"><i className="fas fa-chevron-down"></i></button>
          </Collapsables>
           <Share/> 

        </ul>
      </div>
    );
  }
}

export default FormList;