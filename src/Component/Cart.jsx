import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getCart, updateCart } from "../Store/ActionCreators/CartActionCreators"

export default function Cart() {
    var [cart, setcart] = useState([])
    var carts = useSelector((state) => state.CartStateData)

    var dispatch = useDispatch()
    function getAPIData() {
        dispatch(getCart())
    }
    useEffect(() => {
        getAPIData()
        var data = carts.filter((item) => item.userid === sessionStorage.getItem("userid"))
        console.log(carts);
        if (data)
            setcart(data)
    }, [])
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Cart</span></p>
                            <h1 className="mb-0 bread">Cart</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section ftco-cart">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ftco-animate">
                            <div className="cart-list">
                                <table className="table">
                                    <thead className="thead-primary">
                                        <tr className="text-center">
                                            <th>&nbsp;</th>
                                            <th>&nbsp;</th>
                                            <th>Product</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => {
                                                return <tr key={index} className="text-center">
                                                    <td className="product-remove"><Link to="#"><span className="ion-ios-close"></span></Link></td>

                                                    <td className="image-prod"><div className="img" style={{ backgroundImage: "url('assets/images/product-3.jpg')" }}></div></td>

                                                    <td className="product-name">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.color}/{item.size}</p>
                                                    </td>

                                                    <td className="price">&#8377;{item.price}</td>

                                                    <td className="price"><button className='' style={{ background: "none", width: "30px" }}> <i className="ion-ios-remove"></i></button>&nbsp;&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;&nbsp;<button className='' style={{ background: "none", width: "30px" }}><i className="ion-ios-add"></i></button></td>

                                                    <td className="total">&#8377;{item.total}</td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col col-lg-5 col-md-6 mt-5 cart-wrap ftco-animate">
                            <div className="cart-total mb-3">
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>$20.60</span>
                                </p>
                                <p className="d-flex">
                                    <span>Delivery</span>
                                    <span>$0.00</span>
                                </p>
                                <p className="d-flex">
                                    <span>Discount</span>
                                    <span>$3.00</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
                                    <span>Total</span>
                                    <span>$17.60</span>
                                </p>
                            </div>
                            <p className="text-center"><Link to="/checkout" className="btn btn-primary py-3 px-4">Proceed to Checkout</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
