import React from 'react';
import QZone1 from '../../../assets/qZone1.png'
import QZone2 from '../../../assets/qZone2.png'
import QZone3 from '../../../assets/qZone3.png'

const QZone = () => {
    return (
        <div className='bg-gray-400 mt-4'>
            <h2 className='text-2xl text-center text-orange-500'>QZone</h2>
            <img src={ QZone1} alt="" />
            <img src={ QZone2} alt="" />
            <img src={ QZone3} alt="" />
        </div>
    );
};

export default QZone;