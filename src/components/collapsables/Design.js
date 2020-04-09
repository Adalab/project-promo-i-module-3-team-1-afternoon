import React from 'react';
import '../../stylesheets/Design.scss';
import InputRadio from '../InputRadio';

class Design extends React.Component {
    constructor(props) {
        super(props);
    }

handlePaletteChange = (evt)=>{
this.props.handleInputValue(evt.currentTarget.value);
}
    render() {
        return (

            <div className="form__open" id="form__design--open">
                <div className="palettesContainer">
                    <h3>colores</h3>

                    <div className="paletteChoices">
                        {/* <InputRadio
                                    type = 'radio'
                                    id = 'paletteOne'
                                    name= 'input-palette'
                                    value= {1}
                                    checked 
                                    nameGrid1='palette-grid grid-one'
                                    labelName1='palOne_colOne'
                                    labelName2='palOne_colTwo'
                                    labelName3='palOne_colThree'
                                    />
                       
                        <InputRadio
                                    type = 'radio'
                                    id = 'paletteTwo'
                                    name= 'input-palette'
                                    value= {2}
                                    checked 
                                    nameGrid1='palette-grid grid-two'
                                    labelName1='palTwo_colOne'
                                    labelName2='palTwo_colTwo'
                                    labelName3='palTwo_colThree'
                                    />

                        <InputRadio
                                    type = 'radio'
                                    id = 'paletteThree'
                                    name= 'input-palette'
                                    value= {3}
                                    checked 
                                    nameGrid1='palette-grid grid-three'
                                    labelName1='palThree_colOne'
                                    labelName2='palThree_colTwo'
                                    labelName3='palThree_colThree'
                                    />

                        <InputRadio
                                    type = 'radio'
                                    id = 'paletteFour'
                                    name= 'input-palette'
                                    value= {4}
                                    checked 
                                    nameGrid1='palette-grid grid-four'
                                    labelName1='palFour_colOne'
                                    labelName2='"palFour_colTwo'
                                    labelName3='palFour_colThree'
                                    />   */}


                        <input type="radio" id="paletteOne" class="radio_button rb_one" name="input-palette" value="1" onChange={handlePaletteChange} checked={this.props.paletteValue === '1' ? true : false}>
                        </input>
                        <label forHtml="paletteOne" className="palette-grid grid-one">
                            <div className="palOne_colOne"></div>
                            <div className="palOne_colTwo"></div>
                            <div className="palOne_colThree"></div>
                        </label>

                        <input type="radio" id="paletteTwo" className="radio_button rb_two" name="input-palette" value="2" onChange={handlePaletteChange} checked={this.props.paletteValue === '2' ? true : false}></input>
                        <label for="paletteTwo" class="palette-grid grid-two">
                            <div className="palTwo_colOne"></div>
                            <div className="palTwo_colTwo"></div>
                            <div className="palTwo_colThree"></div>
                        </label>

                        <input type="radio" id="paletteThree"
                            className="radio_button rb_three" name="input-palette" value="3" onChange={handlePaletteChange} checked={this.props.paletteValue === '3' ? true : false}></input>
                        <label for="radioButtonThree" className="palette-grid grid-three">
                            <div className="palThree_colOne"></div>
                            <div className="palThree_colTwo"></div>
                            <div className="palThree_colThree"></div>
                        </label>

                        <input type="radio" id="paletteFour"
                            className="radio_button rb_four" name="input-palette" value="4" onChange={handlePaletteChange} checked={this.props.paletteValue === '4' ? true : false}></input>
                        <label for="radioButtonFour" class="palette-grid grid-four">
                            <div className="palFour_colOne"></div>
                            <div className="palFour_colTwo"></div>
                            <div className="palFour_colThree"></div>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}


export default Design