import { useState } from 'react';

const Homepage = () => {
    const[display, setDisplay] = useState(false)

    const toggleDrop =() => {
      setDisplay(!display);
    }

  return (
    <>
    <div className='mainDiv flex flex-col h-screen bg-contain sm:bg-cover bg-[url("./Images/adobe1.jpg")] '>
        <nav className='flex  justify-between items-center   p-2 pl-3 bg-orange-300 sm:bg-transparent' >
         <section className="logo flex justify-center items-center gap-3 ">
            <div className='imageDiv rounded-full bg-cover bg-[url("./Images/collinart.jpg")] p-5 flex'>
            </div> 
            <label htmlFor="imageDiv" className='text-orange-500 font-bold text-1xl  sm:text-xl '>graphiteART <span className='text-white hover:text-violet-500 transition animate-spin'>⨀⨀</span>
            </label>
         </section>

          <button className='font-bold text-black md:hidden sm:hidden' onClick={toggleDrop}>⇶</button>

          <div className={`navitems gap-4 flex-col z-20 bg-orange-600 left-0 absolute top-0  p-3 w-full  sm:flex sm:flex-row  justify-between sm:w-[40%] lg:pr-[8vw]  sm:relative  sm:bg-inherit  sm:items-center md:gap-4 ${display ? '' : 'hidden'} `}>

          {/* bg-gradient-to-b from-[#0b0212]  to-[#0b0212] */}

            {/* DROPDOWN */}

            <div className={`justify-between flex items-center sm:hidden transition`}> 
            <label htmlFor="imageDiv" className='text-violet-900 font-bold text-2xl lg:text-3xl  sm:text-3xl mb-4'>graphiteART</label>

            <button onClick={() => {setDisplay(false)}} className='py-1 px-2 font-bold text-violet-600 bg-white '>X</button>
            </div>
            <p className='mb-8 sm:mb-0  text-white hover:text-violet-500 transition '>Art</p>
            <p className='mb-8 sm:mb-0 text-white  hover:text-violet-500 transition  '>Gallery</p>
            <p className='mb-8 sm:mb-0 text-white hover:text-violet-500 transition   '>Pricing</p>
            <p className='mb-8 sm:mb-0 text-white hover:text-violet-500 transition  '>Contact</p>
          </div>

        </nav>

        <section className='flex flex-col p-6  sm:flex-row sm:p-8 w-full sm:gap-4 justify-center items-center h-full'>
         
        <div className='pageText flex flex-col items-center justify-center  sm:w-1/2 gap-8  '>
        
          <h1 className=' text-2xl sm:text-3xl font-bold text-center text-[poppins] text-orange-600 lg:text-[35px] '>Making <span className='text-white animate-pulse'>abstract , imaginary</span> and objects into real pencil arts !</h1>

          <div>
          <button className='sm:py-2 sm:px-3 py-1 px-3 text-[16px] text-orange-500 border   rounded-md hover:bg-white hover:cursor-pointer transition text-center mr-4 focus:outline-none bg-white'  >
            Login
          </button>
          <button className='sm:py-2 sm:px-3 py-1 px-3  text-[16px] text-orange-500 border   rounded-md hover:bg-white hover:cursor-pointer transition text-center focus:outline-none bg-white'  >
            Sign up!
          </button>
          </div>
        
        </div>
        {/* <div className='     flex flex-col  justify-center  rounded-md'>
        <div className='flex justify-center items-center'><FaStar  color='white' className='animate-spin transition text-xl blur-sm'/>
        <FaStar size={30} color='white' className='animate-spin transition text-xl blur-sm ' /></div>
        <img src={art} alt='puc' width={700}/>
        </div> */}

        </section>
     </div>
    </>
  )
}

export default Homepage