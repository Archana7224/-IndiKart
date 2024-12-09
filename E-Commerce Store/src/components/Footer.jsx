import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p>Your one-stop destination for premium products. Shop with confidence, crafted with care. 🚀</p>
        </div>
<div>
    <p>COMPANY</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>Home</li>
        <li>About</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
    </ul>
</div>
<div>
    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
    <ul className='flex flex-col gap-1 text-gray-600'>
        <li>+91-123-456-789</li>
        <li>xyz123@gmail.com</li>
    </ul>
</div>

<div>
    <hr />
    <p className='py-5 text-sm text-center'>Copyright 2024@IndiKart.com - All Rights Reserved.</p>
</div>
      </div>
    </div>
  )
}

export default Footer
