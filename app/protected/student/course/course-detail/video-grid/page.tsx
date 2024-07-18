import React from 'react';
import '../videoGrid.css'

const VideoGrid = (videos:any) => {

  return (
    <>
  {videos && videos?.videos?.map((video: any, index: number) => (
    video?.modules.map((x: any, i: number) => (
      <div key={i}>
        {
        x?.videos?.map((video: any, j: number) => (
             
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
            <div className="video-card">
            <span className="text-muted">{video.duration}</span> 
            <a className="flex" style={{ cursor: "pointer", paddingLeft: "1em" }} onClick={() => {}}>
              {video.title}
            </a>
          </div>
          </div>
        ))}
      </div>
    
    ))
  ))}
  </>
  );
};

export default VideoGrid;
