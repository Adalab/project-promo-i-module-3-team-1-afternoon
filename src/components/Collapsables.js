import React from 'react';
import '../stylesheets/Collapsables.scss';


// const Collapsables = props =>{


class Collapsables extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="form__closed">
             
                {this.props.children}   
                
            </div>
        );
    }
}
export default Collapsables;