import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

    const[display, setDisplay] = useState(false)

    const toggleDrop =() => {  
        setDisplay(!display);
    }
    const links = [
        { id:1 ,text:'Arts'}, 
        { id:2 ,text:'Gallery'}, 
        { id:3 ,text:'Pricing'}, 
        { id:4 ,text:'Contact'}]

       
            const [scrollY, setScrollY] = useState(0);
          
            useEffect(() => {
              const handleScroll = () => {
                setScrollY(window.scrollY);
              };
          
              window.addEventListener('scroll', handleScroll);
          
              // Cleanup the event listener when the component unmounts
              return () => {
                window.removeEventListener('scroll', handleScroll);
              };
            }, []);

            console.log(window.scrollY)

  return (
    <>
    <nav className={`flex  justify-between items-center fixed w-full  p-2    bg-violet-200 border-b-1 border-gray-500 sm:border-none ${scrollY>250 ? 'bg-violet-200' : 'sm:bg-transparent'} z-10 transition`} >
         <section className="logo flex justify-center items-center gap-3 ">
            <div className='imageDiv rounded-full bg-cover bg-[url("./Images/collinart.jpg")] p-5 flex'>
            </div> 
            <label htmlFor="imageDiv" className='text-violet-500 font-bold text-1xl  sm:text-xl '>graphiteART <span className='text-white hover:text-violet-500 transition '>⨀⨀</span>
            </label>
         </section>

          <div className='font-bold text-black  sm:hidden ' onClick={toggleDrop}>{!display ? '⇶' : 'X'}</div>

          <div className={`navitems gap-4 flex-col z-20 bg-violet-300 left-0 absolute top-[56px] sm:top-0  w-full  sm:flex sm:flex-row  justify-between sm:w-[40%] lg:pr-[8vw]  sm:relative  sm:bg-inherit  sm:items-center md:gap-4 ${display ? '' : 'hidden'} z-10 pt-3`}>

         

            {/* DROPDOWN */}

        
            {
                links.map((eachLink) => (
                    <li key={eachLink.id} className='mb-8 sm:mb-0  text-white hover:text-violet-500 transition text-center sm:text-white list-none'>
                       <Link to={eachLink.text} smooth duration={500}>{eachLink.text}</Link>
                    </li>
                ))
            }
          </div>

        </nav>
    </>
  )
}

export default Navbar