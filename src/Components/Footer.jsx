
const Footer = () => {
  return (
    <div>
       <footer className="p-10  content-center h-[350px] bg-slate-800 text-white">

        <div className="flex flex-row h-[350px]">

        <div className="basis-1/3">
    
      <div className="leading-loose">

        <h1 className="text-4xl">Trisog</h1>
        <p className="text-3xl mt-8">Need any help?</p>
        <h1 className="text-3xl mb-8">Call Us:(888)12354678</h1>
        <p className="text-2xl">Love street, Muscat Oman</p>
        <p className="text-2xl mb-8">eample@gmail.com</p>
        <div className="flex gap-8">
          <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
         <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
        <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
        </div>
    </div>
  </div>
       <div className="h-[300px] bg-white basis-1 mr-16"></div>
        <div className="basis-1/3">
       <header className="text-3xl italic mb-5 leading-loose">Company</header> 
        <p><a className="text-xl">About</a></p>
        <p><a className="text-xl">Contact Us</a></p>
        <p><a className="text-xl">Travel Guide</a></p>
        <p><a className="text-xl">Data Police</a></p>
      </div> 
    <div className="basis-1/3">
    <header className="text-3xl mb-5 italic">Top Destination</header>
    <div className=" grid grid-cols-2 gap-2"> 
     <a className="text-xl">Varendro Museum</a>
     <a className="text-xl">Rajshah City</a>
    <a className="text-xl">Naogaon Paharpur</a>
    <a className="text-xl">Dinajpur City</a>
    <a className="text-xl">Dhaka City</a>
     <a className="text-xl">Rangpur City</a>
    <a className="text-xl">Chattogram City</a>
    <a className="text-xl">Rajshahi University</a>
    </div>
  </div> 
  <div className="h-[300px] basis-1 bg-white mr-16"></div>
  <div>
  <form>
    <header className="text-xl italic">Sign Up Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label"></label> 
      <div className="">
        <input type="text" placeholder="Enter Email..." className="text-xl p-2" />
       
        <button className="btn btn-active btn-secondary mt-4 text-2xl">Submit</button>
        

      </div>
    </fieldset>
    <p className="text-2xl my-10">© Trisog All Right Reserved </p>
  </form>
  </div>

  </div>
 
</footer>
    </div>
  )
}

export default Footer