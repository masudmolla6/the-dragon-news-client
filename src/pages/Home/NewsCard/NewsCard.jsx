import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShare,HiOutlineBookmark,HiEye } from "react-icons/hi";
import Rating from 'react-rating';
import { FaStar, FaStarHalfStroke ,FaRegStar} from "react-icons/fa6";


const NewsCard = ({ news }) => {
    // console.log(news);
    const { _id, title, details, image_url, rating,author, total_view } = news;
    return (
      <div className="card card-compact w-full bg-base-100 shadow-xl border my-2">
        <div className="flex justify-between px-2 py-2 bg-slate-300 rounded-t-2xl">
          <div className="flex">
            <div>
              <img className="rounded-full h-10" src={author.img} alt="" />
            </div>
            <div>
              <p className="text-black">
                <small>{author.name}</small>
              </p>
              <p className="text-black">
                <small>
                  {moment(author.published_date).format("yyy-MM-DD")}
                </small>
              </p>
            </div>
          </div>
          <div>
            <p>
              <HiOutlineShare className="text-xl text-black"></HiOutlineShare>
            </p>
            <p>
              <HiOutlineBookmark className="text-xl text-black"></HiOutlineBookmark>
            </p>
          </div>
        </div>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
        </div>
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>
            {details.length < 250 ? (
              <>{details}</>
            ) : (
              <>
                {details.slice(0, 250)}...
                <Link className="btn btn-link" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            )}
          </p>
        </div>
        <hr className="w-10/12 mx-auto" />
        <div className='flex justify-between px-6 py-6'>
          <div>
            <Rating
              placeholderRating={rating?.number}
              readonly
              emptySymbol={<FaRegStar></FaRegStar>}
              placeholderSymbol={<FaStar className='text-orange-400'></FaStar>}
              fullSymbol={<FaStar></FaStar>}
            ></Rating>
            <span className='pl-2'>{rating?.number}</span>
          </div>
          <div className="flex items-center">
            <p className="pr-3">
              <HiEye></HiEye>
            </p>
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    );
};

export default NewsCard;