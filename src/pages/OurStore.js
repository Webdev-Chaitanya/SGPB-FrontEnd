import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function OurStore() {
  return (
    <>
      <Meta title={"Our Store"} />
      <BreadCrumb title="Our store"></BreadCrumb>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Vati</li>
                    <li>dive</li>
                    <li>kumkum</li>
                    <li>haldi</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                  <div class="form-check">
                    <input 
                    class="form-check-input" 
                    type="checkbox"
                    value=""
                    id=""
                    />
                    <label class="form-check-label" for="">
                        In Stock (1)
                    </label>
                  </div>
                  <div class="form-check">
                    <input 
                    class="form-check-input" 
                    type="checkbox"
                    value=""
                    id=""
                    checked
                    />
                    <label class="form-check-label" for="">
                        Out of Stock
                    </label>
                  </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="From"/>
                        <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput1" placeholder="To"/>
                        <label htmlFor="floatingInput">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                        <ul className="colors">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
