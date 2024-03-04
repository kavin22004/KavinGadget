import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../actions/productActions';
import { useParams } from 'react-router-dom';
import Loader from '../Layout/Loader';
import Metadata from '../Menu/Metadata';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading } = useSelector((state) => state.productState);
  useEffect(() => {
    dispatch(getProduct(id))
  }, [id, dispatch])

  return (
    <>
     
      <h1 className='font-bold text-xl'>Product Detail</h1>
      {loading ? <Loader /> :
      <div>
       <Metadata title={product.name} />
               
        <div className="container mx-auto mt-8 max-w-screen-lg">
          <div className="flex flex-col md:flex-row">
          
            <div className="flex-shrink-0 md:mr-8">
              <img
                src="https://p1-ofp.static.pub//medias/24235826714_82RK-articgrey_202202100440031687885604141.png"
                alt="Product"
                className="w-full h-auto md:w-96 md:h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <div className="mb-4">
                  <p className="text-gray-700">
                    <span className="font-bold">Availability:</span>{' '}
                    {product.stock > 0 ? (
                      <span className="text-green-500">In Stock ({product.stock})</span>
                    ) : (
                      <span className="text-red-500">Out of Stock</span>
                    )}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Category:</span> {product.category}
                  </p>
                </div>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-500">
                    ${product.price}
                  </span>
                </div>
                <button className="bg-yellow-500 text-white px-6 py-3 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      }
    </>
  );
};

export default ProductDetail;