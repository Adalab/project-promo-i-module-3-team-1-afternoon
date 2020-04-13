import React from 'react';

class PreviewResetButton extends React.Component {
    constructor(props) {
        super(props);
        /* this.clickReset = this.clickReset.bind(this); */
    }
  /*   clickReset(event){
        this.props.handleReset()
    } */
    render() {
        return (
            <button onClick = {this.props.handleReset} /* he probado poniendo la función directamente, no da error pero no pasa nada */class="previewResetButton" href="#">
                <i class="far fa-trash-alt"></i> reset
            </button>
        );
    }
}



export default PreviewResetButton;