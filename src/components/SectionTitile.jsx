import React from 'react';

const SectionTitile = ({TitleText}) => {
    return (
        <div className='mt-8 mb-10 text-center'>
            <h2 className='text-xl md:text-3xl font-medium'>{TitleText}</h2>
        </div>
    );
};

export default SectionTitile;