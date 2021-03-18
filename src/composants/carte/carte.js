import React from 'react';

const Carte = ({id,name,email})=>{
    return (
        <div className="bg-light-green ba bw1 b--green br2 grow dib tc ma2">
            <img src={`https://robohash.org/${id}`} alt="" />
            <h2 >{name}</h2>
            <h3>{email}</h3>
        </div>
    );
};

export default Carte;