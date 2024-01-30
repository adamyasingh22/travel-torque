import Footer from "../component/footer";
import Header from "../component/header";

const Hdetail = () => {
    const count = [1,2,3,4]
    return (
        <div className="bg-[#F4F4F4]">
         <Header/>
         {/* photo gallery start */}
         <div className="md:mx-32 md:flex md:p-8 ">
            <div className="md:w-2/3 md:p-4 ">
                <img src="../../public/images/detail.jpg" alt=""/>
            </div>
            <div className="md:w-1/3">
                <div className="md:p-4 ">
                    <img src="../../public/images/detail-1.jpg" alt=""/>
                </div>
                <div className="md:p-4 ">
                    <img src="../../public/images/detail-2.jpg" alt=""/>
                </div>

            </div>
            
         </div>
         {/* photo gallery end */}
         {/* short nav start */}
         <div className="md:mx-32 md:flex text-[#333333] border-b-2 md:p-4 space-x-8 tracking-normal font-semibold bg-white rounded-3xl">
            <p className="p-2 border-b-4 border-[#2F80ED]">Overview</p>
            <p className="p-2">Rooms</p>
            <p className="p-2 ">Guest Reviews</p>
         </div>
         {/* short nav end */}
         {/* Overview section start */}
         <div className="md:mx-32 md:p-8 md:flex">
            <div className="md:w-2/3">
                <>
                  <p className="text-3xl font-semibold" >Lakeside Motel Warefront</p>
                  <div className="md:flex  md:items-center">
                  <span className="md:py-4 md:flex md:justify-center md:items-center">
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
                  <p className="ml-4 text-[#4F4F4F]">4.5 (1200 Reviews)</p>
                  </div>
                  <p className="md:flex md:items-center text-[#4F4F4F] text-sm">
                    <svg className="md:mr-4" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M9.9999 11.1917C10.3413 11.1917 10.6794 11.1244 10.9949 10.9938C11.3103 10.8631 11.5969 10.6716 11.8384 10.4302C12.0798 10.1887 12.2713 9.90212 12.402 9.58668C12.5327 9.27123 12.5999 8.93314 12.5999 8.5917C12.5999 8.25026 12.5327 7.91217 12.402 7.59672C12.2713 7.28128 12.0798 6.99465 11.8384 6.75322C11.5969 6.51179 11.3103 6.32027 10.9949 6.18961C10.6794 6.05895 10.3413 5.9917 9.9999 5.9917C9.31034 5.9917 8.64902 6.26563 8.16142 6.75322C7.67383 7.24082 7.3999 7.90214 7.3999 8.5917C7.3999 9.28126 7.67383 9.94258 8.16142 10.4302C8.64902 10.9178 9.31034 11.1917 9.9999 11.1917V11.1917Z" stroke="#2F80ED" stroke-width="1.5"/>
                    <path d="M3.01675 7.07484C4.65842 -0.141828 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C12.1935 17.8945 11.1165 18.3292 9.99592 18.3292C8.87529 18.3292 7.79835 17.8945 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484V7.07484Z" stroke="#2F80ED" stroke-width="1.5"/>
                    </svg>
                    Lorem ipsum road, Tantruim-2322, Melbourne, Australia</p>
                </>
                <div className="md:py-8 bg-white md:mt-8 rounded-xl md:p-4 ">
                   <p className="font-semibold md:px-4">Overview</p>
                   <p className="text-[#4F4F4F] md:p-4 md:leading-8 md:border-b-2" >
                    Featuring free WiFi throughout the property, Lakeside Motel Waterfront offers accommodations in Lakes Entrance, 19 mi from Bairnsdale. Free private parking is available on site. Each room at this motel is air conditioned and comes with a flat-screen TV. You will find a kettle, toaster and a microwave in the room. Each room is fitted with a private bathroom. Guests have access to barbecue facilities and a lovely large lawn area. Metung is 6.8 mi from Lakeside Motel Waterfront, while Paynesville is 14 mi from the property. Couples in particular like the location – they rated it 9.2 for a two-person trip.
                   </p>
                   <div className="md:mt-8">
                    <div className="md:flex md:items-center space-x-16">
                    <p className=" md:flex">
                        <span className=" md:mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M9.23051 2.58519L2.87801 7.67269C2.16301 8.24102 1.70467 9.44185 1.86051 10.3402L3.07967 17.6369C3.29967 18.9385 4.54634 19.9927 5.86634 19.9927H16.133C17.4438 19.9927 18.6997 18.9294 18.9197 17.6369L20.1388 10.3402C20.2855 9.44185 19.8272 8.24102 19.1213 7.67269L12.7688 2.59435C11.788 1.80602 10.2022 1.80602 9.23051 2.58519V2.58519Z" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.05664 13.182C10.2208 12.0728 11.7791 12.0728 12.9433 13.182" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M14.886 11.2387C14.4137 10.7746 13.8687 10.3907 13.2727 10.1021C12.5625 9.75822 11.7838 9.57959 10.9948 9.57959C10.2058 9.57959 9.42699 9.75822 8.71685 10.1021C8.14852 10.3771 7.60768 10.7529 7.10352 11.2387" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M10.9951 15.5835H11.0035" stroke="#2F80ED" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Free wifi
                    </p>
                    <p className=" md:flex">
                        <span className=" md:mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M11.0002 17.4168C11.9726 17.4168 12.9053 17.0305 13.5929 16.3429C14.2805 15.6553 14.6668 14.7226 14.6668 13.7502C14.6668 12.7777 14.2805 11.8451 13.5929 11.1574C12.9053 10.4698 11.9726 10.0835 11.0002 10.0835C10.0277 10.0835 9.09507 10.4698 8.40744 11.1574C7.7198 11.8451 7.3335 12.7777 7.3335 13.7502C7.3335 14.7226 7.7198 15.6553 8.40744 16.3429C9.09507 17.0305 10.0277 17.4168 11.0002 17.4168V17.4168Z" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.57031 13.7504L10.1661 14.3462C10.3403 14.5204 10.6245 14.5295 10.7986 14.3554L12.4303 12.8521" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M8.25009 20.1668H13.7501C17.4351 20.1668 18.0951 18.691 18.2876 16.8943L18.9751 11.3943C19.2226 9.15766 18.5809 7.3335 14.6668 7.3335H7.33342C3.41925 7.3335 2.77759 9.15766 3.02509 11.3943L3.71259 16.8943C3.90509 18.691 4.56509 20.1668 8.25009 20.1668Z" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6.875 7.03108V6.14191C6.875 4.07941 8.53417 2.05357 10.5967 1.86107C11.1697 1.80477 11.7483 1.86908 12.295 2.04985C12.8417 2.23063 13.3445 2.52387 13.7711 2.9107C14.1976 3.29753 14.5385 3.76939 14.7717 4.2959C15.0048 4.82241 15.1252 5.39191 15.125 5.96774V7.23274" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Business Services
                    </p>
                    </div>

                   </div>
                   <div className="md:mt-4">
                    <div className="md:flex md:items-center space-x-16">
                    <p className=" md:flex">
                        <span className=" md:mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M1.8335 13.75H16.9585C18.7277 13.75 20.1668 15.1892 20.1668 16.9583C20.1668 18.7275 18.7277 20.1667 16.9585 20.1667C15.1893 20.1667 13.7502 18.7275 13.7502 16.9583V16.5" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.8335 11.0002H16.9585C18.7185 11.0002 20.1668 9.561 20.1668 7.79183C20.1668 6.03183 18.7185 4.5835 16.9585 4.5835C16.1083 4.58591 15.2937 4.92471 14.6925 5.52587C14.0914 6.12702 13.7526 6.94167 13.7502 7.79183V8.25016" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.8335 8.25003H8.53433C9.02203 8.25003 9.49877 8.10541 9.90427 7.83446C10.3098 7.56351 10.6258 7.1784 10.8125 6.72783C10.9991 6.27726 11.0479 5.78146 10.9528 5.30313C10.8576 4.82481 10.6228 4.38544 10.2779 4.04059C9.93308 3.69573 9.49371 3.46089 9.01539 3.36574C8.53706 3.2706 8.04127 3.31943 7.5907 3.50606C7.14012 3.69269 6.75501 4.00875 6.48406 4.41425C6.21311 4.81975 6.0685 5.2965 6.0685 5.78419V6.13253" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Air Conditioning
                    </p>
                    <p className=" md:flex">
                        <span className=" md:mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M10.9723 20.1668C16.0351 20.1668 20.139 16.0629 20.139 11.0002C20.139 5.93741 16.0351 1.8335 10.9723 1.8335C5.90958 1.8335 1.80566 5.93741 1.80566 11.0002C1.80566 16.0629 5.90958 20.1668 10.9723 20.1668V20.1668Z" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 15.125C12.094 15.125 13.1432 14.6904 13.9168 13.9168C14.6904 13.1432 15.125 12.094 15.125 11C15.125 9.90598 14.6904 8.85677 13.9168 8.08318C13.1432 7.3096 12.094 6.875 11 6.875C9.90598 6.875 8.85677 7.3096 8.08318 8.08318C7.3096 8.85677 6.875 9.90598 6.875 11C6.875 12.094 7.3096 13.1432 8.08318 13.9168C8.85677 14.6904 9.90598 15.125 11 15.125V15.125Z" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.49121 4.51953L7.73621 7.75536" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4.4917 17.4809L7.7367 14.2451" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.4623 17.4809L14.2173 14.2451" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M17.4623 4.51953L14.2173 7.75536" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Swimming pool
                    </p>
                    </div>

                   </div>
                   <div className="md:my-4">
                    <div className="md:flex md:items-center space-x-16">
                    <p className=" md:flex">
                        <span className=" md:mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M14.2173 2.59424H7.78234C5.49984 2.59424 4.99567 3.73091 4.70234 5.12424L3.6665 10.0834H18.3332L17.2973 5.12424C17.004 3.73091 16.4998 2.59424 14.2173 2.59424V2.59424Z" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20.1575 18.1685C20.2583 19.241 19.3967 20.1668 18.2967 20.1668H16.5733C15.5833 20.1668 15.4458 19.7452 15.2717 19.2227L15.0883 18.6727C14.8317 17.921 14.6667 17.4168 13.3467 17.4168H8.65334C7.33334 17.4168 7.14084 17.9852 6.91167 18.6727L6.72834 19.2227C6.55417 19.7452 6.41667 20.1668 5.42667 20.1668H3.70334C2.60334 20.1668 1.74167 19.241 1.8425 18.1685L2.35584 12.586C2.48417 11.211 2.75 10.0835 5.15167 10.0835H16.8483C19.25 10.0835 19.5158 11.211 19.6442 12.586L20.1575 18.1685Z" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M3.66667 7.3335H2.75" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M19.2502 7.3335H18.3335" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11 2.75V4.58333" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M9.625 4.5835H12.375" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.5 13.75H8.25" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.75 13.75H16.5" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Parking available
                    </p>
                    <p className=" md:flex">
                        <span className=" md:mx-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path d="M6.85645 16.8208L9.69811 19.0208C10.0648 19.3874 10.8898 19.5708 11.4398 19.5708H14.9231C16.0231 19.5708 17.2148 18.7458 17.4898 17.6458L19.6898 10.9541C20.1481 9.67076 19.3231 8.57076 17.9481 8.57076H14.2814C13.7314 8.57076 13.2731 8.11243 13.3648 7.47076L13.8231 4.53743C14.0064 3.71243 13.4564 2.79576 12.6314 2.52076C11.8981 2.24576 10.9814 2.61243 10.6148 3.16243L6.85645 8.7541" stroke="#2F80ED" stroke-width="1.5" stroke-miterlimit="10"/>
                            <path d="M2.18164 16.8207V7.83737C2.18164 6.55404 2.73164 6.0957 4.01497 6.0957H4.93164C6.21497 6.0957 6.76497 6.55404 6.76497 7.83737V16.8207C6.76497 18.104 6.21497 18.5624 4.93164 18.5624H4.01497C2.73164 18.5624 2.18164 18.104 2.18164 16.8207Z" stroke="#2F80ED" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        Top rated in area
                    </p>
                    </div>

                   </div>
                </div>
            </div>
            <div className="md:w-1/3 md:mx-4">
                <div className="">
                  <img src="../../public/images/map.png"/>
                </div>
                <div className="md:p-4">
                   <p className="md:font-semibold md:text-md">Explore the area</p>
                </div>
            </div>
         </div>
         <></>
         <Footer/>
        </div>
    )
}
export default Hdetail;