import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import LeftNav from './LeftNav'
import { getUser } from "../../Store/ActionCreators/UserActionCreators"

import { Link } from 'react-router-dom'
export default function AdminHome() {
    var [user, setuser] = useState({})
    var users = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    function getAPIData() {
        dispatch(getUser())
        var d = users.find((item) => item.id === Number(sessionStorage.getItem("userid")))
        if (d) {
            setuser(d)
        }
    }
    useEffect(() => {
        getAPIData()
    }, [user.length])
    return (
        <>
            <div className="contain-fluid my-5">
                <div className="row">
                    <div className="col-lg-2 col-12">
                        <LeftNav />
                    </div>
                    <div className="col-lg-10 col-12">
                        <div className="row">
                            <div className="col-md-5 mt-2">
                                {
                                    user.pic?
                                    <img src={`/assets/images/${user.pic}`} height="462px" width="90%" alt="" />:
                                    <img src="assets/images/noimage.jpeg" height="462px" width="90%" alt="" />
                                }
                            </div>
                            <div className="col-md-7 text-center">
                                <h5 className="bg-primary text-light mb-4 p-2 rounded">Admin Home</h5>
                                <div className="d-flex">
                                    <div className='border p-3 w-50'>Name</div>
                                    <div className='border p-3 w-50'>{user.name}</div>
                                </div>
                                <div className="d-flex">
                                    <div className='border p-3 w-50'>User Name</div>
                                    <div className='border p-3 w-50'>{user.username}</div>
                                </div>
                                <div className="d-flex">
                                    <div className='border p-3 w-50'>Email</div>
                                    <div className='border p-3 w-50'>{user.email}</div>
                                </div>
                                <div className="d-flex">
                                    <div className='border p-3 w-50'>Phone</div>
                                    <div className='border p-3 w-50'>{user.phone}</div>
                                </div>
                                <div className="d-flex">
                                    <div className='border p-3 w-50'>Role</div>
                                    <div className='border p-3 w-50'>{user.role}</div>
                                </div>
                                <div className='mt-3 text-center'>
                                    <Link to="/update-profile" className='btn btn-primary w-50 p-2'>Update Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}