import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addContact } from '../Store/ActionCreators/ContactActionCreators'
export default function Contact() {
    var dispatch = useDispatch()
    var [show, setshow] = useState(false)
    var [data, setdata] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
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
        var item = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
            status: "Active",
            time: new Date()
        }
        dispatch(addContact(item))
        setshow(true)
    }
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: "url('assets/images/bg_6.jpg')" }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 ftco-animate text-center">
                            <p className="breadcrumbs"><span className="mr-2"><Link to="/">Home</Link></span> <span>Contact</span></p>
                            <h1 className="mb-0 bread">Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section className="ftco-section contact-section bg-light">
                <div className="container">
                    <div className="row d-flex mb-5 contact-info">
                        <div className="w-100"></div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4 shadow rounded">
                                <p><span>Address:</span> CA 118B, Harinagar, New Delhi</p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4 shadow rounded">
                                <p><span>Phone:</span> <Link to="tel://+91 9795071712">+91 9795071712</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4 shadow rounded">
                                <p><span>Email:</span> <Link to="mailto:info@yoursite.com">aakashmauryaa122@gmail.com</Link></p>
                            </div>
                        </div>
                        <div className="col-md-3 d-flex">
                            <div className="info bg-white p-4 shadow rounded">
                                <p><span>Website:</span> <Link to="#">yoursite.com</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 order-md-last">
                            {
                                show ? <div class="alert alert-success text-center alert-dismissible fade show" role="alert">
                                    <strong>Thanks!</strong> To Share Your Quary With Us !
                                    <br />
                                    Our Team Will Contact You <strong> Soon!</strong>
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> : ""
                            }
                            <form onSubmit={postData} className="bg-white px-4 pt- pb-1 contact-form">
                                <div className="form-group">
                                    <input type="text" className="form-control rounded pt-1" name='name' onChange={getData} placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control rounded pt-1" name='email' onChange={getData} placeholder="Your Email" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control rounded pt-1" name='phone' onChange={getData} placeholder="Phone" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control rounded pt-1" name='subject' onChange={getData} placeholder="Subject" />
                                </div>
                                <div className="form-group">
                                    <textarea cols="30" rows="4" className="form-control rounded pt-1" name='message' onChange={getData} placeholder="Message"></textarea>
                                </div>
                                <div className="form-group float-left mt-2">
                                    <input type="submit" value="Send Message" className="btn btn-primary py-2 px-4 mt-1" />
                                </div>
                            </form>

                        </div>

                        <div className="col-md-6 pl-5 mt-1">
                            <div className="mapouter"><div className="gmap_canvas"><iframe width="92%" height="544px" id="gmap_canvas" src="https://maps.google.com/maps?q=sarthi%20digital%20software%20solution&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}