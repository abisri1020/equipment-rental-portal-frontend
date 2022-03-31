import React from 'react'

const Contact = () => {
  return (
        <div className='container my-5 py-5'>
      <div className='row'>
        <div className='col-md-6'>
          <img src='../img/logo.png' alt='logo' height="auto" width="100%" />
          <h3 className='contactus'>Contact no: +91 987654321</h3>
          <h3 className='contactus'>Mail us @ babirental@gmail.com</h3>
        </div>
        <div className='col-md-6 my-5 py-5'>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="email"/>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            <div className='buttons d-flex justify-content-center  my-2 py-3'>
              <button className='btn btn-primary' onClick={() => alert('Your Message is sent ✔')}>Submit</button>
            </div >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact