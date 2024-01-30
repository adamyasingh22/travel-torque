import React , {useState} from 'react';
const Header  = () =>{
 const [mobMenu,setMobmenu]=useState(false);

 const TogglemobileMenu = (e) => {
   if(mobMenu){
      setMobmenu(false)
   }else{
    setMobmenu(true)
   }
 }




    return (
        <>
        <div className="flex p-4 max-sm:items-center border-b-2 max-sm:border-black md:px-32 justify-items-start items-center">
            
            <div className="md:hidden lg:hidden " onClick={(e)=>TogglemobileMenu()}>
                <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div className="max-sm:ml-44 flex max-md:flex-grow max-md:justify-end">
                <p className="font-serif max-sm:mr-2 text-[#726c6c] md:mr-4">Travel Torque</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3.414 13.7782C2.5 14.0002 2 15.1922 2 15.1922C2 15.1922 5.398 15.6262 6.949 17.3132C8.5 19.0002 9.071 22.2632 9.071 22.2632C9.071 22.2632 10.47 22.6982 10.485 20.8492C10.5 19.0002 9.778 17.3132 9.778 17.3132L13.091 14.0002L16.701 21.7042C16.701 21.7042 18.08 22.2302 18.04 20.3652C18 18.5002 16.85 10.2422 16.85 10.2422L19.678 7.41319C19.869 7.22869 20.0214 7.008 20.1262 6.76399C20.231 6.51999 20.2862 6.25755 20.2885 5.99199C20.2908 5.72643 20.2402 5.46307 20.1396 5.21728C20.0391 4.97149 19.8906 4.74818 19.7028 4.5604C19.515 4.37261 19.2917 4.2241 19.0459 4.12354C18.8001 4.02298 18.5368 3.97238 18.2712 3.97468C18.0056 3.97699 17.7432 4.03217 17.4992 4.13698C17.2552 4.2418 17.0345 4.39417 16.85 4.58519L13.947 7.48819C13.947 7.48819 6.148 6.09419 3.824 6.29719C1.5 6.50018 2.559 7.56319 2.559 7.56319L10.203 11.2332L6.95 14.4862C6.95 14.4862 4.328 13.5562 3.414 13.7782Z" fill="#2F80ED"/>
                </svg>
            </div>
            <div className='max-sm:hidden text-[#726c6c] flex flex-grow justify-center '>
               <ul className='flex items-center'>
                <li className='px-4'>
                    Home
                </li>
                <li className='px-4'>
                    Discover
                </li>
                <li className='px-4'>
                    Activites
                </li>
                <li className='px-4'>
                    About
                </li>
                <li className='pl-4'>
                    Contact
                </li>
                <li className='rounded-md  font-semibold ml-32'>
                    <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Register</button>
                    </li>
                <li className='rounded-md font-semibold ml-4'>
                    <button type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
                    </li>
                
               </ul>
            </div>
            

            

        </div>
        {
                mobMenu && 
                <div className='m-4 bg-slate-100 text-lg font-serif '>
                    <ul className="h-screen flex flex-col items-center pt-16">
                        <li className='p-4 border-b-2'>
                          Home
                        </li>
                        <li className='p-4 border-b-2'>
                          Discover
                        </li>
                        <li className='p-4 border-b-2'>
                          Activites
                        </li>
                        <li className='p-4 border-b-2'>
                          About
                        </li>
                        <li className='p-4 border-b-2'>
                          Contact
                        </li>
                    </ul>
                </div>
            }
        </>
    )
} 
export default Header;