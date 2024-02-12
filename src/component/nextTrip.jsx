const Nexttrip = () => {
    return (
      <div className=" mt-12 md:mx-32 font-serif max-sm:text-center">
        <p className="text-3xl font-semibold">Get inspiration for your next trip</p>
        <div className="md:grid md:grid-cols-3 md:mt-8 max-sm:text-center">
        <div className="relative max-sm:mt-8 max-sm:m-4 text-white">
            <img className="rounded-2xl md:h-[194px] md:w-[95%]" src="/images/sydney.jpg" alt/>
            <div className="absolute bottom-4 mx-2 ">
            <p className="font-semibold text-lg ">Sydeny’s 10 most fashionable 5 star hotels</p>
            <p className="shadow-xl">Australia tourism capital ....</p>
            </div>
        </div>
        <div className="relative max-sm:mt-8 max-sm:mx-4 text-white">
            <img className="rounded-2xl md:h-[194px] md:w-[95%]" src="/images/beaches.jpg" alt/>
            <div className="absolute bottom-4 mx-2">
            <p className="font-semibold text-lg ">Top cities for Vegan Travellers fashionable 5 star hotels</p>
            <p className="shadow-xl">Australia tourism capital ....</p>
            </div>
        </div>
        <div className="relative max-sm:mt-8 max-sm:mx-4 text-white">
            <img className="rounded-2xl md:h-[194px] md:w-[95%]" src="/images/dubai.jpg" alt/>
            <div className="absolute bottom-4 mx-2">
            <p className="font-semibold text-lg ">World’s top destinations during & post covid timeline</p>
            <p className="shadow-xl">Australia tourism capital ....</p>
            </div>
        </div>
        </div>

      </div>
    )
}
export default Nexttrip;