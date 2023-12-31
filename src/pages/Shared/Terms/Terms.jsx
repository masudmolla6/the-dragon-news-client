import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='text-center'>
            <h2 className='text-2xl text-violet-500'>Terms And Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ducimus quidem! Accusantium in quos perferendis? Pariatur eaque libero quis odio odit molestias voluptate quo officia impedit in ex, dolore sit excepturi aperiam ratione reprehenderit quia quos minima, reiciendis sequi animi nobis at commodi. Sequi, dicta deserunt in eum asperiores consequatur!</p>
            <p>Go back to <Link className='text-orange-500 btn-link' to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;