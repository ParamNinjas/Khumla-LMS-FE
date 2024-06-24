"use client";
import Drawer from "@/app/topbar-components/Drawer";
import HeadNav from "@/app/topbar-components/HeadNav";
import { useState } from "react";
import withAuth from './AdminAuthWrapper'

function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const sideTabs = [
    { name: 'Course Dashboard', url: '/protected/admin/course-dashboard', icon: 'dashboard' },
    { name: 'Course Graphs', url: '/protected/admin/course-dashboard/graphs', icon: 'show_chart' },
    { name: 'Manage Courses', url: '/protected/admin/manage-courses', icon: 'assignment' },
    {name : 'Grouped Progress', url: `/protected/admin/grouped-progress/1/assessments`, icon : 'dashboard',},
    {name : 'Courses', url: `/protected/admin/courses`, icon : 'create_new_folder',},
    {
      name: 'Assessments', url: '#', icon: 'list', children: [
        { name: 'Grade Assessments', url: '/protected/admin/assessments/grade-assessments', icon: '' }
      ]
    },
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