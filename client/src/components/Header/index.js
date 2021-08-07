import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary bg-gradient text-light mb-4 py-3 display-flex align-center">
      <div className="container flex-column justify-space-between-lg justify-center text-center">
        <Link className="text-light" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Kibble Krew Review
          </h1>
        </Link>
        <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          It's like yelp, but for Dog Parks
        </p>
        <div className="display-flex">
          {Auth.loggedIn() ? (
            <>
              
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-warning m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-info m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
