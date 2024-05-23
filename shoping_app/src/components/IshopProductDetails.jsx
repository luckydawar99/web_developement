import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

export function IShopProductDetails() {
    const [product, setProduct] = useState([]);
    const params = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/getproduct/${params.id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
            });
    }, [params.id]);

    return (
        <div>
            <h2>Product Details {params.id}</h2>
            {product.map((item, index) => (
                <div key={index}>
                    <dl>
                        <dt>Title</dt>
                        <dd>{item.title}</dd>
                        <dt>Price</dt>
                        <dd>{item.price}</dd>
                        <dt>Preview</dt>
                        <dd>
                            <img src={item.image} width="100" height="100" alt={`Product Preview ${index}`} />
                        </dd>
                        <dt>Rating</dt>
                        <dd>{item.rating?.rate}</dd>
                    </dl>
                    <br />
                    <Link to={`/products/${item.category}`}>Back to Product</Link>
                </div>
            ))}
        </div>
    );
}


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams ,Link} from 'react-router-dom';

// export function IShopProductDetails() {
//     const [product, setProduct] = useState([]);
//     const params = useParams();

//     useEffect(() => {
//         axios.get(`http://localhost:4000/getproduct/${params.id}`)
//             .then(response => {
//                 setProduct(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching product:', error);
//             });
//     }, [params.id]);

//     return (
//         <div>
//             <h2>Product Details {params.id}</h2>
//             {product.map((item, index) => (
//                 <dl key={index}>
//                     <dt>Title</dt>
//                     <dd>{item.title}</dd>
//                     <dt>Price</dt>
//                     <dd>{item.price}</dd>
//                     <dt>Preview</dt>
//                     <dd>
//                         <img src={item.image} width="100" height="100" alt={`Product Preview ${index}`} />
//                     </dd>
//                     <dt>Rating</dt>
//                     <dd>{item.rating?.rate}</dd>
//                 </dl>
//             ))}
//             <Link to={"/products/" +item.category} >Back to Products</Link>
//         </div>
//     );
// }




// import {useState,useEffect} from 'react';
// import axios from 'axios';
// import {useParams} from "react-router-dom";
// //import { response } from 'express';
// export function IShopProductDetails()
// {
// const [product,setProduct] = useState([]);
// let params = useParams();

// useEffect(()=>{
// //let id = parseInt(params.id);
// axios.get(`http://localhost:4000/getproduct/${params.id}`)
// .then(response=>{
//     setProduct(response.data);
// })
// },[])
// return(
//     <div>
//     <h2>Product Details {params.id}</h2>
//     <dl>
//     <dt>Title</dt>
//     <dd>{product[0].title}</dd>
//     <dt>Price</dt>
//     <dd>{product[0].price}</dd>
//     <dt>Preview</dt>
//     <dd>
//     <img src={product[0].image} width="100" height="100"/>
//     </dd>
//     <dt>Rating</dt>
//     <dd>{product[0].rating.rate}</dd>
//     </dl>
//    <br/>
//   <Link to={"/products/" + product[0].category} > Back to Product </Link>
//     </div>
// )
// }