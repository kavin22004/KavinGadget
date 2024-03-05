import axios from 'axios';
import { productsFail, productsSuccess, productsRequest } from '../slices/productsSlice';
import { productFail, productSuccess, productRequest} from '../slices/productSlice';






export const getProducts = async (dispatch) => {
    try {
        dispatch(productsRequest());
        const {data} = await axios.get('https://kavingadgetserver.onrender.com/api/products');
        dispatch(productsSuccess(data));
    } catch (error) {
        console.error("Error fetching products:", error);
        dispatch(productsFail(error.response.data.message));
    }
};



export const getProduct = id => async (dispatch) => {

    try {  
        dispatch(productRequest()) 
        const { data }  =  await axios.get(`https://kavingadgetserver.onrender.com/api/product/${id}`);
        dispatch(productSuccess(data))
    } catch (error) {
        //handle error
        dispatch(productFail(error.response.data.message))
    }
    
}