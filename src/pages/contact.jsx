import  Headers from "./../component/header";
import Footer from "./../component/footer";

const ContactUs = () => {
    return (
        <div>
            <Headers/>
            <div className="border-2 border-[#9bd1d1] rounded-3xl md:my-16 md:mx-32 md:flex md:justify-center md:items-center">
                <img className="md:w-[50%] md:h-[50%] p-8 rounded-xl" alt="contact" 
                src="/images/contactus.jpg"/>

            <div className="text-center md:pl-12">
                <p className="text-[#726c6c] text-4xl font-bold">Thank You!!</p>
                <p className="font-titillium text-[#726c6c] text-2xl font-bold md:mt-2">We will contact you soon.</p>
                <p className="font-titillium text-[#726c6c] text-xl font-bold md:mt-2">For more details , mail us on</p>
                <p className="font-titillium text-[#726c6c] text-lg font-bold md:mt-2">traveltorque@gmail.com</p>
            </div>
            </div>
            <Footer/>
        </div>
    );
};
export default ContactUs;