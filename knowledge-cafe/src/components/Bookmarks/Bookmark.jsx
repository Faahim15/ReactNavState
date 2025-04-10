import React from 'react';

const Bookmark = ({bookmarks}) => {
    return (
        <div className='bg-gray-200 p-2 rounded-sm text-sm mb-2'>
            {
                bookmarks.title
            }
        </div>
    );
};

export default Bookmark;