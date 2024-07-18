import { NextPage } from "next";
import SideTab from "@/app/interfaces/sideTabs";
import { usePathname } from "next/navigation";
import Dropdown from "../components/Dropdown";

const Menu: NextPage<{ sideTabs: SideTab[] }> = ({ sideTabs }) => {
  const pathname = usePathname();

  return (
    <>
      <ul className="sidebar-menu">
        {sideTabs &&
          sideTabs.map((tab) => {
            if (tab.children) {
              return (
                <Dropdown
                  key={tab.name}
                  icon={tab.icon}
                  parent={tab.name}
                  children={tab.children}
                  pathname={pathname}
                />
              );
            }

            return (
              <li
                key={tab.url}
                className={`sidebar-menu-item ${
                  pathname == tab.url ? "active" : ""
                }`}
              >
                <a className="sidebar-menu-button" href={tab.url}>
                  <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
                    {tab.icon}
                  </span>
                  <span className="sidebar-menu-text">{tab.name}</span>
                </a>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Menu;
