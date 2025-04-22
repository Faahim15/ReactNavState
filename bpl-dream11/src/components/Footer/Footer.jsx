
import logo from '../../assets/logo-footer.png'

const Footer = () => { 
    const year = new Date().getFullYear();
    return (
        <div>
            <div className='bg-[#06091A] relative  text-white text-[14px] mt-[150px] h-auto ' > 
                <div className='absolute border border-white p-2 rounded-lg w-[80%] md:top-[-100px] top-[-80px] left-1/2 transform -translate-x-1/2 '>
                    <div className='md:text-black border border-[#FBE0B4] grid gap-y-1 place-items-center rounded-lg md:py-6 py-4 text-[#FBCA57]' style={{
                    background: 'linear-gradient(30deg, transparent 70%, #BFE9F8 100%), linear-gradient(-30deg, transparent 70%, #FBE0B4 100%)'
                        }}
 >
                    <p className='font-bold md:text-3xl text-xl' >Subscribe to our newsletter</p> 
                    <span className='md:font-semibold text-[#588c9f] md:text-gray-700 font-light' >Get the latest updates and news write in your inbox</span>
                   <div className='flex  gap-x-1' >
                   <input type="email" placeholder='Enter your email' className='text-[14px] px-2 py-2 focus:outline outline-[#FBE0B4] outline-2 outline-offset-2 rounded-md md:w-[300px]'/> 
                   <button type="button" className='border md:border-white rounded px-2 py-2 w-[100px] md:text-white font-semibold border-blue-200'>Subscribe</button>
                   </div>
                    </div>
                </div> 
                  <div className='grid place-items-center mb-4' >
                  <img className='mt-[100px]' src={logo} alt="" />
                  </div>
                   <div className=' bg-[#040D11] md:grid md:grid-cols-3 md:place-items-center mt-auto  text-gray-400 mb-2 flex flex-col justify-center items-center gap-y-5' >
                    <div className='md:w-[260px] md:mb-auto w-[300px] text-justify' > 
                        <h1 className='font-semibold text-white pb-1 text-center'>About us</h1>  
                        We are passionate team dedicated to provide best serivices for your customers.
                    </div>
                    <div className='flex flex-col gap-y-1 md:mb-2 mb-0'> 
                    <h1 className='font-semibold text-white'>Quick Links</h1> 
                     <li>Home</li>
                     <li>Services</li>
                     <li>About</li>
                     <li>Contact</li>
                    </div>
                    <div className='grid gap-y-1' > 
                    <h1 className='font-semibold text-white text-center'>Subscribe</h1>
                        Subscribe to our newsletter for the latest updates. 
                        <input type="email" placeholder='Enter your email' className='text-[14px] px-2 py-2 focus:outline outline-[#FBE0B4] outline-1 outline-offset-1 rounded-md'/> <button type="button" className='border border-white rounded px-2 py-2'>Subscribe</button>
                    </div>
                   </div>
                   
                <p className='mt-auto text-center pb-2 text-gray-400' > © {year} Your company. All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;