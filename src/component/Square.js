import React from "react"
class Sqaure extends React.Component{
    render(){
        return(
            <button className="btn" onClick={()=>alert("clicked")}>
            {this.props.value}</button>
        )
    }
}
export default Sqaure;