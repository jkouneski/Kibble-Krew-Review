import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_REVIEW } from '../../utils/mutations';

import Auth from '../../utils/auth';

const ReviewForm = ({ parkId }) => {
  const [review, setReview] = useState('');

  const [addReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addReview({
        variables: { parkId, review },
      });

      setReview('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h4>Add More Dog Park Reviews, Comments, and/or Messages.</h4>

      {Auth.loggedIn() ? (
        <form
          className="flex-row justify-center justify-space-between-md align-center"
          onSubmit={handleFormSubmit}
        >
          <div className="col-12 col-lg-9">
            <input
              placeholder="Add your review here.."
              value={review}
              className="form-input w-100"
              onChange={(event) => setReview(event.target.value)}
            />
          </div>

          <div className="col-12 col-lg-3">
            <button className="btn btn-primary btn-block py-3" type="submit">
              Add Review
            </button>
          </div>
          {error && (
            <div className="col-12 my-3 bg-danger text-white p-3">
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to add reviews, comments, and/or messages. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default ReviewForm;
