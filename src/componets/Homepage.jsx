
const Homepage = () => {
  return (
    <>
    <div className='mainDiv flex flex-col h-screen bg-contain sm:bg-cover bg-[url("./Images/adobe1.jpg")] mb-10  w-full '>
        <section className='flex flex-col p-6  sm:flex-row sm:p-8 w-full sm:gap-4 justify-center items-center h-full'>
         
        <div className='pageText flex flex-col items-center justify-center  sm:w-1/2 gap-8  '>
        
          <h1 className=' text-2xl sm:text-3xl font-bold text-center text-[poppins] text-orange-500 lg:text-[35px] '>
            Making <span className='text-white '>abstract , imaginary</span> and objects into real pencil arts !</h1>

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