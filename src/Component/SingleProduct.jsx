import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { getProduct } from "../Store/ActionCreators/ProductActionCreators"
import { getCart, addCart } from "../Store/ActionCreators/CartActionCreators"
import { getWishlist, addWishlist } from "../Store/ActionCreators/WishlistActionCreators"
export default function SingleProduct() {
    var [p, setp] = useState({
        pic1:"",
        pic2:"",
        pic3:"",
        pic4:""
    })
    var [qty, setqty] = useState(1)
    var product = useSelector((state) => state.ProductStateData)
    var cart = useSelector((state) => state.CartStateData)
    var wishlist = useSelector((state) => state.WishlistStateData)
    var navigate = useNavigate()

    var { id } = useParams()
    var dispatch = useDispatch()

    function getAPIData() {
        dispatch(getProduct())
        dispatch(getCart())
        dispatch(getWishlist())
        var data = product.find((item) => item.id === Number(id))
        if (data)
            setp(data)
    }
    function addToCart() {
        var d = cart.find((item) => item.productid === Number(id) && item.userid === sessionStorage.getItem("userid"))
        if (d)
            navigate("/cart")
        else {
            var item = {
                productid: p.id,
                userid: sessionStorage.getItem("userid"),
                name: p.name,
                color: p.color,
                size: p.size,
                price: p.finalprice,
                qty: qty,
                total: p.finalprice * qty,
                pic: p.pic1,
            }
            dispatch(addCart(item))
            navigate("/cart")
        }
    }
    function addToWishlist() {
        var d = wishlist.find((item) => item.productid === Number(id) && item.userid === sessionStorage.getItem("userid"))
        if (d)
            navigate("/profile")
        else {
            var item = {
                productid: p.id,
                userid: sessionStorage.getItem("userid"),
                name: p.name,
                color: p.color,
                size: p.size,
                price: p.finalprice,
                pic: p.pic1,
            }
            dispatch(addWishlist(item))
            navigate("/profile")
        }
    }

    useEffect(() => {
        getAPIData()
    }, [product.length])
    return (
        <>
            <section className="ftco-section">
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-lg-6 mb-5 ftco-animate">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={`/assets/productimages/${p.pic1}`} height="630px" width="540px" className="d-block float-right mt-3" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/productimages/${p.pic2}`} height="630px" width="540px" className="d-block float-right mt-3" alt="..." />
                                    </div>
                                    <div className="carousel-item active">
                                        <img src={`/assets/productimages/${p.pic3}`} height="630px" width="540px" className="d-block float-right mt-3" alt="..." />
                                    </div>
                                    <div className="carousel-item">
                                        <img src={`/assets/productimages/${p.pic4}`} height="630px" width="540px" className="d-block float-right mt-3" alt="..." />
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 product-details pl-md-5 ftco-animate pt-2">
                            <h3 className='mb-4'>{p.name}</h3>
                            <div className="d-flex">
                                <div className='border p-3 w-50'>Category</div>
                                <div className='border p-3 w-50'>{p.maincategory}/{p.subcategory}</div>
                            </div>
                            <div className="d-flex">
                                <div className='border p-3 w-50'>Brand</div>
                                <div className='border p-3 w-50'>{p.brand}</div>
                            </div>
                            <div className="d-flex">
                                <div className='border p-3 w-50'>Price</div>
                                <div className='border p-3 w-50'><del>&#8377;{p.baseprice}</del><sup>&#8377;{p.finalprice}</sup> &nbsp;&nbsp;({p.discount}% Off)</div>
                            </div>
                            <div className="d-flex">
                                <div className='border p-3 w-50'>Color</div>
                                <div className='border p-3 w-50'>{p.color}</div>
                            </div>
                            <div className="d-flex">
                                <div className='border p-3 w-50'>Size</div>
                                <div className='border p-3 w-50'>{p.size}</div>
                            </div>
                            <div className="d-flex">
                                <div className='border p-3 w-50'>Stock</div>
                                <div className='border p-3 w-50'>{p.stock}</div>
                            </div>
                            <div className="d-flex">
                                <div className='border p-3 w-50'>Discription</div>
                                <div className='border p-3 w-50'>{p.discription}</div>
                            </div>
                            <div className="row mt-4">
                                <div className="w-100 col-md-2"></div>
                                <div className="input-group col-md-8 d-flex mb-3">
                                    <span className="input-group-btn mr-2 ml-5">
                                        <button type="button" className="quantity-left-minus btn" data-type="minus" data-field="" onClick={() => {
                                            if (qty > 1)
                                                setqty(qty - 1)
                                        }}>
                                            <i className="ion-ios-remove"></i>
                                        </button>
                                    </span>
                                    <input type="text" id="qty" name="qty" className="quantity form-control input-number" value={qty} min="1" max="100" />
                                    <span className="input-group-btn ml-2 mr-5">
                                        <button type="button" className="quantity-right-plus btn" data-type="plus" data-field="" onClick={() => setqty(qty + 1)}>
                                            <i className="ion-ios-add"></i>
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className='d-flex mt-2'>
                                <button onClick={addToCart} className="btn w-50 m-1 p-2 rounded">Add to Cart</button>
                                <button onClick={addToWishlist} className="btn w-50 m-1 p-2 rounded">Add to Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
