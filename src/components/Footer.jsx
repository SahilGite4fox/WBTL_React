import React from 'react';
import { linkdInIcon } from '../assets/images';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className="col-100 floatLft clr relative">
                <div className="wrapper1080 relative z-3">
                    <div className="footTop d-flex algnItmCent justContSpBtw">
                        <div className="footTopLft relative">
                            <div className="footTitle">
                                <h6>Any Questions?</h6>
                            </div>
                            <div className="footSubTitle spanGredient"><span>Let’s find the solution together.</span></div>
                            <div className="footContBtn">
                                <Link to="/contact">
                                    <span>Contact Us </span>
                                    <span>
                                        <svg width="21" height="17" viewBox="0 0 21 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M1.80507 12.9377L19.2033 5.63157M19.2033 5.63157L8.90978 1.42655M19.2033 5.63157L14.9982 15.925"
                                                stroke="#C40E1A" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>
                        <div className="footLinks">
                            <ul>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/board">Management</Link></li>
                                <li><Link to="/product">Our Product</Link></li>
                                <li><Link to="/solutions">Our Solutions</Link></li>
                                <li><Link to="/life_at_wbtl">Life at WBTL</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footBot z-3">
                        <div className="footSocial d-flex algnItmCent">
                            <p>Follow us on</p>
                            <ul className="d-flex algnItmCent">
                                <li><Link to="https://www.linkedin.com/company/wbtl/" target="_blank"><img src={linkdInIcon} alt="LinkdIn" /></Link></li>
                            </ul>
                        </div>
                        <div className="footCopy textRight">
                            <p>© Copyright 2025. Designed and Developed by 4Fox</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer