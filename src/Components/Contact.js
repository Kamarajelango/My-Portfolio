import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Contact() {
  return <>
    <div className='container mt-2 '>
      <h3 className='text-primary'>ℂ𝕠𝕟𝕥𝕒𝕔𝕥</h3>
      <div className='row mt-3'>
        <div className='col'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Label>Message</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" >
              <Form.Control
                as="textarea"               
                style={{ height: '100px' }}
              />
            </FloatingLabel>

            <div className='d-grid gap-2 d-md-flex justify-content-md-end'>
            <Button className='btn-dark  mt-2 '  type="submit">
              Submit
            </Button>
            </div>
           
          </Form>
        </div>
        <div className='col '>
          <br/><br/>
            <h5 className='text-center'>Email</h5>
            <p className='text-center'>rajelangovan18@gmail.com</p>
            <h5 className='text-center'>Mobile</h5>
            <p className='text-center'>+91 9751723184</p>
            <h5 className='text-center'>Address</h5>
            <p className='text-center'>195,Bharma Colony <br/>
              Parppanacherry, Ariyalur-621 704
            </p>

        </div>

      </div>
    </div>
  </>
}

export default Contact