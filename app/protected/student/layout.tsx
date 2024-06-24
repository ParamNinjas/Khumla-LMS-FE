"use client";
import Drawer from "@/app/topbar-components/Drawer";
import HeadNav from "@/app/topbar-components/HeadNav";
import { useState } from "react";
import withAuth from './StudentAuthWrapper'
import SideTab from '@/app/interfaces/sideTabs';

function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const sideTabs: SideTab[] = [
    { name: 'Courses', url: '/protected/student/course/all-courses', icon: 'assignment' },
    {
      name: 'Assessments', url: '#', icon: 'assignment', children: [
        { name: 'My Assessments', url: '/protected/student/assessments', icon: '' },
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

export default withAuth(RootLayout);