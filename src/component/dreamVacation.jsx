
const Vacation = (props) =>{
    return (
        
        
        <div className="font-serif md:mx-32 my-12"> 
           <p className="text-[#181818] max-sm:text-center text-3xl font-semibold">{props.heading?.title}</p>
           <p className="max-sm:text-center max-sm:m-4 md:w-1/2 leading-6 text-[#333] mt-4">{props.heading?.subTitle}</p>
           <div className="my-4 md:grid md:grid-cols-4 ">
            
            
            {
                props.info.map((item , index)=>{
                    return(
                        <a href={`/searchresults?country=${item.name}`}>
                        <div className="max-sm:m-4 max-sm:text-center" key={index}>
                        <img className="rounded-xl md:h-[136px] md:w-[90%] max-sm:w-full max-sm:h-56" src={props?.image[index]}/>
                        <p className="mt-2 font-bold">{item.name}</p>
                        <p className="mt-2">{item.count} properties</p>
                        </div>
                        </a>
                    )
                })
            }
            
            
            
           </div>
        </div>
    )
}
export default Vacation;