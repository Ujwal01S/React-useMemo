
import React from "react";
import Myparagraph from "./Myparaghraph";
const DemoOutput = (props)=>{
    
    console.log('DEMO RUNNING');

    return(        
        <Myparagraph>
           {props.show ? 'This is new' : ''}
        </Myparagraph>
    );
};

export default React.memo(DemoOutput);