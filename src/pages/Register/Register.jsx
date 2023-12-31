import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
        const handleSubmit = (event) => {
          event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const photoUrl = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;

            console.log(name, photoUrl, email, password);
            
            createUser(email, password)
                .then(result => {
                    const createdUser= result.user;
                    console.log(createdUser
                    );
                })
                .catch(error => {
                console.error(error);
                })
  };
  
  const handleAccept = (event) => {
    setAccepted(event.target.checked);
  }
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register Now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body w-96">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter Your Photo Url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Your Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    Already Have An Account? Please
                    <Link to="/login" className="text-orange-500 pl-2 btn-link">
                      LogIn
                    </Link>
                  </p>
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  onClick={handleAccept}
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Accept <Link className='text-orange-500 btn-link' to='/terms'>Term And Condition.</Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button disabled={!accepted} className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;