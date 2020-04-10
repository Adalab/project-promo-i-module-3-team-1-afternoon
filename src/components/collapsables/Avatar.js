import React from 'react';

const fr = new FileReader();

class Avatar extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.writeImage = this.writeImage.bind(this);
        this.fileInput = React.createRef();
        this.state = {
            img: ''
          };}


          handleSubmit(event) {
            event.preventDefault();
            const myFile = this.fileInput.current.files[0];
            fr.addEventListener('load', this.writeImage);
            fr.readAsDataURL(myFile);
          }
        
          writeImage() {
              this.setState({
              img: fr.result
            });
            this.props.handleImage(fr.result);
              }


    render(){
        return(
            <div className="form__open" id="form__fill--open">
                <label for="photo">Imagen de perfil <span>*</span></label>
                <input type="file" ref={this.fileInput} id="photo" name="photo" className="hiddenJS js__photo--file" required/> 
                <div class="photo__upload"> 
                <button class="photo__upload--btn js__photo--btn" id="submit">Añadir imagen</button> 
                    <div class="thumbnail js__photo--thumbnail"> 
                        <img src={this.state.img} alt="Imagen" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Avatar;



/*

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <img src={this.state.img} alt="Imagen" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

*/