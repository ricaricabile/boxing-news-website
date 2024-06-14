const INITIAL_STATE = {
    articles: [],
};
const appReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_ARTICLES': return {...state, articles: action.payload};
        default: 
            return state;
    }
}
export default appReducer;
