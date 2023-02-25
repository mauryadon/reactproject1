import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { getCart, updateCart, deleteCart } from "../Store/ActionCreators/CartActionCreators"

export default function Cart() {
    var [cart, setcart] = useState([])
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)
    var carts = useSelector((state) => state.CartStateData)

    var dispatch = useDispatch()
    function getAPIData() {
        dispatch(getCart())
        var data = carts.filter((item) => item.userid === sessionStorage.getItem("userid"))
        if (data) {
            setcart(data)
            var total = 0
            var shipping = 0
            var final = 0
            for (let item of data) {
                total = total + item.total
            }
            if (total > 0 && total <= 1000)
            shipping = 70
            final = total + shipping
            settotal(total)
            setshipping(shipping)
            setfinal(final)
        }
    }
    function update(id, option) {
        var item = carts.find((item) => item.id === id)
        if (option === "decrement" && item.qty == 1)
            return
        else if (option === "decrement") {
            item.qty = item.qty - 1
            item.total = item.total - item.price
        }
        else {
            item.qty = item.qty + 1
            item.total = item.total + item.price
        }
        dispatch(updateCart(item))
        getAPIData()
    }
    function deleteItem(id) {
        dispatch(deleteCart({ id: id }))
        getAPIData()
    }
    useEffect(() => {
        getAPIData()
    }, [carts.length])
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
                                <table className="table" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
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
                                            carts.map((item, index) => {
                                                return <tr key={index} className="text-center">
                                                    <td className="product-remove">
                                                        <Link onClick={() => deleteItem(item.id)} to="#"><span className="ion-ios-close"></span></Link>
                                                    </td>

                                                    <td className="image-prod">
                                                        <div className="img" style={{ backgroundImage: `url('assets/productimages/${item.pic}')` }}></div>
                                                    </td>

                                                    <td className="product-name">
                                                        <h3>{item.name}</h3>
                                                        <p>{item.color}/{item.size}</p>
                                                    </td>

                                                    <td className="price">&#8377;{item.price}</td>

                                                    <td className="price">
                                                        <button onClick={() => update(item.id, "decrement")} style={{ background: "none", width: "30px", fontSize: "20px" }}> <i className="ion-ios-remove"></i></button>
                                                        &nbsp;&nbsp;&nbsp;{item.qty}&nbsp;&nbsp;&nbsp;
                                                        <button onClick={() => update(item.id, "increment")} style={{ background: "none", width: "30px", fontSize: "20px" }}><i className="ion-ios-add"></i></button>
                                                    </td>

                                                    <td className="total">
                                                        &#8377;{item.total}
                                                    </td>
                                                </tr>
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-start">
                        <div className="col-md-6"></div>
                        <div className="col-md-6 mt-4 cart-wrap ftco-animate">
                            <div className="cart-total mb-3" style={{ backgroundColor: "rgb(248, 248, 248)" }}>
                                <h3>Cart Totals</h3>
                                <p className="d-flex">
                                    <span>Subtotal</span>
                                    <span>&#8377;{total}</span>
                                </p>
                                <p className="d-flex">
                                    <span>Shipping Amount</span>
                                    <span>&#8377;{shipping}</span>
                                </p>
                                <hr />
                                <p className="d-flex total-price">
                                    <span>Payable Amount</span>
                                    <span>&#8377;{final}</span>
                                </p>
                            </div>
                            <p className="text-center"><Link to="/checkout" className="btn btn-primary py-2">Proceed to Checkout</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
