import { useState } from "react"


const User = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const handleName =(event)=>{
      setName(event.target.value)
    }

    const handleemail = (event) =>{
       setEmail(event.target.value)
    }
    const handlePhone = (event) =>{
       setPhone(event.target.vlaue)
    }

    const handleSubmit = (event) =>{
       const user ={
        name,
        phone,
        email
       }
       alert(`${user.name} have booked for traveling`)
      event.preventDefault();
    }
  return (
    <div className="my-4">
        <form onSubmit={handleSubmit}>
         <div> 
            <label className="mx-4 text-2xl">User Name</label>
          <input type='text' className="text-2xl w-72 p-1 ml-11 border-2 border-black" onChange={handleName} value={name} placeholder="User Name"/>
          </div>
         <div className="my-8"> 
            <label className="mx-4 text-2xl">Email</label>
          <input type="email" className="text-2xl w-72 p-1 ml-[105px] border-2 border-black" onChange={handleemail} value={email} placeholder="Email Name"/>
          </div>
         <div>
         <label className="mx-4 text-2xl">Phone Number</label>
          <input type="text" className="text-2xl w-72 p-1 border-2 border-black" onChange={handlePhone} value={phone} placeholder="Phone Number"/>
         </div>

           <button type="submit" className="px-4 py-1 text-2xl mx-5 rounded-lg bg-slate-400">Save</button>
        </form>
       
    </div>
  )
}

export default User