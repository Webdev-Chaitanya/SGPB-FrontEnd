import React from 'react'
import { icons } from 'react-icons'
import {Link} from 'react-router-dom'
import {BsFacebook, BsWhatsapp, BsYoutube, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter"/>
                <h2 className="mb-0 text-white">Sign up for newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder= "Your Email Address "
                  aria-label="Your Email Address "
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className='row'>
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div className="footer-link d-flex flex-column">
                <address className='text-white fs-6'> xyz, Ambernath, <br/>
                  PinCode: 401203
                </address>
                <a href="tel:+91 8976545736" 
                className="mt-3 d-block mb-1 text-white">
                +91 8976545736
                </a>
                <a href="mailto:poojasahitya@gmail.com" 
                className="mt-3 d-block mb-0 text-white">
                poojasahitya@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="">
                    <BsYoutube className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsWhatsapp className="fs-4"/>
                  </a>
                  <a className="text-white" href="">
                    <BsFacebook className="fs-4"/>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping policy</Link>
                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Link</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Laptop</Link>
                <Link className="text-white py-2 mb-1">Headphone</Link>
                <Link className="text-white py-2 mb-1">Tablet</Link>
                <Link className="text-white py-2 mb-1">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Chaitanya
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer