import React,{useState} from 'react'
import './Question.css'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'
import {Questions} from './data.js'

const Question = ({title,answer}) => {
    const [showAnswer,setShowAnswer] = useState(false)

    const handleclick = () =>{
        setShowAnswer(!showAnswer)
    }
  return (
    <div className='container question'>
        <div className=' question-title'> 
            <h4>{title}</h4>
            <button className='question-icon' onClick={handleclick}>
                {
                    showAnswer ? <AiOutlineMinus color='red' />
                                : <AiOutlinePlus color='#1f93ff' />
                }
            </button>
        </div>

        <div className=' question-answer'>

{/* if showAnswer? => then show the p */}
            {showAnswer && 
            <p className='u-text-small'>
            {answer}</p>      
            }      
        </div>
        
    </div>
  )
}

export default Question
