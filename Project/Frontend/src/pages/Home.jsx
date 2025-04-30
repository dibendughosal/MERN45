import React, { useState } from 'react';
import heroImg from "../assets/hero img.webp";
import img1 from "../assets/refurbishedImg1.png";
import img2 from "../assets/refu.png";
import Item from '../components/Item';
import Item2 from '../components/Item2';
import Services from '../components/Services';
import Category from '../components/Category';
import SubNavbar from '../components/SubNavbar';
import Testinomial from '../components/Testinomial';
import Footer from '../components/Footer';
function Home() {

  const [value, setValue] = useState("")
  return (
    <>
      <SubNavbar/>
      <div className="w-full sm:h-[500px] flex justify-center py-30 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${heroImg})`}}>
        <div className='flex flex-col gap-y-6 items-center'>
          <div className='flex w-[500px] relative'>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} className='w-[400px] rounded-tl-3xl rounded-bl-3xl border-none outline-none bg-white px-4 py-3' placeholder='Search iPhones, macbook....'/>
            <button className='w-25 bg-red-600 font-bold text-white rounded-e-3xl relative -left-0.5 cursor-pointer hover:bg-red-700 active:text-lg'>Search</button>
          </div>
          <div className='text-[43px] w-[800px] font-bold flex justify-center'>
            <div className='text-center'>
              <h1 className='hidden md:flex'>The best way to buy the refurbished products you love.</h1>
              <h1 className='text-xl md:hidden text-center w-full px-10'>The best way to buy products.</h1>
            </div>
          </div>
          <button className='px-4 py-2 bg-red-600 font-bold text-white rounded-3xl cursor-pointer hover:bg-white hover:text-red-600 hover:border transition-all ease-in duration-200 origin-bottom'>Shop Now</button>
        </div>
      </div>
      <div className='w-full flex flex-col gap-y-10'>
        <Item src={img1} desc="Discover unparalleled value with our premium refurbished iPhones. Each device undergoes a rigorous refurbishment process, ensuring optimal functionality and performance. With a meticulous inspection and testing procedure, you can trust that your refurbished iPhone meets the highest standards of quality and reliability. Upgrade your smartphone experience without breaking the bank. Explore our collection of premium refurbished iPhones today and join countless satisfied customers who've made the smart choice for quality and affordability." button="Learn More"heading="Refurbished iPhone"/>

        <Item2 src={img2} desc="Welcome to our refurbished Mac collection, where quality meets affordability. Our meticulously curated selection of refurbished Mac computers offers you the best of both worlds – top-notch performance and significant savings. Each Mac undergoes rigorous testing and refurbishment processes to ensure it meets our high standards, providing you with a reliable computing experience without compromising on quality." heading="Refurbished Mac Book" button="Learn More" />
      </div>
      <Services/>
      <Category/>
      <Testinomial/>
      <Footer/>
    </>
  )
}

export default Home
