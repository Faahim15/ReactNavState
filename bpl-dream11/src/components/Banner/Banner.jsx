import shadowImg from '../../assets/bg-shadow.png' 
import Logo from '../../assets/banner-main.png' 
import { ToastContainer} from 'react-toastify';
const Banner = ({topCenter}) => { 
   
    return (
        <div style={{ backgroundImage: `url(${shadowImg})`}} className="w-full h-[545px] bg-no-repeat flex flex-col justify-center items-center gap-y-4 bg-[#131313]">
            <img  src={Logo} alt="" /> 
            <h2 className='text-white font-black md:text-3xl text-center'>Assemble Your Ultimate Dream11 Cricket Team</h2> 
            <span className='text-gray-300 text-center ' >Beyond Boundaries Beyon Limits</span> 
            <div className='border border-[#E7FE29] rounded-lg' > 
                <button onClick={topCenter} className='text-black bg-[#E7FE29] border border-white rounded-lg w-[184px] h-[48px] font-semibold m-1 shadow-sm shadow-[#E7FE29]' >Claim Free credit</button>
            </div> 
            
        </div>
    );
};
export default Banner;