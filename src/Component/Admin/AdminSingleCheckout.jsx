import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import LeftNav from './LeftNav'
import { getCheckout, updateCheckout } from "../../Store/ActionCreators/CheckoutActionCreators"
import { getUser } from "../../Store/ActionCreators/UserActionCreators"
import { useParams } from 'react-router-dom';

export default function AdminSingleCheckout() {
    var [data, setdata] = useState({})
    var [user,setuser] = useState({})
    var [orderstatus, setorderstatus] = useState("")
    var [paymentstatus, setpaymentstatus] = useState("")
    var checkouts = useSelector((state) => state.CheckoutStateData)
    var users = useSelector((state)=>state.UserStateData)
    var { id } = useParams()
    var dispatch = useDispatch()

    function getAPIData() {
        dispatch(getCheckout())
        dispatch(getUser())
        var d = checkouts.find((item) => item.id === Number(id))
        if (d) {
            setdata(d)
            setorderstatus(d.paymentorderstatus)
            setpaymentstatus(d.paymentstatus)
        }
        d = users.find((item) => item.id === Number(sessionStorage.getItem("userid")))
        if (d) {
            setuser(d)
        }
    }
    function update() {
        dispatch(updateCheckout({ ...data, paymentstatus: paymentstatus, orderstatus: orderstatus }))
        setdata((old) => {
            return {
                ...old,
                ['orderstatus']: orderstatus,
                ['paymentstatus']: paymentstatus
            }
        })
    }
    function getData(e) {
        if (e.target.name === "orderstatus")
            setorderstatus(e.target.value)
        else
            setpaymentstatus(e.target.value)
    }
    useEffect(() => {
        getAPIData()
    }, [checkouts.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-9 col-12 ml-4">
                        <h5 className='billing-heading mb-3 mt-0'><u>Single Checkout</u></h5>
                        <div className="px-3">
                            <div className="d-flex ">
                                <div className="w-50 p-3 border">
                                    ID
                                </div>
                                <div className="w-50 p-3 border">
                                    {data.id}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    User Details
                                </div>
                                <div className="w-50 p-3 border">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Name:</th>
                                                <td>&nbsp;{user.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Phone:</th>
                                                <td>&nbsp;{user.phone}</td>
                                            </tr>
                                            <tr>
                                                <th>Address:</th>
                                                <td>
                                                        &nbsp;{user.addressline1}, {user.addressline2},<br />
                                                        &nbsp;{user.addressline3}, {user.city}, <br />
                                                        &nbsp;{user.state} ({user.pin})    
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    Payment Mode
                                </div>
                                <div className="w-50 p-3 border">
                                    {data.paymentmode}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    Payment Status
                                </div>
                                <div className="w-50 p-3 border d-flex">
                                    {data.paymentstatus}
                                    {
                                        data.paymentstatus !== "Done" ?
                                            <select name="paymentstatus" onChange={getData} className='form-control w-50 ml-5'>
                                                <option value="Pending">Pending</option>
                                                <option value="Done">Done</option>
                                            </select> : ""
                                    }
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    Order Status
                                </div>
                                <div className="w-50 p-3 border d-flex">
                                    {data.orderstatus}
                                    {
                                        data.orderstatus !== "Delivered" ?
                                            <select name="orderstatus" onChange={getData} className='form-control w-50 ml-3'>
                                                <option value="Order Placed">Order Placed</option>
                                                <option value="Packed">Packed</option>
                                                <option value="Ready to ship">Ready to ship</option>
                                                <option value="Shipped">Shipped</option>
                                                <option value="Out for delivery">Out for delivery</option>
                                                <option value="Delivered">Delivered</option>
                                            </select> : ""
                                    }
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    Total Amount
                                </div>
                                <div className="w-50 p-3 border">
                                    &#8377;{data.totalAmount}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    Shipping Amount
                                </div>
                                <div className="w-50 p-3 border">
                                    &#8377;{data.shippingAmount}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    Payable Amount
                                </div>
                                <div className="w-50 p-3 border">
                                    &#8377;{data.finalAmount}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-50 p-3 border">
                                    Date
                                </div>
                                <div className="w-50 p-3 border">
                                    {data.time}
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="w-100 p-3 text-center">
                                    {
                                        data.orderstatus !== "Delivered" || data.paymentstatus !== "Done" ?
                                            <button className='btn btn-primary w-50 p-2' onClick={update}>Update</button> :
                                            ""
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}