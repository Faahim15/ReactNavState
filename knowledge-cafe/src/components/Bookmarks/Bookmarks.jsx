import Bookmark from "./Bookmark";

const Bookmarks = ({bookmarks,time}) => { 
    
    return (
        <div className="mt-4" >
            <div className="border-2 border-green-200 p-3 rounded-sm bg-green-50">
                Spent time on read: {time} min
            </div>
            <div className="border border-blue-100 rounded-sm pt-2 mt-2 p-4">
            <div className="p-1 font-bold text-base">
                Bookmarked Blogs: {bookmarks.length}
            </div>
              <div>
              {
                bookmarks.map((bm,idx)=><Bookmark key={idx} bookmarks ={bm}></Bookmark>)}
              </div>
            </div>
            
        </div>
    );
};

export default Bookmarks;