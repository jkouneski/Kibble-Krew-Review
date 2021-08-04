import { useQuery } from '@apollo/client';
// useEffect runs after first render and after every update; useState hook is named export from React
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// city seed query to return corresponding parks seed data
import { GET_PARKS_CITYNAME } from '../../utils/queries';
// Citycard in components folder
import CityCard from './CityCard';

const HomepageList = ({ users, title }) => {
  // set value of useState
  const [value, setValue] = useState("")
  let input
  // useQuery imports GET_PARKS_CITYNAME and the name variable 
  const { loading, data } = useQuery(GET_PARKS_CITYNAME, {
    variables: { name: value},
  });

  // useEffect(() => {
  //   console.log(data)
  // }, [data])
// when no user users return message
  if (!users.length) {
    return <h3>No Users Yet</h3>;
  }
// on submit return value of city query and prevent reload event 
  function handleSubmit(e) {
    e.preventDefault()
    setValue(input.value)
    console.log(data)
  }


  return (
    <div>
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={node => input = node} />
        <button>submit</button>
      </form>
    </div>
    {/* city card */}
    <div className="card-container row">
      {data?.city.length > 0 && data.city.map(item => {
        return <CityCard data={item} key={item._id} />
      })}
    </div>
    {/* user summary and links for users */}
      <h3 className="text-primary">{title}</h3>
      <div className="flex-row justify-space-between my-4">
        {users &&
          users.map((user) => (
            <div key={user._id} className="col-12 col-xl-6">
              <div className="card mb-3">
                <h4 className="card-header bg-dark text-light p-2 m-0">
                  {user.name} <br />
                  <span className="text-white" style={{ fontSize: '1rem' }}>
                    currently has {user.reviews ? user.reviews.length : 0}{' '}
                    posts
                    {user.reviews && user.reviews.length === 1 ? '' : 's'}
                  </span>
                </h4>

                <Link
                  className="btn btn-block btn-squared btn-light text-dark"
                  to={`/users/${user._id}`}
                >
                  View user and post comments/messages.
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomepageList;
