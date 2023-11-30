import React from 'react';

function TopCollectionCard({content,imageUrl}) {
    return (
        <div className='item TopCollections'>
            <img src={imageUrl} alt=""/>
            <p>{content}</p>
        </div>
    );
}

export default TopCollectionCard;