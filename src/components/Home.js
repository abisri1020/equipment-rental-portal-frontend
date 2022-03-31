import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className='container-fluid'>
     <img className='brand' src='../img/logoc.png' alt='logo'/>
        <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center '>Why Us ?</h1>
            <hr />
            <p className='des'>"BABI Rental" is the number one online equipment renting platform which provides best quality brand new products for rent at low price with 100% customer satisifaction. We are the 1st Equipment rental website providing brand new electronic eqipments at low price. Our moto is to make people life eaiser by providing them their needs at their door steps. </p>
          </div>
        </div>
      </div>
      <div className='container my-3 py-3'>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center '>Our Services</h1>
            <hr />
            <ul className='des'>
              <li>Equipment Rental Services</li>
              <li>Camera rental services</li>
              <li>Laptop rental services</li>
              <li>Speaker rental services</li>
              <li>Generator rental services</li>
              <li>Fast delivery</li>
              <li>Customer support</li>
            </ul>
          </div>
        </div>
      </div>
     <Product/>
    </div>
  )
}

export default Home