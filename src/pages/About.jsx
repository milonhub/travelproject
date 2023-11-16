
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Silder from '../Components/silder';
import AutoSilder from '../Components/autoSilderTestimonal';


const About = () => {

  const data =[
  {
      "icon":faDollarSign,
      "title": "Cheap cost",
      "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

  },

  
  {
      "icon":faDollarSign,
      "title": "Cheap cost",
      "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

  },


  {
      "icon":faDollarSign,
      "title": "Cheap cost",
      "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

  }, 
  
  
  {
      "icon":faDollarSign,
      "title": "Cheap cost",
      "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

  },

  {
      "icon":faDollarSign,
      "title": "Cheap cost",
      "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

  },


  {
      "icon":faDollarSign,
      "title": "Cheap cost",
      "des":"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios"

  }

]
  


  return (
    <div>
      
      <div className="hero min-h-[500px] bg-white object-cover" style={{backgroundImage: 'url("/images/Beautiful_Kuakata_Beach.jpg")'}}>
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
<path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
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

{/* <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <svg className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z"/>
    </svg>
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Cheap reates</h5>
  
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium quisquam illum error repudiandae libero laborios</p>
   
</div> */}
<div className='grid grid-cols-3 content-center gap-4 mx-[5%] my-8'>

  { data.map((data)=> { 

  const{ des} =data;

   return(
      <article key={Math.random()} className='w-[350px] bg-white p-5 mx-5'>
      <FontAwesomeIcon icon={data.icon} className='text-4xl'/>
     <h1 className="text-3xl">{data.title}</h1>
     <p>{des}</p>
    </article>


   )
   

})
  
  }

</div>


  </div>

  <Silder />

 <div className='flex flex-row justify-center content-center' > 
 <div className='basis-1/2'></div>
  <div className='basis-1/2 w-[600px] h-[400px] text-center'>
  <AutoSilder />
  </div>
  </div>


    </div>
  )
}

export default About