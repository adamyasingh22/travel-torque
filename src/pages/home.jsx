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

const Home = () => {
    const[show,setShow]=useState(false)

    useEffect(()=>{
        
        if( localStorage.getItem("islogin") != null){
            setShow(true)
        }
    },[])


    return  (
        <>
        <Header color={"#fff"}/>
        {show && <Welcome show={setShow}/>}
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