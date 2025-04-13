import { FaCheckSquare } from "react-icons/fa";
import PropTypes from "prop-types";
const PriceOption = ({gymInfo}) =>{
    const {name,feature,price} = gymInfo;
    return (
        <div className="bg-blue-500 mr-3 flex flex-col  text-center rounded-md p-4" >
            <h2>
                <span className=" text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2> 
            <div className="text-2xl p-5 font-xl" >
                {name}
            </div> 
            <div className="text-sm text-justify py-4 flex-grow" >
            
                {  
                    feature.map((feature,idx)=>(<p key={idx} className="flex items-center gap-1">< FaCheckSquare className="text-green-400" />{feature}</p>))
                }
            </div> 
            <div>
        <button className="bg-green-500 text-center rounded-sm font-semibold w-full p-1" >Buy now</button>
            </div>
        </div>
    );
};
PriceOption.propTypes ={
    gymInfo: PropTypes.object.isRequired,
}
export default PriceOption;