import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { getUser, addUser } from "../Store/ActionCreators/UserActionCreators"

export default function Login() {
    var [data, setdata] = useState({
        username: "",
        password: ""
    })
    var users = useSelector((state) => state.UserStateData)
    var dispatch = useDispatch()
    var navigate = useNavigate()
    function getData(e) {
        var name = e.target.name
        var value = e.target.value
        setdata((old) => {
            return {
                ...old,
                [name]: value
            }
        })
    }
    function postData(e) {
        e.preventDefault()
        var user = users.find((item)=>item.username===data.username && item.password===data.password)
        if(user){
            sessionStorage.setItem("login",true)
            sessionStorage.setItem("name",user.name)
            sessionStorage.setItem("username",user.username)
            sessionStorage.setItem("userid",user.id)
            sessionStorage.setItem("role",user.role)
            if(user.role==="Admin")
            navigate("/admin-home")
            else
            navigate("/profile")
        }
        else
        alert("Invalid Username or Password !!!")
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
                                    <h5 className='text-center bg-secondary rounded p-2 text-light'>Login Section</h5>
                                    <form className='px-3' onSubmit={postData}>
                                        <div className="mb-3 pt-2">
                                            <input type="text" name='username' id='username' placeholder='Enter Username :' onChange={getData} className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" name='password' id='password' placeholder='Enter Password :' onChange={getData} className='form-control' />
                                        </div>
                                        <div className="mb-3">
                                            <button type='submit' className='btn btn-secondary w-50 btn-lg'>Login</button>
                                        </div>
                                    </form>
                                    <div className='d-flex justify-content-between'>
                                        <Link className='text-dark' to='#'>Forget Password</Link>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <Link className='text-dark' to='/signup'>New User? Create a account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
