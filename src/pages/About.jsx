
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Silder from '../Components/silder';
import AutoSilder from '../Components/autoSilderTestimonal';


const About = () => {

  const data = [
    {
      "icon": faDollarSign,
      "title": "Cheap cost",
      "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

    },


    {
      "icon": faDollarSign,
      "title": "Cheap cost",
      "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

    },


    {
      "icon": faDollarSign,
      "title": "Cheap cost",
      "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

    },


    {
      "icon": faDollarSign,
      "title": "Cheap cost",
      "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

    },

    {
      "icon": faDollarSign,
      "title": "Cheap cost",
      "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

    },


    {
      "icon": faDollarSign,
      "title": "Cheap cost",
      "des": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

    }

  ]



  return (
    <div>

      <div className="hero min-h-[500px] bg-white object-cover" style={{ backgroundImage: 'url("/images/Beautiful_Kuakata_Beach.jpg")' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Home/About</h1>
          </div>
        </div>
      </div>


      <div className="hero min-h-[900px] bg-white">
        <div className="hero-content flex-col lg:flex-row gap-[40%] absolute">
          <div className="relative basis-1/3 top-[-130px]">

            <img src="/images/pexels-te-lensfix-1371360.jpg" className="max-w-sm rounded-lg shadow-2xl absolute top-[20%] left-[50%] h-[400px] 3-[350px] z-10" />

            <img src="/images/pexels-aleksandar-pasaric-1285625.jpg" className="max-w-sm rounded-lg shadow-2xl h-[400px] w-[350px] z-20 rotate-[-12deg]" />
            <button type="button" className="text-white bg-red-600 hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2 z-40 absolute left-32 bottom-[-65px]">
              <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
              </svg>
              Watch Now
            </button>
          </div>
          <div className="basis-1/3">
            <h1 className="text-5xl font-bold italic text-pink-400 py-6">About Us</h1>
            <h1 className="text-5xl font-bold">Why Select Us for Your Vacation</h1>
            <p className="py-6 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque at dolores corrupti omnis aspernatur voluptatibus perferendis debitis nihil provident laborum, atque quam quos ipsam fuga, voluptas accusantium eius odio libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error illum blanditiis voluptatem nostrum pariatur sunt sequi! Provident accusantium corrupti dolores!</p>

            <p className="py-6 text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo, aut iusto animi quasi reiciendis magni nemo tenetur nesciunt eaque quia quos, reprehenderit consequuntur, explicabo debitis!</p>

            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ut, vero reprehenderit dolores molestias facilis in architecto ipsa non unde.</p>
          </div>
        </div>
      </div>



      <div className="h-[600px] bg-slate-100">
        <h2 className='text-center text-2xl italic mt-8 py-4 text-red-500'>Features</h2>
        <p className='text-center text-xl'>Why Choose Us</p>


        <div className='grid grid-cols-3 content-center gap-4 mx-[5%] my-8'>

          {data.map((data) => {

            const { des } = data;

            return (
              <article key={Math.random()} className='w-[350px] bg-white p-5 mx-5'>
                <FontAwesomeIcon icon={data.icon} className='text-4xl' />
                <h1 className="text-3xl">{data.title}</h1>
                <p>{des}</p>
              </article>


            )


          })

          }

        </div>


      </div>

      <Silder />
      <div className='w-full h-full bg-slate-200 py-7'>
        <div className='flex flex-row justify-center content-center mx-32 my-16' >
          <div className='basis-1/2 relative px-16'>
            <img src="https://source.unsplash.com/7etIYqqw2jU/300x300" alt="pic" className='absolute top-[100px] rotate-[-12deg] left-10 w-[250px] h-[120px]' />
            <img src="https://source.unsplash.com/5AxRCxe_fa0/300x300" width="180px" height="250px" alt="pic" className='absolute top-[225px] rotate-[10deg] h-[100px] w-[180px]' />
            <img src="https://source.unsplash.com/Q6KwRsO0_YQ/300x300" alt="" className='rotate-[10deg] w-[180px] h-[100px]' />
          </div>
          <div className='basis-1/2 w-[600px] h-[400px] text-center'>
            <h1 className='text-center text-xl italic text-red-500 pt-8'>Testimonals</h1>
            <p className='text-center text-3xl'>What travelers say</p>
            <AutoSilder />
          </div>
        </div>
      </div>



    </div>
  )
}

export default About