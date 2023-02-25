import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewslatter, getNewslatter } from '../Store/ActionCreators/NewslatterActionCreators'
export default function Newslatter() {
    var dispatch = useDispatch()
    var [email, setemail] = useState("")
    var [show, setshow] = useState(false)
    var [msg, setmsg] = useState(false)
    var newslatter = useSelector((state) => state.NewslatterStateData)
    function getData(e) {
        setemail(e.target.value)
    }
    function postData(e) {
        e.preventDefault()
        var d = newslatter.find((item) => item.email === email)
        if (d) {
            setshow(true)
            setmsg("Already Subscribed With This Email id!")
        }
        else{
            dispatch(addNewslatter({ email: email }))
            setshow(true)
            setmsg("Thanks! To Subscribe Our Newslatter Service !")
        }
    }
    useEffect(() => {
        dispatch(getNewslatter())
    }, [newslatter.length])
    return (
        <>
            <section className="text-center mb-4">
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-8 heading-section text-center mb-4 ftco-animate">
                            <h4 className="mb-4">Subscribe Our Newslatter Service</h4>
                            {
                                show ? <div class="alert alert-success text-center alert-dismissible fade show" role="alert">
                                    {msg}
                                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div> : ""
                            }
                            <form onSubmit={postData}>
                                <div className="mb-3">
                                    <input type="email" name="email" onChange={getData} placeholder='Your Email Address' className='form-control rounded' />
                                </div>
                                <div className="my-2">
                                    <button type="submit" className='btn btn-primary py-2 px-4 mt-1 w-50'>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
