import { NextPage } from 'next';
import SideNav from "./SideNav";
import { useEffect, useState } from 'react';

const Drawer: NextPage<{ setIsOpen: any, isOpen: boolean }> = ({ setIsOpen, isOpen }) => {
  
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
  
  return (isMobi) ?
    (
      <div style={isOpen ? { display: 'block' } : { display: 'none' }} className="mdk-drawer js-mdk-drawer" id="default-drawer-mobi" data-align="start" data-position="left" data-domfactory-upgraded="mdk-drawer" data-persistent="" data-opened="">
        <div className={isOpen ? "mdk-drawer__scrim__open" : "mdk-drawer__scrim"} onClick={() => { setIsOpen(!isOpen) }} ></div>
        <SideNav />
      </div>
    )
  :
    (
      <div className="mdk-drawer js-mdk-drawer" id="default-drawer" data-align="start" data-position="left" data-domfactory-upgraded="mdk-drawer" data-persistent="" data-opened="">
        <div className="mdk-drawer__scrim" onClick={() => { setIsOpen(!isOpen) }} ></div>
        <SideNav />
      </div>
    )
}

export default Drawer