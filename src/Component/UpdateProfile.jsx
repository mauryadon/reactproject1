import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser, updateUser } from "../Store/ActionCreators/UserActionCreators"
export default function UpdateProfile() {
    var [data, setdata] = useState({
        name: "",
        pic: "",
        email: "",
        phone: "",
        addressline1: "",
        addressline2: "",
        addressline3: "",
        pin: "",
        city: "",
        state: ""
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
    function getFile(event) {
        var name = event.target.name
        var value = event.target.files[0].name
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(event) {
        event.preventDefault()
        var item = {
            id:sessionStorage.getItem("userid"),
            name: data.name,
            username: data.username,
            email: data.email,
            phone: data.phone,
            password: data.password,
            addressline1: data.addressline1,
            addressline2: data.addressline2,
            addressline3: data.addressline3,
            pin: data.pin,
            city: data.city,
            state: data.state,
            pic: data.pic,
            role: data.role
        }
        dispatch(updateUser(item))
        if(data.role==="Admin")
        navigate("/admin-home")
        else
        navigate("/profile")
    }
    useEffect(() => {
        dispatch(getUser())
        var d = users.find((item) => item.id === Number(sessionStorage.getItem("userid")))
        if (d)
            setdata(d)
    }, [data.length])
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <div className="container-fluid w-100">
                                <div className='w-100 m-auto'>
                                    <h5 className='text-center bg-secondary rounded p-2 text-light'>Update Your Profile</h5>
                                    <form className='px-3' onSubmit={postData}>
                                        <div className="row my-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='name' id='name' placeholder='Enter Full Name :' onChange={getData} className='form-control' value={data.name}/>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="file" name='pic' id='pic' onChange={getFile} className='form-control' />
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-6 col-12">
                                                <input type="email" name='email' id='email' placeholder='Enter Email Address :' onChange={getData} className='form-control' value={data.email}/>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='phone' id='phone' placeholder='Phone Number :' onChange={getData} className='form-control' value={data.phone}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='addressline1' id='addressline1' placeholder='House,Floor or Building Number :' onChange={getData} className='form-control' value={data.addressline1}/>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='addressline2' id='addressline2' placeholder='Street Number or Near By :' onChange={getData} className='form-control' value={data.addressline2}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='addressline3' id='addressline3' placeholder='Village or Locality :' onChange={getData} className='form-control' value={data.addressline3}/>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='pin' id='pin' placeholder='Pin :' onChange={getData} className='form-control' value={data.pin}/>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='city' id='city' placeholder='City :' onChange={getData} className='form-control' value={data.city}/>
                                            </div>
                                            <div className="col-md-6 col-12">
                                                <input type="text" name='state' id='state' placeholder='State :' onChange={getData} className='form-control' value={data.state}/>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <button type='submit' className='btn btn-secondary w-50 btn-lg'>Update</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
