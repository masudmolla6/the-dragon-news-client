import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import LeftNav from '../pages/Shared/leftNav/LeftNav';
import RightNav from '../pages/Shared/rightNav/RightNav';

const Main = () => {
    return (
      <div className='container mx-auto'>
        <Header></Header>
        <div className="grid grid-cols-5 gap-4">
          <div className='col-span-1'><LeftNav></LeftNav></div>
          <div className='col-span-3 bg-red-600'>02</div>
          <div className='col-span-1'><RightNav></RightNav></div>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Main;