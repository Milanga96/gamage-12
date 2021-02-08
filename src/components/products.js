import React, {useContext} from 'react'
import {DataContext} from './ProductsDetails'
import {Link} from 'react-router-dom'

 function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    return(
<div className="products">
            {
                products.map(product =>(
                    <div className="card" key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <img src={product.images[0]} alt=""/>
                        </Link>
                        <div className="box">
                        <h3 title={product.title}>
                            <Link to={`/products/${product._id}`}>{product.title}</Link>
                        </h3>
                        <h2>LKR{product.price}</h2>
                        <p1>Rating: {product.rating}</p1>
                        <button onClick={() => addCart(product._id)}>
                            Add to cart
                        </button>
                        </div>
                    </div>
                ))
            }
          
          
        </div>
      
    )
}

export default Products;