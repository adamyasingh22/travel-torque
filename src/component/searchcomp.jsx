import React , {useState , useEffect} from "react";


const Searchcomp = (props)=> {

    

    return (
        <div className="grid grid-cols-3 gap-3 mt-8 p-4 border border-gray-300 rounded-3xl">
            <div className="">

              <img  className="rounded-2xl md:h-[194px] md:w-[95%]" src={props.image}></img>
            </div>
        <div className="col-span-2">
            <div className="grid grid-cols-2 h-full">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col justify-between">
                       <p className="text-xl font-semibold">{props.name}</p>
                    </div>
                    <div>
                       
                       <p className="text-xs">{`${props.desc.substring(0, 170).toLowerCase()}...`}</p>
                    </div>
                    <button class= "bg-sky-500 p-2 text-white rounded-md"><a href={props.link}>See Availability</a></button>
                </div>
                <div className="flex flex-col justify-between">
                    <div className="flex justify-end">
                        <div className="flex gap-2 mt-2">
                         <p className="text-xs">⭐⭐⭐⭐</p>
                         <p className="text-xs">{props.reviews} Reviews</p>
                       </div>
                      {props.offer && <p className={` bg-[#ef4444] text-end text-white self-end border rounded-md text-sm p-1`}>{props.offer} </p>}
                    </div>
                    <div className="flex flex-col">
                       <p className="text-end bg-[#22c55e] text-white self-end border rounded-md p-1">{props.off}</p>
                       <p className="text-end text-xs">1 room 2 days</p>
                       <div className="flex justify-end">
                           <p>${props.price + props.tax}</p>
                           <p className="text-xl font-bold">${props.price + props.tax - 20}</p>
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
