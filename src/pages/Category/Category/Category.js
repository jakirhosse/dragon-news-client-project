import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
        const categorynews = useLoaderData()
        return (
                <div>
                   <h2>categojjd:{categorynews.length}</h2> 
                   <div>
                        {
                                categorynews.map(news => <NewsSummaryCard key={news._id} news={news}></NewsSummaryCard>)
                        }
                        </div>    
                </div>
        );
};

export default Category;