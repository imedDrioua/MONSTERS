import React from 'react';

import Carte from "../carte/carte";


const CarteListe = ({data})=>{
    return data.length ? (
        <div>
            {
                data.map((robot) =>{
                    return <Carte key={robot.id} email={robot.email} name={robot.name} id={robot.id}/>
                } )
            }
        </div>
    ) :<h1>There is nothing mother fucker ,,,,!!!!</h1>
}
export default CarteListe;