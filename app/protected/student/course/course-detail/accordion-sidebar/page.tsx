"use client"
import React, { useState } from 'react';
import './accordion-sidebar.css'; // Import your CSS file
import { IModule } from '@/app/interfaces/courses';
//const collapseMenu = require('../../../../../../public/collapse.png')

const AccordionSidebar = (videosProps:any) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option:any) => {
    setSelectedOption(option);
  };

  const goToSectionModule=(module:IModule)=>{
    console.log("passed video", module)
    localStorage.setItem("module",JSON.stringify(module));
    window.location.href = '/protected/student/course/video'; 
   }

  return (
    <div className="AccordionSidebar">
      {/* Accordion Sidebar */}
      <div className="Sidebar">
        <div onClick={() => handleOptionClick('Option 1')}>
            Lessons
            {/* <span><img src={collapseMenu} alt="" /></span> */}
            </div>
        <div onClick={() => handleOptionClick('Option 2')}>Discussions</div>
        <div onClick={() => handleOptionClick('Option 3')}>Notes</div>
        <div onClick={() => handleOptionClick('Option 3')}>Assets</div>

      </div>

      {/* Content on the right */}
      <div className="Content">
        {selectedOption && selectedOption === "Option 1" ? (
          <div>
            {/* <h2 className="SelectedOption">{selectedOption}</h2> */}
            {
                <>
                {
                videosProps?.videos.map((video: any, index: number) => (
                    video?.modules.map((vid: any, i: number) => (
                      <div key={i}>
                        {
                        vid?.videos.map((video: any, j: number) => (
                            <div style={{ display: 'block', flexWrap: 'wrap',justifyContent:'flex-end'}}>
                            <div className="video-detail-card"  onClick={()=>goToSectionModule(vid)}>
                            <a className="flex" style={{ cursor: "pointer", paddingLeft: "1em" }}>
                              {video.title}
                            </a>
                            <span className="text-muted">{video.duration}</span> 
                           
                          </div>
                          </div>
                        ))}
                      </div>
                    
                    ))
                  ))}
                  </>
            }
          </div>
        ) : (
          <div>
            <h2>Select an option from the accordion</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccordionSidebar;
