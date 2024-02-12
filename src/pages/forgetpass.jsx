import { useState } from "react";

const Forgetpass = () => {
 
  const verify = ()=>{
    let exist = localStorage.getItem("login")
    exist = JSON.parse(exist)
    if(exist){
      for(let i=0;i<exist.length;i++){
      if(exist[i].email == email){
        window.location = `/createpassword?email=${email}`
      }else if(i == exist.length-1){
        alert("Email not Registered !!")
        window.location = "/register"
      }
    }
    }
    
  }

  const[email,setEmail]=useState("")
    return (
        <div className="h-screen w-full bg-gray-100">
            <div className="max-sm:ml-6 flex max-md:flex-grow  pt-4 justify-center items-center">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
             <path d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z" fill="#2F80ED"/>
             </svg>
             <p className="font-serif max-sm:ml-2 text-[#726c6c] md:ml-4"><a href="/">Travel Torque</a></p>
            </div>
            <div className="flex flex-col h-4/6 mt-12 w-96 px-8 self-center  rounded-xl mx-auto md:shadow-lg bg-white pt-12">                
              <h1 className="text-lg font-medium text-center"> Create Password</h1>
              <p className="text-center text-xs mt-4">We’ll send you a link to reset it. Enter your email address used for My Dream Place</p>
              <div className="flex flex-col justify-center  w-full mt-8">
                <p className="text-xs mb-2">Email Address</p>
                <input placeholder="adamyasingh22@gmail.com" value={email} className="bg-gray-100 px-4 py-1 w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md" onChange={(e)=>setEmail(e.target.value)}></input>
              </div>
              <div className="pt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-16 rounded w-full" onClick={()=>{verify()}}>Create a password</button>
              </div>
              <div className="Flex justify-center item-center pt-4 text-center">
                <p className="text-xs">By creating an account, you agree with our</p>
                <a class="text-[#2F80ED] pl-2 text-xs" href="">Terms and Conditions</a>
                <p className="text-xs">&</p>
                <a class="text-[#2F80ED] pl-2 text-xs" href="">Privacy Statement.</a>
               </div> 
            </div>
            
            
        </div>
    )
}
export default Forgetpass;