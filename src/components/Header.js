import React from "react";
import { NavLink, Link } from "react-router-dom";
import {BsSearch} from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                {" "}
                मोफत होम डिलिव्हरी
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
              संपर्क:
                <a className="text-white" href="tel:+91 8605336589">
                  +91 8605336589
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-item-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Dev Corner</Link>
              </h2>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-2"
                  placeholder="वस्तू शोध "
                  aria-label="वस्तू शोध "
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6"/>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-item-center justify-content-between">
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                   <img src="/images/compare.svg" alt="compare" />
                   <p className="mb-0">
                   तुलना <br/> करा
                   </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                   <img src="/images/wishlist.svg" alt="wishlist" />
                   <p className="mb-0">
                   इच्छा <br/> सूची
                   </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                   <img src="/images/user.svg" alt="user" />
                   <p className="mb-0">
                   लॉगिन <br/> माझे खाते
                   </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-item-center gap-10 text-white">
                   <img src="/images/cart.svg" alt="cart" />
                   <div className="d-flex flex-column gap-10">
                    <span className="badge bg-white text-dark">0</span>
                    <p className="mb-0">रु 500</p>
                   </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-item-center">
                <div></div>
                <div className="menu-links">
                  <div className="d-flex align-item-center gap-15">
                    <NavLink to="/">मुख्यपृष्ठ</NavLink>
                    <NavLink to="/">आमचे दुकान</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/"> संपर्क</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
