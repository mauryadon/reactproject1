import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser, addUser } from "../Store/ActionCreators/UserActionCreators"
export default function Signup() {
    var [data, setdata] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        cpassword: ""
    })
    var users = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getData(event) {
        var name = event.target.name
        var value = event.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(event) {
        event.preventDefault()
        if (data.password === data.cpassword) {
            var d = users.find((item) => item.username === data.username)
            if (d)
                alert("UserName Already Taken !!!")
            else {
                var item = {
                    name: data.name,
                    username: data.username,
                    email: data.email,
                    phone: data.phone,
                    password: data.password,
                    addressline1: "",
                    addressline2: "",
                    addressline3: "",
                    pin: "",
                    city: "",
                    state: "",
                    pic: "",
                    role: "User"
                }
                dispatch(addUser(item))
                navigate("/login")
            }
        }
        else
            alert('Password and Confirm Password doesn,t match !!!')
    }
    useEffect(() => {
        dispatch(getUser())
    }, [])
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <div className="container-fluid w-100 mt-5">
                                <div className='w-100 m-auto'>
                                    <h5 className='text-center bg-secondary rounded p-2 text-light'>Signup Section</h5>
                                    <form className='px-3' onSubmit={postData}>
                                        <div className="row my-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='name' id='name' placeholder='Enter Full Name :' onChange={getData} className='form-control' />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='username' id='username' placeholder='Enter Username :' onChange={getData} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-6 col-12">
                                                <input type="email" name='email' id='email' placeholder='Enter Email Address :' onChange={getData} className='form-control' />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='phone' id='phone' placeholder='Phone Number :' onChange={getData} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="password" name='password' id='password' placeholder='Enter Password :' onChange={getData} className='form-control' />
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="password" name='cpassword' id='cpassword' placeholder='Confirm Password :' onChange={getData} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <button type='submit' className='btn btn-secondary w-50 btn-lg'>Signup</button>
                                        </div>
                                    </form>
                                    <Link className='text-dark' to='/login'>Already a User? login to your account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
