import React from 'react';
import '../stylesheets/Collapsables.scss';

const Collapsables = props =>{
    return(
        <div className="form__closed">
                <h2 className="form__title"><i className="form__icon far fa-object-ungroup"></i>Diseña</h2>
                <button className="form__arrow--design form__arrow--collapse" aria-label="Desplegar"><i className="fas fa-chevron-down"></i></button>
            </div>
    );

}

export default Collapsables;