import { useDispatch, useSelector } from 'react-redux'
import cartSlice from '../data/cartSlice'
import { fetchAllProducts } from '../data/productSlice'
import '../styles/home.scss'
import { useEffect } from 'react'
import { IoAddCircleOutline, IoMedkitSharp } from "react-icons/io5";
import Counter from './Counter'

import { Button, ProductCard } from './styled-components'



const Home = () => {
  const state = useSelector((state) => state)  

  console.log(state)

  const { cart, products } = state
  const { addToCart, removeFromCart } = cartSlice.actions
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts('http://localhost:3000/products'))
  }, [dispatch]);


  return (
    <div className="container product-catalogue">

     <Counter />

     <h2><IoMedkitSharp style={{fontSize: "30px"}} /> Product hub page</h2>

     <Button>Styled Components</Button> 
      <div className="row">
        {products.data?.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <ProductCard isAdded={!cart.cartProductIds.includes(product.id)}>
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                
                <span>{!cart.cartProductIds.includes(product.id) ? "A" : "B"}</span>

                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>

                  

                  {!cart.cartProductIds.includes(product.id) && (
                    <button style={{ display : "inline-flex", fontSize: "20px"}} className="btn btn-primary" onClick={() => {
                     dispatch(addToCart(product.id, product.isSelected))
                    }
                    }>
                      <IoAddCircleOutline style={{ fontSize: "25px", color: "chartreuse", marginRight: "5px" }} /> Add to cart
                    </button>
                  )}
                  {cart.cartProductIds.includes(product.id) && (
                    <button style={{ display : "inline-flex", fontSize: "20px"}} className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>
                      Remove from cart
                    </button>
                  )}

                  
                </div>
              </ProductCard>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
