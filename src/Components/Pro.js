import React from 'react'
import Projects from './Projects'

function Pro() {
    let data = [
        {
          title: "Application 1",
          discrption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          title: "Application 2",
          discrption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        {
          title: "Application 3",
          discrption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        },
        
      ]
  return <>
         <div className="container ">
         <h3 className='text-primary text-center mt-4'>𝕻𝖗𝖔𝖏𝖊𝖈𝖙𝖘</h3>
      <div className="row d-flex justify-content-center">
        {
          data.map((e, i) => {
            return <Projects key={i} data={e} />
          })
        }
      </div>
    </div>
  </>
}

export default Pro