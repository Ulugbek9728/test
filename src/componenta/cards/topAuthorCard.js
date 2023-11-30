import React from 'react';

function TopAuthorCard({content,imageUrl}) {
    return (
        <div className='item TopAuthors'>
            <img src={imageUrl} alt=""/>
            <p>{content}</p>
        </div>
    );
}

export default TopAuthorCard;