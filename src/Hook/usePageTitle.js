// hooks/usePageTitle.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeTitles = {
  '/': 'Home',
  '/about': 'About Us',
  '/board': 'Board of Directors',
  '/leaders': 'Leadership Team',
  '/product': 'Our Product',
  '/solutions': 'Our Solutions',
  '/lifeatwbtl': 'Life at WBTL',
  '/joinus': 'Join Us',
  '/contact': 'Contact Us',
};

const usePageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const title = routeTitles[pathname] || 'WBTL';
    document.title = `${title} | WBTL`; // Customize the suffix as needed
  }, [pathname]);
};

export default usePageTitle;
