import React from 'react';


const Scroll = (params)=>{
    return(
        <div className={"pa3"} style={{overflowY:"scroll",border:"1px solid black ",height:"800px"}}>
            {
                params.children
            }
        </div>
    )
}
export default Scroll;