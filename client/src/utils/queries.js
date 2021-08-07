import { gql } from '@apollo/client';

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
      parkName
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
      skills
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
      skills
    }
  }
`;
// city query
export const GET_PARKS_CITYNAME = gql`
  query getCity($name: String) {
    city(name: $name) {
      parkName
      parkLocation
      address
      leash
      review
    }
  }
`;
