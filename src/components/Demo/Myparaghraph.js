
import React from "react";

const Myparagraph=(props)=>{

    console.log('MYPARAGRAPH RUNNING');
    return(
        <p>{props.children}</p>
    );
};

export default Myparagraph;