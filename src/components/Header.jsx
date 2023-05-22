import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'

const Header = () => {
    return (
        <>
            <header className="header-top-strip py-3">
                <div className="container xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className='text-white mb-0'>Free shiopping</p>
                        </div>
                        <div className="col-6">
                            <p className='text-end text-white'>Call <a className='text-white' href="tel:+91 9008047017">+91 9008047017</a> </p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className='text-white'>Ayurveda.</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input type="text" className="form-control py-2" placeholder="Search Product Here.."
                                    aria-label="Search Product Here.." aria-describedby="basic-addon2" />
                                <span className="input-group-text" id="basic-addon2"><BsSearch className='fs-6' /> </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/compare.svg' alt='Compare'></img>
                                        <p className='mb-0'>
                                            Compare <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/wishlist.svg' alt='Wish list'></img>
                                        <p className='mb-0'>
                                            Favorite <br /> Products
                                        </p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/user.svg' alt='Login'></img>
                                        <p className='mb-0'>
                                            Login <br /> My Account
                                        </p>
                                    </Link>
                                </div>
                                <div >
                                    <Link className='d-flex align-items-center gap-10 text-white'>
                                        <img src='/images/cart.svg' alt='Cart'></img>
                                        <div className='d-flex flex-column gap-10'>
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className='mb-0'>$ 5000</p>
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
                            <div className="menu-bottom d-flex align-items-center gap-30">
                                <div>
                                    <div className="dropdown">
                                        <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 align-items-center gap-15 d-flex align-items-lg-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Shop Categories
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><Link className="dropdown-item text-white" to="#">Action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                                            <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='menu-links'>
                                    <div className="d-flex align-items-center gap-15">
                                        <NavLink to="/">Home</NavLink>
                                        <NavLink to="/">Our Stote</NavLink>
                                        <NavLink to="/">Blogs</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
