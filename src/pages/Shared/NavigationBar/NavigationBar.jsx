import React, { useContext } from 'react';
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import user from "../../../assets/user.png";
import { AuthContext } from "../../../../Provider/AuthProvider";
import { FaUser } from "react-icons/fa6";


const NavigationBar = () => {
      const { user } = useContext(AuthContext);
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
          <div className="">
            <Link className="text-white pl-5" to="/">
              Home
            </Link>
            <Link className="text-white pl-5" to="/">
              About
            </Link>
            <Link className="text-white pl-5" to="/">
              Career
            </Link>
          </div>
          <div className="flex justify-end w-full">
            {user && (
              <Link className="text-white pr-4 text-xl">
                <FaUser></FaUser>
              </Link>
            )}
            {user ? (
              <Link className="btn btn-outline btn-info">Logout</Link>
            ) : (
              <Link to="/login" className="btn btn-outline btn-info">
                LogIn
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default NavigationBar;