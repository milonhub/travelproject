
import { useState } from "react";

import { Navigate } from "react-router-dom";



const TourBoking = () => {

    const destinations = [
        'Dhaka city',
        'Cox-bazar sea beach',
        'Rajshahi city',
        'Rangpur',
    ]
    const [destination, setDestinaton] = useState("")
    const handlechange = (event) => {

        setDestinaton(event.target.value);
    }

    const handleSubmit = (event) => {
        alert(destination)
        destinations.every((des) => {
            if (des === destination)
                Navigate("/login")
        })
        // }){
        //     <div>
        //         <form action="">
        //             <label htmlFor="">User Name</label>
        //             <input type="text" className="text-2xl"/>
        //         </form>
        //     </div>
        // }
        event.preventDefault();
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <label className="text-2xl mr-3"> Destination</label>
                <input type="text" className="text-2xl p-2 border-2 border-black" value={destination} onChange={handlechange} />
                <button type="submit" className="text-2xl">Search</button>
            </form>

        </div>
    )
}

export default TourBoking
