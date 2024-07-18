"use client";
import Drawer from "./Drawer";
import HeadNav from "./HeadNav";
import { useState } from "react";

function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const sideTabs = [
    { name: 'Dashboard', url: '#', icon: 'insert_chart_outlined' },
    { name: 'Students', url: '#', icon: 'people_outline' },
    { name: 'Manage Courses', url: '/protected/admin/manage-courses', icon: 'assignment' },
    {
      name: 'Assessments', url: '#', icon: 'assignment', children: [
        { name: 'List of Assessments', url: '/protected/admin/assessments', icon: '' },
        { name: 'Grade Assessments', url: '/protected/admin/assessments/grade-assessments', icon: '' }
      ]
    }
  ];

  return (
    <>
      <div className="mdk-header-layout js-mdk-header-layout">
        <HeadNav setIsOpen={setIsOpen} isOpen={isOpen} />

        {/* <!-- Header Layout Content --> */}
        <div className="mdk-header-layout__content page-content ">

          <nav className="navbar navbar-light bg-alt border-bottom">
            <div className="container page__container">
              <ul className="nav navbar-nav">
                <li className="nav-item">
                  
                </li>
              </ul>
            </div>
          </nav>

          {children}
        </div>
        {/* <!-- // END Header Layout Content --> */}
      </div>
      {/* <!-- // END Header Layout --> */}

      {/* <!-- drawer --> */}
      <Drawer setIsOpen={setIsOpen} isOpen={isOpen} sideTabs={sideTabs} />
    </>
  );
}

export default RootLayout;
