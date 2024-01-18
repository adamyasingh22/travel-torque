import Alert from "../component/alert";
import Footer from "../component/footer";
import Header from "../component/header";
import Search from "../component/search";
import Subfooter from "../component/subfooter";
import Swipers from "../component/swiper";

const Home = () => {
    return  (
        <>
        <Header/>
        <Swipers/>
        <Search/>
        <Alert/>
        <Subfooter/>
        <Footer/>
        </>
    )
}
export default Home;