import React, { useState, useEffect } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../context';

function ProductList() {

    // const [products, setProducts] = useState(storeProducts)

    // useEffect(() => {
    //     setProducts(storeProducts)

    //   }, [])

    // console.log(products)

    return (
        <>
            <div className="py-5">
                <div className="container">
                    <Title name="our products" />

                    <div className="row">
                        <ProductConsumer>
                            {(value) => {
                                return value.products.map( product => {
                                    return <Product key={product.id} product=
                                    {product} />;
                                });
                            }}
                        </ProductConsumer>

                    </div>
                </div>
            </div>
        </>
    )
}


export default ProductList;