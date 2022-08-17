import React from 'react'

function Projects(props) {

  return <>
  
    <div className="card  mx-4" style={{"width": "18rem"}}>  
    <img src="" alt=""/>
  <div className="card-body">
    <h5 className="card-title">{props.data.title}</h5>
    <p className="card-text">Description:{props.data.discrption}</p>
    <a href="!#" className="btn btn-primary">View us</a>
  </div>
</div>

  </>
}

export default Projects