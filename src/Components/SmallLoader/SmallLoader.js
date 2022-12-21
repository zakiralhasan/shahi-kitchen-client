import React from 'react';

const SmallLoader = () => {
    return (
        <div className='flex justify-center items-center mt-8'>
            <div className=' flex justify-center items-center'>
                <div className='w-5 h-5 border-dashed border-2 border-gray-600 rounded-full animate-spin'></div>
                <h1 className='text-blue-500 text-2xl'>Loading...</h1>
            </div>
        </div>
    );
};

export default SmallLoader;