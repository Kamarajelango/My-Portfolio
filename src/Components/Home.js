import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  return <>
  
    {/* <div className='container d-flex justify-content-center mt-2 '> */}
   
      <Navbar  expand="lg" className='sticky-top navigate  container-fluid shadow-lg p-3 mb-3 bg-body rounded'>
        <Container>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
            {/* <div className='button'>About</div>
            <div className='button'>Education</div>
            <div className='button'>Skills</div>
            <div className='button'>Projects</div>
            <div className='  button'>Contact</div> */}

              <Link to='/about' className='text-decoration-none'><div className='button'>𝘈𝘣𝘰𝘶𝘵</div></Link>
              <Link to='/eduction' className='text-decoration-none'><div className='button'>𝘌𝘥𝘶𝘤𝘢𝘵𝘪𝘰𝘯</div></Link>
              <Link to='/skills' className='text-decoration-none'><div className='button'>𝘚𝘬𝘪𝘭𝘭𝘴</div></Link>
              <Link to='/projects' className='text-decoration-none'><div className='button'>𝘗𝘳𝘰𝘫𝘦𝘤𝘵𝘴</div></Link>
              <Link to='/contact' className='text-decoration-none'> <div className='  button'>𝘊𝘰𝘯𝘵𝘢𝘤𝘵</div></Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* <Link to='/about'><button className='btn btn-primary button'>About</button></Link>  
      <Link to='/eduction'><button className='btn btn-primary button'>Education</button></Link> 
       <Link to='/skills'><button className='btn btn-primary button'>Skills</button></Link> 
       <Link to='/projects'><button className='btn btn-primary button'>Projects</button></Link> 
       <Link to='/contact'> <button className='btn btn-primary button'>Contact</button></Link> */}
    {/* </div> */}

  </>
}

export default Home