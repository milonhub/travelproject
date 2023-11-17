import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Calendar from "../Components/claendar"
import TourBooking from "../Components/destinationSearch"
import DestinationSelect from "../Components/wheregodrop"
import { faCheck } from "@fortawesome/free-solid-svg-icons"


const Home = () => {
  return (
    <>
      <div className="bg-blue-700"><div className=" h-full flex justify-center">
        <div className="hero w-[600px]">
          <div className="hero-content flex-row gap-4">
            <div className="mx-8">
              <h1 className="text-5xl italic text-orange-500">Explore The</h1>
              <p className="text-4xl text-white">Travel and <br /> Adventures</p>
              <p className="text-sm text-white">Find Awesome hotel, tour, car and activities in London</p>
            </div>

            <img src="https://source.unsplash.com/N981UfUhF7U/300x280" className="h-[250px] w-[180px] mx-4" />
          </div>

        </div>
        <img src="https://source.unsplash.com/7etIYqqw2jU/300x500" alt="" className="h-[450px] w-[300px] p-9" />

      </div>
        <div>
          <DestinationSelect />
          <TourBooking />
          <Calendar />
        </div>
      </div>

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row gap-32">
            <img src="https://source.unsplash.com/1zFlrpWTs3Y/300x280" className="w-[350px] h-[380px] shadow-2xl" />
            <div>
              <h1 className="text-4xl italic text-blue-600">Why Choose Us </h1>
              <h1 className="text-4xl font-bold">Plan Your Trip <br /> with Trisog</h1>
              <p className="py-6">Provident cupiditate  voluptatem et in. Quaerat fugiat ut <br /> assumenda excepturi exercitationem quasi. In deleniti <br /> eaque aut repudiandae et a id nisi.</p>

              <div className="flex flex-col">
                <div>
                  <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  <span className="text-xl mx-3 font-medium">Travel Plan</span>
                  <FontAwesomeIcon icon={faCheck} className="text-xl ml-7" />
                  <span className="text-xl mx-3 font-medium">Cheap Rates</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  <span className="text-xl mx-3 font-medium">handed Picker</span>
                  <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  <span className="text-xl mx-3 font-medium">Private Guide</span>
                </div>
              </div>
              <button className="btn btn-primary my-3">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home