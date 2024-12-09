import React from 'react';
import { FaStar } from 'react-icons/fa';

interface RecipeProps {
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
const Recipe: React.FC<RecipeProps> = ({ title, stars, nr_rating, author, image_src }) => {
    return (
        <div className='flex flex-cols flex-wrap bg-white items -center justify-center w-[14vw] h-[15rem]'>
            <img src={image_src} alt="recipe" className='mx-auto border-b-2 border-green-600 object-cover w-full h-full' />
            <div className='w-full bg-gray-100 shadow-xl'>
                <h1 className='block text-center text-2xl font-bold'>{title}</h1>

                <div className='block text-center'>{renderStars(stars)}</div>

                <p className='block text-center'>Nr ratinguri</p>
                <p className='block text-center'>{nr_rating}</p>
                <hr className='my-2 bg-transparent' />

                <p className='block text-center text-[1rem]'>Author</p>
                <p className='block text-center text-[1.5rem]'>{author}</p>
            </div>
        </div>
    );
};

export default Recipe;