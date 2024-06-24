import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const NavToggler: NextPage<{ setIsOpen?: any, isOpen?: boolean }> = ({ setIsOpen, isOpen }) => {
  const [isMobi, setIsMobi] = useState(false);
  const checkIsMobile = () => {
    setIsMobi(window.matchMedia('(max-width: 768px)').matches);
  };

  // Check on component mount and on window resize
  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);
  
  return (
      <>
      {isMobi && <a href="#" onClick={() => { setIsOpen(!isOpen) }}
        className="navbar-toggler navbar-toggler-right navbar-toggler-custom d-flex align-items-center justify-content-center position-absolute right-0 top-0" >
        <span className="material-icons">sync_alt</span>
      </a>}

      <a href="#" className="sidebar-brand ">
          <span>Khumla</span>
      </a>

    </>
  )
}

export default NavToggler