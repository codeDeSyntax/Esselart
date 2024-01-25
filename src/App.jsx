import { useState } from 'react';
import { FaFacebook, FaInstagram, FaStar, FaYoutube } from 'react-icons/fa';
import './App.css';
function App() {

  const[display, setDisplay] = useState(false)

  const toggleDrop =() => {
    setDisplay(!display);
  }
  return (
    <>
     <div className='mainDiv flex flex-col h-screen bg-gradient-to-b from-[#0b0212]  to-[#0b0212]'>
        <nav className='flex  justify-between items-center   p-2 pl-3 ' >
         <section className="logo flex justify-center items-center gap-3 ">
            <div className='imageDiv rounded-full bg-cover bg-[url("./Images/collinart.jpg")] p-5 flex'>
            </div> 
            <label htmlFor="imageDiv" className='text-violet-500 font-bold text-1xl  sm:text-xl '>graphiteART <span className='text-white hover:text-violet-500 transition animate-spin'>⨀⨀</span>
            </label>
         </section>

          <button className='font-bold text-white md:hidden sm:hidden' onClick={toggleDrop}>⇶</button>

          <div className={`navitems gap-4 flex-col z-20 bg-violet-600 left-0 absolute top-0  p-3 w-full  sm:flex sm:flex-row  justify-between sm:w-[40%] lg:pr-[8vw]  sm:relative  sm:bg-inherit  sm:items-center md:gap-4 ${display ? '' : 'hidden'} `}>

            {/* DROPDOWN */}

            <div className={`justify-between flex items-center sm:hidden transition`}> 
            <label htmlFor="imageDiv" className='text-violet-900 font-bold text-2xl lg:text-3xl  sm:text-3xl mb-4'>graphiteART</label>

            <button onClick={() => {setDisplay(false)}} className='py-1 px-2 font-bold text-violet-600 bg-white '>X</button>
            </div>
            <p className='mb-8 sm:mb-0  text-white hover:text-violet-500 transition '>Art</p>
            <p className='mb-8 sm:mb-0 text-white  hover:text-violet-500 transition  '>Templates</p>
            <p className='mb-8 sm:mb-0 text-white hover:text-violet-500 transition   '>Pricing</p>
            <p className='mb-8 sm:mb-0 text-white hover:text-violet-500 transition  '>Contact</p>
          </div>

        </nav>

        <section className='flex flex-col p-6  sm:flex-row sm:p-8  sm:gap-4 h-[80vh]  m-auto'>
         
        <div className='pageText flex flex-col items-center justify-center  sm:w-[45%] gap-8 mb-10 m-auto'>
        
          <h1 className=' text-2xl sm:text-3xl font-bold text-center text-[poppins] text-violet-600 lg:text-[35px] '>Making <span className='text-white '>abstract , imaginary</span> and objects into real pencil arts !</h1>
          <button className='sm:py-2 sm:px-3 py-2 px-4 text-2xl text-violet-500 border w-[50%]  rounded-full hover:bg-white hover:cursor-pointer transition text-center '  >
            Start Tour
          </button>
          <div className='flex justify-between gap-20  '>
        <FaFacebook color='white'className='text-3xl'  />
        <FaInstagram color='white ' className='text-3xl' />
        <FaYoutube color='white ' className='text-3xl' />
        </div>
        
        </div>
        <div className='bg-cover  bg-[url("./Images/art.jpg")]  sm:w-[60%]  h-[90vh]  w-[90%]  md:h-[50vh] lg:h-[74vh] lg:w-[55%] flex  m-auto rounded-md'>
        <FaStar  color='white' className='animate-spin transition text-xl blur-sm'/>
        <FaStar size={30} color='white' className='animate-spin transition text-xl blur-sm' />
        </div>

        </section>
     </div>
    </>
    
  );
}

export default App;
