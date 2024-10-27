import React from 'react';
import {BsFillMoonStarsFill} from 'react-icons/bs';


const App = () => {
  return (
    <div>
      <section className=' min-h-screen px-10 '>
   <nav className='py-10 mb-12 flex justify-between '>
    <h1 className='text-md '>developedbySF</h1>
    <ul className='flex items-center'>
      
      <li><BsFillMoonStarsFill/> </li>
      <li><a href='#'>Resume</a></li>
    </ul>
   </nav>
      </section>
    </div>
  )
}

export default App
