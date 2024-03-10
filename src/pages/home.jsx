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
import axios from "axios";
import Loader from "../component/loader";
import Searchbar from "../component/searchbar";

const Home = () => {
    var a = 20
    const[show,setShow]=useState(false)
    const[home,setHome]=useState()

    useEffect(()=>{
        // console.log(">>> condition check",  commonHelper.checkLogin())
        if( commonHelper.checkLogin()){
            setShow(true)
        }
        getPageData()
    },[])

    const getPageData  = async ()  => {
       let data = await axios.get(`http://localhost:3000/api/home`).then((res)=>{
            if(res != "undefined"){
                setHome(res)
            }
            }
        )
   }


    const copy = ()=>{
        navigator.clipboard.writeText("weekend45")
    }


    return  (
        
          
          
        <>
        <Header color={"#fff"}/>
        {show && <Welcome show={setShow} time={10} showTime={true} title={`Welcome !! ${commonHelper.getEmail()}`} content="Hurry !! Special offer for your next trip will end in  "buttonText="Copy to Clipboard" buttonAction={copy}/>}
        <Swipers/>
        {/* <Search/> */}
        <Searchbar/>
        
        <Alert/>
        { home?.data?.response?.hotels_by_places ? 
        <>
         <Vacation info={home.data?.response?.hotels_by_places} heading={{"title": "Enjoy your dream vacation","subTitle": "Plan and book our perfect trip with expert advice, travel tips, destination information and inspiration from us."}} image={["/images/australia.jpg","/images/portugal.jpg","/images/usa.jpg","/images/turkey.jpg"]}/>
         <Nexttrip/>
         <Vacation info={home.data.response.hotels_by_type} heading={{"title": "Popular Hotels","subTitle": ""}} image={["/images/house.jpg","/images/apartment.jpg","/images/hotel.jpg","/images/hostel.jpg"]}/>
        </>
        : 
        <Loader/>}
        
        <Subfooter/>
        <Footer/>
        </>
        
        
    )
}
export default Home;