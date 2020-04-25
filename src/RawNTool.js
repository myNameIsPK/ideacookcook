import React,{Component} from "react";
import "./RawNTool.css";
import {FaCarrot, FaCircle, FaToolbox, FaUtensilSpoon} from 'react-icons/fa';

const Tools=(props)=> {
    const listTs = props.L.map((tool) =>
    <div className="RNT">
        <div style={{width:"180px",wordWrap:"break-word"}}>{tool}</div>
        {/* <div style={{width:"50px",textAlign:"center"}}>{tool.Quantity}</div> */}
    </div>
    )
    return(
        <div className="all">
        <div className="headerrr">Tools <FaUtensilSpoon/></div>            
            <div className="allTools">
                {listTs}
            </div>
        </div>
    );
}

const Raws=(props)=> {
    const listRs = props.L.map((raw) =>
    <div className="RNT">
        <div style={{width:"180px",wordWrap:"break-word"}}>{raw.RawFood}</div>
        <div style={{width:"50px",textAlign:"center"}}>{raw.Quantity}</div>
        <div style={{width:"90px",textAlign:"right"}}>{raw.Unit}</div>
    </div>
    )
    return(
        <div className="all">            
            <div className="headerrr">Ingredients <FaCarrot/></div>
            <div className="allRaws">
            {listRs}
            </div>
        </div>
    );
}

class RawNTool extends Component {
    render(){
        return(
            <div className="RawNTool">
                <Tools L={this.props.Ts}/>
                <Raws L={this.props.Rs}/>
            </div>
        );
    }
}

export default RawNTool;