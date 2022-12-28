import { useSelector, useDispatch } from 'react-redux'
import cartSlice from '../data/cartSlice'
import productList from '../data/productList.json'

const CheckOut = () => {

    const { cartProductIds } = useSelector((state) => state.cart)
    const cartProductData = productList.products.filter((product) => cartProductIds.includes(product.id))

    const { removeFromCart, clearAllItems } = cartSlice.actions
    const dispatch = useDispatch()
    let  totalPrice = [];
  
    const calculateSum = (array) => {
        return array.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0);
      }
      

    return (
        <div className="cart">
         <h2>Checkout page</h2>

        {cartProductData.length > 0 && (
          <div className="cart-product">
            <h3 className="header">Items in cart</h3>
            {cartProductData.map((product) => (
              <div key={product.id} className="row">
                <img className="item-image" src={product.imageUrl} alt="product" />
  
                <div className="item-info">
                  <h4>{product.name}</h4>
                  <p className="text-truncate">{product.detail}</p>
                  <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>
                    <i className="bi bi-trash-fill" /> Remove Item
                  </button>

                  <h2>${product.price}</h2>
              
                  <span style={{ display: "none" }} >{ 
                    totalPrice.push(product.price)
                    } </span>

                </div>
              </div>
            ))}
            {/* <h1>total Price : {totalPrice}</h1> */}

           <h1>Total price:  ${calculateSum(totalPrice) }
      
      
      </h1>
            <footer className="text-center">
              {/* <button className="btn btn-primary" onClick={() => dispatch(clearAllItems())}> */}
                  
            </footer>
          </div>
        )}
  
        {cartProductData.length < 1 && (
          <div className="text-center empty-cart">
            <i className="bi bi-cart3" />
            <p>Your cart is empty.</p>
            <p>You have not added any item to your cart.</p>
          </div>
        )}
      </div>
       
    )

}

export default CheckOut;