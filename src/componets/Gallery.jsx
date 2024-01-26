
import grid from '../gridImages/grid.jpg'
import grid1 from '../gridImages/grid1.jpg'
import grid2 from '../gridImages/grid2.jpg'
import grid3 from '../gridImages/grid3.webp'
import grid4 from '../gridImages/grid4.jpg'
import grid5 from '../gridImages/grid5.jpg'
import grid6 from '../gridImages/grid6.jpg'
import grid7 from '../gridImages/grid7.png'
import collinart from '../Images/collinart.jpg'

const Gallery = () => {
    const gridFigures = [
        {id:1 , image:grid},
        {id:2 , image:grid1},
        {id:3 , image:grid2},
        {id:4 , image:grid3},
        {id:5 , image:grid4},
        {id:6 , image:grid5},
        {id:7 , image:grid6 , state:'blur-[3px]'},
        {id:8 , image:grid7 , state:'blur-[3px]'},
    ]
  return (
    <div name='Gallery' className="flex flex-col w-screen px-4 justify-center items-center" >
        <div className="flex flex-col w-screen px-3 justify-center items-center py-10">
            <div>
                <h1 className="font-[900] sm:text-4xl text-2xl text-black">Gallery</h1>
            </div>

                <hr className="w-2/4 mt-6"/>

                <div className="w-3/4 py-10 px-4 text-xl">
                    <p className="text-gray-500">In the center of the logo, visualize a harmonious blend of a sleek electric guitar and a grand piano, symbolizing a fusion of two passions: music and coding. The guitar strings gracefully intertwine with lines of elegant code.</p>
                </div>

                <div className=" w-full">
                   <div className='w-[85%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-1'>
                   
                  {
                    gridFigures.map((image) => (
                        <div key={image.id}>
                        <img src={image.image} alt="" className={`w-full hover:scale-110 hover:cursor-pointer hover:rounded-md ${image.state} duration-200`}/>
                        </div>
                    ))
                  }
                   </div>
                </div>

                <div className=' w-screen  py-10  '>
                    <div className='w-[100%] sm:[80%]  flex flex-col md:flex-row justify-center '>
                            <div className='px-8 sm:px-12 py-10 w-[100%] sm:w-[40%]' >
                                <p className='text-4xl text-center font-bold text-orange-400'>About us</p>
                                <p className='text-gray-500'>
                                In the center of the logo, visualize a harmonious blend of 
                                a sleek electric guitar and a grand piano, symbolizing a fusion of two passions: music and coding. 
                                The guitar strings gracefully intertwine with lines of elegant code, forming a seamless connection between the worlds of melody and technology.
                                In the center of the logo, visualize a harmonious blend of 
                                a sleek electric guitar and a grand piano, symbolizing a fusion of two passions: music and coding. 
                                The guitar strings gracefully intertwine with lines of elegant code, forming a seamless connection between the worlds of melody and technology.
                                </p>
                            </div>
                            <div className='px-8 sm:px-12 py-10 w-[100%] sm:w-[40%]' >
                                <p className='text-4xl text-center font-bold text-orange-400 '>What we do</p>
                                <p className='text-gray-500'>
                                In the center of the logo, visualize a harmonious blend of a sleek electric guitar and a grand piano,
                                symbolizing a fusion of two passions: music and coding. The guitar strings gracefully intertwine with lines of elegant code, 
                                forming a seamless connection between the worlds of melody and technology.
                                In the center of the logo, visualize a harmonious blend of a sleek electric guitar and a grand piano,
                                symbolizing a fusion of two passions: music and coding. The guitar strings gracefully intertwine with lines of elegant code, 
                                forming a seamless connection between the worlds of melody and technology.
                                </p>
                            </div>
                    </div>
                </div>

                <div className='w-full bg-gray-50 flex justify-center items-center px-2 py-10 sm:px-10'>
                    <div className='flex flex-col items-center justify-center w-[100%] sm:w-[70%] bg-white px-4 py-3 sm:px-10 pb-4'>
                            <img src={collinart} alt="" className='sm:w-[200px] w-[100px] rounded-full md:relative md:top-[-120px] ' />
                            <div className='text-center flex flex-col justify-center items-center gap-8'>
                                <p className='font-bold text-3xl text-gray-600 '>Expert on Delivery</p>
                                <p className='text-gray-700'>
                                In the center of the logo, visualize a harmonious blend of a 
                                sleek electric guitar and a grand piano,
                                 symbolizing a fusion of two passions: music and coding.
                                 The guitar strings gracefully intertwine with lines of elegant code, 
                                </p>

                                <div className=' sm:px-5 sm:py-4 px- bg-gradient-to-b from-orange-400 to-orange-200 sm:w-[55%] w-[60%] text-center rounded-md px-3 py-4'>
                                Request for service
                                </div>
                            </div> 

                    </div>
                </div>
        </div>
    </div>
  )
}

export default Gallery