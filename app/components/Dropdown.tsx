import { useState } from "react";
import SideTab from "@/app/interfaces/sideTabs";

export default function Dropdown({
  icon,
  parent,
  children,
  pathname,
}: {
  icon?: string;
  parent: string;
  children: any[];
  pathname: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  let isTabActive = false;

  const childrenMap = children.map((l: SideTab) => {
    if (pathname == l.url) isTabActive = true;
    return (
      <li
        key={l.name}
        className={`sidebar-menu-item ${
          isTabActive && pathname == l.url ? "active" : ""
        }`}
      >
        <a className="sidebar-menu-button" href={l.url}>
          <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
            {l.icon}
          </span>
          <span className="sidebar-menu-text">{l.name}</span>
        </a>
      </li>
    );
  });

  return (
    <li className={`sidebar-menu-item ${isTabActive ? "active" : ""}`}>
      <a
        className="sidebar-menu-button d-flex justify-content-between"
        data-toggle="collapse"
        href={`#${parent}`}
      >
        <div>
          <span className="material-icons sidebar-menu-icon sidebar-menu-icon--left">
            {icon}
          </span>
          {parent}
        </div>
        <span
          className={`material-icons arrow-right`}
          style={{ transform: isOpen ? "rotate(90deg)" : "" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          chevron_right
        </span>
      </a>
      <ul
        className="sidebar-submenu collapse sm-indent"
        id={parent}
        style={{ display: isOpen ? "block" : "" }}
      >
        {childrenMap}
      </ul>
    </li>
  );
}
