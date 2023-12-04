import React from 'react';

import '../assets/Home.scss'
import Navbar from "../componenta/Navbar";
import Footer from "../componenta/footer";
import Carusel from "../componenta/carusel";
import DiscoveryCard from "../componenta/cards/DiscoveryCard";
import ownerImage from '../img/user.png';
import categoryImage from '../img/img_1.png';
import TopAuthorCard from "../componenta/cards/topAuthorCard";
import TopCollectionCard from "../componenta/cards/topCollectionCard";

function Home(props) {
    return (
        <div className="container ">
            <div className="row">
                <Navbar/>
                <div className='sectionOne mb-3'>
                    <p>Play Test together with your friends now!</p>
                    <button className='btn btn-light'>Find friends</button>
                </div>
                <div className="d-flex justify-content-between align-items-center mt-5 mb-1">
                    <p className='title'>Discover</p>
                    <a className='LinkAll' href="#">View all -></a>

                </div>
                <Carusel
                    items={[
                            <DiscoveryCard content={"Contente"}
                                           questionCount={"120 Qs"}
                                           ownerImageUrl={ownerImage}
                                           imageUrl={categoryImage}
                                           ownerName={"sarvar"}/>
                        ]}
                    showCount={3}
                />
                <div className="d-flex justify-content-between align-items-center mt-5 mb-1">
                    <p className='title'>Top Authors</p>
                    <a className='LinkAll' href="#">View all -></a>
                </div>
                <Carusel
                    items={
                    [
                        <TopAuthorCard
                            content={"Contente"}
                            imageUrl={ownerImage}
                        />
                    ]

                    }
                    showCount={7}

                />
                <div className="d-flex justify-content-between align-items-center mt-5 mb-1">
                    <p className='title'>Top Collections</p>
                    <a className='LinkAll' href="#">View all -></a>
                </div>
                <Carusel
                    items={
                        [
                            <TopCollectionCard
                                content={"Contente"}
                                imageUrl={categoryImage}
                            />
                        ]

                    }
                    showCount={4}

                />
                <div className="d-flex justify-content-between align-items-center mt-5 mb-1">
                    <p className='title'>Trending Quiz</p>
                    <a className='LinkAll' href="#">View all -></a>
                </div>
                <Carusel
                    items={
                        [
                            <DiscoveryCard content={"Contente"}
                                           questionCount={12}
                                           ownerImageUrl={ownerImage}
                                           imageUrl={categoryImage}
                                           ownerName={"sarvar"}/>
                        ]
                    }
                />
                <div className="d-flex justify-content-between align-items-center mt-5 mb-1">
                    <p className='title'>Top Picks</p>
                    <a className='LinkAll' href="#">View all -></a>
                </div>
                <Carusel
                    items={
                        [
                            <DiscoveryCard content={"Contente"}
                                           questionCount={12}
                                           ownerImageUrl={ownerImage}
                                           imageUrl={categoryImage}
                                           ownerName={"sarvar"}/>
                        ]
                    }
                />
                <Footer/>
            </div>

        </div>


    );
}

export default Home;