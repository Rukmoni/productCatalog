import { runSaga } from 'redux-saga';
import * as api from '../../apiAccess/shopApi';
import { fetchData, fetchDataSuccess } from './shop.actions';
import { getProductListSaga } from './shop.saga';


describe('getProductListSaga', () => {
	it('should call api and dispatch success action', async () => {
		const dummyProducts = { id: 1, name: 'Nokia' };
		const request = jest.spyOn(api, 'fetchDataFromApi').mockImplementation(() => Promise.resolve(dummyProducts));
        
        const dispatched = [];
		const result = await runSaga(
			{
				dispatch: (action) => dispatched.push(action),
			},
			getProductListSaga
		).toPromise();
		expect(request).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchDataSuccess(dummyProducts)]);
      
		request.mockClear();
	});
});
