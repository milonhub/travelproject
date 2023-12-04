// import { useState } from 'react';

import { useState } from "react";
import Login from "../Auth/Login";
import { NavLink } from "react-router-dom";

// const TourBooking = () => {
//     const destinations = [
//         'Dhaka city',
//         'Cox-bazar sea beach',
//         'Rajshahi city',
//         'Rangpur',
//     ]

//     const [selectedDestination, setSelectedDestination] = useState(null);
//     const [selectedTourType, setSelectedTourType] = useState('');

//     const handleDestinationChange = (e) => {
//         setSelectedDestination(e.target.value);
//     };

//     const handleTourTypeChange = (e) => {
//         setSelectedTourType(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//     };

//     return (
//         <div>
          
//             <form onSubmit={handleSubmit} className='flex gap-7'>
//                 <div>
//                     <label htmlFor="destinationSelect" className='text-xl italic text-semibold text-black'>Destination:</label> ,<br />
//                     <select
//                         id="destinationSelect"
//                         value={selectedDestination}
//                         onChange={handleDestinationChange}
//                         className='text-2xl py-2 px-3 outline-none border-2 border-current rounded-lg'
//                     >
//                         <option value="">Where to go?</option>
//                         {destinations.map((destination, index) => (
//                             <option key={index} value={destination}>
//                                 {destination}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div>
//                     <label htmlFor="tourTypeSelect" className='text-xl italic text-semibold'>Type</label> <br />
//                     <select
//                         id="tourTypeSelect"
//                         value={selectedTourType}
//                         onChange={handleTourTypeChange}
//                         className='text-2xl py-2 px-3 outline-none border-2 border-current rounded-lg'
//                     >
//                         <option value="">Activity</option>
//                         <option value="City Tour">City Tour</option>
//                         <option value="Adventure Tour">Adventure Tour</option>
//                         <option value="Cultural Tour">Cultural Tour</option>
//                         <option value="Beach Tour">Beach Tour</option>
                      
//                     </select>
//                 </div>
               
//             </form>
//         </div>
//     );
// };

// export default TourBooking;



const TourBoking = () => {

    const destinations = [
                'Dhaka city',
                'Cox-bazar sea beach',
                'Rajshahi city',
                'Rangpur',
            ]
   const [destination, setDestinaton] = useState("")
    const handlechange = (event) =>{
       
         setDestinaton (event.target.value); 
    }

    const handleSubmit = (event) => {
        alert(destination)
        if(destinations.every((des)=>{
            des === destination
            navigator
        })){
            <div>
                <form action="">
                    <label htmlFor="">User Name</label>
                    <input type="text" className="text-2xl"/>
                </form>
            </div>
        }
        event.preventDefault();
    }
  return (
    <div>
       <form action="" onSubmit={handleSubmit}>
       <label className="text-2xl mr-3"> Destination</label>
        <input type="text" className="text-2xl p-2 border-2 border-black" value={destination} onChange={handlechange}/>
        <button type="submit" className="text-2xl">Search</button>
       </form>
       
    </div>
  )
}

export default TourBoking
