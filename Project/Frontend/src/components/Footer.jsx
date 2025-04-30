import React from 'react'
import { Link } from 'react-router'
import logo from "../assets/logoicon.png"

function Footer() {
  return (
    <div className='bg-black h-[30%] flex flex-col justify-around items-center sm:h-[50%] w-full text-white'>
        {/* First */}
      <div className='flex w-[94%] mx-auto justify-between py-10'>
        {/* First Left */}
        <div className='flex flex-col gap-y-4'>
            <h1 className='text-xl'>Sign up & get 10% off</h1>
            <div className='flex w-full'>
                <input type="text" placeholder='Email' className='bg-white text-gray-800 font-medium outline-none px-5 py-2 rounded-tl-xl rounded-bl-xl'/>
                <button className='rounded-e-xl hover:bg-red-700 bg-red-600 px-4 py-2 font-medium'>Sign up</button>
            </div>
            <p className='text-[11px] font-normal text-gray-400'>*New customers only, Offer lasts 30 days. see Terms.</p>
        </div>
        {/* First right */}
        <div className='hidden md:flex justify-between gap-x-20 pr-20'>
            {/* My Account */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-lg'>My Account</h1>
                <div className='flex flex-col text-gray-400'>
                    <Link to="/" className='hover:underline hover:text-white'>Profile</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Account</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Purchases</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Credits</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Preferences</Link>
                </div>
            </div>
            {/* Support */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-lg'>Support</h1>
                <div className='flex flex-col text-gray-400'>
                    <Link to="/" className='hover:underline hover:text-white'>Contact</Link>
                    <Link to="/" className='hover:underline hover:text-white'>FAQs</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Shipping</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Terms</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Privacy</Link>
                </div>
            </div>
            {/* Stack Commerce */}
            <div className='flex flex-col gap-3'>
                <h1 className='text-lg'>StackCommerce</h1>
                <div className='flex flex-col text-gray-400'>
                    <Link to="/" className='hover:underline hover:text-white'>About</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Publishers</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Affiliates</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Blog</Link>
                    <Link to="/" className='hover:underline hover:text-white'>Careers</Link>
                </div>
            </div>
        </div>
      </div>

        {/* Second */}
      <div className='w-[94%] mx-auto flex justify-between px-15'>
        <div>
            <p className='text-gray-400'>Powered By</p>
            <h1 className='font-bold pl-1 text-xl tracking-wider'>Electro<span className='font-extrabold pt-2 text-red-600 text-xl'>Pro</span></h1>
        </div>

        <div className='flex flex-col justify-center items-center text-center'>
            <p>Made in Kolkata, IN</p>
            <p>Copyright © 2025 ElectroPro.com, All Rights Reserve</p>
        </div>

        <Link to="/" className='h-8 flex flex-col justify-center items-center'>
        <div className='h-full flex'>
          <img src={logo} alt="" className="h-full invert" />
          <h1 className='font-bold pt-2 pl-1 text-red-600 text-xl'>PRO</h1>
        </div>
        <h1 className='text-[12px] font-serif tracking-widest font-light text-white'>ElectroPro</h1>
        </Link>

      </div>
    </div>
  )
}

export default Footer
