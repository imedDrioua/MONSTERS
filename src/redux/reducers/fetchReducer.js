


const initialState = {
    isPending : false,
    data : [],
    error :false,
};
export const fetchReducer= (state=initialState,action)=>{
    switch (action.type){
        case "FETCHING" :
            return {...state,isPending : true}
        case "FETCHING_SUCCESS" :
            return {...state ,data : action.payload,isPending: false}
        case "FETCHING_Failed" :
            return {...state,error: true,isPending: false}
        default : return state;
    }
}