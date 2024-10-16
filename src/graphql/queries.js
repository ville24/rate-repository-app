import { gql } from '@apollo/client';
import { CORE_REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${CORE_REPOSITORY_FIELDS}
  query {
    repositories {
      edges {
        node {
            ...CoreRepositoryFields
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query repository($id: String!) {
    repository(id: $id) {
      ...CoreRepositoryFields
      reviews {
        edges {
          nodes {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;