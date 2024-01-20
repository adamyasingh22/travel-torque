const Search = () => {
    return (
        <div className=" mx-40 relative flex justify-center ">
        <div className="absolute border-2  bg-white top-0 -translate-y-1/2 w-1/2 z-10 p-1 grid grid-cols-5 ">
          <input className="bg-gray-300 w-4/5" value=""/>
          <input className="bg-gray-300 w-4/5"/>
          <input className="bg-gray-300 w-4/5"/>
          <input className="bg-gray-300 w-4/5"/>
          <input className="bg-gray-300 w-4/5"/>
        </div>
        </div>
    )
}
export default Search ;