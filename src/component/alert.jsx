const Alert = () =>{
    return (
        <div className="my-16 bg-gray-100 px-32 font-serif py-2 md:mx-32 ">
            <div className="md:flex md:items-center md:justify-center ">
            <div className="max-sm:flex max-sm:justify-center">
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M16 12V18.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16.0001 28.5468H7.92007C3.29341 28.5468 1.36007 25.2401 3.60007 21.2001L7.76007 13.7068L11.6801 6.66679C14.0534 2.38679 17.9467 2.38679 20.3201 6.66679L24.2401 13.7201L28.4001 21.2135C30.6401 25.2535 28.6934 28.5601 24.0801 28.5601H16.0001V28.5468Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.9932 22.6667H16.0052" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
            <p className="md:pl-4 max-sm:mt-4 max-sm:text-center">Check the latest COVID-19 restrictions before you travel.</p>
            <p className="text-[#2F80ED] md:pl-4 max-sm:text-center"> Learn more</p>

        </div>
        </div>
    )
}
export default Alert;