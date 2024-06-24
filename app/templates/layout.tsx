"use client"

import Drawer from '@/app/template-components/SideNav/Drawer'
import HeadNav from '@/app/template-components/HeadNav/HeadNav';
import { useState } from 'react';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const [isOpen, setIsOpen] = useState(false);

  return ( 
    <>
      <div className="mdk-drawer-layout js-mdk-drawer-layout"
              data-push
              data-responsive-width="992px">
                  <div className="mdk-drawer-layout__content page-content">
                  <HeadNav setIsOpen={setIsOpen} isOpen={isOpen} /> 
          
                      {children}
          </div>
        <Drawer setIsOpen={setIsOpen} isOpen={isOpen} /> 
        </div>
    </>
  )
}
