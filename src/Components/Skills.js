import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

function Skills() {
  return <>
    <div className='container col-lg-6 col-12 pt-lg-0 pt-3 justify-content-center'>
      <h3 className='text-primary text-center mt-2 mb-2'>𝓢𝓴𝓲𝓵𝓵𝓼</h3>
      <div >HTML</div>
      <ProgressBar animated variant="danger" now={90} label={`${90}%`} /><br/>


      <span>CSS</span><ProgressBar animated variant="danger" now={90} label={`${90}%`} /><br/>
      
      <article>Bootstrap</article><ProgressBar variant="danger" animated now={90} label={`${90}%`} /><br/>
      
      <article>Javascript</article><ProgressBar variant="danger" animated now={80} label={`${80}%`} /><br/>
      
      <article>React Js</article><ProgressBar animated variant="danger" now={70} label={`${70}%`} /><br/>
     
      <article>Node Js</article><ProgressBar animated variant="danger" now={60} label={`${60}%`} /><br/>
      
      <article>Mysql</article><ProgressBar animated variant="danger" now={60} label={`${60}%`} /><br/>
     
      <article>Mongodb</article><ProgressBar animated variant="danger" now={70} label={`${70}%`} /><br/>
      


    </div>
  </>
}

export default Skills