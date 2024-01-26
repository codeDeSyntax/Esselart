
import { useState } from 'react'
import grid from '../gridImages/grid.jpg'
import grid1 from '../gridImages/grid1.jpg'
import grid10 from '../gridImages/grid10.jpg'
import grid11 from '../gridImages/grid11.jpg'
import grid2 from '../gridImages/grid2.jpg'
import grid3 from '../gridImages/grid3.webp'
import grid4 from '../gridImages/grid4.jpg'
import grid5 from '../gridImages/grid5.jpg'
import grid6 from '../gridImages/grid6.jpg'
import grid7 from '../gridImages/grid7.png'
import grid9 from '../gridImages/grid8.jpg'


const Art = () => {

    const[display , setDisplay] = useState('images')

    const gridFigures = [
        {id:1 , image:grid},
        {id:2 , image:grid1},
        {id:3 , image:grid2},
        {id:4 , image:grid3},
        {id:5 , image:grid4},
        {id:6 , image:grid5},
        {id:7 , image:grid6 , state:'blur-[3px]'},
        {id:8 , image:grid7 , state:'blur-[3px]'},
        {id:9 , image:grid9 , state:'blur-[3px]'},
        {id:10 , image:grid10 },
        {id:11 , image:grid11 },
    ]

    const Images = () => {
        return(
            <div className="w-full px-2">
        <div className="flex w-full flex-col ">
            <div className="flex justify-center items-center border gap-4  w-full border-orange-300"  >
                <input type="search" name="" id="" placeholder="search art and videos" className="border p-4 w-full sm:w-1/3" />
                <div className="flex gap-4">
                    <p className='hover:cursor-pointer'>Images</p>
                    <p onClick={() => setDisplay('videos')} className='hover:cursor-pointer'>Videos</p>
                    
                </div>
            </div>

            <div className='w-full '>
                <div>
                    <h1 className='text-2xl text-gray-500 py-4 pl-3 font-bold'>gallery</h1>
                </div>
                <div>
                    <div className='w-[85%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-1'>
                    {
                    gridFigures.map((image) => (
                        <div key={image.id} className=''>
                        <img src={image.image} alt="" className={`w-full hover:scale-110 hover:cursor-pointer hover:rounded-md ${image.state} duration-200 `} />
                        </div>
                    ))
                  }
                    </div>
                </div>
            </div>
        </div>
    </div>
        )
    }

    const Videos = () => {
        return(
            <div className="w-full px-2">
        <div className="flex w-full flex-col ">
            <div className="flex justify-center items-center border gap-4  w-full border-orange-300"  >
                <input type="search" name="" id="" placeholder="search art and videos" className="border p-4 w-full sm:w-1/3" />
                <div className="flex gap-4">
                    <p onClick={() => setDisplay('images')} className='hover:cursor-pointer'>Images</p>
                    <p className='hover:cursor-pointer'>Videos</p>
                    
                </div>
            </div>

            
        </div>
    </div>
        )
    }

    
  return (
    <>
    {
        display === 'images' ? <Images/> : <Videos />
    }
    </>
  )
}

export default Art