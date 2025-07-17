import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { site_logo, headRightImg, chatBotImg, ham_menu, close_Icon } from '../assets/images';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const menuBtn = document.querySelector('.hambergerMenu');
        const nav = document.querySelector('.headNav > nav');
        const body = document.body;

        const handleMenuToggle = () => {
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');

            if (!document.querySelector('.menu-overlay')) {
                const overlay = document.createElement('div');
                overlay.className = 'menu-overlay';
                document.querySelector('header').appendChild(overlay);
            }
        };

        const handleMenuClose = () => {
            nav.classList.remove('active');
            body.classList.remove('menu-open');
            const overlay = document.querySelector('.menu-overlay');
            if (overlay) overlay.remove();
        };

        const bindAccordion = () => {
            document.querySelectorAll('.hasSub-menu').forEach((item) => {
                item.removeEventListener('click', item._clickHandler);

                if (window.innerWidth <= 1100) {
                    const handler = (e) => {
                        if (e.target.closest('.sub-menu')) return;

                        e.preventDefault();

                        const isOpen = item.classList.contains('open');
                        const subMenu = item.querySelector('.sub-menu');

                        // Close other open ones
                        document.querySelectorAll('.hasSub-menu.open').forEach((openItem) => {
                            if (openItem === item) return;
                            openItem.classList.remove('open');
                            const otherSub = openItem.querySelector('.sub-menu');
                            otherSub && (otherSub.style.height = null);
                        });

                        if (isOpen) {
                            subMenu.style.height = subMenu.scrollHeight + 'px';
                            requestAnimationFrame(() => {
                                subMenu.style.height = '0px';
                            });
                            subMenu.addEventListener('transitionend', () => {
                                item.classList.remove('open');
                                subMenu.style.height = null;
                            }, { once: true });
                        } else {
                            item.classList.add('open');
                            subMenu.style.height = '0px';
                            requestAnimationFrame(() => {
                                subMenu.style.height = subMenu.scrollHeight + 'px';
                            });
                        }
                    };

                    item.addEventListener('click', handler);
                    item._clickHandler = handler; // Custom prop to remove later
                } else {
                    item.classList.remove('open');
                    const subMenu = item.querySelector('.sub-menu');
                    if (subMenu) subMenu.style.height = null;
                }
            });
        };

        // Event bindings
        menuBtn?.addEventListener('click', handleMenuToggle);
        document.addEventListener('click', (e) => {
            if (e.target.closest('.HamClose') || e.target.classList.contains('menu-overlay')) {
                handleMenuClose();
            }
        });

        bindAccordion();
        window.addEventListener('resize', bindAccordion);

        return () => {
            menuBtn?.removeEventListener('click', handleMenuToggle);
            window.removeEventListener('resize', bindAccordion);
        };
    }, []);


    return (
        <>
            <header className={`col-100 floatLft clr relative ${isSticky ? 'stickyHead' : ''}`}>
                <div className="headTop d-flex algnItmCent justContflxEnd col-100 floatLft clr relative">
                    <div className="d-flex algnItmCent">
                        <div>
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M24.7162 20.6212C24.7162 21.0262 24.6262 21.4425 24.435 21.8475C24.2437 22.2525 23.9963 22.635 23.67 22.995C23.1188 23.6025 22.5112 24.0413 21.825 24.3225C21.15 24.6038 20.4188 24.75 19.6313 24.75C18.4838 24.75 17.2575 24.48 15.9637 23.9288C14.67 23.3775 13.3762 22.635 12.0938 21.7013C10.8 20.7563 9.57375 19.71 8.40375 18.5512C7.245 17.3812 6.19875 16.155 5.265 14.8725C4.3425 13.59 3.6 12.3075 3.06 11.0363C2.52 9.75375 2.25 8.5275 2.25 7.3575C2.25 6.5925 2.385 5.86125 2.655 5.18625C2.925 4.5 3.3525 3.87 3.94875 3.3075C4.66875 2.59875 5.45625 2.25 6.28875 2.25C6.60375 2.25 6.91875 2.3175 7.2 2.4525C7.4925 2.5875 7.75125 2.79 7.95375 3.0825L10.5638 6.76125C10.7663 7.0425 10.9125 7.30125 11.0137 7.54875C11.115 7.785 11.1713 8.02125 11.1713 8.235C11.1713 8.505 11.0925 8.775 10.935 9.03375C10.7888 9.2925 10.575 9.5625 10.305 9.8325L9.45 10.7212C9.32625 10.845 9.27 10.9913 9.27 11.1713C9.27 11.2613 9.28125 11.34 9.30375 11.43C9.3375 11.52 9.37125 11.5875 9.39375 11.655C9.59625 12.0262 9.945 12.51 10.44 13.095C10.9462 13.68 11.4862 14.2763 12.0712 14.8725C12.6787 15.4688 13.2637 16.02 13.86 16.5262C14.445 17.0212 14.9287 17.3587 15.3112 17.5612C15.3675 17.5837 15.435 17.6175 15.5137 17.6512C15.6037 17.685 15.6937 17.6962 15.795 17.6962C15.9862 17.6962 16.1325 17.6288 16.2562 17.505L17.1113 16.6613C17.3925 16.38 17.6625 16.1662 17.9213 16.0312C18.18 15.8737 18.4387 15.795 18.72 15.795C18.9337 15.795 19.1588 15.84 19.4062 15.9413C19.6537 16.0425 19.9125 16.1888 20.1938 16.38L23.9175 19.0237C24.21 19.2262 24.4125 19.4625 24.5362 19.7437C24.6487 20.025 24.7162 20.3062 24.7162 20.6212Z"
                                    stroke="white" stroke-width="1.75" stroke-miterlimit="10" />
                                <path opacity="0.4"
                                    d="M20.8125 10.125C20.8125 9.45 20.2837 8.415 19.4962 7.57125C18.7762 6.795 17.82 6.1875 16.875 6.1875"
                                    stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                                <path opacity="0.4" d="M24.75 10.125C24.75 5.77125 21.2287 2.25 16.875 2.25" stroke="white"
                                    stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div><Link to="/contact">Contact Us</Link></div>
                    </div>
                    <div className="d-flex algnItmCent">
                        <div>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M20.697 17.8717C19.2607 17.394 17.7165 17.037 16.0913 16.806C16.3125 15.5063 16.4303 14.1442 16.4678 12.75H22.4715C22.3373 14.6407 21.702 16.3905 20.697 17.8717ZM14.5755 22.1693C15.075 20.9625 15.4837 19.6583 15.798 18.2843C17.1465 18.4838 18.4395 18.7785 19.6642 19.1655C18.3112 20.6078 16.5548 21.669 14.5755 22.1693ZM12.7282 22.4632C12.4867 22.4805 12.246 22.5 12 22.5C11.754 22.5 11.514 22.4805 11.2718 22.4632C10.6335 21.1342 10.1168 19.6553 9.73425 18.0855C10.4798 18.0203 11.235 17.982 12 17.982C12.765 17.982 13.5203 18.0203 14.2665 18.0855C13.8833 19.6553 13.3665 21.1342 12.7282 22.4632ZM4.33575 19.1655C5.5605 18.7785 6.8535 18.4838 8.202 18.2843C8.51625 19.6583 8.925 20.9625 9.4245 22.1693C7.44525 21.669 5.6895 20.6078 4.33575 19.1655ZM3.30301 17.8717C2.29801 16.3905 1.66275 14.6407 1.5285 12.75H7.53225C7.56975 14.1442 7.6875 15.5063 7.90875 16.806C6.2835 17.037 4.73926 17.394 3.30301 17.8717ZM3.30301 6.12827C4.73926 6.60602 6.2835 6.96373 7.90875 7.19398C7.6875 8.49374 7.56975 9.85575 7.53225 11.25H1.5285C1.66275 9.35925 2.29801 7.60952 3.30301 6.12827ZM9.4245 1.83073C8.925 3.03748 8.51625 4.34173 8.202 5.71573C6.8535 5.51698 5.5605 5.22149 4.33575 4.83449C5.6895 3.39224 7.44525 2.33098 9.4245 1.83073ZM11.2718 1.53676C11.514 1.52026 11.754 1.5 12 1.5C12.246 1.5 12.4867 1.52026 12.7282 1.53676C13.3665 2.86576 13.8833 4.34549 14.2665 5.91449C13.5203 5.97974 12.765 6.01799 12 6.01799C11.235 6.01799 10.4798 5.97974 9.73425 5.91449C10.1168 4.34549 10.6335 2.86576 11.2718 1.53676ZM14.9655 12.75C14.925 14.0707 14.805 15.3698 14.5792 16.617C13.7347 16.5435 12.876 16.5 12 16.5C11.124 16.5 10.2652 16.5435 9.4215 16.617C9.195 15.3698 9.075 14.0707 9.03525 12.75H14.9655ZM9.03525 11.25C9.075 9.92925 9.195 8.63025 9.4215 7.383C10.2652 7.4565 11.124 7.5 12 7.5C12.876 7.5 13.7348 7.4565 14.5785 7.383C14.805 8.63025 14.925 9.92925 14.9655 11.25H9.03525ZM19.6642 4.83449C18.4395 5.22149 17.1465 5.51698 15.798 5.71573C15.4837 4.34173 15.075 3.03748 14.5755 1.83073C16.5548 2.33098 18.3112 3.39224 19.6642 4.83449ZM20.697 6.12827C21.702 7.60952 22.3373 9.35925 22.4715 11.25H16.4678C16.4303 9.85575 16.3125 8.49374 16.0913 7.19398C17.7165 6.96373 19.2607 6.60602 20.697 6.12827ZM12 0C5.373 0 0 5.37225 0 12C0 18.6277 5.373 24 12 24C18.627 24 24 18.6277 24 12C24 5.37225 18.627 0 12 0Z"
                                    fill="white" />
                            </svg>
                        </div>
                        <div><a href="#">Global</a></div>
                    </div>
                    <div className="d-flex algnItmCent">
                        <div>
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.9944 20.0139L26.5 26.5M22.75 13.375C22.75 18.5526 18.5526 22.75 13.375 22.75C8.19733 22.75 4 18.5526 4 13.375C4 8.19733 8.19733 4 13.375 4C18.5526 4 22.75 8.19733 22.75 13.375Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div><a href="#">Search</a></div>
                    </div>
                </div>
                <div className="headBot col-100 floatLft clr relative">
                    <div className="headBotWrap d-flex algnItmCent col-100">
                        <div className="headLogo">
                            <Link to="/"><img src={site_logo} alt="WBTL" /></Link>
                        </div>
                        <div className="headNav">
                            <div className="hambergerMenu"><a href="#"><img src={ham_menu}
                                alt="Menu" /></a></div>
                            <nav>
                                <div className="HamClose col-100"><a href="#"><img src={close_Icon}
                                    alt="Close" /></a></div>
                                <ul className="d-flex algnItmCent">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li className="hasSub-menu">
                                        <Link>Management</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/board">Board of Directors</Link></li>
                                            <li><Link to="/leaders">Leadership Team</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/product">Our Product</Link></li>
                                    <li><Link to="/solutions">Our Solutions</Link></li>
                                    <li className="hasSub-menu">
                                        <Link>Careers</Link>
                                        <ul className="sub-menu">
                                            <li><Link to="/life_at_wbtl">Life at WBTL</Link></li>
                                            <li><Link to="/joinus">Join Us</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="headRight"><img src={headRightImg} alt="" /></div>
                    </div>
                </div>
                <div className="chatBtnSec">
                    <Link to="/contact"><div className="chatBtn"><img src={chatBotImg} alt="Chat" /></div></Link>
                </div>
            </header>
        </>
    )
}

export default Header
