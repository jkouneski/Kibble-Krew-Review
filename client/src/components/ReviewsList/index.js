import React from 'react';
import { useMutation } from '@apollo/client';

import { REMOVE_REVIEW } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';

const ReviewsList = ({ reviews, isLoggedInUser = false }) => {
  const [removeReview, { error }] = useMutation(REMOVE_REVIEW, {
    update(cache, { data: { removeReview } }) {
      try {
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: removeReview },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleRemoveReview = async (review) => {
    try {
      const { data } = await removeReview({
        variables: { review },
      });
    } catch (err) {
      console.error(err);
    }
  };

  if (!reviews.length) {
    return <h3>No Park Reviews Added Yet</h3>;
  }

  return (
    <div>
      <div className="flex-row justify-space-between my-4">
        {reviews &&
          reviews.map((review) => (
            <div key={review} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0 display-flex align-center">
                  <span>{review}</span>
                  {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveReview(review)}
                    >
                      X
                    </button>
                  )}
                </h4>
              </div>
            </div>
          ))}
      </div>
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default ReviewsList;
