import React from 'react';
import FillInput from './FillInput';
import '../../stylesheets/Collapsables.scss';
import '../../stylesheets/Fill.scss'
import Avatar from './Avatar';


class Fill extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:''
        };
       function changeNameValue(event) {
            this.setState ({ name: event.currentTarget.value})
        }
    }
    render(){
        return(
            <section  className="form__sections form__fill">
                <div className="form__open" id="form__fill--open">
                
                <FillInput  htmlFor="name"
                            labelName="Nombre completo *"
                            inputType="text"
                            inputId="name"
                            inputName="name"
                            placeHolder="Ej. Sally Jill" 
                            maxLength={20}
                            dataName={this.state.name}
                            changeNameValue ={this.props.changeNameValue}
                            required

                />
                <FillInput
                            htmlFor="job"
                            labelName="Profesión *"
                            inputType="text"
                            inputId="job"
                            inputName="job"
                            placeHolder="Ej: Front-end unicorn" 
                            maxLength={25}
                            required
                />
                 <FillInput
                            htmlFor="photo"
                            labelName="Imagen de perfil *"
                            inputType="file"
                            inputId="photo"
                            inputName="photo"
                            inputClassName= "hidden hiddenJS js__photo--file"
                            required
                />
                <Avatar/>
                 <FillInput
                            htmlFor="email"
                            labelName="Email *"
                            inputType="email"
                            inputId="email"
                            inputName="photo"
                            placeHolder= "Ej: sally-hill@gmail.com" 
                            required
                />
                 <FillInput
                            htmlFor="phone"
                            labelName="Teléfono"
                            inputType="tel"
                            inputId="phone"
                            inputName="phone"
                            placeHolder= "Ej: 555-55-55-55"
                            required
                />
                <FillInput
                            htmlFor="linkedin"
                            labelName="LinkedIn *"
                            inputType="text"
                            inputId="linkedin"
                            inputName="linkedin"
                            placeHolder= "Ej: linkedin.com/in/sally.hill" 
                            required
                />
                 <FillInput
                            htmlFor="github"
                            labelName="Github *"
                            inputType="text"
                            inputId="github"
                            inputName="github"
                            placeHolder= "Ej: @sally-hill" 
                            required
                />
               
                </div>
            </section>
        );
    }
}

export default Fill;
