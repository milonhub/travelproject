/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Calendar from "../Components/claendar"
import TourBooking from "../Components/destinationSearch"
import DestinationSelect from "../Components/wheregodrop"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import AutoSilder from "../Components/autoSilderTestimonal"


const Home = () => {
  const testimonalsImage = [
    {
      "id": 1,
      "url": ""
    },

    {
      "id": 2,
      "url": ""
    },

    {
      "id": 3,
      "url": ""
    },

    {
      "id": 4,
      "url": ""
    },

  ]
  console.log(testimonalsImage)
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

      <div className="flex flex-row justify-center items-center gap-12">
        <div className="relative">

          <div className="avatar absolute bottom-32 left-9">
            <div className="w-12 rounded-full absolute right-7 bottom-9">
              <img src="https://source.unsplash.com/CgCH4V4cNGk/200x200" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-12 rounded-full absolute bottom-12 right-14">
              <img src="https://source.unsplash.com/QXevDflbl8A/200x200" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-8 rounded-full absolute top-0 right-8">
              <img src="https://source.unsplash.com/BqNEe_ZAtxg/200x200" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://source.unsplash.com/GH-mSApoKO0/200x200" />
            </div>
          </div>


        </div>




        <div className="w-[500px] h-full pb-10 ">
          <h1 className='text-center text-xl italic text-red-500 pt-8'>Testimonals</h1>
          <p className='text-center text-4xl font-bold'>What our customer <br /> says about us</p>
          <AutoSilder />
        </div>

        <div className="avatar">
          <div className="w-12 rounded-full absolute left-64">
            <img src="https://source.unsplash.com/yIOViGQmjJ4/200x200" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-12 rounded-full absolute bottom-16 left-36">
            <img src="https://source.unsplash.com/QXevDflbl8A/200x200" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-8 rounded-full absolute top-16 left-32">
            <img src="https://source.unsplash.com/BqNEe_ZAtxg/200x200" />
          </div>
        </div>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src="https://source.unsplash.com/GH-mSApoKO0/200x200" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home