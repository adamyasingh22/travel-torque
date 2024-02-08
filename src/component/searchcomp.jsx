const Searchcomp = (props)=> {
    return (
        <div className="grid grid-cols-3 gap-4 mt-8 p-4 border border-gray-300">
        <div className="">
            <img  className="rounded-2xl md:h-[194px] md:w-[95%]" src={props.link}></img>
        </div>
        <div className="col-span-2">
            <div className="grid grid-cols-2 h-full">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-between">
                       <p className="text-xl font-semibold">{props.name}</p>
                       <div className="flex gap-2 mt-2">
                         <p className="text-xs">⭐⭐⭐⭐</p>
                         <p className="text-xs">{props.reviews}</p>
                       </div>
                    </div>
                    <div>
                       <p className="text-sm">Live a little and celbrate with champagne</p>
                       <p className="text-xs">Reats include a glass of French champagne, parking and a late checkout. Gym included. Flexible cancellation applies</p>
                    </div>
                    <div>
                       <button class= "bg-sky-500 py-2 px-4 text-white rounded-md">See Availability</button>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex justify-end">
                      <p className="bg-[#ef4444] text-end text-white self-end border rounded-md text-sm p-1">{props.book} </p>
                    </div>
                    <div className="flex flex-col">
                       <p className="text-end bg-[#22c55e] text-white self-end border rounded-md p-1">{props.off}</p>
                       <p className="text-end text-xs">1 room 2 days</p>
                       <div className="flex justify-end">
                           <p>$150</p>
                           <p className="text-xl font-bold">$130</p>
                       </div>
                       <p className="text-end text-sm">Includes taxes and fees</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Searchcomp;
