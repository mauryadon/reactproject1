import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from "../Store/ActionCreators/UserActionCreators"
import { getCart,deleteCart } from "../Store/ActionCreators/CartActionCreators"
import { addCheckout } from "../Store/ActionCreators/CheckoutActionCreators"

export default function Checkout() {
    var [mode,setMode] = useState("COD")
    var users = useSelector((state) => state.UserStateData)
    var [user, setuser] = useState({})
    var dispatch = useDispatch()
    var [cart, setcart] = useState([])
    var [total, settotal] = useState(0)
    var [shipping, setshipping] = useState(0)
    var [final, setfinal] = useState(0)
    var carts = useSelector((state) => state.CartStateData)
    var navigate = useNavigate()
    function placeOrder(){
        var item = {
            userid:sessionStorage.getItem("userid"),
            paymentmode:mode,
            orderstatus:"Order Placed",
            paymentstatus:"Pending",
            time:new Date(),
            totalAmount:total,
            shippingAmount:shipping,
            finalAmount:final,
            products:cart
        }
        dispatch(addCheckout(item))
        for(let item of cart){
            dispatch(deleteCart({id:item.id}))
        }
        navigate("/Confirmation")
    }
    function getData(e){
        setMode(e.target.value)
    }
    function getAPIData() {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(sessionStorage.getItem("userid")))
        if (data)
            setuser(data)

        dispatch(getCart())
        data = carts.filter((item) => item.userid === sessionStorage.getItem("userid"))
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
    useEffect(() => {
        getAPIData()
    }, [users.length, carts.length])
    return (
        <>
            <section className="ftco-section">
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 ftco-animate">
                            <form action="#" className="billing-form">
                                <h3 className="mb-4 billing-heading"><u>Billing Details</u></h3>
                                <div className="row align-items-end">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="firstname">Name</label>
                                            <input type="text" className="form-control" placeholder={user.name} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="lastname">User Name</label>
                                            <input type="text" className="form-control" placeholder={user.username} />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="country">Country</label>
                                            <div className="select-wrap">
                                                <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                                                <select name="" id="" className="form-control">
                                                    <option value="">India</option>
                                                    <option value="">France</option>
                                                    <option value="">Italy</option>
                                                    <option value="">China</option>
                                                    <option value="">South Korea</option>
                                                    <option value="">Hongkong</option>
                                                    <option value="">Japan</option>
                                                    <option value="">Russia</option>
                                                    <option value="">USA</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="state">State</label>
                                            <input type="text" className="form-control" placeholder={user.state} />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="streetaddress">Street Address</label>
                                            <input type="text" className="form-control" placeholder={user.addressline1} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="locality">Near by</label>
                                            <input type="text" className="form-control" placeholder={user.addressline3} />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="towncity">Town / City</label>
                                            <input type="text" className="form-control" placeholder={user.city} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="postcodezip">Postcode / ZIP *</label>
                                            <input type="text" className="form-control" placeholder={user.pin} />
                                        </div>
                                    </div>
                                    <div className="w-100"></div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="phone">Phone</label>
                                            <input type="text" className="form-control" placeholder={user.phone} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label for="emailaddress">Email Address</label>
                                            <input type="text" className="form-control" placeholder={user.email} />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="row d-flex">
                                <div className="cart mt-4">
                                <h3 className="mb-3 billing-heading"><u>Cart Details</u></h3>
                                    <table className="table" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
                                        <thead className="thead-primary">
                                            <tr className="text-center">
                                                <th>&nbsp;</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                carts.map((item, index) => {
                                                    return <tr key={index} className="text-center">
                                                        
                                                        <td className="image-prod">
                                                            <div className="img" style={{ backgroundImage: `url('assets/productimages/${item.pic}')` }}></div>
                                                        </td>

                                                        <td className="product-name">
                                                            <h3>{item.name}</h3>
                                                            <p>{item.color}/{item.size}</p>
                                                        </td>

                                                        <td className="price">&#8377;{item.price}</td>

                                                        <td className="total">
                                                            &#8377;{item.total}
                                                        </td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-6 d-flex">
                                    <div className="cart-total bg-light p-3 p-md-4">
                                        <h3 className="billing-heading mb-4">Cart Total</h3>
                                        <p className="d-flex">
                                            <span>Subtotal</span>
                                            <span>&#8377;{total}</span>
                                        </p>
                                        <p className="d-flex">
                                            <span>Shipping</span>
                                            <span>&#8377;{shipping}</span>
                                        </p>
                                        <hr />
                                        <p className="d-flex total-price">
                                            <span>Payable Amount</span>
                                            <span>&#8377;{final}</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="cart-detail bg-light p-3 p-md-4">
                                        <h3 className="billing-heading mb-4">Payment Method</h3>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" onChange={getData} name="optradio" className="mr-2" value="netBanking" />Net Banking/Card/UPI</label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-md-12">
                                                <div className="radio">
                                                    <label><input type="radio" onChange={getData} name="optradio" className="mr-2" value="COD" checked /> Cash On Delivery</label>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary p-2" onClick={placeOrder}>Place an order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
