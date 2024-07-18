import React, { Suspense } from 'react'
import CourseAssessment from './assessment'

function page() {
  return (
   

    <Suspense>
        <CourseAssessment/>
    </Suspense>
  )
}

export default page
