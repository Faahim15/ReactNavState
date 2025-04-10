import { useState } from "react";
import { CiBookmarkCheck } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
const Blog = ({ blog,handleBookMarks,handlespentTime}) => {
    const { cover_photo_url, title, author, author_image, posted_date, reading_time, Hashtags } = blog;
    const [isClicked,setIsClicked] = useState(false);
    const [bookmark, setBookMark] = useState(true);
    return (
        <div className="w-[845px] h-[783px]" >
            <div>
                <img className="w-full h-[400px] rounded-md" src={cover_photo_url} alt="" />
            </div>
            <div className="flex gap-x-3 mt-4">
                <div>
                    <img className="w-16 h-16 rounded-full object-cover" src={author_image} alt="" />
                </div>
                <div className="mt-1">
                    <h3 className="font-bold">{author}</h3>
                    <p>{posted_date}(4 days ago)</p>
                </div>
                <div onClick={()=>{
                   setBookMark(preBookMark=>{
                    const newBookMark = !preBookMark;
                    handleBookMarks(blog,newBookMark); 
                    return newBookMark;
                   })
                }} className="pl-[400px] text-gray-500 flex ">
                    {(reading_time > 9) ? reading_time : '0' + reading_time} min read {
                        bookmark?<span className="pt-1"><CiBookmarkCheck/></span>:<span className="pt-1"><CiCircleCheck /></span>
                    }
                </div>
            </div>
            <div>
                <h1 className="font-black text-2xl text-justify">{title}</h1>
            </div>
            <div className="flex gap-x-2 pt-5">
                {
                    Hashtags.map((h, idx) => <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded-md text-xs" key={idx}>{h}</span>)
                }
            </div>
            <div onClick={() => {
                if(!isClicked){
                    setIsClicked(true); 
                    handlespentTime(reading_time);
                }
            }} className={`cursor-pointer underline ${isClicked ? 'text-blue-500' : 'text-black'}`} >
                Mark as read 
            </div>
           
        </div>
    );
};

export default Blog;