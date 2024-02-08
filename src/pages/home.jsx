import Alert from "../component/alert";
import React , {useState,useEffect} from "react";
import Vacation from "../component/dreamVacation";
import Footer from "../component/footer";
import Header from "../component/header";
import Nexttrip from "../component/nextTrip";
import Search from "../component/search";
import Subfooter from "../component/subfooter";
import Swipers from "../component/swiper";
import VacData from '../data/vacation.json'
import HotelData from "../data/hotel.json"
import Welcome from "../component/welcome";
import commonHelper from "../helper/commonHelper";

const Home = () => {
    const[show,setShow]=useState(false)

    useEffect(()=>{
        // console.log(">>> condition check",  commonHelper.checkLogin())
        if( commonHelper.checkLogin()){
            setShow(true)
        }
    },[])

    const copy = ()=>{
        navigator.clipboard.writeText("weekend45")
    }


    return  (
        <>
        <Header color={"#fff"}/>
        {show && <Welcome show={setShow} time={10} showTime={true} title={`Welcome !! ${commonHelper.getEmail()}`} content="Hurry !! Special offer for your next trip will end in  "buttonText="Copy to Clipboard" buttonAction={copy}/>}
        <Swipers/>
        {/* <Search/> */}
        <Alert/>
        <Vacation info={VacData}/>
        <Nexttrip/>
        <Vacation info={HotelData}/>
        <Subfooter/>
        <Footer/>
        </>
    )
}
export default Home;