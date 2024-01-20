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
import Apiservice from "../apiService/get";


const Home = () => {

    return  (
        <>
        <Header/>
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