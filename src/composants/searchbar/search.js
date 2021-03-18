import React from 'react';



const SearchBar = ({changed})=>{
    return(
        <input onChange={changed} className={"bg-light-green ba f2 tc ma3 serif"} type={"text"} placeholder={"Search"}/>
    );
};

export default SearchBar;