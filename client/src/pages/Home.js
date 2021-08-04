import React from 'react';
import { useQuery } from '@apollo/client';

import HomepageList from '../components/HomepageList';

import { QUERY_USERS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <HomepageList
              users={users}
              title="Here are current dog park reviews..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
