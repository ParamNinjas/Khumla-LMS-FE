import React, { Suspense } from 'react'
import QuizData from './QuizComponent'

function page() {
  return (
    <Suspense>
      <QuizData/>
    </Suspense>
  )
}

export default page
