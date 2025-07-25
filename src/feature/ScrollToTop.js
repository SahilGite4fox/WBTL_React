import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scrolls to top of the page on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
