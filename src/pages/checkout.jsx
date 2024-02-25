import Alert from "../component/alert";
import Footer from "../component/footer";
import Header from "../component/header";
import React , {useEffect , useState} from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom';
const Checkout = () =>{
    const count = [1,2,3,4]
    const location = useLocation();
    const[name1,setName1]=useState("")
    const[name2,setName2]=useState("")
    const[mobile,setMobile]=useState("")
    const[detail,setDetail]=useState()

    useEffect(()=>{
         getPageData()
    },[])

    const getPageData  = async ()  => {
       let data = await axios.get(`http://localhost:3000/api/checkout${location.search}`).then((res)=>{
            if(res != 'undefined'){
                
                setDetail(res.data);
                // console.log(">>>>>",detail)
            }
            }
        )
   }
   const checkOut = () =>{
    if(name1 === ""){

    }else if (name2 === ""){

    }else if (mobile === ""){

    }
   }

   return (
    <div className="bg-[#F4F4F4]">
        {console.log(">>>>>>>>>>>> data",detail)}
        <Header/>

        <div className="">
        <p className="md:mx-32 max-sm:text-center text-3xl font-serif mt-12 -mb-8 font-semibold">Secure your reservation</p>
        </div>
        <Alert/>
        <div className="md:mx-32 my-8 md:flex md:justify-center ">
        <div className="md:w-2/3 md:mr-8">


                <div className="mb-8">
                <div className="bg-[#2F80ED] flex justify-start items-center max-sm:py-8 max-sm:p-4 md:p-3 rounded-t-xl text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21.5835 4.79496L15.7618 2.61329C14.7935 2.25162 13.2068 2.25162 12.2385 2.61329L6.41685 4.79496C5.07518 5.29662 3.97852 6.88329 3.97852 8.30662V16.975C3.97852 18.3516 4.88852 20.16 5.99685 20.9883L11.0135 24.7333C12.6585 25.97 15.3652 25.97 17.0102 24.7333L22.0268 20.9883C23.1352 20.16 24.0452 18.3516 24.0452 16.975V8.30662C24.0218 6.88329 22.9252 5.29662 21.5835 4.79496ZM13.9185 8.20162C15.2952 8.20162 16.4152 9.32162 16.4152 10.6983C16.4152 12.0516 15.3535 13.1366 14.0118 13.1833H13.8952C12.4952 13.1366 11.4452 12.0516 11.4452 10.6983C11.4335 9.32162 12.5535 8.20162 13.9185 8.20162ZM16.5552 19.0866C15.8435 19.5533 14.9218 19.7983 14.0002 19.7983C13.0785 19.7983 12.1452 19.565 11.4452 19.0866C10.7802 18.6433 10.4185 18.0366 10.4068 17.3716C10.4068 16.7183 10.7802 16.0883 11.4452 15.645C12.8568 14.7116 15.1552 14.7116 16.5668 15.645C17.2318 16.0883 17.6052 16.695 17.6052 17.36C17.5935 18.0133 17.2202 18.6433 16.5552 19.0866Z" fill="white"/>
                    </svg>
                    <p className="mx-2 ">Room 1</p>
                    <p className="md:ml-8 max-sm:w-1/2 max-sm:text-center max-sm:mx-auto">2 adults, 1 {detail?.response?.bed_type} ({detail?.response?.property_type})</p>
                </div>
                <div className="bg-white rounded-b-xl md:p-8">
                <div className="md:flex md:items-center font-sans max-sm:pt-8">
                <div className="md:mx-4 md:my-4 max-sm:p-4 max-sm:flex max-sm:items-center">
                    <p className="font-medium my-1 max-sm:mr-24">First Name</p>
                    <input className="bg-gray-100 rounded-md p-1 " value={name1} onChange={(e)=>setName1(e.target.value)} placeholder=""></input>
                </div>
                <div className="md:mx-4 md:my-4 max-sm:p-4 max-sm:flex max-sm:items-center">
                    <p className="font-medium my-1 max-sm:mr-24">Last Name</p>
                    <input className="bg-gray-100 rounded-md p-1 " value={name2} onChange={(e)=>setName2(e.target.value)} placeholder=""></input>
                </div>
                </div>
                <div className="font-sans md:w-2/3">
                <div className="md:mx-4 mb-4 max-sm:p-4 max-sm:flex max-sm:items-center">
                    <p className="font-medium my-1 max-sm:mr-[60px]">Mobile Number</p>
                    <input className="bg-gray-100 md:w-2/3 rounded-md p-1" value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder=""></input>
                </div>
                
                </div>
                <div className="flex md:m-4 max-sm:justify-center max-sm:pb-8">
                    <input type="checkbox"value="Bike"></input>
                    <p className="ml-2 font-semibold">Receive text alerts about this trip.</p>
                </div>

                </div>
                </div>
                <div className=" mb-8">
                <div className="bg-[#2F80ED] flex justify-start items-center md:p-3 rounded-t-xl text-white max-sm:p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M22.1667 17.5C19.5883 17.5 17.5 19.5883 17.5 22.1667C17.5 23.0417 17.745 23.87 18.1767 24.57C18.588 25.2612 19.1722 25.8335 19.8718 26.2303C20.5714 26.6272 21.3623 26.835 22.1667 26.8333C23.87 26.8333 25.3517 25.9233 26.1567 24.57C26.5883 23.87 26.8333 23.0417 26.8333 22.1667C26.8333 19.5883 24.745 17.5 22.1667 17.5ZM24.5817 21.665L22.0967 23.9633C21.9333 24.115 21.7117 24.1967 21.5017 24.1967C21.28 24.1967 21.0583 24.115 20.8833 23.94L19.7283 22.785C19.5656 22.6203 19.4743 22.3982 19.4743 22.1667C19.4743 21.9352 19.5656 21.713 19.7283 21.5483C20.0667 21.21 20.6267 21.21 20.965 21.5483L21.525 22.1083L23.3917 20.3817C23.7417 20.055 24.3017 20.0783 24.6283 20.4283C24.955 20.7783 24.9317 21.3267 24.5817 21.665Z" fill="white"/>
                    <path d="M25.6668 8.80602V9.33102C25.6668 9.97269 25.1418 10.4977 24.5002 10.4977H3.50016C2.8585 10.4977 2.3335 9.97269 2.3335 9.33102V8.79436C2.3335 6.12269 4.49183 3.96436 7.1635 3.96436H20.8252C23.4968 3.96436 25.6668 6.13436 25.6668 8.80602Z" fill="white"/>
                    <path d="M2.3335 13.4144V19.2011C2.3335 21.8728 4.49183 24.0311 7.1635 24.0311H14.4668C15.1435 24.0311 15.7268 23.4594 15.6685 22.7828C15.5052 20.9978 16.0768 19.0611 17.6635 17.5211C18.3168 16.8794 19.1218 16.3894 19.9968 16.1094C21.4552 15.6428 22.8668 15.7011 24.1152 16.1211C24.2907 16.1824 24.4783 16.201 24.6624 16.1751C24.8465 16.1493 25.0217 16.0798 25.1735 15.9725C25.3253 15.8652 25.4493 15.7232 25.5351 15.5583C25.6209 15.3934 25.6661 15.2103 25.6668 15.0244V13.4028C25.6668 12.7611 25.1418 12.2361 24.5002 12.2361H3.50016C2.8585 12.2478 2.3335 12.7728 2.3335 13.4144ZM9.3335 20.1228H7.00016C6.52183 20.1228 6.12516 19.7261 6.12516 19.2478C6.12516 18.7694 6.52183 18.3728 7.00016 18.3728H9.3335C9.81183 18.3728 10.2085 18.7694 10.2085 19.2478C10.2085 19.7261 9.81183 20.1228 9.3335 20.1228Z" fill="white"/>
                    </svg>
                    <p className="mx-2">Payment options</p>
                    <p className="md:ml-8 font-mono max-sm:w-1/2 max-sm:text-center"> Special Offer(Book Now Pay Later)</p>
                </div>
                <div className="bg-white rounded-b-xl md:p-8 max-sm:pb-8">
                
                <div className="font-serif md:w-2/3 " >
                <div className="md:mx-4 mb-4 max-sm:flex max-sm:items-center max-sm:pt-8 max-sm:p-4">
                    <p className="font-medium md:my-1 font-sans max-sm:mr-12 ">Enter you UPI Id</p>
                    <input className="bg-gray-100 md:w-2/3 rounded-md p-1" value="" placeholder=""></input>
                </div>
                
                </div>
                <div className="flex md:m-4 max-sm:justify-center">
                    <input type="checkbox"value="Bike"></input>
                    <p className="ml-2 font-semibold">Confirm your UPI Id</p>
                </div>
                <div className="max-sm:mx-auto bg-[#333333] text-white w-1/2 my-8 text-center px-auto py-4 rounded-xl">
                 <p clasName="font-sans" ><a href="/?confirm">Book Now & Pay Later</a></p>
                </div>

                </div>
                </div>
                <div className=" md:mb-8 font-medium">
                <div className="bg-[#F2C94C]  p-4 max-sm:text-center rounded-t-xl text-[#333333] ">
                   
                    <p className="mx-2">Important information about your booking</p>
                    
                </div>
                <div className="bg-white rounded-b-xl md:p-8">
                
              
                <div className="md:mx-4 mb-4">
                    
                    <ol className="font-medium md:my-1 font-sans md:list-disc md:list-inside max-sm:p-8">
                        <li className="my-4">This rate is non-refundable. If you change or cancel your booking you will not <span className="max-sm:hidden">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span> get a refund or credit to use for a future stay</li>
                        <li className="my-4">Stay extensions will require a new reservation.</li>
                        <li className="my-4">Front desk staff will greet guests on arrival.</li>
                        <li className="my-4">No refunds will be issued for late check-in or early check-out.</li>
                        
                    </ol>

                    <p className="md:my-8 text-[#4F4F4F] text-sm p-4">By clicking the button below, I acknowledge that I have reviewed the <span className="text-[#2F80ED]">Privacy Statement</span> and have reviewd and accept the <span className="text-[#2F80ED]">Rules and Restrictions</span> and <span className="text-[#2F80ED]">Terms of Use</span>.</p>

                    <div className=" w-1/3 bg-[#2F80ED] font-sans p-4 text-center rounded-xl max-sm:mx-auto">
                       Complete Booking
                    </div>
                    <div className="flex justify-center items-center mt-8 max-sm:px-2 max-sm:pb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 7.75C10.11 7.75 9.75 8.54 9.75 10V10.62H14.25V10C14.25 8.54 13.89 7.75 12 7.75Z" fill="#219653"/>
                        <path d="M11.9979 15.0979C12.2897 15.0979 12.5695 14.9821 12.7758 14.7758C12.9821 14.5695 13.0979 14.2897 13.0979 13.9979C13.0979 13.7062 12.9821 13.4264 12.7758 13.2201C12.5695 13.0138 12.2897 12.8979 11.9979 12.8979C11.7062 12.8979 11.4264 13.0138 11.2201 13.2201C11.0138 13.4264 10.8979 13.7062 10.8979 13.9979C10.8979 14.2897 11.0138 14.5695 11.2201 14.7758C11.4264 14.9821 11.7062 15.0979 11.9979 15.0979Z" fill="#219653"/>
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM17.38 14.5C17.38 16.7 16.7 17.38 14.5 17.38H9.5C7.3 17.38 6.62 16.7 6.62 14.5V13.5C6.62 11.79 7.03 11 8.25 10.73V10C8.25 9.07 8.25 6.25 12 6.25C15.75 6.25 15.75 9.07 15.75 10V10.73C16.97 11 17.38 11.79 17.38 13.5V14.5Z" fill="#219653"/>
                        </svg>
                        <p className="text-[#4F4F4F] text-sm pl-4 ">We use secure transmission and encrypted storage to protect your personal information</p>
                    </div>
                    
                </div>

                </div>
                </div>


         </div>
         <div className="md:w-1/3">


               <div className="bg-white pb-2 rounded-md md:mb-12 max-sm:mb-8">
                <img className="rounded-t-xl max-sm:w-full" src={detail?.response?.photo}/>
                <p className="text-[#181818] ml-4 pt-2 font-medium">{detail?.response?.name}</p>
                <div className="ml-4">
                    <span className="mt-1 flex items-center font-serif ">
                        {
                          count.map((item,index)=>{
                            return (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_4_2703)">
                                    <path d="M9.99995 14.1666L5.10162 17.1583L6.43328 11.5749L2.07495 7.84159L7.79578 7.38325L9.99995 2.08325L12.2041 7.38325L17.9258 7.84159L13.5666 11.5749L14.8983 17.1583L9.99995 14.1666Z" fill="#F2994A"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_4_2703">
                                    <rect width="20" height="20" fill="white"/>
                                    </clipPath>
                                    </defs>
                                    </svg> 
                                </>
                            )
                          })
                        }
                         
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 10 20" fill="none">
                        <g clip-path="url(#clip0_4_2707)">
                        <path d="M9.99995 14.1666L5.10162 17.1583L6.43328 11.5749L2.07495 7.84159L7.79578 7.38325L9.99995 2.08325L12.2041 7.38325L17.9258 7.84159L13.5666 11.5749L14.8983 17.1583L9.99995 14.1666Z" fill="#F2994A"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_4_2707">
                        <rect width="10" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>  
                    </span>
                    <p className="text-sm text-[#4F4F4F] mt-1">
                        {detail?.response?.overall_rating} ({detail?.response?.review_count} Reviews)
                    </p>
                    <div className="my-2 text-sm space-y-2">
                        <p className=" text-[#EB5757] font-semibold">Non refundable</p>
                        <p className="text-[#4F4F4F] ">Check in: Sunday, March 18, 2022</p>
                        <p className="text-[#4F4F4F] ">Check out: Tuesday, March 20, 2022</p>
                        <p className="text-[#4F4F4F]">2 night stay</p>
                    </div>
                </div>
               </div>

               <div className="font-serif md:mb-36">
                <p className="bg-[#85E0AB] py-2 px-8 font-semibold rounded-t-md max-sm:text-center">
                 Price Details
                </p>
                <div className="bg-white rounded-b-md p-4 text-[#4F4F4F] ">
                    <div className="flex items-center justify-center space-x-20 md:my-2">
                        <p className="">1 room X 2 nights</p>
                        <span className="flex justify-end">$ {detail?.response?.price}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-20 my-2">
                        <p className="">Tax and service fees</p>
                        <span className="flex justify-end">$ {detail?.response?.tax}</span>
                    </div>
                    <svg className="my-4" xmlns="http://www.w3.org/2000/svg" width="full" height="2" viewBox="0 0 400 2" fill="none">
                    <path d="M0 1H400" stroke="#E0E0E0"/>
                    </svg>
                    <div className="flex items-center justify-center space-x-20 my-2 text-lg text-black">
                        <p className="text-semibold ">Total</p>
                        <span className="flex justify-end">$ {Number(detail?.response?.price) + Number(detail?.response?.tax)}</span>
                    </div>
                    <p className="text-[12px] font-semibold text-[#2F80ED] text-center my-1" >Use a coupon, credit or promotional code</p>
                    <div className="md:m-4 ">
                    <p className="text-sm my-1 text-black font-semibold max-sm:text-center">Coupon code</p>
                    <div className="my-2 max-sm:flex max-sm:justify-center max-sm:pb-8">
                    <input className="bg-gray-100 rounded-md p-1 mr-1 " value="" placeholder="Apply coupon..."></input>
                    <span className="bg-[#333333] text-sm text-white p-2 rounded-lg">Apply Now</span>
                    </div>
                </div>
                </div>

               </div>


         </div>
        </div>
        <Footer/>
    </div>
   )
}
export default Checkout;