
import { useState } from 'react'
import vid from '../assets/vid.mp4'
import vid1 from '../assets/vid1.mp4'
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

    const vids = [
        {id:1 , name:vid1 , name1:vid},
        {id:2 , name:vid , name1:vid1},
        {id:3 , name:vid1 , name1:vid},
        {id:4 , name:vid , name1:vid1},
        {id:5 , name:vid1 , name1:vid},
        {id:6 , name:vid , name1:vid1},
        {id:7 , name:vid , name1:vid1},
    ]

    const Images = () => {
        return(
            <div name='Arts' className="w-full px-2">
        <div className="flex w-full flex-col ">
            <div className="flex justify-center items-center border gap-4  w-full border-violet-300 pr-2"  >
                <input type="search" name="" id="" placeholder="search art and videos" className="border p-4 w-[90%] sm:w-1/3" />
                <div className="flex gap-4">
                    <p className='hover:cursor-pointer p-1 bg-violet-200 rounded-md'>Images</p>
                    <p onClick={() => setDisplay('videos')} className='hover:cursor-pointer p-1 bg-violet-200 rounded-md'>Videos</p>
                    
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
            <div name='Arts' className="w-full px-2">
        <div className="flex w-full flex-col ">
            <div className="flex justify-center items-center border gap-4  w-full border-violet-300 pr-2"  >
                <input type="search" name="" id="" placeholder="search art and videos" className="border p-4 w-full sm:w-1/3" />
                <div className="flex gap-4">
                    <p onClick={() => setDisplay('images')} className='hover:cursor-pointer bg-violet-200 rounded-md p-1'>Images</p>
                    <p className='hover:cursor-pointer bg-violet-200 rounded-md p-1'>Videos</p>
                    
                </div>
            </div>

                <div className='w-full'>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-[90%] m-auto pt-3'>
                        
                       {
                        vids.map((vid) => (
                            <div key ={vid.id }className='w-full  h-[100%] gap-2 flex flex-col '>
                            <video src={vid.name} className='w-[95%] mb-2 ' muted autoPlay ></video>
                            <video src={vid.name1} className='w-[95%] ' muted autoPlay ></video>
                        </div>
                        ))
                       }
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