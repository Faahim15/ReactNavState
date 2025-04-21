
import logo from '../../assets/logo-footer.png'

const Footer = () => { 
    const year = new Date().getFullYear();
    return (
        <div>
            <div className='bg-[#06091A] relative  text-white text-[14px] mt-[200px] h-auto ' > 
                <div className='absolute border border-white p-2 rounded-lg w-1/2 top-[-100px] left-1/2 transform -translate-x-1/2 '>
                    <div className='text-black border border-[#FBE0B4] grid gap-y-2 place-items-center rounded-lg p-4' style={{
                    background: 'linear-gradient(30deg, transparent 70%, #BFE9F8 100%), linear-gradient(-30deg, transparent 70%, #FBE0B4 100%)'
                        }}
 >
                    <p className='font-black text-3xl' >Subscribe to our newsletter</p> 
                    <span className='font-medium text-gray-600' >Get the latest updates and news write in your inbox</span>
                   <div>
                   <input type="email" placeholder='Enter your email' className='text-[14px] px-2 py-2 focus:outline outline-[#FBE0B4] outline-2 outline-offset-2 rounded-md w-[300px]'/> <button type="button" className='border border-white rounded px-2 py-2 w-[100px] text-white'>Subscribe</button>
                   </div>
                    </div>
                </div> 
                  <div className='grid place-items-center mb-4' >
                  <img className='mt-[100px]' src={logo} alt="" />
                  </div>
                   <div className=' bg-[#040D11] grid grid-cols-3 place-items-center mt-auto  text-gray-400 mb-2' >
                    <div className='w-[260px] mb-auto' > 
                        <h1 className='font-semibold text-white pb-1'>About us</h1>  
                        We are passionate team dedicated to provide best serivices for your customers.
                    </div>
                    <div className='flex flex-col gap-y-1 mb-2'> 
                    <h1 className='font-semibold text-white'>Quick Links</h1> 
                     <li>Home</li>
                     <li>Services</li>
                     <li>About</li>
                     <li>Contact</li>
                    </div>
                    <div className='grid gap-y-1' > 
                    <h1 className='font-semibold text-white'>Subscribe</h1>
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