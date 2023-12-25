import React from 'react';
import { FaG, FaGithub, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import QZone from '../QZone/QZone';
import bg from "../../../assets/bg.png"


const RightNav = () => {
    return (
      <div>
        <h1 className="text-3xl text-center mb-3 text-violet-600">
          LogIn With
        </h1>
        <div className="text-center">
          <button className="btn btn-outline btn-primary">
            <FaG />
            LogIn With Google
          </button>
          <button className="btn btn-outline btn-secondary mt-2">
            <FaGithub />
            LogIn With Github
          </button>
            </div>
            <div>
                <h2 className='text-2xl text-center my-2 text-orange-500'>Find Us</h2>
                <li className='flex justify-center items-center border gap-2 text-2xl'><FaFacebook></FaFacebook><p>Facebook</p></li>
                <li className='flex justify-center items-center border gap-2 text-2xl'><FaInstagram></FaInstagram><p>Instagram</p></li>
                <li className='flex justify-center items-center border gap-2 text-2xl'><FaTwitter></FaTwitter><p>Twittwer</p></li>
            </div>
            <div>
                <QZone></QZone>
            </div>
            <div>
                <img src={bg} alt="" />
            </div>
      </div>
    );
};

export default RightNav;