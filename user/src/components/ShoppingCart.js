import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, removeIng, clearCart } from "../features/cart/cartSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
const ShoppingCart = () => {
    // const dispatcher = useDispatch()
    const {Pizza, ingredients, totalPricePizza, totalpriceIngredient} = useSelector((store) => store.cart)
    const dispatcher = useDispatch()
    const {selectedItems, setSelectedItems} = useState([])
    return (
        <div className="container">
            <div className="d-flex flex-row">

                <div style={{width: "30%"}}>
                    <h1 className="text-center">Pizzas</h1>
                    {
                        Pizza.map((p) => (
                            <div className="card">
                            <img style={{width:"100%", height:"200px"}} src={p.image} alt="..." />
                            <p>{p.name}</p>
                            ₹ {p.price}
                            <button onClick={() => dispatcher(removeFromCart(p))} className="btn btn-danger">Remove</button>
                            </div>
                        ))
                        
                    }
                </div>
                <div style={{width: "30%", margin: "0 10px"}} >
                <h1 className="text-center">Toppings</h1>
                {
                    
                        ingredients.map((p) => (
                            <div className="card">
                                {/* <img style={{width:"100%", height:"200px"}} src={p.image} alt="..." />  */}
                                <p>{p.tname}</p>
                                ₹ {p.price}
                                <button onClick={() => dispatcher(removeIng(p))} className="btn btn-danger">Remove</button>
                                
                            </div>
                        ))
                    }
                </div>
                <div className="card text-center" style={{width: "40%"}}>
                    <h1>Payment</h1>
                    <p>Total Price: {totalPricePizza+totalpriceIngredient}</p>
                    {totalPricePizza+totalpriceIngredient > 0 ?<button className="btn btn-warning" onClick={() =>dispatcher(clearCart())}>
                        <Link to="/success">Buy Now</Link>
                    </button>: "Your cart is empty"}
                </div>

            
            
            </div>
        </div>
    )
}
export default ShoppingCart;