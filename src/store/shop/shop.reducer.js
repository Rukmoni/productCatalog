import {FETCH_DATA,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR} from './shop.types';

let initialState={
    products:[],
    loading:false,
    error:null
}

function reducer(state:initialState,action){
    switch (action.type) {
        case FETCH_DATA:
          return {
            ...state,
            loading: true,
            error: null,
          };
        case FETCH_DATA_SUCCESS:
          return {
            ...state,
            loading: false,
            products: action.payload,
          };
        case FETCH_DATA_ERROR:
          return {
            ...state,
            loading: false,
            error: action.payload.error,
            products: [],
          };
        default:
          return state;
      }

}

export default reducer;