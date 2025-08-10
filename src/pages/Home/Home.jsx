import React, { useEffect } from 'react';
import CategorySection from './CategorySection';
import BannerSlider from './BannerSlider';
import Pricing from './Pricing';
import BestBooks from './BestBooks';
import AnimatedSection from './AnimatedSection ';



const Home = () => {

    useEffect(() => {
        document.title = `Home | Library`;
      }, []);

    return (
        <div>
            {/* <section>
                <AnimatedSection></AnimatedSection>
            </section> */}

            <section>
                <BannerSlider></BannerSlider>
            </section>

            {/* category book section */}
            <section>
                <CategorySection></CategorySection>
            </section>

            

            <section className='my-12'>
                <Pricing></Pricing>
            </section>
            <section>
                <BestBooks></BestBooks>
            </section>
        </div>
    );
};

export default Home;