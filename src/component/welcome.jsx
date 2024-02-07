import { useEffect } from "react";
import { useState } from "react";
const Welcome = ({show , title , content ,time ,showTime, button}) => {

    const [timer,setTimer] = useState(time)

    useEffect(()=>{
        if(timer == 0 ){
            show(false)
            if(!showTime){
             
            }
        }else{
        setTimeout(()=> setTimer(timer-1),1000)
        }
    },[timer])

    const CloseEvent = () => {
        show(false)
    }
    return (
        <div id="welcomePopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <div class="bg-white p-8 rounded-3xl">
            <h2 class="text-2xl font-bold mb-4 text-center">{title}</h2>
            <p className="text-center">{content}{timer > 0 && showTime==true ? `${timer-1} seconds !!` : ''}</p>
            <div className="flex justify-center">
            <button onClick={CloseEvent} class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">{button}</button>
            </div>
        </div>
        </div>
    )
}
export default Welcome;