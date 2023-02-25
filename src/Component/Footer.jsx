import React from 'react'

import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
      <footer className="ftco-footer ftco-section pb-1">
        <div className="container">
          <div className="row">
            <div className="mouse">
              <a href="#" className="mouse-icon">
                <div className="mouse-wheel"><span className="ion-ios-arrow-up"></span></div>
              </a>
            </div>
          </div>
          <div className="row mb-1">
            <div className="col-lg-2 col-md-6">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Shopsy</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-left mt-5">
                  <li className="ftco-animate"><a href='https://www.facebook.com/'><span className="icon-facebook"></span></a></li>
                  <li className="ftco-animate"><a href='https://www.instagram.com/'><span className="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ftco-footer-widget mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Menu</h2>
                <ul className="list-unstyled">
                  <li><Link to="/shop" className="py-2 d-block">Shop</Link></li>
                  <li><Link to="/about" className="py-2 d-block">About</Link></li>
                  <li><Link to="#" className="py-2 d-block">Journal</Link></li>
                  <li><Link to="/contact" className="py-2 d-block">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Help</h2>
                <div className="d-flex">
                  <ul className="list-unstyled mr-l-5 pr-l-3 mr-4">
                    <li><Link to="#" className="py-2 d-block">Shipping Information</Link></li>
                    <li><Link to="#" className="py-2 d-block">Returns &amp; Exchange</Link></li>
                    <li><Link to="#" className="py-2 d-block">Terms &amp; Conditions</Link></li>
                    <li><Link to="#" className="py-2 d-block">Privacy Policy</Link></li>
                  </ul>
                  <ul className="list-unstyled">
                    <li><Link to="#" className="py-2 d-block">FAQs</Link></li>
                    <li><Link to="#" className="py-2 d-block">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="ftco-footer-widget mb-4">
                <h2 className="ftco-heading-2">Have a Questions?</h2>
                <div className="block-23 mb-3">
                  <ul>
                    <li><span className="icon icon-map-marker py-1"></span><span className="text pb-4 py-1">221,Badarka,Sadar,Azamgarh,UP,India</span></li>
                    <li><Link to="#"><span className="icon icon-phone"></span><span className="text">+91 9795071712</span></Link></li>
                    <li><Link to="#"><span className="icon icon-envelope py-2"></span><span className="text pt-2"> aakashmauryaa122@gmail.com</span></Link></li>
                    <p className='mt-5 pt-4'>Made with <i className="fa fa-heart-o text-primary"></i> by easy Tutorials</p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
