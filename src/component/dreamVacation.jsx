const Vacation = () =>{
    return (
        <div className="font-serif md:mx-32"> 
           <p className="text-[#181818] max-sm:text-center text-3xl font-semibold">Enjoy your dream vacation</p>
           <p className="max-sm:text-center max-sm:m-4 md:w-1/2 leading-6 text-[#333] mt-4">Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
           <div className="my-4 md:grid md:grid-cols-4 ">
            <div className="max-sm:m-4 max-sm:text-center md:w-4/5">
                <img className="rounded-xl md:h-[136px]" src="../../public/images/australia.jpg"/>
                <p className="mt-2 font-bold">Australia</p>
                <p className="mt-2">2246 properties</p>
            </div>
            <div className="max-sm:m-4 max-sm:text-center md:w-4/5">
                <img className="rounded-xl md:h-[136px]" src="../../public/images/japan's.jpeg"/>
                <p className="mt-2 font-bold">Japan</p>
                <p className="mt-2">1278 properties</p>
            </div>
            <div className="max-sm:m-4 max-sm:text-center md:w-4/5">
                <img className="rounded-xl md:h-[136px]" src="../../public/images/Zealand.jpg"/>
                <p className="mt-2 font-bold">New Zealand</p>
                <p className="mt-2">480 properties</p>
            </div>
            <div className="max-sm:m-4 max-sm:text-center md:w-4/5">
                <img className="rounded-xl md:h-[136px]" src="../../public/images/greece.jpg"/>
                <p className="mt-2 font-bold">Greece</p>
                <p className="mt-2">320 properties</p>
            </div>
            
           </div>
        </div>
    )
}
export default Vacation;