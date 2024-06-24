import { NextPage } from "next";

const NavToggler: NextPage<{ setIsOpen?: any; isOpen?: boolean }> = ({
  setIsOpen,
  isOpen,
}) => {

  return (
    <>
      <a
        href="#"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="navbar-toggler navbar-toggler-right navbar-toggler-custom d-flex align-items-center justify-content-center position-absolute right-0 top-0"
      >
        <span className="material-icons">close</span>
      </a>

      <a href="#" className="sidebar-brand ">
        <span>Khumla</span>
      </a>
    </>
  );
};

export default NavToggler;
