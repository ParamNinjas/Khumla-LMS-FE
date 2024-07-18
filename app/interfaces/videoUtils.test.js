// Import the function to be tested
import { updateVideoDetail } from './reducerFunctions';

describe('updateVideoDetail', () => {
  // Define your dummyCourse and test cases here
  const dummyCourse = {
    sections: [
      {
        id: 'section1',
        modules: [
          {
            id: 'module1',
            videos: [
              {
                id: 'video1',
                title: 'Updated Title',
                duration: '5:30',
                videoLink: "https://example.com/updated-video",
                type: 1,
                comments: [],
                videoFile: null,
              },
              {
                id: 'video2',
                title: 'Video 2',
                duration: '4:45',
                videoLink: "https://example.com/updated-video",
                type: 2,
                comments: [],
                videoFile: null,
              },
            ],
          },
        ],
      },
    ],
  };

  test('should update video details correctly', () => {
    const action = {
      type: 'UPDATE_VIDEO_DETAIL',
      payload: {
        sectionId: 'section1',
        moduleId: 'module1',
        videoId: 'video1',
        title: 'Updated Title',
        duration: '3:15',
        videoLink: 'https://example.com/updated-video',
        type: 3,
        comments: [{ id: 'comment1', text: 'Nice video!' }],
        videoFile: null,
      },
    };

    // Create a copy of the dummy data to avoid direct modification
    const newState = { course: { ...dummyCourse } };

 
    console.log('Initial State:');
    console.log(newState);

    // Pass the newState as the initial state to updateVideoDetail
    const updatedState = updateVideoDetail(newState, action);

    // Add some console logs for debugging
    console.log('Updated State:');
    console.log(updatedState);

    // Check if the video details have been updated correctly
    expect(updatedState.course.sections[0].modules[0].videos[0].title).toBe('Updated Title');
    expect(updatedState.course.sections[0].modules[0].videos[0].duration).toBe('5:30');
    expect(updatedState.course.sections[0].modules[0].videos[0].videoLink).toBe(
                                                                                 
        "https://example.com/updated-video"
         );


    
    expect(updatedState.course.sections[0].modules[0].videos[0].type).toBe(1);


    
    expect(updatedState.course.sections[0].modules[0].videos[0].comments).toEqual([
      { id: 'comment1', text: 'Nice video!' },
    ]);
  });

  test('should not modify state if video is not found', () => {
    const action = {
      type: 'UPDATE_VIDEO_DETAIL',
      payload: {
        sectionId: 'section1',
        moduleId: 'module1',
        videoId: 'video3', // Non-existent video ID
        title: 'Updated Title',
        duration: '3:15',
        videoLink: 'https://example.com/updated-video',
        type: 3,
        comments: [{ id: 'comment1', text: 'Nice video!' }],
        videoFile: null,
      },
    };

    // Create a copy of the dummy data to avoid direct modification
    const newState = { course: { ...dummyCourse } };

    // Pass the newState as the initial state to updateVideoDetail
    const updatedState = updateVideoDetail(newState, action);

    // The state should remain unchanged as the video was not found.
    expect(updatedState).toEqual(newState);
  });

  // Add more test cases for edge cases and boundary conditions if needed
});
