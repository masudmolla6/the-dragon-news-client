import React from 'react';
import { FaArrowLeft } from 'react-icons/fa6';
import { Link, useLoaderData } from 'react-router-dom';
import EditorsInsight from '../EditorsInsight/EditorsInsight';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const {
      _id,
      title,
      details,
      image_url,
      rating,
      author,
      total_view,
      category_id,
    } = news;
    return (
      <div className="card card-compact w-full bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${category_id}`}>
              <button className="btn btn-primary"><FaArrowLeft></FaArrowLeft>All News In This Categories.</button>
            </Link>
          </div>
            </div>
            <EditorsInsight></EditorsInsight>
      </div>
    );
};

export default News;