import React from 'react';


function ProductList() {

    const [products, setProducts] = useState(storeProducts)

    // useEffect(() => {
    //     setProducts(storeProducts)
        
    //   }, [])
    
      console.log(products)

    return (
        <>
            <div className="py-5">
                <div className="container">
                <Title name="our products" />
                    <div className="row">

                    </div>
                </div>
            </div>
            {/* <Product /> */}
        </>
    )
}


export default ProductList;