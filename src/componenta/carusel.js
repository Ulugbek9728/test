import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Carusel({items=[],showCount=4}) {
    return (
        <OwlCarousel className='owl-theme '
                     loop
                     items={showCount}
                     margin={10}
                     autoplay={true}
                     autoplayTimeout={2000}
                     autoplayHoverPause={true}
                     nav={false}
                     dots={false}
        >
            {items}
        </OwlCarousel>
    );
}

export default Carusel;