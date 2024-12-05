import React from 'react';
import { FaStar } from 'react-icons/fa';

interface TopRatedRecipeProps {
    title: string;
    stars: number;
    nr_rating: number;
    author: string;
}

const TopRatedRecipe: React.FC<TopRatedRecipeProps> = ({ title, stars, nr_rating, author }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Rating: {rating}</p>
            <p>{description}</p>
        </div>
    );
};

export default TopRatedRecipe;