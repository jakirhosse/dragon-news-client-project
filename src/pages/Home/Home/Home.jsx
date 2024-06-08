import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Home = () => {
        const allnews = useLoaderData()
        return (
                <div>
                  <h2>news:{allnews.length}</h2>   
                  <div>
                        {
                                allnews.map(news => < NewsSummaryCard key={news._id}
                                news={news}   
                                ></NewsSummaryCard>)
                        }
                        </div>   
                </div>
        );
};

export default Home;