'use client'
import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './ScrollToTop.css';
import Link from 'next/link';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <div className="scroll-top">
      <Link href="#top">
        <ArrowUpwardIcon fontSize="large" />
      </Link>
    </div>
  ) : null;
};

export default ScrollToTop;
