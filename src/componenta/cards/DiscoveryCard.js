import React from 'react';

function DiscoveryCard({content,imageUrl,questionCount,ownerImageUrl,ownerName}) {
    return (
        <div className='item Discover'>
            <div className="card">
                <div className="card-header">
                    <img src={imageUrl} alt=""/>
                    <p>{questionCount}</p>
                </div>
                <div className="card-body">
                    <p className='content'>{content}</p>
                    <div className="Cardfooter">
                        <img src={ownerImageUrl} alt=""/>
                        <p>{ownerName}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DiscoveryCard;