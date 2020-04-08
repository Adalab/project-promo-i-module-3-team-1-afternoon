import React from 'react';


class FillInput extends React.Component{
    constructor(props){
    super(props)
    }
    render(){
        return(
            <div className="form__flex">
                <label htmlFor={this.props.htmlFor}>{this.props.labelName}</label>
                <input  type={this.props.inputType}
                        id={this.props.inputId} 
                        name={this.props.inputName}
                        placeholder={this.props.placeHolder}
                        maxlength={this.props.maxLength}
                        required={this.props.required}
                        className={this.props.inputClassName}
                        onChange={this.props.onChange}
                />
            </div>

        );
    }
}
export default FillInput;