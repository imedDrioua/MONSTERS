
export const searchRobots = (event)=>({
    type : "SEARCH_ROBOTS",
        payload : event.target.value
});

export const fetchingData = async (dispatch)=>{
     dispatch({type : "FETCHING"});
     try {
         const data= await fetch('https://jsonplaceholder.typicode.com/users');
         const jData = await data.json();
         dispatch({type : "FETCHING_SUCCESS",payload : jData});
     }catch(err){
         dispatch({type : "FETCHING_FAILED"});
     }

  /*  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            dispatch({type : "FETCHING_SUCCESS",payload : users});
        }).catch(error=>{
            if(error) dispatch({type : "FETCHING_FAILED"});
    });*/
};
