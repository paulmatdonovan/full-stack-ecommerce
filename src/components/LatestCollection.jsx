import React, { useContext } from 'react'
import Title from './Title';
import { ShopContext } from '../context/ShopContext'

const LatestCollection = () => {

    const { products } = useContext(ShopContext);


    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Filler text. Our latest arrivals are the best and you can shop with quality and choice!</p>
            </div>
        </div>
    )
}

export default LatestCollection