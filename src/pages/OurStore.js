import React, {useState} from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component"
import ProductCard from "../components/ProductCard"

function OurStore() {
    const [grid, setGrid] = useState(4);
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
                <div>
                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            Vati
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            Panati
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            supari
                        </span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                            kumkum
                        </span>
                    </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                    <div className="random-products mb-3 d-flex">
                        <div className="w-50">
                            <img src="images/watch.jpg" className="img-fluid" alt="watch"/>
                        </div>
                        <div className="w-50">
                            <h5>
                                kids headphone bulk 10 pack
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <b>$ 300</b>
                        </div>
                    </div>
                    <div className="random-products d-flex">
                        <div className="w-50">
                            <img src="images/watch.jpg" className="img-fluid" alt="watch"/>
                        </div>
                        <div className="w-50">
                            <h5>
                                kids headphone bulk 10 pack
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <b>$ 300</b>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-9">
                <div className="filter-sort-grid mb-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center gap-10">
                            <p className="mb-0 d-block" style={{width:"100px"}}>Sort By</p>
                            <select name="" className="form-control form-select" id="">
                                <option value="manual">Features</option>
                                <option value="best-selling" selected="selected">Best selling</option>
                                <option value="title-ascending">Alphabetically, A-z</option>
                                <option value="title-descending">Alphabetically Z-A</option>
                                <option value="price-ascending">price: low to High</option>
                                <option value="price-descending">price: high to low</option>
                                <option value="created-ascending">Date, old to new</option>
                                <option value="created-descending">Date: new to old</option>
                            
                            </select>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                            <p className="totalproducts mb-0">21 Products</p>
                            <div className="d-flex gap-10 align-items-center grid">
                                <img
                                    onClick={()=> {
                                        setGrid(3);
                                    }}
                                src="images/gr4.svg" className="d-block img-fluid" alt="grid"/>    
                                <img
                                    onClick={()=> {
                                        setGrid(4);
                                    }}
                                src="images/gr3.svg" className="d-block img-fluid" alt="grid"/>
                                <img
                                    onClick={()=> {
                                        setGrid(6);
                                    }}
                                src="images/gr2.svg" className="d-block img-fluid" alt="grid"/>
                                <img
                                    onClick={()=> {
                                        setGrid(12);
                                    }}
                                src="images/gr.svg" className="d-block img-fluid" alt="grid"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product-list pb-5">
                    <div className="d-flex gap-10 flex-wrap">
                        <ProductCard grid={grid} />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurStore;
