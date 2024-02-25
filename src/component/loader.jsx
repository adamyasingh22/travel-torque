import Spinner from './../../public/spinner.gif'


const Loader = () =>{

    return (
        <div>
            <img className='mx-auto my-24' src={Spinner} alt="Loading..."/>
        </div>
    )

}
export default Loader;