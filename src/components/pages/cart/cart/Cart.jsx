import React, { useContext } from "react";
import "./cartContainer.scss";
import CartItem from "../cartItems/CartItem";
import { CartContext } from "../../../../context/cartContext/CartContext";
import { Link } from "react-router-dom";

const CartContainer = () => {
    const cart = useContext(CartContext);
    const cartItems = cart.cartList.map((cartItem) => (
        <div className="cartItemContainer">
            <CartItem key={cartItem.id} item={cartItem} />
            <hr className="cartLine" />
        </div>
    ));
    return (
        <div className="cartContainer">
            {cart.cartList.length > 0 ? (
                <div className="cart">
                    {cartItems}
                    <div className="cartBuyPart">
                        <div>
                            <span>Total: ${cart.TotalPrice}</span>
                            <button>Buy</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="cart">
                    <Link to="/menu">
                        <div className="emptyCart">
                            <h3>Your cart is empty</h3>
                            <div className="cartCTA">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-arrow-bar-left"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5zM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5z"
                                    />
                                </svg>
                                <span>Let's eat</span>
                            </div>
                        </div>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default CartContainer;
