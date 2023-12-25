import React from 'react';
import logo from "../../../assets/logo.png"
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
import user from "../../../assets/user.png"



const Header = () => {
    return (
      <div className="mb-5">
        <div className="mx-auto w-full text-center">
          <img className="mx-auto" src={logo} alt="" />
          <p>
            <small>Journalism Without Fear or Favour</small>
          </p>
          <p>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
        <div className="flex bg-slate-500 py-1">
          <button className="btn btn-info ml-2">Latest</button>
          <Marquee speed={100} className="text-xl text-info">
            I can be a React component, multiple React components, or just some
            text.
          </Marquee>
        </div>
        <div className="navbar bg-light text-primary-content mt-2 flex justify-evenly">
                <div className=''>
                    <Link className='text-white pl-5' to='/'>Home</Link>
                    <Link className='text-white pl-5' to='/'>About</Link>
                    <Link className='text-white pl-5' to='/'>Career</Link>
                </div>
                <div className='flex justify-end w-full'>
                    <img className='w-10 rounded-full mr-5' src={ user} alt="" />
                    <button className='btn btn-info'>LogIn</button>
                </div>
        </div>
      </div>
    );
};

export default Header;