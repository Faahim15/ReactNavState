
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmarks/Bookmark'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookMarks] = useState([]);
  const [time, setTime]=useState(0); 
  const handlespentTime=t=>
  {      
      setTime(prevTime =>prevTime+t); 
      
  } 

  const handleBookMarks = (blog, bookmark) => {
    setBookMarks(prevBookmarks => {
       console.log('inside bookmarks', bookmark)
        if (bookmark) {
            return prevBookmarks?.filter(b => b.id !== blog.id)|| [];
        } else {
            return prevBookmarks?.some(b => b.id === blog.id) ? prevBookmarks : [...prevBookmarks, blog];
        }
    });
    
};



     
  return (
    <>
     
     <Header></Header>
     <div className='flex justify-between gap-x-4'>
     <Blogs handleBookMarks={handleBookMarks} handlespentTime={handlespentTime} ></Blogs> 
     <Bookmarks bookmarks={bookmarks} time={time} ></Bookmarks>
     </div>
    </>
  )
}

export default App
