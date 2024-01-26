import './App.css';
import Art from './componets/Art';
import Gallery from './componets/Gallery';
import Homepage from './componets/Homepage';
import Navbar from './componets/Navbar';

function App() {
  return (
   <div className='w-full flex flex-col '>
  <Navbar/>
   <Homepage/>
   <Art/>
   <Gallery/>
   </div>
    
  );
}

export default App;
