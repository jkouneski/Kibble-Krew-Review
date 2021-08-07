import React from 'react';

import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ReviewsList from '../components/ReviewsList';
import ReviewForm from '../components/ReviewForm';

import { QUERY_SINGLE_PARK, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Park = () => {
  const { parkId } = useParams();

  // If there is no `profileId` in the URL as a parameter, execute the `QUERY_ME` query instead for the logged in user's information
  const { loading, data } = useQuery(
    parkId ? QUERY_SINGLE_PARK : QUERY_ME,
    {
      variables: { parkId: parkId },
    }
  );

  // Check if data is returning from the `QUERY_ME` query, then the `QUERY_SINGLE_PROFILE` query
  const park = data?.me || data?.park || {};

  // Use React Router's `<Redirect />` component to redirect to personal profile page if username is yours
  // if (Auth.loggedIn() && Auth.getProfile().data._id === profileId) {
  //   return <Redirect to="/me" />;
  // }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!park?.name) {
    return (
      <h4>
        Oops! You need to be logged in to do that!
      </h4>
    );
  }

  return (
    <div>
      <h2 className="card-header">
      </h2>

      {park.reviews?.length > 0 && (
        <ReviewsList
          reviews={park.reviews}
          isLoggedInUser={!parkId && true}
        />
      )}

      <div className="my-4 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <ReviewForm parkId={park._id} />
      </div>
    </div>

    
  );
};

export default Park;
