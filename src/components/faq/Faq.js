import React from 'react'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import Question from './Question'
import {questions} from './data.js'

const data = () => {
  return (
    <seaction id='faq'>
    <div className='faq'>
      <div className="u-title" >
          <MdOutlineLibraryBooks color="orangered" size={30} />
          <h2>FAQs</h2>
          <p className="u-text-small">
            SocialX app has Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi labore, harum officiis error quia cupiditate?
          </p>
          <div className='questions'>
            {
              questions.map((question)=>(

              <Question title={question.title} answer={question.answer} />
              )
              )}
            
        </div>
        </div>
    </div>
    </seaction>
  )
}

export default data
