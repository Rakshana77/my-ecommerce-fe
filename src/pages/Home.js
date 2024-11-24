// import {Fragment, useEffect, useState} from 'react'
// import ProductCard from '../components/ProductCard'
// import { useSearchParams } from 'react-router-dom';

// export default function Home() {
//     const [products, setProducts] = useState([]);
//     const [searchParams, setSearchParams] =  useSearchParams()

//     useEffect(() => {
//         fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
//         .then(res => res.json())
//         .then( res => setProducts(res.products))
//     },[searchParams])

//     return <Fragment>
//         <h1 id="products_heading">Latest Products</h1>

//         <section id="products" className="container mt-5">
//         <div className="row">
//             {products.map(product =><ProductCard product={product} />)}
//         </div>
//         </section>
//     </Fragment>
// }
import { Fragment, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/products?${searchParams}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then((res) => setProducts(res.products))
            .catch((error) => console.error(error.message));
    }, [searchParams]);

    return (
        <Fragment>
            <h1 id="products_heading">Latest Products</h1>

            <section id="products" className="container mt-5">
                <div className="row">
                    {products.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}
