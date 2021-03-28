import { fetchData, fetchDataSuccess, fetchDataError } from '../store/shop/shop.actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';

async function fetchDataFromApi() {
	
	console.log('fetchDataFromApi');
	try {
		const response=await axios.get(`http://localhost:5000/phones`)
		return response.data.data;
	} catch (err) {
		throw err;
	}
	/*  return (dispatch) => {
   
    axios
      .get(`http://localhost:5000/phones`)
      .then((response) => {
        setTimeout(() => dispatch(fetchDataSuccess(response.data.data)), 35 * 60);
      })
      .catch((error) => {
        dispatch(fetchDataError(error));
      });
  }; */
}

export { fetchDataFromApi };
