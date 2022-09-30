import { Fragment, useEffect, useState } from "react";

const DataComponent = ({query}) => {

    const [products , setProducts] = useState([]);
    const [mainProductList , setMainProducts] = useState([]);
    const [isDataLoading , setDataLoading] = useState(false);

    useEffect(()=>{
        setDataLoading(true);
        fetch('https://dummyjson.com/products')
        .then(res=>res.json())
        .then(res=>{
            setDataLoading(false);
            setMainProducts([...res.products]);
            setProducts([...res.products]);
        })
        .catch(error=>{
            setDataLoading(false);
            setProducts([]);
            setMainProducts([]);
        })
    },[])

    useEffect(()=>{
        if(!query || query.length == 0){
            setProducts([...mainProductList]);
        }else{
            const temp = mainProductList.filter((prod)=>{
                return prod.title.toLowerCase().includes(query.toLowerCase())
            })
            setProducts([...temp]);
        }
    },[query])

    return (
        <div className="data-container">
            <div className="header-row">
                <span>Product List</span>
            </div>
            <div className="product-container">
                {

                    isDataLoading ? 
                        <div data-testid="spinner" className="spinner-container">
                            <div className="loading-spinner"></div>
                        </div>
                    : 

                        products && products.length > 0 ?
                            products.map((prod)=>(
                                <div data-testid={`product_${prod.id}`} key={prod.id} className="product-item">
                                    <div className="product-name">{prod.title}</div>
                                    <div className="product-price">{prod.price}</div>
                                </div>
                            ))
                        :
                        
                            !isDataLoading ? <h1 data-testid="data_not_found">No Data Found</h1> : <Fragment></Fragment>
                }
            </div>
        </div>
    )
}

export default DataComponent;