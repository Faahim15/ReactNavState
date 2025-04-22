import { useState } from "react";
import Banner from "./components/Banner/Banner"
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { ToastContainer, toast } from 'react-toastify'; 
function App() {
  const [coin, setCoin]= useState(0);
     const topCenter = () => { 
                 if(!toast.isActive('credit-toast')){
                    toast.success('Hey 👋! Credit added to your account. ', {
                        position: 'top-center',
                        autoClose: 1000, 
                        toastId:'credit-toast'
                      });
                 }
                  
                setCoin(coin+600000);
              
          }; 

  return (
    <div>
        
        <Header topCenter={topCenter} coin={coin} ></Header> 
        <Main setCoin={setCoin} coin={coin} ></Main>
        <Footer></Footer> 
        <ToastContainer />
    </div>
  )
}

export default App; 
// https://i.ibb.co.com/QvtggrxS/Nasum-Ahmed-included-in-the-Bangladesh-squad-for-Dhaka-Test-vs-India.jpg
// https://i.ibb.co.com/9H9RSxkq/What-did-Sohan-say-after-losing-the-series.jpg
// https://i.ibb.co.com/DPh1HPxL/Soumya-Sarkar.jpg
// https://i.ibb.co.com/xKY8DfrS/Is-Mehidy-Hasan-Miraz-best-Bangladeshi-all-rounder-in-2022.jpg
// https://i.ibb.co.com/mrBvK8q1/Afif-Hossain.jpg
// https://i.ibb.co.com/ZpjFJZfK/Taskin-Ahmed-Bangladeshi-Fast-Bowller-Taskin-Ahmed-Bangladesh-Cricket.jpg
// https://i.ibb.co.com/tpGNWYbV/103-vs-West-Indies-St-Kitts-2018.jpg
// https://i.ibb.co.com/hxDthsd1/MUSTAFIZUR-RAHMAN.jpg
// https://i.ibb.co.com/DP0bpDtn/Liton-Das.jpg
// https://i.ibb.co.com/1G3zgwBD/Shakib-Al-Hasan.jpg
