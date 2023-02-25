import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from "../Store/ActionCreators/UserActionCreators"
import { deleteWishlist, getWishlist } from "../Store/ActionCreators/WishlistActionCreators"
import { getCheckout } from "../Store/ActionCreators/CheckoutActionCreators"
import { getProduct } from "../Store/ActionCreators/ProductActionCreators"

export default function Profile() {
    var users = useSelector((state) => state.UserStateData)
    var [user, setuser] = useState({})
    var wishlists = useSelector((state) => state.WishlistStateData)
    var [wishlist, setwishlist] = useState([])

    var checkouts = useSelector((state) => state.CheckoutStateData)
    var [orders, setorders] = useState([])
    var [products, setproducts] = useState([])

    var dispatch = useDispatch()
    function deleteItem(id) {
        dispatch(deleteWishlist({ id: id }))
        getAPIData()
    }
    function getAPIData() {
        dispatch(getUser())
        dispatch(getProduct())
        dispatch(getWishlist())
        dispatch(getCheckout())
        var data = users.find((item) => item.id === Number(sessionStorage.getItem("userid")))
        if (data)
            setuser(data)

        data = wishlists.filter((item) => item.userid === sessionStorage.getItem("userid"))
        if (data)
            setwishlist(data)
        data = checkouts.filter((item) => item.userid === sessionStorage.getItem("userid"))
        if (data)
            setorders(data)
        data = products.filter((item)=> item.userid === sessionStorage.getItem("userid"))
        if (data)
            setproducts(data)
    }
    useEffect(() => {
        getAPIData()
    }, [users.length, wishlists.length, checkouts.length])
    return (
        <>
            <section className="ftco-section">
                <div className="container-fluid mt-2">
                    <div className="row pb-2">
                        <div className="col-md-1"></div>
                        <div className="col-md-4 mt-3">
                            {
                                user.pic ?
                                    <img src={`/assets/images/${user.pic}`} height="540px" width="100%" alt="" className='rounded' /> :
                                    <img src={`/assets/images/noimage.jpeg`} height="540px" width="100%" alt="" className='rounded' />
                            }
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <h5 className='text-center bg-primary text-light rounded p-2 mt-3'>Your Profile</h5>
                            <div className='mx-3 border rounded'>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">Name</div>
                                    <div className="second text-dark p-2 border w-50">{user.name}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">User Name</div>
                                    <div className="second text-dark p-2 border w-50">{user.username}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">Email</div>
                                    <div className="second text-dark p-2 border w-50">{user.email}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">Phone Number</div>
                                    <div className="second text-dark p-2 border w-50">{user.phone}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">Street Address</div>
                                    <div className="second text-dark p-2 border w-50">{user.addressline1}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">Locality</div>
                                    <div className="second text-dark p-2 border w-50">{user.addressline2}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">Near by</div>
                                    <div className="second text-dark p-2 border w-50">{user.addressline3}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">Pin</div>
                                    <div className="second text-dark p-2 border w-50">{user.pin}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">City</div>
                                    <div className="second text-dark p-2 border w-50">{user.city}</div>
                                </div>
                                <div className="d-flex">
                                    <div className="first p-2 border w-50">State</div>
                                    <div className="second text-dark p-2 border w-50">{user.state}</div>
                                </div>
                            </div>
                            <div className="text-center">
                                <Link to="/update-profile" className='btn btn-primary w-50 mt-2 p-2 '>Update your Profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="container-fluid">
                    <h5 className='my-4 billing-heading' style={{ margin: '17%' }}><u>Your WishLists</u></h5>
                    <div className="row">
                        <div className="cart-list m-auto">
                            <table className="table">
                                <thead className="thead-primary">
                                    <tr className="text-center">
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Price</th>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        wishlist.map((item, index) => {
                                            return <tr key={index} className="text-center">
                                                <td className="product-remove">
                                                    <Link onClick={() => deleteItem(item.id)} to="#"><span className="ion-ios-close"></span></Link>
                                                </td>

                                                <td className="image-prod">
                                                    <div className="img" style={{ backgroundImage: `url('assets/productimages/${item.pic}')` }}></div>
                                                </td>

                                                <td className="product-name"><h3>{item.name}</h3></td>
                                                <td className="product-name"><h3>{item.color}</h3></td>
                                                <td className="product-name"><h3>{item.size}</h3></td>

                                                <td className="price">&#8377;{item.price}</td>
                                                <td className="product-remove">
                                                    <Link to={`/single-product/${item.productid}`}><span className="ion-ios-cart"></span></Link>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <hr />
                    <h5 className='billing-heading my-4' style={{ margin: '29%' }}><u>Orders History</u></h5>
                    <div className="container-fluid d-flex">
                        <div className="col-md-3">
                            <table className='Table float-right'>
                                {
                                    orders.map((item, index) => {
                                        return <div className="row" key={index}>
                                            <tbody className=''>
                                                <tr>
                                                    <td>Order id</td>
                                                    <td>{item.id}</td>
                                                </tr>
                                                <tr>
                                                    <td>Payment Mode</td>
                                                    <td>{item.paymentmode}</td>
                                                </tr>
                                                <tr>
                                                    <td>Order Status</td>
                                                    <td>{item.orderstatus}</td>
                                                </tr>
                                                <tr>
                                                    <td>Payment Status</td>
                                                    <td>{item.paymentstatus}</td>
                                                </tr>
                                                <tr>
                                                    <td>Total Amount</td>
                                                    <td>&#8377;{item.totalAmount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Shipping Status</td>
                                                    <td>&#8377;{item.shippingAmount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Payable Amount</td>
                                                    <td>&#8377;{item.finalAmount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date</td>
                                                    <td>{item.time}</td>
                                                </tr>
                                            </tbody>
                                        </div>
                                    })
                                }
                            </table>
                        </div>
                        <div className="col-md-9">
                            <div className="row">
                                <div className="m-auto border">
                                    <table className="table">
                                        <thead className="thead-primary">
                                            <tr className="text-center">
                                                <th>&nbsp;</th>
                                                <th>Product</th>
                                                <th>Color/Size</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products.map((item, index) => {
                                                    return <tr key={index} className="text-center">

                                                        <td className="image-prod">
                                                            <div className="img" style={{ backgroundImage: `url('assets/productimages/${item.pic}')` }}></div>
                                                        </td>
                                                        <td className="product-name"><h3>{item.name}</h3></td>
                                                        <td className="product-name"><h3>{item.color}/{item.size}</h3></td>
                                                        <td className="price">&#8377;{item.price}</td>
                                                        <td className="price">{item.qty}</td>
                                                        <td className="price">&#8377;{item.total}</td>
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
