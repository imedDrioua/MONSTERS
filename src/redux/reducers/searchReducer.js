
const initialState ={
    searchField : '',
}
export const searchRobots = (state=initialState , action)=>{
    switch (action.type){
        case "SEARCH_ROBOTS" :
            return {...state , searchField : action.payload};

        default:
            return state;
    }
}