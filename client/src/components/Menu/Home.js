import Metadata from "./Metadata";
import Product from "../product/Product";
import React from "react";
import { getProducts } from "../../actions/productActions";
import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import Loader from '../Layout/Loader';




export default function Home() {

    const { products,loading } = useSelector((state) => state.productsState);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts)
    }, [dispatch]);


    return (
        <>
            {loading ? <Loader /> :
                <div>
                    <Metadata title={'Latest Products'} />
                    <h1 className="font-bold text-xl mb-2">Latest Product</h1>
                    <div className="flex flex-wrap gap-10 justify-center" id="products">
                        {
                            products && products.map(product => (
                                <Product key={product._id} product={product} />
                            ))
                        }
                    </div>
                </div>
            }
        </>
    )
}