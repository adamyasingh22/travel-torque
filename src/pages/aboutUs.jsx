import Alert from "../component/alert";
import Footer from "../component/footer";
import Header from "../component/header"

const AboutUs = ()=>{
    return (
        <div>
            <Header/>
            <p className="font-titillium text-[#726c6c] text-3xl font-bold md:mt-8 md:-mb-4 text-center">About Us</p>
            <Alert/>
            
            <div className="md:mx-32 font-serif md:flex md:justify-center md:items-center md:mt-8 md:mb-16">
            <div className="text-center md:m-8">
                
                <p className="font-titillium text-[#726c6c] text-xl md:mt-2">We are a team of passionate developers who are dedicated to providing the best possible experience to our customers. Our team is made up of experienced professionals who have a deep understanding of the latest technologies and are always ready to help you with any questions or concerns you may have.</p>
            </div>
            
                <img className="rounded-3xl md:m-8" src="./images/aboutus.jpg"/>
            </div>
            <Footer/>


        </div>
    )
}
export default AboutUs;
