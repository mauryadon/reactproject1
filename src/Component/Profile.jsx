import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser } from "../Store/ActionCreators/UserActionCreators"

export default function Profile() {
    var users = useSelector((state) => state.UserStateData)
    var [user, setuser] = useState({})
    var dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUser())
        var data = users.find((item) => item.id === Number(sessionStorage.getItem("userid")))
        if (data)
            setuser(data)
    }, [])
    return (
        <>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4 mt-3">
                        {
                            user.pic ?
                            <img src={`/assets/productimages/${user.pic}`} height="540px" width="100%" alt="" className='rounded' />:
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
                                <div className="first p-2 border w-50">Address Line 1</div>
                                <div className="second text-dark p-2 border w-50">{user.addressline1}</div>
                            </div>
                            <div className="d-flex">
                                <div className="first p-2 border w-50">Address Line 2</div>
                                <div className="second text-dark p-2 border w-50">{user.addressline2}</div>
                            </div>
                            <div className="d-flex">
                                <div className="first p-2 border w-50">Address Line 3</div>
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
        </>
    )
}
