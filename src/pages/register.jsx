import React , {useState,useEffect} from "react";

const Register = () => {
  const [email,setEmail]=useState("")
  const [show,setShow]=useState(1)
  const[error,setError]=useState("")
  const [pass,setPass]=useState(false)
  const [pass1,setPass1]=useState(false)
  const [passwrd,setPasswrd]=useState(false)
  const [passwrd1,setPasswrd1]=useState(false)
  const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

  const clicked = () =>{
    if(email != ""){
      if(validateEmail(email)){
         emailEnter(email)
          
      }else{
        setError("Invalid Email Address!!")
      } 
    }
    else{
      setError("Please Enter Your Email!!")
    }
    
  }


  const showPass = () =>{
    if(pass){
      setPass(false)
    }
    else{
      setPass(true)
    }
    
  }
  const passwordCheck = () =>{
    if(passwrd != passwrd1){
      setError("Please Verify Your password!!")
    }else{
      setError("")
      let store = localStorage.getItem("login")
      let token = [{"email": email , "password": passwrd}]
     localStorage.setItem("login",JSON.stringify(token))
     alert("Congo! Account Created Successfully")
     window.location = "/login"

    }
    
    
  }

  const emailEnter = (email) =>{
    let exist = localStorage.getItem("login")
    
    if(!exist){
      setShow(show+1)
      setError("")
      
    }else if(exist){
      exist = JSON.parse(exist)
      for(let i=0;i<exist.length;i++){
        if(exist[i].email == email){
          setError("Email Already Exist , Kindly Login !!")
        }
        else{
          // let token = [{"email": email , "password": ""}]
          setShow(show+1)
          setError("")
          // localStorage.setItem("login",JSON.stringify([...exist,token]))
        }
      }

    }
    
  }

   const showPass1 = () =>{
    if(pass1){
      setPass1(false)
    }
    else{
      setPass1(true)
    }
    
  }

  // useEffect(()=>{
  //  console.log(">>>> value of email --------",email)
  // },[email])


    return (
        <div className="h-screen w-full bg-gray-100">
          <script src="https://smtpjs.com/v3/smtp.js"></script>
          <div className="max-sm:ml-6 flex max-md:flex-grow  pt-4 justify-center items-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
           <path d="M3.414 13.778C2.5 14 2 15.192 2 15.192C2 15.192 5.398 15.626 6.949 17.313C8.5 19 9.071 22.263 9.071 22.263C9.071 22.263 10.47 22.698 10.485 20.849C10.5 19 9.778 17.313 9.778 17.313L13.091 14L16.701 21.704C16.701 21.704 18.08 22.23 18.04 20.365C18 18.5 16.85 10.242 16.85 10.242L19.678 7.413C19.869 7.22851 20.0214 7.00782 20.1262 6.76381C20.231 6.5198 20.2862 6.25736 20.2885 5.99181C20.2908 5.72625 20.2402 5.46289 20.1396 5.21709C20.0391 4.9713 19.8906 4.748 19.7028 4.56021C19.515 4.37243 19.2917 4.22392 19.0459 4.12336C18.8001 4.0228 18.5368 3.97219 18.2712 3.9745C18.0056 3.97681 17.7432 4.03198 17.4992 4.1368C17.2552 4.24162 17.0345 4.39398 16.85 4.585L13.947 7.488C13.947 7.488 6.148 6.09401 3.824 6.297C1.5 6.5 2.559 7.563 2.559 7.563L10.203 11.233L6.95 14.486C6.95 14.486 4.328 13.556 3.414 13.778Z" fill="#2F80ED"/>
           </svg>
           <p className="font-serif max-sm:ml-2 text-[#726c6c] md:ml-4"><a href="/">Travel Torque</a></p>
          </div>
          
          {
            show == 1 &&
            <div className="flex flex-col h-5/6 mt-8 w-96 px-8 self-center  rounded-xl mx-auto md:shadow-lg bg-white pt-8">
            <h1 className="text-lg font-medium text-center">Register</h1>
            <p className="font-semibold text-[#e21e26] h-4 pt-3 text-center">{error}</p>
            <div className="flex flex-col justify-center  w-full mt-8">
                <p className="text-xs mb-2">Email Address</p>
                <input placeholder="adamyasingh22@gmail.com" className="bg-gray-100 px-4 py-1 w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md" value={email} onChange={e=> setEmail(e.target.value)}></input>
            </div>
            <div className="pt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-16 rounded w-full" onClick={()=> clicked()}>Continue with email</button>
            </div>
            <div className="flex justify-center items-center w-full">
              <div className="border-t border-[#E0E0E0] grow" />
              <div className="px-2 py-2 self-start bg-white grow-0">
                <p className="">or use one of these options</p>
              </div>
              <div className="border-t border-[#E0E0E0] grow" />
            </div>
            <div>
               <button class="hover:bg-blue-100 text-black rounded-lg border  border-gray-900 py-2 flex justify-center items-center w-full">              
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
                <p className="ml-2">Continue with Google</p>
               </button>
            </div>
            <div className="w-full mt-4">
               <button class="hover:bg-blue-900 w-full bg-[#475993] text-white rounded-lg border flex justify-center items-center py-2">              
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                <g clip-path="url(#clip0_4_964)">
                <path d="M17.8048 0H3.19504C1.70664 0 0.5 1.20659 0.5 2.69504V17.3049C0.5 18.7933 1.70659 19.9999 3.19504 19.9999H10.4005L10.4128 12.853H8.55602C8.31472 12.853 8.11887 12.6579 8.11794 12.4166L8.10904 10.1129C8.10811 9.87025 8.30454 9.67308 8.54716 9.67308H10.4005V7.44709C10.4005 4.86384 11.9782 3.45724 14.2827 3.45724H16.1736C16.4155 3.45724 16.6117 3.65339 16.6117 3.89537V5.83789C16.6117 6.07978 16.4157 6.27587 16.1739 6.27602L15.0134 6.27655C13.7602 6.27655 13.5175 6.87207 13.5175 7.74602V9.67313H16.2713C16.5337 9.67313 16.7372 9.90225 16.7063 10.1628L16.4333 12.4666C16.4071 12.687 16.2202 12.8531 15.9982 12.8531H13.5298L13.5175 20H17.8049C19.2933 20 20.4999 18.7934 20.4999 17.305V2.69504C20.4998 1.20659 19.2932 0 17.8048 0Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_4_964">
                <rect width="20" height="20" fill="white" transform="translate(0.5)"/>
                </clipPath>
                </defs>
                </svg>
                <p className="ml-2">Continue with Facebook</p>
               </button>
            </div>
            <div className="flex justify-center item-center pt-4 text-center">
              <p>Already have a account?</p>
              <a class="text-[#2F80ED] pl-2" href="/login">Sign in</a>
            </div>
          </div>
          }


          {
            show == 2 && 
            <div className="flex flex-col h-5/6 mt-8 w-96 px-8 self-center  rounded-xl mx-auto md:shadow-lg bg-white pt-10">
             <h1 className="text-lg font-medium text-center"> Create Password</h1>
             <p className="font-semibold text-[#e21e26] h-4 py-3 text-center">{error}</p>
             <p className="text-center text-xs mt-4">Use a minimum of 10 characters, including letters, lowercase letters, and numbers.</p>
             <div className="flex flex-col justify-center  w-full mt-8">
               <p className="text-xs mb-2">Password</p>
               <input type={pass ? "text" : "password"} onChange={e => setPasswrd(e.target.value)} className="bg-gray-100 px-4 py-1 w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 rounded-md"></input>
              
               

              { pass ?  <svg width="17" onClick={showPass} className="-mt-6 ml-72 cursor-pointer" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#1C274C"/>
                  </svg>
                  :
                  <svg width="17" height="17" onClick={showPass} className="-mt-6 ml-72 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60603 6.08062C2.11366 5.86307 2.70154 6.09822 2.9191 6.60585L1.99995 6.99977C2.9191 6.60585 2.91924 6.60618 2.9191 6.60585L2.91858 6.60465C2.9183 6.604 2.91851 6.60447 2.91858 6.60465L2.9225 6.61351C2.92651 6.62253 2.93339 6.63785 2.94319 6.65905C2.96278 6.70147 2.99397 6.76735 3.03696 6.85334C3.12302 7.02546 3.25594 7.27722 3.43737 7.58203C3.80137 8.19355 4.35439 9.00801 5.10775 9.81932C5.28532 10.0105 5.47324 10.2009 5.67173 10.3878C5.68003 10.3954 5.68823 10.4031 5.69633 10.4109C7.18102 11.8012 9.25227 12.9998 12 12.9998C13.2089 12.9998 14.2783 12.769 15.2209 12.398C16.4469 11.9154 17.4745 11.1889 18.3156 10.3995C19.2652 9.50815 19.9627 8.54981 20.4232 7.81076C20.6526 7.44268 20.8207 7.13295 20.9299 6.91886C20.9844 6.81192 21.0241 6.72919 21.0491 6.67538C21.0617 6.64848 21.0706 6.62884 21.0758 6.61704L21.0808 6.60585C21.2985 6.0985 21.8864 5.86312 22.3939 6.08062C22.9015 6.29818 23.1367 6.88606 22.9191 7.39369L22 6.99977C22.9191 7.39369 22.9192 7.39346 22.9191 7.39369L22.9169 7.39871L22.9134 7.40693L22.9019 7.43278C22.8924 7.4541 22.879 7.48354 22.8618 7.52048C22.8274 7.59434 22.7774 7.69831 22.7115 7.8275C22.5799 8.08566 22.384 8.44584 22.1206 8.86844C21.718 9.5146 21.152 10.316 20.4096 11.1241L21.2071 11.9215C21.5976 12.312 21.5976 12.9452 21.2071 13.3357C20.8165 13.7262 20.1834 13.7262 19.7928 13.3357L18.9527 12.4955C18.3884 12.9513 17.757 13.3811 17.0558 13.752L17.8381 14.9544C18.1393 15.4173 18.0083 16.0367 17.5453 16.338C17.0824 16.6392 16.463 16.5081 16.1618 16.0452L15.1763 14.5306C14.4973 14.7388 13.772 14.8863 13 14.9554V16.4998C13 17.0521 12.5522 17.4998 12 17.4998C11.4477 17.4998 11 17.0521 11 16.4998V14.9556C10.2253 14.8864 9.50014 14.7386 8.82334 14.531L7.83814 16.0452C7.53693 16.5081 6.91748 16.6392 6.45457 16.338C5.99165 16.0367 5.86056 15.4173 6.16177 14.9544L6.94417 13.7519C6.24405 13.3814 5.61245 12.9515 5.04746 12.4953L4.20706 13.3357C3.81654 13.7262 3.18337 13.7262 2.79285 13.3357C2.40232 12.9452 2.40232 12.312 2.79285 11.9215L3.59029 11.1241C2.74529 10.2043 2.12772 9.292 1.71879 8.605C1.5096 8.25356 1.35345 7.95845 1.2481 7.74776C1.19539 7.64234 1.15529 7.55783 1.12752 7.49771C1.11363 7.46765 1.10282 7.44366 1.09505 7.42618L1.08566 7.4049L1.08267 7.39801L1.0816 7.39553L1.08117 7.39453C1.08098 7.39409 1.08081 7.39369 1.99995 6.99977L1.08117 7.39453C0.863613 6.8869 1.0984 6.29818 1.60603 6.08062Z" fill="#1C274C"/>
                  </svg>}

               <p className="text-xs mt-5 mb-2">Confirm Password</p>
               <input  type={pass1 ? "text" : "password"} onChange={e => setPasswrd1(e.target.value)} className="bg-gray-100  px-4 py-1 w-full rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"></input>
               { pass1 ?  <svg width="17" onClick={showPass1} className="-mt-6 ml-72 cursor-pointer" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#1C274C"/>
                  </svg>
                  :
                  <svg width="17" height="17" onClick={showPass1} className="-mt-6 ml-72 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.60603 6.08062C2.11366 5.86307 2.70154 6.09822 2.9191 6.60585L1.99995 6.99977C2.9191 6.60585 2.91924 6.60618 2.9191 6.60585L2.91858 6.60465C2.9183 6.604 2.91851 6.60447 2.91858 6.60465L2.9225 6.61351C2.92651 6.62253 2.93339 6.63785 2.94319 6.65905C2.96278 6.70147 2.99397 6.76735 3.03696 6.85334C3.12302 7.02546 3.25594 7.27722 3.43737 7.58203C3.80137 8.19355 4.35439 9.00801 5.10775 9.81932C5.28532 10.0105 5.47324 10.2009 5.67173 10.3878C5.68003 10.3954 5.68823 10.4031 5.69633 10.4109C7.18102 11.8012 9.25227 12.9998 12 12.9998C13.2089 12.9998 14.2783 12.769 15.2209 12.398C16.4469 11.9154 17.4745 11.1889 18.3156 10.3995C19.2652 9.50815 19.9627 8.54981 20.4232 7.81076C20.6526 7.44268 20.8207 7.13295 20.9299 6.91886C20.9844 6.81192 21.0241 6.72919 21.0491 6.67538C21.0617 6.64848 21.0706 6.62884 21.0758 6.61704L21.0808 6.60585C21.2985 6.0985 21.8864 5.86312 22.3939 6.08062C22.9015 6.29818 23.1367 6.88606 22.9191 7.39369L22 6.99977C22.9191 7.39369 22.9192 7.39346 22.9191 7.39369L22.9169 7.39871L22.9134 7.40693L22.9019 7.43278C22.8924 7.4541 22.879 7.48354 22.8618 7.52048C22.8274 7.59434 22.7774 7.69831 22.7115 7.8275C22.5799 8.08566 22.384 8.44584 22.1206 8.86844C21.718 9.5146 21.152 10.316 20.4096 11.1241L21.2071 11.9215C21.5976 12.312 21.5976 12.9452 21.2071 13.3357C20.8165 13.7262 20.1834 13.7262 19.7928 13.3357L18.9527 12.4955C18.3884 12.9513 17.757 13.3811 17.0558 13.752L17.8381 14.9544C18.1393 15.4173 18.0083 16.0367 17.5453 16.338C17.0824 16.6392 16.463 16.5081 16.1618 16.0452L15.1763 14.5306C14.4973 14.7388 13.772 14.8863 13 14.9554V16.4998C13 17.0521 12.5522 17.4998 12 17.4998C11.4477 17.4998 11 17.0521 11 16.4998V14.9556C10.2253 14.8864 9.50014 14.7386 8.82334 14.531L7.83814 16.0452C7.53693 16.5081 6.91748 16.6392 6.45457 16.338C5.99165 16.0367 5.86056 15.4173 6.16177 14.9544L6.94417 13.7519C6.24405 13.3814 5.61245 12.9515 5.04746 12.4953L4.20706 13.3357C3.81654 13.7262 3.18337 13.7262 2.79285 13.3357C2.40232 12.9452 2.40232 12.312 2.79285 11.9215L3.59029 11.1241C2.74529 10.2043 2.12772 9.292 1.71879 8.605C1.5096 8.25356 1.35345 7.95845 1.2481 7.74776C1.19539 7.64234 1.15529 7.55783 1.12752 7.49771C1.11363 7.46765 1.10282 7.44366 1.09505 7.42618L1.08566 7.4049L1.08267 7.39801L1.0816 7.39553L1.08117 7.39453C1.08098 7.39409 1.08081 7.39369 1.99995 6.99977L1.08117 7.39453C0.863613 6.8869 1.0984 6.29818 1.60603 6.08062Z" fill="#1C274C"/>
                  </svg>}
               <div className="pt-4 mt-4">
                <button onClick={passwordCheck} class="bg-blue-500 hover:bg-blue-700 text-white py-1 px-16 rounded w-full">Create Account</button>
               </div>
               <div className="Flex justify-center item-center pt-4 text-center">
                <p className="text-xs">By creating an account, you agree with our</p>
                <a class="text-[#2F80ED] pl-2 text-xs" href="">Terms and Conditions</a>
                <p className="text-xs">&</p>
                <a class="text-[#2F80ED] pl-2 text-xs" href="">Privacy Statement.</a>
               </div>
             </div>
          </div>
          }


        </div>
    )
}
export default Register; 