import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
    <div className='home-main-div'>
    <Link to="/Dictionary" className='text-decoration-none'  style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div className='border rounded-5 p-3 d-flex flex-column align-items-center text-center shadow' >
        <img src="./logo/dictionary-img.png" className='my-3 Home-img'/>
        <h5 className='py-2 text-decoration-underline'>Word Wise</h5>
        <p>Unlock the World of Words with our Dictionary Software! Dive into a universe of definitions, meanings, and linguistic wonders</p>
      </div>
      </Link>
      <Link to="/Translator" className='text-decoration-none' style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div className='border rounded-5 p-3 d-flex flex-column align-items-center text-center shadow' >
        <img src="./logo/lang-translate-img.png" className='Home-img'/>
        <h5 className='py-2 text-decoration-underline'>Global Speak</h5>
        <p>Break Down Language Barriers with Our Translator! Say goodbye to misunderstandings and hello to global communication.</p>
      </div>
      </Link>
    </div>
    <div className='home-main-div'>
    <Link to="/TextMode" className='text-decoration-none' style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div className='border rounded-5 p-3 d-flex flex-column align-items-center text-center shadow' >
        <img src="./logo/text-renderer-img.png" className='Home-img'/>
        <h5 className='py-2 text-decoration-underline'>Text Craft</h5>
        <p>Transformation Made Effortless! Elevate your text with our Text Craft – the ultimate toolkit for crafting content your way.</p>
      </div>
    </Link>
    <Link to="/Summarizer" className='text-decoration-none' style={{ color: props.mode === "light" ? "black" : "white" }}>
      <div className='border rounded-5 p-3 d-flex flex-column align-items-center text-center shadow' >
        <img src="./logo/summarizer.png" className=' Home-img'/>
        <h5 className='py-2 text-decoration-underline'>QuickSummarize</h5>
        <p>Unlock the Power of Summarization: Transform Lengthy Texts into Bite-sized Insights with Our Software!</p>
      </div>
    </Link>

    </div>
    </>
  )
}

export default Home