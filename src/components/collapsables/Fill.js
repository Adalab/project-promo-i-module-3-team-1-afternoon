import React from 'react';
import FillInput from './FillInput';
import '../../stylesheets/Collapsables.scss';
import '../../stylesheets/Fill.scss'
import Avatar from './Avatar';


class Fill extends React.Component{
    constructor(props){
        super(props);
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
                            required = "required" /* se cambia */
                />
                <FillInput
                            htmlFor="job"
                            labelName="Profesión *"
                            inputType="text"
                            inputId="job"
                            inputName="job"
                            placeHolder="Ej: Front-end unicorn" 
                            maxLength={25}
                            required = "required" /* se cambia */ 
                />
                 <FillInput
                            htmlFor="photo"
                            labelName="Imagen de perfil *"
                            inputType="file"
                            inputId="photo"
                            inputName="photo"
                            required = "required" /* se cambia */ 
                            inputClassName= "hidden hiddenJS js__photo--file"
                />
                <Avatar/>
                 <FillInput
                            htmlFor="email"
                            labelName="Email *"
                            inputType="email"
                            inputId="email"
                            inputName="photo"
                            required = "required" /* se cambia */ 
                            placeHolder= "Ej: sally-hill@gmail.com" 
                />
                 <FillInput
                            htmlFor="phone"
                            labelName="Teléfono"
                            inputType="tel"
                            inputId="phone"
                            inputName="phone"
                            required = "required"
                            placeHolder= "Ej: 555-55-55-55"
                />
                <FillInput
                            htmlFor="linkedin"
                            labelName="LinkedIn *"
                            inputType="text"
                            inputId="linkedin"
                            inputName="linkedin"
                            required = "required"
                            placeHolder= "Ej: linkedin.com/in/sally.hill" 
                />
                 <FillInput
                            htmlFor="github"
                            labelName="Github *"
                            inputType="text"
                            inputId="github"
                            inputName="github"
                            required = "required"
                            placeHolder= "Ej: @sally-hill" 
                />
               
                </div>
            </section>
        );
    }
}

export default Fill;
