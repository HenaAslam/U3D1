import { Component } from "react";

class ImageComponent extends Component{
render(){
    return(
        <img className={this.props.myCssClass} src={this.props.srcFile} alt={this.props.alt}/>
    )
}
}
export default ImageComponent