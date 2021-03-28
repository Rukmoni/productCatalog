import {FETCH_DATA_SAGA,FETCH_DATA_SUCCESS,FETCH_DATA_ERROR} from './shop.types';

export function fetchData() {
    return {
      type: FETCH_DATA_SAGA,
    };
  }
  
  export function fetchDataSuccess(data) {
    return {
      type: FETCH_DATA_SUCCESS,
      payload:data,
    };
  }
  
  export function fetchDataError(error) {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error },
    };
  }
  