import Menu from "./Menu";
import { NextPage } from "next";
import SideTab from "@/app/interfaces/sideTabs";
import NavToggler from "./NavToggler";

const SideNav: NextPage<{
  setIsOpen?: any;
  isOpen?: boolean;
  sideTabs: SideTab[];
}> = ({ setIsOpen, isOpen, sideTabs }) => {
  return (
    <>
      <div
        style={{ left: isOpen ? "0" : "-260px" }}
        className="mdk-drawer__content"
      >
        <div
          className="sidebar side-bar-bg sidebar-left"
          data-perfect-scrollbar
        >
          <NavToggler setIsOpen={setIsOpen} isOpen={isOpen} />
          <Menu sideTabs={sideTabs} />
        </div>
      </div>
    </>
  );
};

export default SideNav;
