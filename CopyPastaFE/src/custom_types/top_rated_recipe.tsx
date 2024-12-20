import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TopRatedRecipeProps {
    title: string;
    stars: number;
    image_src: string;
    nr_rating: number;
    author: string;
}
const renderStars = (stars: number) => {
    return (
        <div style={{ display: 'inline-flex' }}>
            {[...Array(5)].map((_, i) => (
                <FaStar key={i} color={i < stars ? "orange" : "grey"} size={25} />
            ))}
        </div>
    );
};
const TopRatedRecipe: React.FC<TopRatedRecipeProps> = ({ title, stars, nr_rating, author, image_src }) => {
    return (
        <div className='grid mx-auto bg-white grid-rows-1 grid-cols-2 items-center justify-center w-[85%] h-[15rem]'>
            <img src={image_src} alt="recipe" className='mx-auto border-r-2 border-green-600 object-cover h-full' />
            <div className='pl-4'>
                <h1 className='block text-center text-2xl font-bold'>{title}</h1>

                <div className='block text-center'>{renderStars(stars)}</div>

                <p className='block text-center'>Nr ratinguri</p>
                <p className='block text-center'>{nr_rating}</p>
                <hr className='my-2 bg-transparent' />

                <p className='block text-center'>Author</p>
                <p className='block text-center'>{author}</p>
            </div>
        </div>
    );
};

export default TopRatedRecipe;